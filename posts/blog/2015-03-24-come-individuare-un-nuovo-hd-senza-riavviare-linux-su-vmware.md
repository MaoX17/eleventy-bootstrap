---
title: "Come individuare un nuovo HD senza riavviare linux su VMWare"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2015-03-24"
permalink: "come-individuare-un-nuovo-hd-senza-riavviare-linux-su-vmware/"
layout: "template_posts_md"
icon:
  - linux
  - vmware
  
---
<p>How To Detect a New Hard Disk Without Rebooting VMware Linux Guest:</p>
<pre>
ls /sys/class/scsi_host/ | while read host ; do echo "- - -" > /sys/class/scsi_host/$host/scan ; done
</pre>
