---
title: "Problemi con lilo - Risolverli con Knoppix"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-03-14"
permalink: "problemi-con-lilo-come-risolverli-con-knoppix/"
layout: "template_posts_md"
icon:
  - linux
---
<p>Avviare knoppix (meglio con knoppix lang=it)</p>
<p>editare /etc/fstab<br />
aggiungere alla partizione da montare<br />
dopo nouser,exec<br />
,dev<br />
&#8212;&#8211;</p>
<p>adesso dare mount /mnt/sda1<br />
poi<br />
chroot /mnt/sda1<br />
mount -t none /proc<br />
poi lilo -C /etc/lilo.conf -v -t<br />
poi lilo -C /etc/lilo.conf -v</p>
<p>&nbsp;</p>
<p>oppure</p>
<p>So do this again:<br />
mount /dev/sda4 /mnt<br />
mount /dev/sda1 /mnt/boot<br />
mount &#8211;bind /dev /mnt/dev<br />
mount-t proc none /mnt/proc<br />
mount -t sysfs none /mnt/sys<br />
chroot /mnt</p>
<p>poi lilo -C /etc/lilo.conf -v -t<br />
poi lilo -C /etc/lilo.conf -v</p>
<p>&nbsp;</p>
<p>Saluti a tutti!!!</p>
