---
title: "Installare applicazioni per kde"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-06-18"
permalink: "installare-applicazioni-per-kde/"
layout: "template_posts_md"
---
<p>./configure &#8211;prefix=`kde-config &#8211;prefix`<br />make<br />make install</p>
<p>in caso di errori, se non trova Qt aggiungere:<br /><span style="font-size:-1;">&#8212;<b>with-qt</b>-dir=$QTDIR &#8212;<b>with-qt</b>-libraries=$QTDIR/lib &#8211;with-extra-libs=$QTDIR/lib<br />opuure a mano<br /></span><span style="font-size:-1;">&#8212;<b>with-qt</b>-dir=</span>/usr/lib/qt-3.3<span style="font-size:-1;"> &#8212;<b>with-qt</b>-libraries=</span>/usr/lib/qt-3.3/lib<span style="font-size:-1;"> &#8211;with-extra-libs=</span>/usr/lib/qt-3.3/lib <span style="font-size:-1;">&#8212;<b>with-qt-include</b>=</span>/usr/lib/qt-3.3/include</p>
