**ErbOS** is my custom NixOS configuration, the second operating system I’ve built. It is composed of a series of Nix files organized with Flakes.

As the predecessor to my first OS, BowOS, it employs a much more toggleable approach to enabling system features. By utilizing **Home Manager** and **Flakes**, I’ve created an environment that is both sleek and highly functional. One of the biggest visual changes is the switch from Hyprland to **Niri**. Niri isn't a traditional window manager; it’s a scrollable window tiler with infinite direction in both the X and Y axes.

To give the system a more unified feel, I’ve also integrated **Noctua Shell**. This replaces Waybar and several other standalone applications to provide a complete desktop package, serving as the taskbar, app launcher, settings menu, and lock screen.

### Flexibility and Workflow

While Niri is the current focus, Hyprland and Waybar can still be enabled with just two toggles in the main configuration file. I prefer Niri because its "infinite space" layout suits my chaotic nature and gives my ADHD brain the room it needs to function without feeling restricted.

![[Pasted image 20260419190223.png]] _The ErbOS desktop in its current configuration (April 19, 2026)._

After switching from Hyprland, I found Niri’s configuration options to be more minimal yet solid and complete. A major benefit is that its configuration is dynamically loaded; even though it’s managed through Nix, the moment the file is saved, Niri updates instantly without requiring a service restart.

### Refinement and Tiling

Features like the **Overview** are incredibly intuitive and have become essential for my workflow. While Hyprland offered a similar feature, it required a plugin that was often unstable and didn't play well with the Nix ecosystem.

The primary challenge I face with any tiling window manager is that windows can feel cramped or "too full," which has its pros and cons. As of 2026, I’ve been using tiling managers like Hyprland and Niri for two and a half years. Before this, my favorite desktop environment was KDE because of its customizability, but I ultimately found it to be more unstable and clunkier than these modern, streamlined options.