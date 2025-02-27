---
title: "Ricompilare il kernel 2.4.x &#8211; passi necessari"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-10-21"
permalink: "ricompilare-il-kernel-24x-passi-necessari/"
layout: "template_posts_md"
---
<p>Ricompilazione del Kernel 2.4.x &#8211; Passi necessari.</p>
<p>Innanzi tutto scaricare e installare le librerie ncurses per usare il<br />menuconfig</p>
<p>Make mrproper</p>
<p>Make menuconfig o make xconfig o make config</p>
<p>Make clean</p>
<p>Make dep</p>
<p>Make clean</p>
<p>Make bzImage</p>
<p>Make modules</p>
<p>Make modules_install</p>
<p>Copiare /usr/src/linux/arch/i386/boot/bzImage in /boot/vmlinux-new<br />Copiare /usr/src/linux/System.map in /boot/</p>
<p>Modifica /etc/lilo.conf</p>
<p>Lancia lilo -t -v (test)<br />Lancia lilo -v (per installare lilo</p>
<p><p>IN BREVE:</p>
<p>Make mrproper<br />Make menuconfig o make xconfig o make config<br />Make clean<br />Make dep &amp;&amp; Make bzImage<br />Make modules &amp;&amp; Make modules_install</p>
<p>Ecc..</p>
