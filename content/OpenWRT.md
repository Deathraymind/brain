
My first encounter with **OpenWRT** was on a Raspberry Pi back in high school. My teacher suggested it as a way to branch off the main network and segment a separate subnet. We didn't use that setup for long—it was a bit janky and unsecure for the use case—and eventually, the school switched to Starlink.

At its core, OpenWRT is a router operating system based on Linux. As you can see in [[My Linux Journey]], I love the Linux ecosystem and the openness that comes with it. OpenWRT is a descendant of **DD-WRT**, which honestly looks ancient now. DD-WRT can be proprietary in certain versions and isn't always the best choice, though it sometimes offers broader support for specific consumer routers.

### Why Bother with OpenWRT?

You can install this on virtually any consumer-grade router, which is a perfect use case for reviving older hardware. Over the past few years, countless exploits and backdoors have been found in home routers. Often, these never get patched because the company stops supporting the device or, in some cases, the "backdoor" is there by design.

I personally use a **Linksys WRT3200ACM**. It’s a powerful little router that originally shipped with ExpressVPN software. Even the stock Linksys firmware is actually pretty solid and secure, but OpenWRT is open-source, runs "real" Linux, and is infinitely more customizable.

I love the peace of mind that comes with an OS that receives continuous updates from a community-driven source. Plus, the installation is incredibly easy—you usually just upload a firmware file through the stock web interface’s "firmware update" section.

### My Current Setup

I’ve flashed OpenWRT onto many Linksys routers in the past. While I mostly use used [[Aruba]] routers for my Access Points (APs), I rely on OpenWRT as my main router and DHCP server.

![[Pasted image 20260420130520.png]] ![[Pasted image 20260420130510.png|581]]

For the average person, I wouldn't bother with the hassle. But if you have a vulnerable router or you're a [[Homelab]] enthusiast, the extra security and customizability are more than welcome.