---
title: "Problema con Samba fedora e SELinux"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-06-28"
permalink: "problema-con-samba-fedora-e-selinux/"
layout: "template_posts_md"
---
<p>Oggi ho trovato un bel problema si samba.<br />Qualsiasi condivisione provavo ad aprire ottenevo un bel ACCESSO NEGATO<br />e in particolare:</p>
<p>&#8216;/home/maox&#8217; does not exist or permission denied when connecting to<br />[maox] Error was Permission denied<br />[2007/05/25 20:39:34, 0] smbd/service.c:make_connection_snum(920)</p>
<p>[soluzione]<br />Per risolvere:</p>
<p>go to /etc/grub.conf and replace this:<br />CODE</p>
<p>        kernel /vmlinuz-2.6.15-1.2054_FC5 ro root=LABEL=/1</p>
<p>with this:<br />CODE<br />       kernel /vmlinuz-2.6.15-1.2054_FC5 ro root=LABEL=/1 selinux=0</p>
<p>(note the selinux=0 part). the line may be different so if it is, just<br />add the selinux=0 part and it should work the same&#8230;</p>
<p>Reboot. Your system should work.</p>
<p>Adesso tutto funziona</p>
<p>&#8212;<br />principio di Napoleone:<br />non attribuire a malintenzione cio&#8217; che puo&#8217;<br />essere semplicemente spiegato come imbecillita&#8217;<br />&#8212;<br />MaoX Blog:<br /><a href="http://maox.blogspot.com/">http://maox.blogspot.com</a></p>
