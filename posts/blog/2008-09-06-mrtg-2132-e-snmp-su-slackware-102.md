---
title: "MRTG-2.13.2 e SNMP Su Slackware 10.2"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2008-09-06"
permalink: "mrtg-2132-e-snmp-su-slackware-102/"
layout: "template_posts_md"
---
<p>Scarico MRTG2 da www.mrgt.org</p>
<p>Scarico e installo le GD Library da:<br />
http://www.boutell.com/gd/http/gd-2.0.33.tar.gz<br />
tar -zxvf gd&#8230;<br />
./configure<br />
make<br />
make install<br />
ldconfig</p>
<p>Scarico e installo le Net-snmp da:<br />
http://net-snmp.sourceforge.net<br />
tar -zxvf gd&#8230;<br />
./configure<br />
make<br />
make install<br />
ldconfig</p>
<p>cd mrtg-2&#8230;<br />
./configure &#8211;prefix=/usr/local/mrtg-2<br />
make<br />
make install</p>
<p>./cfgmaker &#8211;global &#8216;WorkDir: /var/www/htdocs/mrtg&#8217; &#8211;global &#8216;Options[_]: bits,growright&#8217; &#8211;output/etc/mrtg/lanservice.mrtg.cfg -ifref=ip proietti@172.21.1.61</p>
<p>Comunity proietti</p>
