# Picking Up the Dell T320 (and the Clustering Attempts That Followed)

## The Hard Off Find

After my online purchase of a second HP ProLiant server went array, I decided to go search the bins at the local Hard Off here in Okinawa instead. That's where I found a Dell T320 — it was extremely chunky looking, but it had a 5000 yen price tag, which is about $30. It had no RAM in it at all, so I dug through the bins some more and found 6 ECC DIMMs and four full-size 1TB hard drives, since this server had SAS hot-swap bays that could actually fit them — unlike my HP ProLiant, which has these shitty little 2.5" bays.

## Getting It Running

Got it home, plugged it in, and it just worked. It came with an okay CPU, but after a bit of quick searching I found a replacement for $10 — still really old, but not bad at all for a homelab:

### [Intel Xeon E5-2470 v2 (20 threads) @ 3.20GHz](https://www.ebay.com/itm/297825776041)

I also moved all 192GB of RAM from my old HP ProLiant over to the T320, and backfilled the ProLiant with 40GB of ECC memory instead. To make up for stealing its RAM, I picked up two CPUs for the ProLiant too — a pair of Xeons running at 95W TDP and 3.06GHz, for about $20 total:

### [Intel Xeon X5675 SLBYL 3.06GHz 6 Core LGA 1366 CPU Processor](https://www.ebay.com/itm/297825776041)

## Trying to Cluster Them

After all of that, both machines were finally ready, so I put them in tandem and tried Proxmox clustering. I hated it. It was clunky, felt bad to set up and use, and every time I wanted to rejoin them to the cluster, all the VMs on them would just get deleted. On top of that, for storage backup it wanted a _third_ machine acting as a Proxmox Datacenter, which was not at all what I was looking for.

So I looked at XCP-ng next, which... did not go well.