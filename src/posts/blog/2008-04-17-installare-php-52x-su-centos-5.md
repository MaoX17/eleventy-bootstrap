---
title: "Installare php-5.2.x su centos 5"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2008-04-17"
permalink: "installare-php-52x-su-centos-5/"
layout: "template_posts_md"
---
<p>Installing PHP 5.2.x on RedHat ES5, CentOS 5, etc</p>
<p>I’ve had to follow this tutorial a few times myself now so decided I should share it with the world.</p>
<p>A few of our applications which make use of SOAP get a Segmentation Fault if run with PHP 5.1.x or lower. We believe this is due to a bug in PHP but can’t be sure, regardless it works fine in PHP 5.2.4 and above.</p>
<p>Problem is, RedHat ES5 does not have support at this time for anything higher than 5.1.6, and we didn’t want to break RPM dependancys etc by installing from source.</p>
<p>To install PHP 5.2.5 (Highest in repository at this time) you can make use of a RPM repository maintained by Remi:</p>
<p>http://blog.famillecollet.com/post/2005/10/02/8-telechargement-installation-et-yum</p>
<p>He has a repository for each distro, but to save you translating for the ES5 one I’ll give you the commands here. Run the following to get up and running:<br />wget http://download.fedora.redhat.com/pub/epel/5/i386/epel-release-5-2.noarch.rpm<br />wget http://rpms.famillecollet.com/el5.i386/remi-release-5-4.el5.remi.noarch.rpm<br />rpm -Uvh remi-release-5*.rpm epel-release-5*.rpm</p>
<p>You now have the Remi repository on your system, however it is disabled by default. Obviously you don’t want all of your packages been effected by this repository, however to enable it for a specific package, run the following:<br />yum &#8211;enablerepo=remi update php</p>
<p>You should now have the latest PHP5 installed:<br /># php -v<br />PHP 5.2.5 (cli) (built: Nov 10 2007 10:52:30)<br />Copyright (c) 1997-2007 The PHP Group<br />Zend Engine v2.2.0, Copyright (c) 1998-2007 Zend Technologies</p>
