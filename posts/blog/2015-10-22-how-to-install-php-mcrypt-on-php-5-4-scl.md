---
title: "How to install php-mcrypt on php-5.4 SCL"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2015-10-22"
permalink: "how-to-install-php-mcrypt-on-php-5-4-scl/"
layout: "template_posts_md"
icon:
  - linux
  - php

---
<h2>How to install php-mcrypt for php-5.4 on CentOs 6.x SCL</h2>
<p></p>
<pre>
wget http://rpms.southbridge.ru/rhel6/php-5.4/x86_64/php-mcrypt-5.4.16-1.el6.x86_64.rpm

By EPEL:
yum inatall libmcrypt
yum install php-common

rpm2cpio php-mcrypt-5.4.16-1.el6.x86_64.rpm | cpio -idmv

cp etc/php.d/mcrypt.ini /opt/rh/php54/root/etc/php.d/
cp usr/lib64/php/modules/mcrypt.so /opt/rh/php54/root/usr/lib64/php/modules/

vim /opt/rh/php54/root/etc/php.ini
and add
extension=mcrypt.so
</pre>
