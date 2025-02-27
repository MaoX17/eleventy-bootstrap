---
title: "Backup linux con rsync"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-09-04"
permalink: "backup-linux-con-rsync/"
layout: "template_posts_md"
---
<p>rsync -avz &#8211;exclude-from=escludi.txt root@192.168.0.1:/[root SORGENTE] <br />/[root DESTINAZIONE]</p>
<p>[root@zion ~]# cat escludi.txt<br />/dev<br />/proc<br />/sys<br />/boot<br />/etc/modules.conf<br />/etc/fstab<br />/etc/mtab<br />/etc/sysconfig/network-scripts</p>
