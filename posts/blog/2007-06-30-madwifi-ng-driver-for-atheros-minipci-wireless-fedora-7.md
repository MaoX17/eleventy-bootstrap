---
title: "Madwifi ng driver for atheros minipci wireless fedora 7"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-06-30"
permalink: "madwifi-ng-driver-for-atheros-minipci-wireless-fedora-7/"
layout: "template_posts_md"
---
<p><strong>Madwifi ng driver for atheros minipci wireless:</strong></p>
<p> Sacrico i driver con un bel </p>
<div>
<p>wget http://ovh.dl.sourceforge.net/sourceforge/madwifi/madwifi-0.9.3.1.tar.bz2</p>
<p>tar -jxvf  madwifi-0.9.3.1.tar.bz2</p>
<p>cd madwifi-ng</p>
<p>make &amp;&amp; make install &amp;&amp; depmod -ae</p>
<p>modprobe ath_pci</p>
<p>adesso dovrebbe funzionare tutto.</p>
<p>un bel</p>
<p>iwconfig </p>
<p>di conferma e tutto è ok.   </p>
</p></div>
</p>
<p> <strong></strong><br />Se non dovesse funzionare provate a cercare su<br />/etc/sysconfig/network-script/ifcfg-wifi0<br />e modificate :<br />DEVICE=wifi0<br />con<br />DEVICE=ath0</p>
<p>Adesso tutto ok.<br />Bye</p>
