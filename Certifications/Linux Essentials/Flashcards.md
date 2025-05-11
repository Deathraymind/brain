#linuxEssentials
# Linux Essentials Notes

## 📦 Package Management

- ? **Debian:**
    - File format: `dpkg`
    - Package manager: `apt`
        
    - Search for a package: `apt-cache search package_name`
        
    - Install and remove:
        
        - Install: `apt install package_name`
            
        - Purge (remove app + config): `apt purge package_name`
            
- ? **Red Hat/Fedora/CentOS:**
    
    - File format: `rpm`
        
    - Package manager: `yum`
        
    - Search for a package: `yum search package_name`
        
    - Install a package: `yum install package_name`
        

## 🌐 Server and Services

- ? **HTTP Server Programs:**
    
    - Apache, Nginx, Lighttpd
        
- ? **Database Applications:**
    
    - MySQL, PostgreSQL, MariaDB
        
- ? **NFS:**
    
    - Network File System — used to share files across Linux machines.
        
- ? **Thin Clients:**
    
    - Boot Linux systems by sharing a full directory via NFS.
        
- ? **SAMBA:**
    
    - Cross-platform network file sharing.
        
    - Can also be used as a domain controller (with SSSD verification).
        

## 🛡️ Open Source Licensing and Laws

- ? **Open Source Four Freedoms:**
    
    - Freedom to run the program for any purpose
        
    - Freedom to study how it works
        
    - Freedom to redistribute copies
        
    - Freedom to modify and distribute your version
        
- ? **Licenses:**
    
    - **LGPL:** :: Allows linking with non-free components (weak copyleft).
        
    - **GPL3:** :: Strong copyleft — allows modification and commercial use.
        
    - **BSD 2-Clause:** :: Very simple license — copy/distribute unmodified source/binary.
        
    - **Dual Licensing:** :: Applying two licenses to avoid legal conflicts.
        
    - **OSI:** :: Open Source Initiative — certifies compliance with the Open Source Definition.
        
- **Creative Commons Licenses (Quick Overview):**
    
    - **CC BY:** ::  Edit and distribute with credit.
        
    - **CC BY-SA:** :: Same as CC BY, but must keep same license ("share-alike").
        
    - **CC BY-ND:** :: Only allow unmodified redistribution with credit.
        
    - **CC BY-NC:** :: Non-commercial use allowed with credit.
        
    - **CC BY-NC-SA:** ::  Non-commercial + share-alike.
        
    - **CC BY-NC-ND:** :: Most restrictive (non-commercial, no modifications).
        

## 🔒 Encryption and Security Tools

- ? **Disk Encryption Tools:**
    
    - `dm-crypt`, `LUKS (Linux Unified Key Setup)`, `EncFS`
        
- **Other:**
    
    - **GNU PG:** Encrypt/sign data.
        

## 🖥️ Bash and Shell Basics

- ? **Quoting Rules:**
    
    - Double quotes `" "` preserve `$`, `\`, and `` ` `` (grave)
        
    - Single quotes `' '` disable all special meanings
        
    - Backslash `\` escapes the next character.
        
- **Variable Management:**
    
    - Create environment variable: :: `export VAR=value`
        
    - Remove variable: :: `unset VAR` (no `$` when unsetting)
        
- **Environment Variables:**
    
    - View all: `env`
        
    - `$PATH` — list of directories for executable programs.
        
        - Add to PATH:  :: `PATH=$PATH:/new/directory`
            
    - Check a command's path: `which command`
        
- **Brace Expansion Example:**
    
    ```bash
    touch game{1,2,3,4,5}
    ```
    
- **Pattern Matching Example:**
    
    - `rm game?` — deletes `game1`, `game2`, etc. (one character match)
        

---

## 📂 Linux File System Hierarchy (FHS)

- `/var` — Variable data (logs, databases)
    
- Hidden files start with `.`
    
- Commands:
    
    - `ls -lh` — :: Long list, human readable.
        
    - `ls -d */` — ::  Show directories only.
        
    - `ls -lt` — :: Sort by time, newest first.
        
    - `ls -lrt` — :: Sort by time, oldest first.
        
    - `ls -lX` — :: Sort by file extension.
        
    - `ls -S` — :: Sort by file size.
        
    - `ls -R` — :: Recursive listing.
        

## 📦 Compression and Archiving

- **TAR:** :: Bundles files together but does not compress.
    
- **Compression tools:**  :: `gzip`, `bzip2`, `xz`
    
- ? **Working with compressed files:**
    
    - `zcat` — View `.gz` files without decompressing.
        
- ? **Extracting Archives:**
    
    - `tar -xvf archive.tar`
        
    - If `.tgz` file: decompress with `gunzip` first, then `tar`.
        

---

## 🔀 Redirects and Pipes

- `/dev/null`: :: Discard output.
    
- Redirect errors:
    
    ```bash
    sort /etc 2> /dev/null
    ```
    
- Pipe (`|`): :: Send output from one command into another.
    
    - Example:
        
        ```bash
        ls -l | head | wc -w
        ```
        

---

## 🔍 Text Searching (Grep)

- Find lines starting with `a`: :: `grep "^a" text.txt`
    
- Find lines ending with `2`: :: `grep "2$" text.txt`
    

---

## 🖊️ Bash Scripting Concepts

- Script argument count: `$#`
    
