---
created: 2020-12-29T17:55:06+01:00
modified: 2020-12-29T18:01:35+01:00
date: "2020-12-31"
tags: post
title: LVM on VmWare - Enlarge Disk
layout: template_posts_md
htmlClass: html
unsplash: 11ty
icon:
  - linux
  - vmware
faicon: fab fa-linux
bodyClass: body

---

# Allargere LVM senza aggiungere un nuovo disco ma allargandone uno esistente

Da vmware allargare il disco facente parte dell'LVM da incrementare (come se si dovesse allargare un server windows per intendersi), se sono presenti più dischi allargare l'ultimo.
Sulla macchina virtuale linux:
lanciare

```

ls /sys/class/scsi_device/ - per visualizzare gli id del bus
echo 1> /sys/class/scsi_device/0:0:0:0/device/rescan – su tutti i device per eseguire il rescan
cfdisk /dev/sda e verificare che ci sia lo spazio non formattato - se non esiste il comando saltare questo passaggio
fdisk /dev/sda
n
p
invio - invio
t
invio
8e
w
A questo punto lanciare partprobe 

```

Alternativa:
```
for i in `ls /sys/class/scsi_device/`; do echo $i; echo 1> /sys/class/scsi_device/$i/device/rescan ; done
fdisk /dev/sdX
n
p
invio - invio
t
invio
8e
w

partprobe


```

procedere normalmente eseguinto fdisk e creando una seconda partizione di tipo 8e lanciando pvcreate, vgextend, lvextend

```
pvcreate /dev/sdc1
vgextend dati /dev/sdc1
lvextend /dev/dati/opt /dev/sdc1
e2fsck -f /dev/dati/opt
resize2fs /dev/dati/opt
mount /dev/dati/opt /opt

ATTENZIONE --- SU CENTOS 7 il comando è
xfs_growfs /dev/centos/opt

```
