---
title: "madwifi-ng driver on fedora 8 and packet lost"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2009-06-01"
permalink: "madwifi-ng-driver-on-fedora-8-and-packet-lost/"
layout: "template_posts_md"
---
<p>Questi i passi necessari:</p>
<p>svn checkout http://svn.madwifi-project.org/madwifi/trunk/ madwifi-ng</p>
<p>madwifi-unload</p>
<p>cd madwifi-ng</p>
<p>make clean &amp;&amp; make &amp;&amp; make install</p>
<p>modprobe ath_pci</p>
<p>depmod -ae</p>
<p>iwconfig wlan0 essid wlan rate 11M</p>
<p>A questo punto ad ogni ping perdevo molti pacchetti. Per risolvere:</p>
<p>iwpriv wlan0 mode 2</p>
<p>in modo da forzare il funzionamento in 802.11b</p>
<p>Adesso tutto funziona!</p>
