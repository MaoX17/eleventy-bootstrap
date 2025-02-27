---
title: "nginx per wordpress con alti volumi di traffico su CentOS 6x"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2015-12-04"
permalink: "nginx-wordpress-alti-volumi-traffico-centos-6x/"
layout: "template_posts_md"
icon:
  - linux
  - nginx
  - wordpress

---
<h3>Risorse da consultare</h3>
<p>http://codex.wordpress.org/Nginx#URL_Rewrites_.2F_Permalinks<br />
http://www.krizna.com/centos/install-lemp-on-centos-6/<br />
http://nginx.org/en/linux_packages.html#stable</p>
<h3>Installazione nginx su CentOS 6*</h3>
<p>wget http://nginx.org/packages/centos/6/noarch/RPMS/nginx-release-centos-6-0.el6.ngx.noarch.rpm</p>
<p>rpm -Uhv nginx-release-centos-6-0.el6.ngx.noarch.rpm</p>
<p>vim /etc/yum.repos.d/nginx.repo</p>
<p>aggiungi</p>
<p>priority=10</p>
<p>yum install nginx</p>
<p>per la configurazione vedi la directory conf<br />
<a href="https://github.com/MaoX17/nginx-php-fpm-wordpress-high-performance">https://github.com/MaoX17/nginx-php-fpm-wordpress-high-performance</a></p>
<h3>Installazione php-fpm 5.4 su CentOS 6*</h3>
<p>yum install centos-release-SCL</p>
<p>yum update</p>
<p>yum install php54*</p>
<p>per la configurazione vedi la directory conf<br />
<a href="https://github.com/MaoX17/nginx-php-fpm-wordpress-high-performance">https://github.com/MaoX17/nginx-php-fpm-wordpress-high-performance</a></p>
<h3>Installazione redis su CentOS 6*</h3>
<p>yum install redis.x86_64</p>
<p>/opt/rh/php54/root/usr/bin/pecl install redis</p>
<p>You should add &#8220;extension=redis.so&#8221; to php.ini</p>
<p>dopo controlla phpinfo</p>
<p>/opt/rh/php54/root/usr/bin/pear channel-discover pear.nrk.io</p>
<p>/opt/rh/php54/root/usr/bin/pear remote-list -c nrk</p>
<p>/opt/rh/php54/root/usr/bin/pear install nrk/predis</p>
<p>ricorda di installare il plugin per redis su wordpress e il plugin WP-Super-Cache</p>
<p>per la configurazione vedi la directory conf<br />
<a href="https://github.com/MaoX17/nginx-php-fpm-wordpress-high-performance">https://github.com/MaoX17/nginx-php-fpm-wordpress-high-performance</a></p>
