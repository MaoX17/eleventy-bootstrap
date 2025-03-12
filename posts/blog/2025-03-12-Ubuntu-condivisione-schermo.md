---
title: Ubuntu - Problema condivisione schermo videoconferenza
tags:
  - post
htmlClass: html
bodyClass: body
date: 2025-03-12
layout: template_posts_md
---
# Ubuntu - Problema condivisione schermo su videoconferenza

Fonte: 
https://medium.com/@edouard.courty/how-to-fix-screen-sharing-on-ubuntu-22-04-disabling-wayland-e9eac4143c7

```bash
echo $XDG_SESSION_TYPE
If the output is wayland, you are running Wayland as your display server.

sudo vi /etc/gdm3/custom.conf
[daemon]
#Uncomment the line below to force the login screen to use Xorg
WaylandEnable=false


reboot

```
