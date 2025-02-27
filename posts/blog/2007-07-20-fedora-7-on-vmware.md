---
title: "fedora 7 on VMWare"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-07-20"
permalink: "fedora-7-on-vmware/"
layout: "template_posts_md"
---
<h3><span class="jive-subject">Fedora 7 Guest Disk Support Flakey in Server 1.3/Workstation 5.5</span></h3>
<p> The error<br /> Jun 2 09:28:31 f7 kernel: ata2.00: exception Emask 0x0 SAct 0x0 SErr 0x0 action 0x0 <br /> Jun 2 09:28:31 f7 kernel: ata2.00: (BMDMA stat 0x26) <br /> Jun 2 09:28:31 f7 kernel: ata2.00: cmd a0/01:00:00:00:00/00:00:00:00:00/a0 tag 0 cdb 0x4a data 8 in <br /> Jun 2 09:28:31 f7 kernel: res 51/50:03:00:00:00/00:00:00:00:00/a0 Emask 0x20 (host bus error) <br /> Jun 2 09:28:31 f7 kernel: ata2.00: configured for UDMA/33 <br /> Jun 2 09:28:31 f7 kernel: ata2: EH complete </p>
<p> Solution</p>
<p> chkconfig &#8211;level 345 haldaemon off<br /> /etc/init.d/haldaemon stop </p>
<h2><span class="jive-subject"></span></h2>
