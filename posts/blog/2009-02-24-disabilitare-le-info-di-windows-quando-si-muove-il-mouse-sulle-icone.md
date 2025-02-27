---
title: "Disabilitare le info di windows quando si muove il mouse sulle icone"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2009-02-24"
permalink: "disabilitare-le-info-di-windows-quando-si-muove-il-mouse-sulle-icone/"
layout: "template_posts_md"
---
<p>Salve a tutti,<br />
a volte la presenza dei suggerimenti che windows da quando si passa con il mouse su file ed icone può essere fastidioso.<br />
Una soluzione sta nel disabilitare tale funzione.<br />
Per farlo occorre copiare il seguente testo in un file chiamato:<br />
disabilita_infotip.reg</p>
<p><code><br />
Windows Registry Editor Version 5.00</p>
<p>[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced]<br />
“ShowInfoTip”=dword:00000000<br />
</code></p>
<p>ed eseguirlo.</p>
<p>Riavviare il pc e le info non compariranno più.<br />
Per rimettere tutto a posto come prima:</p>
<p><code><br />
Windows Registry Editor Version 5.00</p>
<p>[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Advanced]<br />
“ShowInfoTip”=dword:00000001<br />
</code></p>
<p>Spero vi sia utile.<br />
Saluti</p>
