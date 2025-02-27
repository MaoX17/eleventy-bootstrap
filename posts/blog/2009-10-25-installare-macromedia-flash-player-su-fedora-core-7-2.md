---
title: "Installare Macromedia Flash Player su Fedora Core 7"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2009-10-25"
permalink: "installare-macromedia-flash-player-su-fedora-core-7-2/"
layout: "template_posts_md"
---
<p>da root</p>
<p><em>nano /etc/yum.repos.d/macromedia.repo </em>e copincolliamo e salviamo questo</p>
<pre>[macromedia]
<div>
name=Macromedia for i386 Linux

baseurl=http://macromedia.rediris.es/rpm/

#baseurl=http://macromedia.mplug.org/rpm/

#baseurl=http://sluglug.ucsc.edu/macromedia/rpm/

enabled=1

gpgcheck=1

gpgkey=http://macromedia.rediris.es/FEDORA-GPG-KEY</div></pre>
<p>e con questo abbiamo addato il repo Macromedia (serve solo per FlashPlayer).</p>
<pre>yum -y install flash-plugin</pre>
