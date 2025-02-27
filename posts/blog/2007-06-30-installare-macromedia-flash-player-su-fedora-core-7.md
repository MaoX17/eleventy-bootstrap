---
title: "Installare Macromedia Flash Player su Fedora Core 7"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-06-30"
permalink: "installare-macromedia-flash-player-su-fedora-core-7/"
layout: "template_posts_md"
---
<p>da root</p>
<p><em>nano /etc/yum.repos.d/macromedia.repo </em>e copincolliamo e salviamo questo </p>
<pre>[macromedia]<br /><div><br />name=Macromedia for i386 Linux<br /><br />baseurl=http://macromedia.rediris.es/rpm/<br /><br />#baseurl=http://macromedia.mplug.org/rpm/<br /><br />#baseurl=http://sluglug.ucsc.edu/macromedia/rpm/<br /><br />enabled=1<br /><br />gpgcheck=1<br /><br />gpgkey=http://macromedia.rediris.es/FEDORA-GPG-KEY<br /></div><br /></pre>
<p>e con questo abbiamo addato il repo Macromedia (serve solo per FlashPlayer). </p>
<pre>yum -y install flash-plugin</pre>
<p> <strong></strong></p>
