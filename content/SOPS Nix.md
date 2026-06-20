# Why I Stopped Hardcoding API Keys (and Started Using sops-nix)

## The problem

Managing API keys in a public repo is just not what you do. And honestly, even *private* repos shouldn't have API keys floating around in them. The "old way" I was doing this looked like: pull the repo, build my nix config, ssh into the machine, manually set the files with the API keys, do that... five more times for every other host. Yeah, no.

The first thing I looked at — and honestly not a terrible way to do it — was cloud-init. You make a YAML file, convert it into a fancy ISO, then program your Linux machine to parse that ISO on boot. Badabing badaboom, you've got your secrets in. Except that ISO, if it ends up in the wrong directory, might as well be on the public internet, because it has 777 permissions. And you still have to manually create and attach it every time. Not reproducible. Not it.

So then you might ask: why not just code the API keys directly into the Nix file after you pull the repo, or dump them in a `secrets/` directory? That *can* work, but if you know Nix, you know those values end up sitting in `/nix/store`, world-readable by any user on the system. Also not it.

This is the exact problem **sops-nix** solves: only the machines you explicitly say are allowed to decrypt a secrets file can actually decrypt it. Everything else — the repo, the file on disk, all of it — stays safely encrypted garbage to anyone else.

---

## Step 1 — Install the tools

```bash
nix-shell -p sops age ssh-to-age
```

This drops you into a shell with `sops`, `age`, and `ssh-to-age` available — that's everything you need for the rest of this.

## Step 2 — Generate your personal age key (on your dev machine)

```bash
mkdir -p ~/.config/sops/age
age-keygen -o ~/.config/sops/age/keys.txt
```

This is *your* key — the one tied to your dev box, `deathraymind` in my case. This is what lets you, personally, edit and decrypt secrets files going forward.

## Step 3 — Convert each host's SSH key into an age key

For every machine you want to be *able* to decrypt secrets (a VM, a host, whatever), grab its SSH host key and run it through `ssh-to-age`:

```bash
ssh-keyscan -t ed25519 123.456.789.123 2>/dev/null | ssh-to-age
```

(swap in the actual IP of the machine). Do this once per machine you want added — for me that was `pelican_host`, `caddy_host`, and `wings`. Each one spits out an `age1...` public key. Save these, you need them in the next step.

## Step 4 — Create `.sops.yaml` at your flake root

This file tells sops who's allowed to decrypt what. It maps human-readable names to the age keys you just generated, then defines which files those keys are recipients for:

```yaml
keys:
  - &deathraymind age1psgzl6fsfu8397ezxuryzyutuw8vdzsehkemjxwqdajl4cf3fpksl3974a
  - &pelican_host age1n0sr7t0r4yfz503ugn2493acz2uykwzjzgjcza7rnyzgu24mkuusrdcng4
  - &caddy_host age1q5vcc9h4vssptraxnqh7w8x6p0pxqmfv8l5qqnyny5gk4enj0s3qwu8syz
  - &wings age1jpgjh3d4qh7psy66nnj702ua242age3x92ryf7s0lq00djuv3s3spceep4
creation_rules:
  - path_regex: secrets/pelican\.yaml$
    key_groups:
      - age:
          - *deathraymind
          - *pelican_host
          - *caddy_host
          - *wings
```

`deathraymind` is my main dev box — that key came straight out of Step 2. The other three came from Step 3.

## Step 5 — Create the actual encrypted secrets file

From your flake root:

```bash
sops secrets/pelican.yaml
```

This drops you into an editor with a blank (or existing) file. Type your secrets in plain text, save, and sops automatically encrypts it on write using the keys you defined in `.sops.yaml`. The file that actually lives in your repo ends up looking like this — totally safe to push to a public repo, because none of it is readable without one of the allowed keys:

