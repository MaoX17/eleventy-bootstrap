---
title: "Win XP &#8211; Eliminare la guida in linea dal menu Start"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2009-02-17"
permalink: "win-xp-eliminare-la-guida-in-linea-dal-menu-start/"
layout: "template_posts_md"
---
<p>La cosa che sopporto meno in assoluto è la MALEDETTA Guida in Linea.<br />
Tutte le volte che voglio cliccare su Start -&gt; Esegui&#8230; sbaglio e clicco su guida in linea&#8230;<br />
Grrr&#8230;</p>
<p>Per eliminarla:<br />
Copiare il seguente &#8220;codice&#8221; in un file chiamato NoGuidaInLinea.reg ed eseguirlo</p>
<p>Windows Registry Editor Version 5.00</p>
<p>[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced]<br />
&#8220;NoStartMenuHelp&#8221;=dword:00000001</p>
<p>Spero sia di aiuto.<br />
Saluti</p>
<p>Il File già Pronto è qui: <a href="http://www.maurizio.proietti.name/wp-content/uploads/2009/02/noguidainlinea_menustart1.zip">noguidainlinea_menustart1</a></p>
