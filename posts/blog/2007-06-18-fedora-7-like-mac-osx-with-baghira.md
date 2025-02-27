---
title: "Fedora 7 like mac osx with baghira"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-06-18"
permalink: "fedora-7-like-mac-osx-with-baghira/"
layout: "template_posts_md"
---
<p>Ecco come fare:</p>
<p>yum install kdelibs-devel kdebase-devel libXtst-devel rpm-build</p>
<p>wget <a href="http://www.kde-look.org/CONTENT/content-files/59592-baghira.spec">http://www.kde-look.org/CONTENT/content-files/59592-baghira.spec</a><br />mv 59592-baghira.spec /usr/src/redhat/SPECS/baghira.spec</p>
<p>wget <a href="http://mesh.dl.sourceforge.net/sourceforge/baghira/baghira-0.8.tar.bz2">http://mesh.dl.sourceforge.net/sourceforge/baghira/baghira-0.8.tar.bz2</a><br />mv baghira-0.8.tar.bz2 /usr/src/redhat/SOURCES</p>
<p>cd /usr/src/redhat/SPECS/<br />rpmbuild -bb baghira.spec</p>
<p>cd ../RPMS/i386/<br />rpm -Uhv baghira-0.8-1.i386.rpm</p>
<p>Adesso nel pannello di controllo di kde possiamo scegliere baghira come <br />tema e decorazione.</p>
<p>Saluti</p>
