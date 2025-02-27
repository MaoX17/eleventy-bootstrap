---
title: "NVIDIA GEForce 7300 on Fedora Core 7"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-07-03"
permalink: "nvidia-geforce-7300-on-fedora-core-7/"
layout: "template_posts_md"
---
<p><span style="font-weight: bold;">Graphic Board</span><br />As you can see here:<br /><a href="http://maox.blogspot.com/2007/06/fedora-7-nvidia-driver-e-direct.html">Fedora 7 nvidia driver e direct rendering problem</a><br />I&#8217;ve tried to install nvidia driver for my nvidia GE FORCE 7300<br />but with yum and rpm packege i cannot enable direct rendering.</p>
<p>glxinfo | grep rend</p>
<p>direct rendering: No</p>
<p>So i have installed manually:</p>
<p>Download<br /><a href="http://us.download.nvidia.com/XFree86/Linux-x86/100.14.09/NVIDIA-Linux-x86-100.14.09-pkg1.run">http://us.download.nvidia.com/XFree86/Linux-x86/100.14.09/NVIDIA-Linux-x86-100.14.09-pkg1.run</a></p>
<p>then write from konsole</p>
<p>telinit 3<br />yum remove kmod-nvidia.i686<br />yum install kernel-devel gcc<br />chmod ugo+x NVIDIA-Linux-x86-100.14.09-pkg1.run<br />./NVIDIA-Linux-x86-100.14.09-pkg1.run</p>
<p>follow necessary steps<br />then</p>
<p>telinit 5</p>
<p>so&#8230;.</p>
<p>glxinfo | grep rend<br />direct rendering: Yes<br />OpenGL renderer string: GeForce Go 7300/PCI/SSE2</p>
<p>This is my xorg.conf :</p>
<p>[root@trinity2 ~]# cat /etc/X11/xorg.conf</p>
<p># Xorg configuration created by system-config-display<br />Section &#8220;ServerLayout&#8221;<br />Identifier &#8220;single head configuration&#8221;<br />Screen 0 &#8220;Screen0&#8221; 0 0<br />InputDevice &#8220;Keyboard0&#8221; &#8220;CoreKeyboard&#8221;<br />InputDevice &#8220;Synaptics&#8221; &#8220;CorePointer&#8221;<br />EndSection</p>
<p>Section &#8220;Files&#8221;<br />ModulePath &#8220;/usr/lib/xorg/modules&#8221;<br />EndSection</p>
<p>Section &#8220;Module&#8221;<br />Load &#8220;ddc&#8221;<br />Load &#8220;dri&#8221;<br />Load &#8220;fbdevhw&#8221;<br />Load &#8220;record&#8221;<br />Load &#8220;GLCore&#8221;<br />Load &#8220;extmod&#8221;<br />Load &#8220;freetype&#8221;<br />Load &#8220;glx&#8221;<br />Load &#8220;int10&#8221;<br />Load &#8220;type1&#8221;<br />Load &#8220;vbe&#8221;<br />Load &#8220;glx&#8221;<br />Load &#8220;dbe&#8221;<br />Load &#8220;extmod&#8221;<br />EndSection</p>
<p>Section &#8220;InputDevice&#8221;<br />Identifier &#8220;Keyboard0&#8221;<br />Driver &#8220;kbd&#8221;<br />Option &#8220;XkbModel&#8221; &#8220;pc105&#8221;<br />Option &#8220;XkbLayout&#8221; &#8220;it&#8221;<br />EndSection</p>
<p>Section &#8220;InputDevice&#8221;<br />Identifier &#8220;Synaptics&#8221;<br />Driver &#8220;synaptics&#8221;<br />Option &#8220;Device&#8221; &#8220;/dev/input/mice&#8221;<br />Option &#8220;Protocol&#8221; &#8220;auto-dev&#8221;<br />Option &#8220;Emulate3Buttons&#8221; &#8220;yes&#8221;<br />EndSection</p>
<p>Section &#8220;Monitor&#8221;<br />Identifier &#8220;Monitor0&#8221;<br />VendorName &#8220;Unknown&#8221;<br />ModelName &#8220;Unknown&#8221;<br />HorizSync 30.0 &#8211; 110.0<br />VertRefresh 50.0 &#8211; 150.0<br />Option &#8220;DPMS&#8221;<br />EndSection</p>
<p>Section &#8220;Device&#8221;<br />Identifier &#8220;Device0&#8221;<br />Driver &#8220;nvidia&#8221;<br />VendorName &#8220;NVIDIA Corporation&#8221;<br />BoardName &#8220;GeForce Go 7300&#8221;<br />EndSection</p>
<p>Section &#8220;Screen&#8221;<br />Identifier &#8220;Screen0&#8221;<br />Device &#8220;Device0&#8221;<br />Monitor &#8220;Monitor0&#8221;<br />DefaultDepth 24<br />Option &#8220;NoRenderExtension&#8221; &#8220;False&#8221;<br />Option &#8220;DamageEvents&#8221; &#8220;True&#8221;<br />SubSection &#8220;Display&#8221;<br />Depth 24<br />EndSubSection</p>
<p>Option &#8220;AllowGLXWithComposite&#8221; &#8220;True&#8221;<br />Option &#8220;RenderAccel&#8221; &#8220;True&#8221;<br />Option &#8220;AddARGBGLXVisuals&#8221; &#8220;True&#8221;<br />Option &#8220;TripleBuffer&#8221; &#8220;true&#8221;<br />EndSection</p>
<p>Section &#8220;Extensions&#8221;<br />Option &#8220;RENDER&#8221; &#8220;true&#8221;<br />Option &#8220;DAMAGE&#8221; &#8220;true&#8221;<br />Option &#8220;Composite&#8221; &#8220;Enable&#8221;<br />EndSection</p>
