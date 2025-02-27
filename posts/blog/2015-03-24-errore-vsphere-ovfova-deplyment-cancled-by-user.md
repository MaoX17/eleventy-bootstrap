---
title: "Errore vsphere - OVF/OVA deplyment- cancled by user"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2015-03-24"
permalink: "errore-vsphere-ovfova-deplyment-cancled-by-user/"
layout: "template_posts_md"
icon:
  - vmware
  - php
  - jquery
---
<p>Se al momento del deploy di un file ovf o ova si presenta l&#8217;errore &#8220;cancled by user&#8221; molto probabilmente la causa sta nel fatto che quando si è creato il template OVF o OVA la macchina virtuale (guest) aveva impostato come unità CD-ROM una immagine ISO.<br />
Per risolvere occorre impostare il CD-ROM del guest su &#8220;Client&#8221; e rifare il template OVF o OVA e rifare il deploy</p>
