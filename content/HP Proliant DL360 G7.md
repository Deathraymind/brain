I picked up this server in Wiesbaden, Germany, around 2023 for about $100. At the time, I was 16 and knew basically nothing about enterprise gear—my "homelab" was just a cheap laptop with a broken screen. I bought it without considering the heat, the 1U fan noise, or even where I’d put it.

When I first plugged it in, it sounded like a jet engine and barely quieted down after startup. Since our house in Germany didn't have Ethernet, it had to sit right next to the modem, which meant I definitely couldn't keep it in my bedroom.

### The ESXi Era

Getting started was a mess. I spent ages trying to boot ESXi, but it wouldn't see the 1TB SAS drive. I didn't realize back then that I had to manually configure the built-in RAID controller just to make the drive bay usable. After a week of Googling "what is RAID," I finally set it to **RAID 0** and spent hours installing ESXi. Between the ancient CPUs and a practically dead hard drive, it was painfully slow.

I ran it like that for about six months with a few Ubuntu VMs for Docker before switching to [[Proxmox]].

### Upgrading to NVMe

The real turning point was finding four free NVMe drives in a local lot. Since the G7 doesn't have M.2 slots, I bought a PCIe-to-NVMe riser. The ProLiant BIOS won't boot from PCIe, so I kept the OS on the SAS drive and used the NVMe as a dedicated partition for VMs. The speed boost was insane, especially for Minecraft servers.

### The 2026 CPU Disaster

By 2026, I was tired of the slow dual E5620s and bought four **Xeon X5687s**. Here’s how the specs compared:

|Feature|Current (2.4GHz)|Xeon X5675|Xeon X5687|
|---|---|---|---|
|Cores / Threads|4/8 or 6/12|6 / 12|4 / 8|
|Base Clock|2.40 GHz|3.06 GHz|3.60 GHz|
|Max Turbo|~2.66 GHz|3.46 GHz|3.86 GHz|
|TDP (Power/Heat)|80W - 95W|95W|130W|

The X5687 has the same socket, but when I dropped them in, the power supplies started clicking. Even after dropping to a single CPU, the clicking continued. Deep diving into forums revealed that there are actually **two versions** of the DL360 G7 motherboard. One has extra VRMs to support 130W CPUs; the other (mine) caps out at 95W. You can only tell the difference by a tiny sticker inside the chassis.

### Sunk Cost Fallacy: The DL380 G7

Instead of admitting defeat, I leaned into the sunk cost fallacy. I couldn't return the $50 CPUs, so I spent another $150 on an [[My HP ProLiant DL380 G7]].

**The Plan:**

1. Take the two **Xeon X5675s** from the new DL380 and put them in the DL360 (since they are 95W, they'll actually work).
    
2. Move my **356GB of RAM** and the two **130W X5687s** into the DL380.
    
3. End up with two powerful nodes for a [[Proxmox]] cluster.
    

Most people would say this is a waste of money, but my rent includes power, and I have a climate-controlled garage to hide the noise. We'll see if I can actually get this cluster running or if I just threw more money into a hole. I’m mostly doing this for the shits and giggles anyway.