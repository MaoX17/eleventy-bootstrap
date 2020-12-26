---
title: "Problemi con grub &#8211; Risolverli con slax"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2009-09-14"
permalink: "problemi-con-grub-risolverli-con-slax/"
layout: "template_posts_md"
---
<p>loadkeys it<br />
mount -o bind /dev /mnt/sda1/dev<br />
mount -t proc none /mnt/sda1/proc<br />
chroot /mnt/sda1 /bin/bash<br />
grub-install /dev/sda<br />
/usr/sbin/update-grub</p>
<p>SE GRUB DA ERRORE<br />
/dev/sda1 does not have any corresponding BIOS drive.</p>
<p>allora usa il seguente comando:<br />
grub-install &#8211;recheck /dev/sda</p>
