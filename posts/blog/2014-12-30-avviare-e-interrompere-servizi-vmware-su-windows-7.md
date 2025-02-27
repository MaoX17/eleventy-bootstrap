---
title: "Avviare e interrompere servizi VMWare su Windows 7"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2014-12-30"
permalink: "avviare-e-interrompere-servizi-vmware-su-windows-7/"
layout: "template_posts_md"
icon:
  - win
  - vmware
  - code
---
<p>Script batch per avviare i servizi di VMWare</p>
<pre>
@echo off
echo ======================================================
rem net stop "VMAuthdService"
netsh interface set interface "VMnet1" ENABLED
netsh interface set interface "VMnet8" ENABLED

net start "VMnetDHCP"
net start "VMware NAT Service"

net start "VMwareHostd"
net start "VMUSBArbService"
net start "VMAuthdService"

echo ======================================================
echo VMWARE partito
pause
</code>

Script batch per fermare i servizi di VMWare

<code>
@echo off
echo ======================================================
rem net stop "VMAuthdService"
netsh interface set interface "VMnet1" DISABLED
netsh interface set interface "VMnet8" DISABLED
net stop "VMAuthdService"
net stop "VMnetDHCP"
net stop "VMware NAT Service"
net stop "VMUSBArbService"
net stop "VMwareHostd"



echo ======================================================
echo VMWARE fermo
pause
</pre>
