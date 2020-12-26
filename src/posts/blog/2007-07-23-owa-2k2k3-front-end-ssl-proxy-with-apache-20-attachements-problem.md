---
title: "OWA 2K/2K3 Front-end SSL Proxy with Apache 2.0 &#8211; attachements problem"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-07-23"
permalink: "owa-2k2k3-front-end-ssl-proxy-with-apache-20-attachements-problem/"
layout: "template_posts_md"
---
<p>Un fantastico how to sull argomento:<br /><a href="http://3cx.org/item/46">http://3cx.org/item/46</a></p>
<p>Dopo aver installato apache2, php ecc&#8230;<br />per usare apache con il mod_proxy per mettere in sicurezza outlook web<br />access<br />mi sono accorto che cercando di allegare file (diversi dai txt) alle<br />mail che voglio spedire<br />con webmail non succedeva niente e i file non venivano allegati.<br />Per risolvere il problema ho dovuto aggiornare apache 2.0 alla versione<br />2.0.59.</p>
<p>Apache2:<br />./configure &#8211;enable-so &#8211;enable-cgi &#8211;enable-info &#8211;enable-rewrite<br />&#8211;enable-speling &#8211;enable-usertrack &#8211;enable-deflate  &#8211;enable-ssl<br />&#8211;enable-mime-magic &#8211;enable-ext-filter &#8211;enable-proxy<br />&#8211;enable-proxy-connect &#8211;enable-proxy-ftp &#8211;enable-proxy-http<br />&#8211;enable-modules=all<br />make<br />make install</p>
<p>php-4.4.7:<br />./configure &#8211;with-apxs2=/usr/local/apache2/bin/apxs &#8211;with-mysql=/usr<br />make<br />make install</p>
