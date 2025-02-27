---
title: "Suspend to ram - sospensione in ram su Fedora 7"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-06-30"
permalink: "suspend-to-ram-sospensione-in-ram-su-fedora-7/"
layout: "template_posts_md"
icon:
  - linux
---
<p><strong></strong>Per abilitare il suspend to ram e il suspend to diskho modificato il /etc/grub.conf come segue:</p>
<p><span style="font-size:85%;">kernel /boot/vmlinuz-2.6.21-1.3228.fc7 ro root=LABEL=/ rhgb vga=791 selinux=0 resume=/dev/sda3 quiet<br /></span><span style="font-family:monospace;"><br /><span style="font-size:100%;">In questa riga ho:to il suspend to disk e il suspend to ram<br />abilitato il frame buffer a una risoluzione di 1024x768x32<br />disabilitato il SELinux</span><br /></span></p>
