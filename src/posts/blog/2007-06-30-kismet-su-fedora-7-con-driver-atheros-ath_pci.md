---
title: "Kismet su Fedora 7 con driver atheros (ath_pci)"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-06-30"
permalink: "kismet-su-fedora-7-con-driver-atheros-ath_pci/"
layout: "template_posts_md"
---
<p><strong>Kismet su Fedora 7 con driver atheros (ath_pci) </strong></p>
<p>yum install kismet </p>
<div>vi /etc/kismet/kismet.conf </p>
<p>e cambiare la riga:<br />source=&#8230;..<br />in<br />source=<strong>madwifing_g</strong>,wifi0,atherosmadwifing_g</p>
<p>esci e salva.</p>
<p>lancia kismet&#8230;.</p>
<p>funzionaaaa!!!  </p>
</p></div>
