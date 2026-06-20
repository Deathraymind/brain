# Why I Ditched ESXi, Proxmox, and XCP-ng (and Just Built My Own Hypervisor)

## ESXi

Didn't like it. Expensive, proprietary, hard pass.

## Proxmox

Didn't like this either. Updates were unstable, there was too much going on under the hood, and it worked poorly in clusters.

## XCP-ng

So then I tried XCP-ng. I should note I only ran it for about a week. I didn't like the UI, but I _loved_ the idea behind Xen Orchestra — one server managing all your nodes. That made handling clusters and creating pools genuinely great.

That said, the UI was extremely dated and unintuitive. Templates were a nice feature, and I dabbled with Terraform on top of it, but the documentation was okay at best, and it just wasn't used heavily — not in the homelab community, not in general. The whole thing felt like a piece of software on its way out.

I tried the newer UI build too (what they're calling UI6 at this point), and it was better, but it still felt unprofessional, with a lot of features still mid-migration as of mid-2026. I ended up having to fall back to v5 constantly just to get things done.

## The verdict

Overall, I loved the clustering idea. I hated the volatility, the lack of visibility into what was actually happening under the hood, and the janky UI.

So... I decided to make my own hypervisor. [[Custom Nix Hyprvisor]] — but go for it.