---
title: "Installa Openssl dai sorgenti"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2008-09-06"
permalink: "installa-openssl-dai-sorgenti.html"
layout: "template_posts_md"
---
<p><code></p>
<p>./config -shared<br />
make<br />
make test<br />
make install<br />
export PKG_CONFIG_PATH=/usr/local/lib/pkgconfig:/usr/lib/pkgconfig:/usr/local/ssl/lib/pkgconfig</p>
<p>[salvare in /etc/rc.d/rc.local]</p>
<p>controllare che il file /etc/ld.so.conf contenga le path delle librerie epoi lanciare<br />
ldconfig</p>
<p>export PATH=$PATH:/usr/local/apache/bin:/usr/local/mysql/bin<br />
export PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/usr/local/lib/pkgconfig:/usr/lib/pkgconfig:/usr/local/ssl/lib/pkgconfig<br />
</code></p>
