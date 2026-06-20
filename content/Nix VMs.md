I hated seting up ansible scripts and .sh scripts to automate installing nodes and then some ubuinut ackage update fucks the whole thing up so now you have to edit the sh script but its been a year so you dont even know how you wrote the whole thing so you decicde to do it from scratch.. ew no. I love linux and have used it wayyyy more than windows at this point but thats just ineffiecint.. So we of course fix this undeclartive mess with a declarative solution.. nix. I use it as my main desktop [[ErebOS]] and my Hypervisor [[Custom Nix Hyprvisor]]. Id say im profeicient at it and its so valuable, any project i code any service i laucnh i do it in nix. That goes for my VMs now too. I found out you can take practically any nix image and run it through this command and make it a vm. nixos-generate --flake .#caddy -f raw
then to convert it to QEMU just run the following command to convert it. ```qemu-img convert -f raw -O qcow2\
/nix/store/..../nixos.img\
caddy.qcow2```

thats it.. now you have a vm, now scp it to your qemu compatable hyprvisor ``` scp caddy.qcow2
deathraymind@192.168.1.100:/var/lib/libvirt/images```

then you just create a vm image on the machine with this 
```virt-install\
--name caddy\
--memory 2048\
--vcpus 2\
--disk /var/lib/libvirt/images/caddy.qcow2\
--import\
--os-variant linux2022\
--network bridge=br0\
--noautoconsole 

every time this just works now you have a full ass vm on your hyprvisor and you can see it in virtual-machine-manager. 

Now lets see some of the magic lines of nix code that make this possible. First of all any machine has a networking.nix file that looks like this {
  pkgs,
  lib,
  ...
}: {
  # Configure your specific network interface
  networking.interfaces.enp1s0 = {
    ipv4.addresses = [
      {
        address = "192.168.1.10";
        prefixLength = 24;
      }
    ];
  };

  # Set the default gateway

  # Set your DNS servers
  time.timeZone = "Asia/Tokyo";
  networking = {
    firewall.allowedTCPPorts = [8080 2022];
    defaultGateway = "192.168.1.1";
    hostName = "caddy";
    nameservers = ["1.1.1.1" "8.8.8.8"];
    networkmanager.enable = true;
    useDHCP = false;
  };

  systemd.services.systemd-networkd-wait-online.enable = lib.mkForce false;
  services.openssh = {
    settings.PasswordAuthentication = true;
    enable = true;
  };
} its simple they all look roughly like this you set teh networking rules ip address and how tou accsess it all through here. then all of them have a hardware-configuration.nix that looks exactly like this {modulesPath, ...}: {
  imports = [(modulesPath + "/profiles/qemu-guest.nix")];

  boot.loader.grub.enable = true;
  boot.loader.grub.device = "/dev/xvda";

  fileSystems."/" = {
    device = "/dev/disk/by-label/nixos";
    fsType = "ext4";
  };
} they all look like that we dont touch it it jsut works. then then all have a common.nix which defines again some rules that are followed across all VMs 

{
  pkgs,
  config,
  ...
}: {
  virtualisation.diskSize = 20480; # 20 GB initial image size
  boot.growPartition = true; # Automatically expands to fit Proxmox disk resizes
  fileSystems."/".autoResize = true;
  services.qemuGuest.enable = true;
  # Nix
  nix.settings = {
    experimental-features = ["nix-command" "flakes"];
    trusted-users = ["root" "deathraymind"];
  };

  # Virtualisation
  virtualisation.libvirtd.enable = true;
  virtualisation.spiceUSBRedirection.enable = true;
  programs.virt-manager.enable = true;

  # Networking

  # SSH
  services.openssh = {
    enable = true;
    settings = {
    };
  };

  # User
  users.users.deathraymind = {
    isNormalUser = true;
    extraGroups = ["wheel" "libvirtd" "kvm"];
    openssh.authorizedKeys.keys = [
      "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAII1p2OamHpIwYUh0mS3yj/CDmT01n4leoYCd/tuqMJHt deathraymind@gmail.com"
    ];
  };

  environment.systemPackages = with pkgs; [
    git
    vim
    curl
    htop
    virtiofsd
    qemu
  ];

  nixpkgs.config.allowUnfree = true;
  system.stateVersion = "25.05";
}
I should nore the two best lines are these   boot.growPartition = true; # Automatically expands to fit Proxmox disk resizes
  fileSystems."/".autoResize = true; this is just insane how it works. You know wehn a vm starts to lose storage and you have to boot into a secondary iso and increase the virtual drive lvm size, well this does that at boot in your hyprvisor in my case its qemu you just increase teh sieze of the drive reboot the vm and it will automatically increase the usable OS parition to the whole disk you defined.. thats just nuts.. Then your services just has whatever you need defined in a configuration.nix file and again you build the image convert it to what you need scp it to your hyprvisor create a vm with the disk and you got it you are set bada bing badaboom... god damn it how do i manage passwords and API keys ://///// check out [[SOPS Nix]]. 
