---
title: "[sendmail] &#8211; modificare mailertable per impostare il mailgateway di un dominio"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-07-02"
permalink: "sendmail-modificare-mailertable-per-impostare-il-mailgateway-di-un-dominio/"
layout: "template_posts_md"
---
<p>root@proxy2:~# cat /etc/mail/mailertable<br />dns.pippo.it  procmail:<br />pippo.it      esmtp:[172.21.1.15]<br />pippo2.it esmtp:[172.21.1.15]<br />katamail.com    esmtp:[relay.katamail.com]</p>
<p>makemap hash /etc/mail/mailertable.db &lt; /etc/mail/mailertable</p>
<p>&#8212; <br />principio di Napoleone: non attribuire a malintenzione cio&#39; che puo&#39; essere semplicemente spiegato come imbecillita&#39;<br />MaoX Blog:<br />Problemi e soluzioni di un sistemista informatico:<br /><a href="http://maox.blogspot.com">http://maox.blogspot.com</a></p>
