This was my first hypervisor, mainly because it’s what was running in my high school computer lab. Since VMware was my go-to, it was the obvious choice. At the time, I didn't care if it was free or not because I wasn’t the one paying for it—though I later switched to [[Proxmox]] for exactly that reason.

It was a painful experience with older hardware. You had to create an account and sometimes request specific versions just to get a download link. Even then, you’d often need a license key to unlock basic features like SDN. If you were running legacy gear, you either had to do some serious finagling to get the hardware to work or just stick with whatever ancient version was officially supported.

It was pretty fast once everything was configured, though. Automation was doable if you had vSphere, which I managed to set up once before losing the PC it was on and being unable to download it again.

![[Pasted image 20260420101444.png]]

This screenshot isn't actually my server; I haven’t touched ESXi since 2023. I used ESXi versions 7 and 8 after I "hacked" them onto my [[My HP ProLiant DL360 G7]].

It did feel like ESXi ran more "directly" on the hardware than Proxmox does, if that makes sense. It felt a bit more "professional," though I later realized both [[Proxmox]] and ESXi are used in professional environments—ESXi is just the standard for larger orgs. I made sure to stay proficient with it so that if I’m ever given a cluster to manage, I’ll know what I'm doing. But for my personal homelab, Proxmox is cheaper and overall more feature-rich with better customizability.