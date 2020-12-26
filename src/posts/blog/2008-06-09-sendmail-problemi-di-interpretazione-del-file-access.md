---
title: "Sendmail &#8211; problemi di interpretazione del file access"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2008-06-09"
permalink: "sendmail-problemi-di-interpretazione-del-file-access/"
layout: "template_posts_md"
---
<p>Oggi provavo ad aggiungere una regola su access per la gestione di un <br />account locale (da far interpretare a procmail).</p>
<p>ho aggiunto al access la riga</p>
<p>To:xxx@xx.dominio.it    OK</p>
<p>ho dato il solito<br />makemap hash /etc/mail/access.db &lt; /etc/mail/access<br />e un restart di sendmail</p>
<p>ma il risultato era sempre lo stesso</p>
<p>Jun  9 08:59:21 mail2 sm-mta[27026]: m596xLBH027026: ruleset=check_rcpt, <br />arg1=&lt;xxx@xx.dominio.it&gt;, relay=mail [172.21.1.1], reject=552 5.0.0 <br />Utente inesistente &#8211; User unknown &#8211; Si prega contattare telefonicamente <br />allo xxx.xxxx</p>
<p>Dopo aver moccolato x ore<br />ho trovato la causa&#8230;</p>
<p>MANCAVA IL NOME xx.dominio.it NEL FILE<br />local-host-names</p>
<p>Spero vi sia di aiuto!<br />Bonaaaaa</p>
