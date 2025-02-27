---
title: "Win XP - SOLUZIONE svchosts.exe 100% CPU"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2013-12-16"
permalink: "win-xp-soluzione-svchosts-exe-100-cpu/"
layout: "template_posts_md"
icon:
  - win
  - sistemi
---
<p>Se hai già l&#8217;ultimo SP:</p>
<ul>
<li>Stoppa il servizio &#8220;Aggiornamenti Automaciti&#8221;</li>
<li>Scarica Internet Explorer 8 per Windows XP o per Windows Server 2003: - <a href="http://tinyurl.com/IE8WINXPITA" target="_blank"><em>Internet Explorer 8 in italiano per Windows XP</em></a><br />
- <a href="http://tinyurl.com/IE8WIN2003ITA" target="_blank"><em>Internet Explorer 8 in italiano per Windows Server 2003</em></a></li>
<li><em>Non sono interessato a partecipare</em></li>
<li><strong>lasciare spuntata la casella &#8220;Installa aggiornamenti&#8221;</strong></li>
<li>riavvia il sistema</li>
</ul>
<p>&nbsp;</p>
<p>Altra Soluzione:</p>
<ul>
<li>Stoppa il servizio &#8220;aggiornamenti automatici&#8221;</li>
<li><strong>scaricare manualmente l&#8217;ultimo aggiornamento cumulativo per Internet Explorer 8.0 in italiano</strong><a href="http://tinyurl.com/MS13-097-ITA" target="_blank"> cliccando su questo link</a> (<strong>aggiornamento MS13-097 per Internet Explorer 8.0 in italiano su Windows XP SP3</strong>).</li>
<li>Riavvia</li>
</ul>
<p>Per  verificare l&#8217;installazione dell&#8217;aggiornamento  MS13-097 (o KB2898785) per Internet Explorer 8 è digita:<br />
<code><br />
reg query "HKLM\SOFTWARE\Microsoft\Updates\Windows XP\SP0\KB2898785-IE8"<br />
</code></p>
<p>La comparsa del messaggio &#8220;<em>Errore: impossibile trovare la chiave del Registro di sistema o il valore specificato</em>&#8221;  indica che l&#8217;aggiornamento NON è stato installato. Un output differente  conferma l&#8217;avvenuta installazione dell&#8217;aggiornamento MS13-097.</p>
