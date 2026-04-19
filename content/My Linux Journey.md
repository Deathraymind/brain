**ErbOS** is my custom NixOS configuration. It has a few features I really love, and it serves as the perfect companion to Windows.

My transition away from Windows started shortly after I got my first PC. Windows felt clunky and ran poorly on my limited hardware. I first discovered Linux while setting up a Minecraft server on an old laptop I’d received for free—specifically using **MineOS Turnkey Linux**. Back then, I knew nothing about computers; I remember being hunched over next to my router with a screenless laptop sitting on the floor. I didn't even know what MineOS was or how SSH worked. I’d blindly run Windows commands in the terminal, not even understanding what Linux was yet. Eventually, I figured out how to get the server running locally so I could play with my siblings, though I hadn't yet mastered port forwarding for the outside world. I was about 15 or 16 at the time.

### The MacBook Era and ZorinOS

My next encounter with Linux happened that same year with my MacBook Pro. It wasn’t that old, but I hated macOS even more than Windows. Everything cost money, and the inconsistency between Mac and Windows applications was unbearable. I hated it with a passion.

I remembered you could install different operating systems on Mac hardware. I tried using **Boot Camp** to install Windows 10 on my 2011 MacBook Pro, but it was an awful experience that took weeks to figure out—and the audio didn't even work. That frustration led me to search for macOS and Windows alternatives. That’s when I found **ZorinOS**.

This was back in 2020, before the Steam Deck hype and the current wave of Windows 11 and "AI slop" backlash. When I saw ZorinOS, I thought, _"Damn, that’s sleek."_ It looked like macOS but felt lighter, and everything was free. To this day, Zorin is what I—and thousands of others—recommend to beginners looking to escape closed environments.

Installing ZorinOS on my MacBook was insanely easy. All it took was a USB drive, **BalenaEtcher**, and a single Google search for "how to boot USB on Mac." It just worked. It did everything my MacBook did before, but faster, and my battery lasted forever. I loved it so much I decided to put it on my desktop.

### The Gaming Hurdle

Saying goodbye to Windows on my main rig wasn't as easy. I immediately noticed that my games didn't run well. **Proton** existed, but this was pre-Steam Deck, so performance hits were noticeable and sluggish. I was also using an **Nvidia** GPU, which was notoriously difficult on Linux at the time. I quickly realized **AMD** was the better, more open alternative. I couldn't play VR without using **ALVR** (which was barely usable then), and most of my games had anti-cheats that weren't enabled for Linux. Defeated, I switched back to Windows.

But I hated it. Going back to Windows felt like stepping ten years into the past. I started dual-booting for a few years as Linux support for games steadily improved. I hopped between many different distros, falling in love with the Command Line Interface (CLI) on both systems. I broke Arch installs and I broke Windows to its bones. I was never quite happy; downloading dotfiles and managing dependencies from the **AUR** was tedious, especially since I liked staying on the "bleeding edge." It became mundane and made me cautious about trying new things—a limitation I hated.

### The Path to NixOS

In 2022, I tried **NixOS** for about eight hours. It was too hard. Everything had to be coded, and I was used to just copy-pasting commands into the CLI to download things. It took too long to configure. However, I understood the advantage: I could have one file define my entire system and replicate it anywhere. I just wasn't ready yet.

I spent a year on **EndeavourOS** with KDE Plasma. I used it through high school and on my home PC as I got into cybersecurity. But "bleeding edge" meant Arch was starting to hold me back. In 2024, after a convincing YouTube video by **Vimjoyer**, I decided to give NixOS another shot. With minimal coding knowledge but a "stupid" amount of Linux experience, I told myself I’d stick with it for a week.

I traded Nano for **Vim**, installed VS Code, and spent weeks learning the Nix language and **Flakes**. Eventually, I started building my own tools. My friends wanted to try Linux without the steep Nix learning curve, so I created **BowOS**. It was a simple "distro" made of scripts and tools that made installation a breeze, much like Zorin. It traded away some of the pure declarability of Nix and was admittedly a bit "clunky" logically, but it was powerful. It was my own OS, coded my way.

### Evolution into ErbOS

I’ve kept that same NixOS installation for years, through nearly a thousand iterations and across multiple machines, without ever performing a fresh reinstall. In 2026, I even transitioned to a new configuration called **ErbOS**.

I didn't need a USB stick or a BIOS menu; I just switched the config and it worked. ErbOS uses a new logic for managing modules, allowing me to enable or disable entire system features with a simple **boolean** (true/false) switch. And where I stand with linux today. 