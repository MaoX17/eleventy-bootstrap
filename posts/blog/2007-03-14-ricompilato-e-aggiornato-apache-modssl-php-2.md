---
title: "Ricompilato e aggiornato apache modssl php"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-03-14"
permalink: "ricompilato-e-aggiornato-apache-modssl-php-2/"
layout: "template_posts_md"
---
<p>cd mod_ssl-2.8.28-1.3.37</p>
<p>./configure &#8211;with-apache=../../apache_1.3.37 &#8211;with-ssl=/usr/local/ssl <br />&#8211;enable-shared=ssl &#8211;with-mm=/usr/local</p>
<p>cd ../../apache_1.3.37</p>
<p>EAPI_MM=&quot;/usr/local&quot; SSL_BASE=&quot;/usr/local/ssl&quot; ./configure <br />&#8211;enable-module=so &#8211;enable-shared=ssl &#8211;enable-module=ssl <br />&#8211;enable-module=rewrite</p>
<p>make &amp;&amp; make install</p>
<p>cd ../php/php-4.4.4</p>
<p>./configure &#8211;with-mysql=/usr/local/mysql &#8211;with-openssl=/usr/local/ssl <br />&#8211;with-apxs=/usr/local/apache/bin/apxs &#8211;enable-mbstring <br />&#8211;with-mm=/usr/local &#8211;with-zlib &#8211;with-gd</p>
<p>make &amp;&amp; make install</p>
<p>aggiunto a httpd.conf</p>
<p>&#8230;<br />AddModule mod_rewrite.c<br />&#8230;</p>
