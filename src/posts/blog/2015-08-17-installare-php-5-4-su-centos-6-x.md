---
title: "Installare php 5.4 su CentOs 6.x"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2015-08-17"
permalink: "installare-php-5-4-su-centos-6-x/"
layout: "template_posts_md"
---
<p>Thanks to<br />
<a href="http://sharadchhetri.com/2015/04/04/install-php-5-4-on-centos-6-with-yum-command/">http://sharadchhetri.com/2015/04/04/install-php-5-4-on-centos-6-with-yum-command/</a></p>
<p>Step 1. Install SCL repo only by hitting below given command.</p>
<pre>yum install centos-release-SCL</pre>
<p>Step 2. Install php 5.4 version on system now.</p>
<pre>yum install php54</pre>
<p>To install specific package, package name should be known. Hence, to get the list of available package list from SCL repo run below given command.</p>
<pre>yum list|grep php</pre>
<p>Step 3. Activate the PHP 5.4 on system.<br />
NOTE: If you run below given command directly from terminal then on next login you will not find PHP 5.4 path.</p>
<pre>source /opt/rh/php54/enable</pre>
<p>Basically the above command, make PHP 5.4 executable path and environment available to current login user.</p>
<p>To make PHP 5.4 available to all user , we have to add line source /opt/rh/php54/enable inside file called /etc/profile. Now activate without logout by running command.</p>
<pre>source /etc/profile</pre>
<p>Or in case, if you only want php 5.4 available to specific user then just only edit .bashrc or .bash_profile file from User’s home directory. And add line source /opt/rh/php54/enable .</p>
<p>Step 4. Now check the php version</p>
<pre>php -v</pre>
<p>Below given is reference from our system.</p>
<p>[root@localhost ~]# php -v<br />
PHP 5.4.16 (cli) (built: Nov 19 2014 08:05:17)<br />
Copyright (c) 1997-2013 The PHP Group<br />
Zend Engine v2.4.0, Copyright (c) 1998-2013 Zend Technologies<br />
[root@localhost ~]#<br />
IMPORTANT NOTE : The PHP 5.4 package actually installed in /opt/rh directory.</p>
<h2>ATTENZIONE!!!! Abilitazione x virtualhost</h2>
<p>thanks to: <a href="http://www.ilsistemista.net/index.php/linux-a-unix/45-joomla-3-3-centos-6-and-php-version-putting-all-together.html?start=1" target="_blank">http://www.ilsistemista.net/index.php/linux-a-unix/45-joomla-3-3-centos-6-and-php-version-putting-all-together.html?start=1</a></p>
<p><strong>Step n.1: enable the SCL repo and install PHP 5.4</strong></p>
<pre>yum install -y centos-release-SCL.x86_64
yum install -y php54.x86_64 php54-php-mysqlnd
</pre>
<p><strong>Step n.2: create a PHP wrapper script in /var/www/cgi-bin/php54-wrapper</strong></p>
<pre>#!/bin/bash
source /opt/rh/php54/enable
exec php-cgi $1
</pre>
<p><strong>Then give it the appropriate permissions and restore the selinux context:</strong></p>
<pre>restorecon -RF /var/www/cgi-bin/php54-wrapper
chown apache:apache /var/www/cgi-bin/php54-wrapper
chmod ugo-rwx /var/www/cgi-bin/php54-wrapper
chmod ug+rx /var/www/cgi-bin/php54-wrapper
</pre>
<p><strong>Step n.3: configure the appropiate VirtualHost to use the new PHP version via the CGI interface</strong></p>
<pre>AddHandler php-cgi .php
Action php-cgi /cgi-bin/php54-wrapper
Options +ExecCGI
</pre>
<p>This configuration instruct Apache to use the new PHP 5.4 version for this and only this Virtualhost, leaving all others configuration intact: other Virtualhosts will continue to use PHP 5.3 version via mod_php.</p>
<p>&nbsp;</p>
<p><strong>Nota:</strong></p>
<p>se smette di funzionare occorre rinominare il file</p>
<p>/etc/httpd/conf.d/php54-php.conf</p>
<p>in</p>
<p>/etc/httpd/conf.d/php54-php.conf.vhosts</p>
