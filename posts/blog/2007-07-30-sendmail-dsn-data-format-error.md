---
title: "Sendmail &#8211; DSN: Data format error"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-07-30"
permalink: "sendmail-dsn-data-format-error/"
layout: "template_posts_md"
---
<p>PROBLEMA:</p>
<p>Quando invio una mail da riga di comando ottengo il seguente output nel <br />maillog:</p>
<p>Jul 30 09:04:25 vidol sm-mta[5107]: l6U74PNH005107: <br />from=&lt;root@vidol.xx.xx.it&gt;, size=463, class=0, nrcpts=1, <br />msgid=&lt;200707300704.l6U74PQY005106@vidol.xx.xx.it&gt;, proto=ESMTP, <br />daemon=MTA, relay=localhost [127.0.0.1]<br />Jul 30 09:04:25 vidol sendmail[5106]: l6U74PQY005106: to=root, <br />ctladdr=root (0/0), delay=00:00:00, xdelay=00:00:00, mailer=relay, <br />pri=30190, relay=[127.0.0.1] [127.0.0.1], dsn=2.0.0, stat=Sent <br />(l6U74PNH005107 Message accepted for delivery)<br />Jul 30 09:04:25 vidol sm-mta[5108]: l6U74PNH005107: to=xx@xx.xx.it, <br />ctladdr=&lt;root@vidol.xx.xx.it&gt; (0/0), delay=00:00:00, xdelay=00:00:00, <br />mailer=esmtp, pri=30677, relay=[111.222.33.44] [111.222.33.44], <br />dsn=5.6.0, stat=Data format error<br />Jul 30 09:04:25 vidol sm-mta[5108]: l6U74PNH005107: l6U74PNH005108: DSN: <br />Data format error</p>
<p>SOLUZIONE:</p>
<p>Il problema era nel fatto che vidol.xx.xx.it non era nel dns.<br />Occorre aggiungere un record A o CNAME alla risoluzione diretta e un <br />record PTR alla inversa.</p>
