---
title: "Fujitsu lifebook s7110 &#8211; volume hotkeys"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-09-27"
permalink: "fujitsu-lifebook-s7110-volume-hotkeys/"
layout: "template_posts_md"
---
<p>from: <a href="http://users.linpro.no/janl/hardware/S7020.html">http://users.linpro.no/janl/hardware/S7020.html</a></p>
<p>Volume buttons: The keyboard has Fn key combinations for screen<br />backlight and so on. The audio volume buttons are not bound into the<br />hardware and must be handled by Linux. Ubuntu&#8217;s Gnome envronment handles<br />this without pain. In KDE (also needed in other environments) I had to<br />make a .Xmodmap file with these contents:</p>
<p>keycode 160 = XF86AudioMute<br />keycode 174 = XF86AudioLowerVolume<br />keycode 176 = XF86AudioRaiseVolume</p>
<p>After running</p>
<p>xmodmap .Xmodmap</p>
<p>KDE handled the volume buttons just fine.<br />&#8230; This broke again under 2.6.15 because the ALSA driver for the sound<br />chipset names the channels as &#8220;Headphone&#8221; (actually the headphone<br />volume), &#8220;PCM&#8221; and &#8220;Internal Speaker&#8221;. The KDE mixer wants only to<br />manipulate the &#8220;Headphone&#8221; volume at this time. This has not been<br />important enough the figure out.</p>
<p>Se qualcosa non funziona manca qualche pacchetto:</p>
<p>yum install kde-settings-pulseaudio.noarch kdeaddons.i386 kdeaddons-extras.i386 kdeartwork* kdebase-extras.i386 kdebindings.i386 kdeedu.i386 kdeedu-libs.i386 kdegraphics-extras.i386 kdelibs-apidocs.i386 kdemultimedia-extras.i386 kdemultimedia-extras-libs.i386 kdeutils.i386 kdeutils-extras.i386 kdewebdev.i386 kflickr.i386 kismet-extras.i386 ktorrent.i386</p>
