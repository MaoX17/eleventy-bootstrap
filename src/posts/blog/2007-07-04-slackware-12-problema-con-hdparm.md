---
title: "slackware 12 &#8211; problema con hdparm"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-07-04"
permalink: "slackware-12-problema-con-hdparm/"
layout: "template_posts_md"
---
<p>Quando ho lanciato gxine per la prima volta mi ha detto che avevo il DMA del dvd disabilitato.<br />Provo quindi a dare <br />hdparm -d1 /dev/dvd</p>
<p>ma ottengo i seguenti errori:<br />HDIO_SET_DMA failed: Operation not permitted<br />HDIO_SET_DMA failed: Inappropriate ioctl for device</p>
<p>La soluzione è mettere una delle seguenti righe nel grub.conf o nel lilo.conf:<br />combined_mode=libata<br />append = &#8220;libata.atapi_enabled=1 ide0=noprobe&#8221;<br />append = &#8220;libata.atapi_enabled=1 combined_mode=libata pci=routeirq ide0=noprobe ide1=noprobe&#8221;</p>
