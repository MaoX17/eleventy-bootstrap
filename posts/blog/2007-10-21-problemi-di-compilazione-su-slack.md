---
title: "Problemi di compilazione su slack"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-10-21"
permalink: "problemi-di-compilazione-su-slack/"
layout: "template_posts_md"
---
<p>a volte ho avuto qualche problema di compilazione di codici sorgenti su<br />slack.<br />Mi &#232; capitato, per es, con Bluefish+Glib2+Gtk2<br />Il tutto si risolve come segue:</p>
<p>env PKG_CONFIG_PATH=/usr/local/lib/pkgconfig<br />LD_LIBRARY_PATH=/usr/local/lib \<br />./configure</p>
