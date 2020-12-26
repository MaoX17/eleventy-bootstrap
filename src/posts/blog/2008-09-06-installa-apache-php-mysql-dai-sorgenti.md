---
title: "Installa apache php mysql dai sorgenti"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2008-09-06"
permalink: "installa-apache-php-mysql-dai-sorgenti/"
layout: "template_posts_md"
---
<p><code><br />
tar -zxvf mysql-standard-5.0.16-linux-i686-glibc23.tar.gz<br />
shell> groupadd mysql<br />
     shell> useradd -g mysql mysql<br />
     shell> cd /usr/local<br />
     shell> gunzip < /PATH/TO/MYSQL-VERSION-OS.tar.gz | tar xvf -
     shell> ln -s FULL-PATH-TO-MYSQL-VERSION-OS mysql<br />
     shell> cd mysql<br />
     shell> scripts/mysql_install_db --user=mysql<br />
     shell> chown -R root  .<br />
     shell> chown -R mysql data<br />
     shell> chgrp -R mysql .<br />
     shell> bin/mysqld_safe --user=mysql &</p>
<p>mkdir /var/log/mysql<br />
root@lnx498:/usr/local/mysql# ln -s /usr/local/mysql/data/lnx498.err /var/log/mysql/</p>
<p>cp support-files/mysql.server /etc/rc.d/rc.mysqld</p>
<p>tar -zxvf apache_1.3.34.tar.gz</p>
<p>tar -jxvf php-4.4.1.tar.bz2</p>
<p>cd apache_1.3.34<br />
./configure --enable-module=so<br />
make<br />
make install<br />
cd ../php_XXX<br />
env CFLAGS="-DEAPI" ./configure --with-mysql=/usr/local/mysql --with-openssl=/usr/local/ssl --with-apxs=/usr/local/apache/bin/apxs --enable-mbstring --with-mm=/usr/local<br />
make<br />
make install</p>
<p>modifica /usr/local/lib/php.ini<br />
metti register_global = On</p>
<p>##############mod_php.conf#####################################################<br />
#<br />
# mod_php - PHP Hypertext Preprocessor module<br />
#</p>
<p># Load the PHP module:<br />
LoadModule php4_module libexec/libphp4.so</p>
<p># Tell Apache to feed all *.php files through the PHP module:<br />
AddType application/x-httpd-php .php</p>
<p># This will display PHP files in colored syntax form.  Use with caution.<br />
#AddType application/x-httpd-php-source .phps<br />
################################################################################</p>
<p>da aggiungere in fondo a httpd.conf</p>
<p>ricordati di agg /usr/local/apache/bin:/usr/local/mysql/bin alla PATH</p>
<p>tar -jxvf phpMyAdmin-2.7.0.tar.bz2<br />
mv phpMyAdmin-2.7.0 phpMyAdmin</p>
<p>root@lnx498:/Dati/Software/Linux/phpmyadmin# mv phpMyAdmin phpmyadmin<br />
root@lnx498:/Dati/Software/Linux/phpmyadmin# mv phpmyadmin/ /usr/local/apache/htdocs/<br />
</code></p>