- ? Comparison operators:
    
    - `-ne`: Not equal
        
    - `-gt`: Greater than
        
    - `-ge`: Greater or equal
        
    - `-lt`: Less than
        
    - `-le`: Less or equal
        
- Example basic Bash script:
    
    ```bash
    #!/bin/bash
    
    if [ $# -eq 1 ]
    then
      username=$1
      echo "Hello $username!"
    else
      echo "Please enter only one argument."
    fi
    echo "Number of arguments: $#."
    ```
    

---

## 🧠 Memory, CPU and LVM

- `free` ::  — Check memory usage.
    
- `lscpu` ::  — Show CPU architecture info.
    
- ? **LVM (Logical Volume Manager):**  
    Combines multiple drives/partitions into one large volume.
    

---

## 📄 Special Directories and Files

- `/proc` ::  — Virtual filesystem containing system info in real-time.
    
- View running process command line:
    
    ```bash
    cat /proc/1/cmdline; echo
    ```
    
- **Kernel file naming:**
    
    - ? `vmlinuz-4.15.0-50-generic`
        
        - 4.15.0 = major kernel version
            
        - 50 = patch level
            
- ? **Kernel Ring Buffer:**
    
    - `dmesg` — Show messages.
        
    - `journalctl -k` — View kernel logs.
        

---

## 📜 Important Log Files

- `/var/log/auth.log` ::  — Authentication events.
    
- `/var/log/kern.log` :: — Kernel messages.
    
- `/var/log/syslog` :: — General system log.
    
- `/var/log/messages` ::  — Older general log (used in some distros).
    

---

## 🌐 Networking Commands

- **IP Commands:**
    
    - Show links: :: `ip link show`
        
    - Add IP: :: `sudo ip addr add 192.168.0.5/24 dev ens33`
        
    - Show routes: :: `ip route show`
        
    - Add default gateway: :: `sudo ip route add default via 192.168.0.1`
        
- **DNS Commands:**
    
    - ? View DNS settings:
        
        ```bash
        cat /etc/resolv.conf
        ```
        
    - Lookup IP address: :: `host learning.lpi.org`
        
    - ? Use `dig` for detailed DNS queries:
        
        ```bash
        dig learning.lpi.org
        ```
        
- **Sockets:**
    
    - `ss -t` — Show TCP socket connections.
        

---

## 👤 User and Group Management

- `/etc/passwd` :: — User info (UID, GID, shell, etc.)
    
- `/etc/group` :: — Group info.
    
- `/etc/shadow` :: — Encrypted passwords.
    
- `/etc/gshadow` :: — Group passwords and admin info.
    
- `/etc/sudoers` :: — Sudo permissions.
    
- `/etc/sudoers.d` :: — Additional sudo permission files.
    
- `id` :: — Show current user info (UID, GID, groups).
    
- Disable account:
    
    - Look for a :: `!` in `/etc/shadow`.
        
    - Example:
        
        - Disabled: `!$1$01234567$ABC...`
            
        - Enabled: `$1$0123456789ABC$012...`
            
- ? Delete a user and their files:
    
    ```bash
    userdel -r frank
    ```
    
- ? Skeleton directory `/etc/skel`:
    
    - Template files copied to new user accounts.
        
- ? Add group with specific GID:
    
    ```bash
    groupadd -g 1090 developer
    ```
    
- **Password management flags:**
    
    - `-d`: Delete password.
        
    - `-e`: Expire password immediately.
        
    - `-l`: Lock account.
        
    - `-u`: Unlock account.
        
    - `-S`: Show password status.
        