```yaml
pelican:
    app_key: ENC[AES256_GCM,data:s/yogCuB4jQDjTaoZg4hG4hX4p+XL8DFJewMZDW75CJA1h9mOVQXjS3CpOYiQrbB7qkh,iv:6GhtNxuumT3iD6djRHSB84TzlQst2dM7nrm7rGBlRZ8=,tag:C5JAoTVodd74BuQuRvlTqA==,type:str]
    cloudflare: ENC[AES256_GCM,data:pUNAQUlqptZ4MNp8B0DlQcW2wfVZvopT/BHC03NhKAQH6MtsLqD3wL4EYiDS1R1JY4zlugOs8m0UBX5wGc7t3+Aq,iv:L7W9DMRnzM9uBaFNDjL37I51NjCiejqgd/D2X/MchR8=,tag:ErSGOTAgkYp/IoKvtiuzow==,type:str]
    db_password: ENC[AES256_GCM,data:+y8tPofBPtasNGOYKCwdmJSAUg==,iv:9j6Pm69hAn2rSaLG49kXgZPeVue8wuZ7OZYZ6E0KWO0=,tag:ao6Yy+YlbsICo9e1b8UNuA==,type:str]
    redis_password: ENC[AES256_GCM,data:C00d3oD1WyPbjivtiwLjVUlygIRMNA==,iv:6nex5IgXBky+25juNSvLKd6FBwRKEKxcl9hZwNYrUUU=,tag:isfYxj4WjHH45BEV4AaHsw==,type:str]
    mail_password: ENC[AES256_GCM,data:LU44f3PyzDDlrb34DGcnpq+TGJz6,iv:ijBIKmKdrB+A+m4rrXLm6haUH/6kevE+8oEaRL5Tuig=,tag:jqHldYKT3jHnAxtffOS7JA==,type:str]
    tokenIdFile: ENC[AES256_GCM,data:ddvQq424zxzwrrKkTHkhNA==,iv:uiQRF0tdYEm4sPmW3+54rPt5uK0Flfi4sCqSCHFVUWE=,tag:Z9lu2zT3v8BcU7RdXUXaIQ==,type:str]
    tokenFile: ENC[AES256_GCM,data:nWnyBgvcw+6Ok+nlOKVP42oLclF2nr7BwIqTn9Syr4YTAQoIkwnaiD0WT5pBxZVm6IZmNQYgyrScowIs6g077A==,iv:L8D6rV5iu1FEr3yOGs4YMDIoQl+9VDqtpKMHJ5D48LQ=,tag:J3OsPnISEtg5lSkZHqQHbw==,type:str]
sops:
    age:
        - recipient: age1psgzl6fsfu8397ezxuryzyutuw8vdzsehkemjxwqdajl4cf3fpksl3974a
          enc: |
            -----BEGIN AGE ENCRYPTED FILE-----
            ...
            -----END AGE ENCRYPTED FILE-----
        # one of these blocks per recipient in .sops.yaml
    lastmodified: "2026-06-19T11:28:10Z"
    mac: ENC[...]
    unencrypted_suffix: _unencrypted
    version: 3.12.1
```

## Step 6 — Wire sops-nix into your flake

In `flake.nix`, add it as an input:

```nix
inputs.sops-nix.url = "github:Mic92/sops-nix";
```

Then import the module into whichever host(s) need it:

```nix
inputs.sops-nix.nixosModules.sops
```

## Step 7 — Point the host at the secrets file and declare what it needs

In that host's `configuration.nix`:

```nix
sops.defaultSopsFile = ../../secrets/pelican.yaml;
sops.age.sshKeyPaths = [ "/etc/ssh/ssh_host_ed25519_key" ];

sops.secrets."pelican/app_key" = {
  owner = "pelican-panel";
  group = "nginx";
  mode = "0400";
};
```

The first two lines say "here's the encrypted file, and here's the key to decrypt it with" — that key is the host's own SSH host key, which is exactly what we converted to an age key back in Step 3 and added to `.sops.yaml`.

The `sops.secrets."pelican/app_key"` block is basically you reaching into the decrypted file like it's a parsed JSON tree. `pelican/app_key` is the path to the value (`pelican:` is the top-level key, `app_key:` is the field under it). `owner`, `group`, and `mode` are just standard Unix permissions for the decrypted secret once it's written to disk at runtime — who can read it and how.

## Step 8 — Actually use the secret somewhere

Wherever the value is needed in your config:

```nix
app.keyFile = config.sops.secrets."pelican/app_key".path;
```

That's it. Rebuild, and your VM comes up with real secrets injected at runtime, decrypted by a key that only exists on that machine — nothing ever touches the Nix store or the repo in plaintext.

---

## Bonus: viewing your decrypted secrets

```bash
sops secrets/pelican.yaml
```

Run on any machine that holds one of the allowed keys, this opens the file *decrypted*, in your editor. It'll look like a normal YAML file:

```yaml
pelican:
    app_key: base64:nolooky
    cloudflare: |
        CLOUDFLARE_DNS_API_TOKEN=nolooky
    db_password: yourreal!Bbpassword
    redis_password: your!Tealredispassword
    mail_password: yourreal!Mailpassword
    tokenIdFile: nolooky
    tokenFile: nolooky
```

Save and exit, and sops re-encrypts it automatically on write.

## Bonus: adding a new machine later

When you need to add another machine to the trust list down the line:

1. Grab its SSH key and convert it: `ssh-keyscan -t ed25519 <ip> 2>/dev/null | ssh-to-age`
2. Add the resulting age key to `.sops.yaml`
3. Run `sops updatekeys secrets/pelican.yaml` to re-encrypt the file for the new recipient
4. Rebuild

And that's it — new machine, secrets and all, no manual key-copying required ever again.