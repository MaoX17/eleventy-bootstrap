---
title: "GRUB + RAID howto"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-08-28"
permalink: "grub-raid-howto/"
layout: "template_posts_md"
---
<p>FROM: <a class="moz-txt-link-freetext" href="http://www.linuxsa.org.au/mailing-list/2003-07/1270.html">http://www.linuxsa.org.au/mailing-list/2003-07/1270.html</a><br /> thanks to: Michael Martucci.</p>
<p> <!-- Header="End" --> <!-- Body="Start" --> </p>
<pre> In the Software RAID howto it is mentioned that it is not known how to set up GRUB to boot off RAID. Here is how I did it: **Follow at your own risk. If you break something it's your fault.** ================================================================== Configuration:  - /dev/hda (Pri. Master) 60 GB Seagate HDD (blank)  - /dev/hdc (Sec. Master) 60 GB Seagate HDD (blank)  - /dev/hdd (Sec. Slave) CDROM Drive   Setup Goals:  - /boot as /dev/md0: RAID1 of /dev/hda1 &amp; /dev/hdc1 for redundancy  - /     as /dev/md1: RAID1 of /dev/hda2 &amp; /dev/hdc2 for redundancy  - swap*2 with equal priority: /dev/hda3 &amp; /dev/hdc3 for more speed  - GRUB installed in boot records of /dev/hda and /dev/hdc so either     drive can fail but system still boot.  Tools:  - mdadm (<a href="http://www.cse.unsw.edu.au/%7Eneilb/source/mdadm/">http://www.cse.unsw.edu.au/~neilb/source/mdadm/</a>)    (I used 1.2.0, but notice that as of 20030729 1.3.0 is available)  1. Boot up off rescue/installation CD/disk/HDD/whatever with mdadm tools installed.  2. Partitioning of hard drives: (I won't show you how to do this. See: # man fdisk ; man sfdisk ) But here's how stuff was arranged: ------------------------------------------------------------------ # sfdisk -l /dev/hda  Disk /dev/hda: 7297 cylinders, 255 heads, 63 sectors/track Units = cylinders of 8225280 bytes, blocks of 1024 bytes, counting from 0    Device Boot Start   End  #cyls   #blocks  Id System /dev/hda1  *      0+   16     17-   136521  fd Linux raid autodetect /dev/hda2        17  7219   7203  57858097+ fd Linux raid autodetect /dev/hda3      7220  7296     77    618502+ 82 Linux swap /dev/hda4         0     -      0         0   0 Empty ------------------------------------------------------------------ To make /dev/hdc the same: ------------------------------------------------------------------ # sfdisk -d /dev/hda | sfdisk /dev/hdc ------------------------------------------------------------------ /dev/hd[ac]1 for /dev/md0 for /boot /dev/hd[ac]2 for /dev/md1 for / /dev/hd[ac]3 for 2*swap It is important to make md-to-be partitions with ID 0xFD, not 0x83.  3. Set up md devices: (both are RAID1 [mirrors]) ------------------------------------------------------------------ # mdadm --create /dev/md0 --level=1 \     --raid-devices=2 /dev/hda1 /dev/hdc1 # mdadm --create /dev/md1 --level=1 \     --raid-devices=2 /dev/hda2 /dev/hdc2 ------------------------------------------------------------------  4. Make filesystems: ------------------------------------------------------------------ # mke2fs /dev/md0 # mkreiserfs /dev/md1 # mkswap /dev/hda3 # mkswap /dev/hdc3 ------------------------------------------------------------------  5. Install Your distribution:  Simply treat /dev/md0 and /dev/md1 as the partitions to install on, and install the way your normally do. Eg, for Gentoo: ------------------------------------------------------------------ # mkdir newinst # mount -t reiserfs /dev/md1 ./newinst # cd newinst # mkdir boot # mount -t ext2 /dev/md0 ./boot # tar -xvjpf ../stage1-x86-1.4_rc2.tbz2 # mount -o bind /proc ./proc # chroot ./ ... ------------------------------------------------------------------ Here're the relevant entries /etc/fstab for the newly created partitions: ------------------------------------------------------------------ /dev/md0      /boot        ext2       noauto,noatime          1 1 /dev/md1      /        reiserfs       noatime                 1 1 /dev/hda3     none         swap       sw,pri=1                0 0 /dev/hdc3     none         swap       sw,pri=1                0 0 ------------------------------------------------------------------ The "pri=1" for each of the swap partitions makes them the same priority so the kernel does striping and that speeds up vm. Of course, this means that if a disk dies then the system may crash, needing a reboot. Perhaps it would be wiser to make hd[ac]3 a RAID1 array too, and just use /dev/md2 as swap.  6. Setting up GRUB: (assuming you've already installed it) ------------------------------------------------------------------ # grub grub&gt; root (hd0,0)  Filesystem type is ext2fs, partition type 0xfd  grub&gt; setup (hd0)   Checking if "/boot/grub/stage1" exists... yes  Checking if "/boot/grub/stage2" exists... yes  Checking if "/boot/grub/e2fs_stage1_5" exists... yes  Running "embed /boot/grub/e2fs_stage1_5 (hd0)"...  16 sectors are embedded. succeeded  Running "install /boot/grub/stage1 (hd0) (hd0)1+16 p (hd0,0)/boot/grub/stage2 /boot/grub/grub.conf"... succeeded Done.  grub&gt; root (hd1,0)  Filesystem type is ext2fs, partition type 0xfd  grub&gt; setup (hd1)   Checking if "/boot/grub/stage1" exists... yes  Checking if "/boot/grub/stage2" exists... yes  Checking if "/boot/grub/e2fs_stage1_5" exists... yes  Running "embed /boot/grub/e2fs_stage1_5 (hd1)"...  16 sectors are embedded. succeeded  Running "install /boot/grub/stage1 (hd1) (hd1)1+16 p (hd1,0)/boot/grub/stage2 /boot/grub/grub.conf"... succeeded Done.  grub&gt; quit ------------------------------------------------------------------ Here is how /boot/grub/grub.conf is: (/dev/md0 mounted as /boot) (Assuming kernel is installed as /boot/bzImage, and RAID1 support compiled into the kernel). ------------------------------------------------------------------ # Boot automatically after 30 secs. timeout 30  # By default, boot the first entry. default 0  # Fallback to the second entry. fallback 1  # For booting with disc 0 kernel title  GNU/Linux (hd0,0) kernel (hd0,0)/bzImage root=/dev/md1  # For booting with disc 1 kernel, if (hd0,0)/bzImage is unreadable title  GNU/Linux (hd1,0) kernel (hd1,0)/bzImage root=/dev/md1 ------------------------------------------------------------------  Now you should be able to reboot your system and play!</pre>