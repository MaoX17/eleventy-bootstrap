---
title: "Fedora 7 &#8211; Problema con haldaemon e kpowersave"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-08-09"
permalink: "fedora-7-problema-con-haldaemon-e-kpowersave/"
layout: "template_posts_md"
---
<p>Ad ogni avvio mi si presentava il problema di &quot;congelamento&quot; del pc per <br />vari minuti fino a che  non falliva l&#39;avvio del demone e tutto <br />proseguiva correttamente.<br />PEr questo problema, per&#242;, non funzionava neppure kpowersave.</p>
<p>Per risolvere il problema ho dovuto attivare all&#39;avvio il demone<br />/etc/init.d/messagebus</p>
<p>Tutto si risolve con i seguenti comandi:<br />/etc/init.d/messagebus start<br />/etc/init.d/haldaemon start<br />kpowersave</p>
<p>Spero vi sia utile.<br />Salui<br />MaoX</p>
