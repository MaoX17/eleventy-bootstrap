---
title: "Uninstall lilo or grub &#8211; Disintallare lilo o grub"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-07-05"
permalink: "uninstall-lilo-or-grub-disintallare-lilo-o-grub/"
layout: "template_posts_md"
---
<p><tt>Ci sono 2 metodi possibili:</p>
<p> 1.) Da Windows/Dos boot disk:</p>
<p> </tt><code>fdisk /mbr<br /> fixboot<br /> fixmbr</p>
<p> dipende dalla versione del disco di boot (w98 w2000 wxp)</p>
<p> 2.) La linux boot disk</p>
<p> </code><code>dd if=/dev/null of=/dev/sdX bs=446 count=1</p>
<p> oppure</p>
<p> <b>ATTENZIONE: il seguente comando elimina ANCHE la TABELLA DELLE PARTIZIONI!!!</b><br /> </code><code>dd if=/dev/null of=/dev/sdX bs=512 count=1</code><br /> <tt><br /> </tt></p>
