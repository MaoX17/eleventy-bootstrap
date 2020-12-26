---
title: "Fedora 10 &#8211; Could not create a python script engine for plasmoid"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2009-06-06"
permalink: "fedora-10-could-not-create-a-python-script-engine-for-plasmoid/"
layout: "template_posts_md"
---
<p>This is my solution:</p>
<p>Remove any plasmoid and its directory in $HOME/.kde/share/apps/</p>
<p>yum remove kdebase-workspace-python-applet</p>
<p>yum install python-dev compat-python24-devel.i386 compat-python24-tools.i386 dbus-python-devel.i386 gnome-python2-devel.i386 ipython.noarch  pymol-wxpython.i386 python-devel.i386 python-fedora.noarch python-py.i386 python-pysctp.i386</p>
<p>yum install kdebase-workspace-python-applet</p>
<p>the re-install plasmoid with command:</p>
<p>plasmapkg -i plasmoid</p>
<p>plasmapkg -i 101229-gmail-plasmoid-0.7.3.plasmoid</p>
