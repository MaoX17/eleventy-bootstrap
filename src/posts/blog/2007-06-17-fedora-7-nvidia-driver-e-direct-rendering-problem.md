---
title: "Fedora 7 nvidia driver e direct rendering problem"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-06-17"
permalink: "fedora-7-nvidia-driver-e-direct-rendering-problem/"
layout: "template_posts_md"
---
<p>Oggi ho provato a installare i driver nvidia abilitando il direct rendering<br />non ce l&#39;ho fatta.<br />Ho provato di tutto, ma l&#39;installazione tramite i pacchetti rpm e yum <br />non ha dato nessun risultato.<br />Ogni volta che provavo il comando<br />glxinfo | grep rend</p>
<p>ottenevo<br />direct rendering: No</p>
<p>Alla fine, stufo e quasi rassegnato mi sono deciso e ho fatto <br />l&#39;installazione manuale.<br />Ecco i passi necessari:</p>
<p>Scarico<br /><a href="http://us.download.nvidia.com/XFree86/Linux-x86/100.14.09/NVIDIA-Linux-x86-100.14.09-pkg1.run">http://us.download.nvidia.com/XFree86/Linux-x86/100.14.09/NVIDIA-Linux-x86-100.14.09-pkg1.run</a></p>
<p>poi un bel</p>
<p>telinit 3</p>
<p>yum remove kmod-nvidia.i686<br />yum install kernel-devel gcc</p>
<p>chmod ugo+x NVIDIA-Linux-x86-100.14.09-pkg1.run</p>
<p>./NVIDIA-Linux-x86-100.14.09-pkg1.run</p>
<p>seguo i passi necessari</p>
<p>quando ha finito ho dato un bel telinit 5</p>
<p>e&#8230;. magia&#8230;</p>
<p>glxinfo | grep rend<br />direct rendering: Yes<br />OpenGL renderer string: GeForce Go 7300/PCI/SSE2</p>
