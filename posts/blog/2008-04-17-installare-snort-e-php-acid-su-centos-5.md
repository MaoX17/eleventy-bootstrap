---
title: "Installare snort e php-acid su centos 5"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2008-04-17"
permalink: "installare-snort-e-php-acid-su-centos-5/"
layout: "template_posts_md"
---
<p class="line862">You should make sure that you have <a href="http://wiki.centos.org/PackageManagement/Yum/Priorities">Priorities</a> installed.</p>
<p class="line867">
<p class="line874">yum-priorities is available in the CentOS 5 repositories:</p>
<p class="line867">
<pre>yum install yum-priorities</pre>
<p class="line874">Plugins are enabled in CentOS 5 by default.</p>
<p class="line862">Make sure that yum-priorities is enabled by editing the <strong>/etc/yum/pluginconf.d/priorities.conf</strong> file, and ensuring that it contains the following lines:</p>
<p class="line867">
<pre>[main]enabled=1</pre>
<p class="line862">Edit the <strong>.repo files in /etc/yum.repos.d/</strong> and set up priorities by adding the line:</p>
<p class="line867">
<pre>priority=N</pre>
<p class="line874">to a repository entry, where N is an integer number from 1 to 99.</p>
<p class="line874">The recommended settings are:</p>
<pre>[base], [addons], [updates], [extras] ... priority=1[centosplus],[contrib] ... priority=2Third Party Repos such as rpmforge ... priority=N  (where N is &gt; 10 and based on your preference)</pre>
<p class="line867">
<h3 id="head-b2e1db5c8b5c90cbd2e854ee070ba1e0da8824dd">1.2. RPMforge</h3>
<p class="line862">Download the rpmforge-release package. Choose one of the two links below, depending on your architecture. If you are unsure of which one to use you can check your architecture with the command <strong>uname -i</strong></p>
<ul>
<li>
<p class="line862">i386 <a class="http" href="http://apt.sw.be/redhat/el5/en/i386/RPMS.dag/rpmforge-release-0.3.6-1.el5.rf.i386.rpm">http://apt.sw.be/redhat/el5/en/i386/RPMS.dag/rpmforge-release-0.3.6-1.el5.rf.i386.rpm</a></p>
</li>
<li>
<p class="line862">x86_64 <a class="http" href="http://apt.sw.be/redhat/el5/en/x86_64/RPMS.dag/rpmforge-release-0.3.6-1.el5.rf.x86_64.rpm">http://apt.sw.be/redhat/el5/en/x86_64/RPMS.dag/rpmforge-release-0.3.6-1.el5.rf.x86_64.rpm</a></p>
</li>
</ul>
<p class="line862">(You can find a complete list of rpmforge-release package packages at <a class="http" href="http://dag.wieers.com/packages/rpmforge-release/">http://dag.wieers.com/packages/rpmforge-release/</a> but it is recommended that you use one of the two listed above).</p>
<p class="line874">Install DAG&#8217;s GPG key</p>
<pre>rpm --import http://dag.wieers.com/rpm/packages/RPM-GPG-KEY.dag.txt</pre>
<p class="line874">Verify the package you have downloaded</p>
<pre>rpm -K rpmforge-release-0.3.6-1.el5.rf.*.rpm</pre>
<p class="line867"><em>Security warning:</em> The rpmforge-release package imports GPG keys into your RPM database. As long as you have verified the package and trust Dag then it should be safe.</p>
<p class="line874">Install the package</p>
<pre>rpm -i rpmforge-release-0.3.6-1.el5.rf.*.rpm</pre>
<p class="line874">This will add a yum repository config file and import the appropriate GPG keys. At this point, you can set the priority of the RPMForge repository, and also of the CentOS repositories if you have not done so yet.</p>
<p class="line874">Fatto questo occorre aggiungere un altro repository:</p>
<p class="line874">[root@vmonitor-pub ~]# cat /etc/yum.repos.d/alcancelibre.org.repo<br />
[AL-Desktop]<br />
name=Enterprise Linux $releasever &#8211; $basearch &#8211; AL Desktop<br />
mirrorlist=http://www.alcancelibre.org/al/el5/al-desktop<br />
gpgkey=http://www.alcancelibre.org/al/AL-RPM-KEY<br />
priority=11</p>
<p>wget http://www.alcancelibre.org/al/webapps/AL-RPM-KEY<br />
rpm &#8211;import AL-RPM-KEY</p>
<p class="line874">
<p class="line874">
<p class="line874">Test with this command:</p>
<pre>yum check-update</pre>
<p class="line874">It should output these two lines:</p>
<pre>Loading "priorities" plugin...76 packages excluded due to repository priority protections</pre>
<p class="line874">The number above may differ, but there should be several packages shown as being excluded.</p>
<p class="line874">If so then it looks like things are working so try installing something like this</p>
<p class="line874">yum install mysql.i386 mysql-devel.i386 mysql-server.i386 mysql-test.i386 php-mysql.i386 php-pear-MDB2-Driver-mysql.noarch</p>
<p class="line874">
<pre>yum install snort-mysql+flexresp.i386 snort-rep.i386 snort-snmp+flexresp.i386 php-acid.noarch mysql-server

wget http://www.andrew.cmu.edu/user/rdanyliw/snort/acid-0.9.6b23.tar.gz
wget http://heanet.dl.sourceforge.net/sourceforge/adodb/adodb505.tgz

tar -zxvf acid-0.9.6b23.tar.gz
tar -zxvf adodb505.tgz

alias cp=cp
cp -r acid/ /var/www/
cp -r adodb5/ /var/www/acid/
alias cp="cp -i"

mysqladmin create snort
mysql snort &lt; /usr/share/doc/snort-2.6.1.1/create_mysql
mysql snort &lt; /var/www/acid/create_acid_tbls_mysql.sql

edit /var/www/acid/acid_conf.php

cp /etc/snort/snort.conf /etc/snort/snort.conf.ORIG
edit /etc/snort/snort.conf

download rules http://www.snort.org/vrt/

....</pre>
