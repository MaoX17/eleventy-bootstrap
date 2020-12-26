---
title: "windows 7 &#8211; script per la configurazione di rete"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2014-12-30"
permalink: "windows-7-script-per-la-configurazione-di-rete/"
layout: "template_posts_md"
---
<p>Impostare l&#8217;ip statico da assegnare alla scheda di rete al posto di xx.xx.xx.xx<br />
Impostare l&#8217;ip del gateway da assegnare alla scheda di rete al posto di gw.xx.xx.xx</p>
<pre>
set /p risposta=ATTIVO ESTRA e DISATTIVO DHCP? (s/n):
 IF "%risposta%"=="s" GOTO ESTRA
 IF "%risposta%"=="n" GOTO DHCP
 GOTO End
 :ESTRA
 ECHO Attivo ESTRA
 netsh interface ip set address name="LAN" static xx.xx.xx.xx 255.255.255.0 gw.xx.xx.xx 1
 route add 159.213.89.64 mask 255.255.255.224 172.21.0.1
 route add 192.168.0.0 mask 255.255.255.0 172.21.0.1
 route add 10.10.21.0 mask 255.255.255.0 172.21.0.1
 GOTO End
 :DHCP
 ECHO Attivo DHCP
 route delete 159.213.89.64 mask 255.255.255.224 172.21.0.1
 route delete 192.168.0.0 mask 255.255.255.0 172.21.0.1
 route delete 10.10.21.0 mask 255.255.255.0 172.21.0.1
 netsh interface ip set address name="LAN" dhcp
 netsh interface ip set dnsservers name="LAN" source=dhcp
 :End
 pause
</pre>
