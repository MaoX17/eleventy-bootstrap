---
title: "[WIN] &#8211; Soluzione problema sfoglia rete"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-09-13"
permalink: "win-soluzione-problema-sfoglia-rete/"
layout: "template_posts_md"
---
<p>HKLM\SYSTEM\CurrentControlSet\Services\Browser\Parameters<br />IsDomainMaster and MaintainServerList both should be positive, YES/TRUE, <br />depending on 2K or XP.</p>
<p>An election occurs each time your master browser becomes unavailable. <br />The other way you could prevent elections is to stop the Computer <br />Browser servers on all the other clients and set it to manual. This <br />service does nothing but maintain the browse list and make the pc <br />capable of becoming a master or backup browser.</p>
<p>&#8212; <br />&#8212;<br />principio di Napoleone: <br />non attribuire a malintenzione cio&#39; che puo&#39; <br />essere semplicemente spiegato come imbecillita&#39;<br />&#8212;<br />MaoX Blog:<br /><a href="http://maox.blogspot.com">http://maox.blogspot.com</a></p>
