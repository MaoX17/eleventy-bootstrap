---
title: "Aircrack-ng su Fedora 7 con driver atheros madwifi-ng(ath_pci)"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-06-30"
permalink: "aircrack-ng-su-fedora-7-con-driver-atheros-madwifi-ngath_pci/"
layout: "template_posts_md"
---
<p><strong>Aircrack-ng su Fedora 7 con driver atheros madwifi-ng(ath_pci) </strong></p>
<div> Per aircrack occorre patchare i driver madwifi-ng appena installati<br />Seguire i seguenti passaggi per patchare i driver:<br /><span style=";font-family:times new roman;font-size:130%;"  ><br />ifconfig ath0 down<br />ifconfig wifi0 down<br />rmmod wlan_wep ath_rate_sample ath_rate_onoe ath_pci wlan ath_hal ath_rate_amrr 2>/dev/null<br />svn checkout <a href="http://svn.madwifi.org/trunk/" target="_blank" onclick="return top.js.OpenExtLink(window,event,this)">http://svn.madwifi.org/trunk/</a> madwifi-ng<br />wget <a href="http://patches.aircrack-ng.org/madwifi-ng-r2277.patch" target="_blank" onclick="return top.js.OpenExtLink(window,event,this)">http://patches.aircrack-ng.org/madwifi-ng-r2277.patch</a><br />cd madwifi-ng<br />patch -Np1 -i ../madwifi-ng-r2277.patch<br />make<br />make install<br />depmod -ae<br />modprobe ath_pci<br />cd ..<br />wget http://download.aircrack-ng.org/aircrack-ng-0.9.1.tar.gz<br />tar -zxvf aircrack-ng-0.9.1.tar.gz<br />cd aircrack-ng-0.9.1<br />make &#038;&amp; make install<br /></span> </p>
<p>funzionaaaa!!! </p>
</p></div>
<p>si rimanda qui per la suite: <a href="http://aircrack-ng.org/doku.php#aircrack-ng_suite">http://aircrack-ng.org/doku.php#aircrack-ng_suite</a></p>
</p>
<p> <strong></strong></p>
