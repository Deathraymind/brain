
#IshikoriOS: Mirroring Nodes for Efficient Failovers

IshikoriOS is my own Nix-based hypervisor operating system. The name is a tribute to Ishikori-dome no Mikoto, the Japanese goddess of mirrors in Shinto; much like the deity, this OS strives to be a system of "mirrored nodes" to enable fast and efficient failovers.

As of V1, here is how the magic happens.

![[ZFS(4).gif]]
## 1. ZFS Sanoid Snapshots

To get things running, we rely on ZFS snapshots. The `recursive` flag is the secret sauce here, allowing every VM disk created in the pool to have its own individual snapshot. This keeps the VMs modular and allows for per-VM transfers rather than moving the entire node.

Nix

```
services.sanoid = {
  enable = true;
  datasets."vmpool/images" = {
    recursive = true; # Covers all per-VM child datasets
    autosnap = true;
    autoprune = true;
    hourly = 24;
    daily = 7;
    weekly = 4;
    monthly = 0;
    yearly = 0;
  };
};
```

## The "Overlay" Strategy

To use the Virsh `--copy-storage-inc` flag effectively, you have to understand how QEMU handles storage. You need two components on the host and the peer: a **read-only base qcow2 image** and an **overlay**.

After splitting a VM’s disk into these two parts, only the overlay is written to. This means the base image can be copied over to the peer along with a blank overlay file. When performing an incremental migration (`--copy-storage-inc`), the system only copies the tiny overlay file rather than the entire 12GB+ qcow file. Since qcow files aren't built for easy delta-comparisons, this overlay method is significantly faster and much easier on the CPU and network.

While you _could_ run VMs off an NFS share, it comes with latency trade-offs. If you want true redundancy without the network overhead, you need mirrored ZFS shares.

## 2. Nightly ZFS Snapshot Mirrors

Using my `qemu-incremental-nightly-backups` script, snapshots from Sanoid are moved to the respective mirror host. Here is the logic:

1. **Check Status:** The script identifies running VMs. If a VM is running, it's the active peer; if it's off, we save resources by skipping it.
    
2. **Dataset Verification:** It ensures the VM has a corresponding ZFS dataset.
    
3. **Split-Brain Protection:** It checks if the peer is alive and verifies the VM isn't already running there to prevent "split-brain" scenarios where two branched ZFS shares collide.
    
4. **Detection:** It finds the disk directory for the VM.
    
5. **Pivot:** It merges the base image and the overlay into a whole qcow disk live using `virsh blockcommit "VM" "DISK" --active --pivot --wait`.
    
6. **Refresh & Sync:** It splits the image again, creates a fresh overlay, and runs `syncoid` to mirror the new base image to the peer. Finally, it nudges libvirt on the peer so it recognizes the refreshed files.
    

You can integrate this into your host configuration like this:

Nix

```
services.qemu-incremental-backup-nightly = {
  enable = true;
  peerIps = cfg.peerIps;
  vms = cfg.vms;
  calendar = lib.mkDefault "--* 04:30:00";
};
```

## The Migration Script

Once the peer has the base image, only the CPU/RAM state and the overlay file need to be transferred during migration. The migration command is straightforward:

Bash

```
sudo virsh migrate --live --undefinesource --copy-storage-inc --persistent --verbose --auto-converge \
  "VM" \
  "qemu+ssh://TARGET_USER@TARGET_IP/system" \
  --migrateuri "tcp://TARGET_IP"
```

This copies the state and the overlay live—you won't even notice the switch. I recommend a 10Gb line for this; my setup uses 10Gb NICs connected directly to each other for maximum speed.

To enable this in your config:

Nix

```
programs.qemu-live-migrate = {
  enable = true;
  defaultUser = "deathraymind";
  defaultIp = cfg.evacuateTarget;
};
```

You can then trigger a migration with `qemu-live-migrate VMNAME`. By taking advantage of local drives rather than slow NFS, this process is ultra-fast and finishes in seconds.

## Final Thoughts: Automated Shutdown

The natural next step is to create a shutdown script that automatically moves all VMs if the server prepares to power down. It simply runs the `qemu-live-migrate` command for all assigned VMs upon service exit.

Again, with a 10Gb link, this is insanely fast. Just be sure to include a check to verify that the peer host is actually up—otherwise, the service might hang the shutdown process!