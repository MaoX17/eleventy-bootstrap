---
title: "Ricreare il tasto &#8220;Mostra Desktop&#8221; sulla barra di avvio veloce o Quick Launch"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-10-28"
permalink: "ricreare-il-tasto-mostra-desktop-sulla-barra-di-avvio-veloce-o-quick-launch/"
layout: "template_posts_md"
---
<p align="justify"><small>Può capitare di cancellare inavvertitamente l&#8217;icona,  presente sulla barra di avvio veloce, che ci permette di sgomberare il desktop  da eventuali finestre di programma aperte. Per ripristinarla, seguite i seguenti  passaggi:</p>
<p>Create sul desktop un nuovo file txt, apritelo e scrivete al  suo interno quanto segue:</p>
<p>[Shell]<br />Command=2 <br />IconFile=explorer.exe,3<br />[Taskbar]<br />Command=ToggleDesktop </p>
<p>Salvare, uscire e rinominare il file in Mostra Desktop.scf. Ora  trascinatelo sulla barra di avvio veloce.<br /></small></p>
<p><!-- Copiare è reato. Tutti i diritti riservati www.AZPoint.net .--></p>
