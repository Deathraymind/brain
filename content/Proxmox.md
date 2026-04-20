## Why I Swapped ESXi for Proxmox

My hypervisor of choice these days is **Proxmox**. I actually started out with [[ESXi]] and grew extremely familiar with it, but I eventually hit a wall: it’s pricey. If you want the updated, powerful features that actually make the software worth it, you’re looking at a heavy bill.

My first enterprise home server was an [[HPE DL360 G7 ProLiant]] that I snagged locally for about $100. Even when I bought it in 2023, it was definitely "vintage" hardware. At the time, I didn't realize there were many alternatives to VMware until I started googling and stumbled upon Proxmox. I was immediately sold on the "free" price tag and the clean UI.

### The Installation Headache

Getting Proxmox onto that G7 was a nightmare. I managed to boot off a USB a few times, but the installer refused to recognize my front-facing SAS drives. After ages of troubleshooting, I finally got it working via **HPE iLO (Integrated Lights-Out)**, which is HPE's remote management tool.

I actually ended up installing it by uploading the ISO through the iLO Windows application—it was way more reliable than the USB method. There are a ton of little quirks to getting _any_ OS running on a ProLiant server, and I’ll be detailing those deep dives in my [[HP Proliant DL360 G7]] and [[HP Proliant DL380 G7]] build logs.

> **Note:** Yep, I already bought a second server. I wanted faster CPUs and more storage (combining my original 300GB with another 100GB from the new rig).

### Going for Redundancy

The goal is to have two nodes to mess with **Proxmox Ceph**. I want full redundancy so I can host my own services and stop relying so heavily on Google, Cloudflare, and GitHub.

For those who don't know, Proxmox is a "Type-1" hypervisor. Essentially, it’s a super-lightweight OS designed to host Virtual Machines (VMs). It also supports Containers (LXC), which I haven’t messed with yet, but they're definitely on the to-do list.

### Living the High-RAM Life

As you can see in the screenshot, I run a _lot_ of VMs—mostly Ubuntu, Debian, NixOS, Fedora, and Windows Server. Since I have more RAM than I know what to do with, I really abuse it.

One thing to note: I’m currently running non-redundant **NVMe drives** using PCIe risers, and I plan to do the same with the DL380. Why? Because SAS drives are expensive, whether they're new or used. Eventually, I’ll buy more SAS drives for local backups, but for now, I'm not sweating it. All my server configs are handled via **Ansible** or **NixOS** and backed up to GitHub. If a drive dies, I can just spin everything back up in minutes.

### Final Thoughts

If you’ve ever used VirtualBox or VMware, Proxmox is incredibly intuitive. You can almost skip the documentation and just dive in. I’ll be documenting my Ceph experience as I go, so stay tuned for that!