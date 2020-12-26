---
title: "Ricompilazione php"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-03-14"
permalink: "ricompilazione-php/"
layout: "template_posts_md"
---
<p>&#232; stato necessario ricompilare perch&#232; mancava il supporto zlib e gd</p>
<p>./configure &#8211;with-mysql=/usr/local/mysql &#8211;with-openssl=/usr/local/ssl <br />&#8211;with-apxs=/usr/local/apache/bin/apxs &#8211;enable-mbstring <br />&#8211;with-mm=/usr/local &#8211;with-zlib &#8211;with-gd</p>
<p>poi nn si collegava al db, &#232; stato necessario creare un link da <br />/tmp/mysql.sock a /var/lb/mysql/mysql.sock<br />e cambaire i permessi della dir /var/lib/mysql con un chmod ugo+x</p>
