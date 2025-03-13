---
title: Ubuntu - Crash docking station
tags:
  - post
htmlClass: html
bodyClass: body
date: 2025-03-12
layout: template_posts_md
---
## Ubuntu - Crash della docking station

```bash

sudo vim /etc/pulse/default.pa

...
### Automatically suspend sinks/sources that become idle for too long
#spento by maox 2025-02-23 - https://wiki.archlinux.org/title/DisplayLink#Displays_disconnect_at_random_intervals_when_using_the_Dell_D6000_docking_station - x usb
#load-module module-suspend-on-idle

.....

poi

sudo apt install tlp

sudo vim /etc/tlp.conf 

....
### maox 2025-02-23 - aggiunto pacchetto e effettuata modifica x usb
#USB_AUTOSUSPEND=1
USB_AUTOSUSPEND=0
.....



sudo systemctl restart tlp

```
