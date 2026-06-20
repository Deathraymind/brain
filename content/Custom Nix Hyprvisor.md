# My Current Hypervisor Setup: Nix + libvirtd

## Why Nix

I'm pretty acquainted with Nix at this point, and I love it. I love the declarability and how clean everything can be, and I love how easy it is to rebuild all your work if everything goes to shit. It also just makes scalability _work_ — no variations between machines, no "well it worked on the last one." When you set a machine up, every dependency for every app is met exactly, so things work as they should on any box.

It also just happens to be what I make all my VMs in at this point. Everything's switched over to Nix, and they can all be deployed in minutes, which I love. Being able to declaratively update and remotely modify my machines that easily is what really got me excited about all of this.

So as of right now: my hypervisors run libvirtd, and that's really about it.

## The Networking

Easiest way to explain it is to just show you the code:

```nix
{ modulesPath, ... }: {
  imports = [ ../../modules/common.nix ./hardware.nix ];

  boot.loader.grub = {
    enable = true;
    device = "/dev/sda"; # bare metal uses sda, not xvda
  };

  networking.hostName = "node1";
  networking.bridges.br0.interfaces = [ "eno1" ];
  virtualisation.libvirtd.allowedBridges = [ "br0" "virbr0" ];

  networking.interfaces.br0.ipv4.addresses = [
    {
      address = "192.168.1.100";
      prefixLength = 24;
    }
  ];
  networking.defaultGateway = "192.168.1.1";
  networking.nameservers = [ "1.1.1.1" "8.8.8.8" ];

  # Disable DHCP on eno1 since br0 takes over
  services.openssh.enable = true;
  nix.settings.experimental-features = [ "nix-command" "flakes" ];
  nix.settings.trusted-users = [ "root" "deathraymind" ];

  users.users.deathraymind = {
    isNormalUser = true;
    description = "Primary User";
    extraGroups = [ "wheel" "qemu" "libvirtd" "kvm" ];
    openssh.authorizedKeys.keys = [
      "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAII1p2OamHpIwYUh0mS3yj/CDmT01n4leoYCd/tuqMJHt deathraymind@gmail.com"
    ];
    hashedPassword = "6X6ADCAYJr36.atJY$aOzF6Drf0YEq2ac3QnFFU3bhJZNuY/hX9Fux6dcJCeiQTNBK1F3oFKqqlhpUoKVJA34gfIWs0VkcO1051jn5d0";
  };

  system.stateVersion = "25.05";
}
```

That's literally it. As of now this is basic VM support — permissions, SSH access, and a `hardware.nix` that handles mounting the NVMe drive.

## How the Repo is Organized

Each machine gets its own identical `default.nix` with the settings above. As I start integrating features like clustering (which I'm honestly not sure how to do yet), each host will probably pick up a secondary custom file on top of that. Every machine also has its own `hardware.nix`, which is generated and copied over during the NixOS install on the actual server.

## The Remote-Build Trick

Here's the best part of the whole workflow. Once a machine has a bare NixOS install on it, I don't build anything on the machine itself — I remote-build everything on my main, fast NixOS machine ([[ErebOS]]), then just copy the fully compiled binaries over to the server.

This saves a ton of time on older hardware like my [[Dell T320]] and [[HP ProLiant DL360 G7]], and if there are VMs already running on a box when you push an update, there's zero overhead from hogging the CPU on it during the build. You're not accidentally DDoSing your own services just by updating. It's genuinely declarative, and it's genuinely genius. If a machine or an update fails, you just reboot the server and roll back to an older generation. Boom. That's just how it should be.

## Why I'm Not Worried About Backups

I don't even worry if a service like Vaultwarden or whatever goes down, because A) I do have backups somewhere, and B) I could rebuild anything in the lab in minutes — including the hypervisor itself.

## Step-by-Step: Bringing Up a New Node

1. Follow the standard NixOS install steps: https://nixos.org/manual/nixos/stable/#ch-installation
    
2. Copy the generated `hardware.nix` from the new machine into your NixOS repo.
    
3. Hook that `hardware.nix` into your flake for that specific server.
    
4. Remote-build the flake onto it:
    
    ```bash
    nixos-rebuild switch --flake .#node1 --target-host deathraymind@192.168.1.100 --use-remote-sudo --ask-sudo-password
    ```
    

That's pretty much it. One tip: I'd recommend enabling root over SSH during the initial install (also covered in the NixOS docs above) — it just makes the whole permissions headache go away for that first remote build. Just make sure your own config disables root SSH login immediately once you switch over to it.