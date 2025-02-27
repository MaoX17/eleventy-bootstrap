---
title: "Postfix con mysql su fedora - creare il proprio rpm"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-06-15"
permalink: "postfix-con-supporto-mysql-su-fedora-creare-il-proprio-rpm/"
layout: "template_posts_md"
icon:
  - linux
  - postfix
  - mysql
---
<p><span style=";font-family:times new roman;font-size:100%;" class="Console"  ><span style=""><span style="font-size:130%;">Postfix con supporto mysql su Fedora</span></p>
<p></span></span><span style="font-size:100%;"><span style="font-family:times new roman;">Get the latest source rpm from</span><a style="font-family: times new roman;" href="http://download.fedora.redhat.com/pub/fedora/linux/core/development/source/SRPMS/" class="http">Fedora Core Development</a><span style="font-family:times new roman;">and install it<br />or here:<br />http://download.fedora.redhat.com/pub/fedora/linux/updates/7/SRPMS/</p>
<p></span><span style="font-family:times new roman;">(</span><strong style="font-family: times new roman;">Note: the src.rpm not the i386.rpm</strong><span style="font-family:times new roman;">) with: </span></span>  </p>
<pre  style="font-family:times new roman;"><span style="font-size:100%;">rpm -Uvh postfix-2.3.x-1.src.rpm   </span></pre>
<p class="line862"  style="font-family:times new roman;"><span style="font-size:100%;">If it still not the latest get the latest source from any of the<a href="http://www.postfix.org/download.html" class="http">Postfix Download Site</a>and put int into<br /><em></em><strong>rpm/SOURCES/</strong> directory. In postfix.spec modify the version and add MySQL support (%define MYSQL 1) and build it: </span></p>
<p> <span style="font-size:100%;"><span style="font-family:times new roman;"> rpmbuild -ba postfix.spec</span><br /><span style="font-family:times new roman;"> rpmbuild -bb postfix.spec </span></span></p>
<pre  style="font-family:times new roman;"><span style="font-size:100%;">Cioè:<br />scarico l'RPM con i sorgenti,<br />poi scarico l'ultima versione di postfix e lo installo<br />Tutto va a finire in /usr/src/redhat/SOURCES/<br />qui sostituisco<br />postfix-2.3.6.tar.gz<br />con<br />postfix-2.3.7.tar.gz<br />poi in<br />/usr/src/redhat/SPECS/<br />modifico<br />postfix.spec<br />%define MYSQL 1 Version: 2.3.7<br />e poi lancio<br />rpmbuild -ba postfix.spec<br />rpmbuild -bb postfix.spec<br />in<br />/usr/src/redhat/RPMS/i386<br />trovo i pacchetti RPM  e quindi<br />cd /usr/src/redhat/RPMS/i386<br />rpm -Uhv ./*<br /><br />FATTO!!!!<br /></span></pre>
<p>[da http://dailypackage.fedorabook.com/index.php?/archives/6-Wednesday-Why-The-Alternatives-System.html]</p>
<p>To select one of these two packages interactively, the <i>alternatives</i> command is used with the <span style="font-family:courier new,courier,monospace;">-config</span> option and the generic name of the feature that is being configured:</p>
<blockquote><p><span style="font-family:courier new,courier,monospace;"># <b>alternatives -config mta</b></span></p>
<p><span style="font-family:courier new,courier,monospace;">There are 2 programs which provide &#8216;mta&#8217;.</span></p>
<p><span style="font-family:courier new,courier,monospace;">  Selection    Command</span><br /><span style="font-family:courier new,courier,monospace;">&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;-</span><br /><span style="font-family:courier new,courier,monospace;">*+ 1           /usr/sbin/sendmail.sendmail</span><br /><span style="font-family:courier new,courier,monospace;">   2           /usr/sbin/sendmail.postfix</span></p>
<p><span style="font-family:courier new,courier,monospace;">Enter to keep the current selection[+], or type selection number:</span></p></blockquote>
<p>Note that the highest-priority alternative is marked with an astrisk (*), and the currently-selected option is marked with a plus-sign (+). Press enter to keep the current setting or enter a number to select another value.</p>
<p>To select an alternative directly from the command line, use the <span style="font-family:courier new,courier,monospace;">-set</span> option:</p>
<blockquote>
<p><span style="font-family:courier new,courier,monospace;"># <b>alternatives -set mta /usr/sbin/sendmail.postfix</b></span></p>
</blockquote>
<p>You can see the current value by using the <span style="font-family:courier new,courier,monospace;">-display</span> option:</p>
<blockquote>
<p><span style="font-family:courier new,courier,monospace;"># <b>alternatives -display mta</b><br />mta - status is manual.<br />link currently points to /usr/sbin/sendmail.sendmail<br />/usr/sbin/sendmail.sendmail - priority 90<br />slave mta-pam: /etc/pam.d/smtp.sendmail<br />slave mta-mailq: /usr/bin/mailq.sendmail<br />slave mta-newaliases: /usr/bin/newaliases.sendmail<br />slave mta-rmail: /usr/bin/rmail.sendmail<br />slave mta-sendmail: /usr/lib/sendmail.sendmail<br />slave mta-mailqman: /usr/share/man/man1/mailq.sendmail.1.gz<br />slave mta-newaliasesman: /usr/share/man/man1/newaliases.sendmail.1.gz<br />slave mta-aliasesman: /usr/share/man/man5/aliases.sendmail.5.gz<br />slave mta-sendmailman: /usr/share/man/man8/sendmail.sendmail.8.gz<br />/usr/sbin/sendmail.postfix - priority 30<br />slave mta-pam: /etc/pam.d/smtp.postfix<br />slave mta-mailq: /usr/bin/mailq.postfix<br />slave mta-newaliases: /usr/bin/newaliases.postfix<br />slave mta-rmail: /usr/bin/rmail.postfix<br />slave mta-sendmail: /usr/lib/sendmail.postfix<br />slave mta-mailqman: /usr/share/man/man1/mailq.postfix.1.gz<br />slave mta-newaliasesman: /usr/share/man/man1/newaliases.postfix.1.gz<br />slave mta-aliasesman: /usr/share/man/man5/aliases.postfix.5.gz<br />slave mta-sendmailman: /usr/share/man/man1/sendmail.postfix.1.gz<br />Current `best&#8217; version is /usr/sbin/sendmail.sendmail.</span></p>
</blockquote>
<p>Instead of selecting the alternative manually, you can choose to have the highest-priority option automatically selected. This will enable an automatic change as packages are added and removed:</p>
<blockquote>
<p><span style="font-family:courier new,courier,monospace;"># <b>alternatives -auto mta</b></span></p>
</blockquote>
<p>The most common use of the alternatives system is to select between implementations of Java, the print server, and the mail transfer agent. Fedora&#8217;s implementation of alternatives is a rewrite and extension of the alternatives system used in Debian.</p>
<p>(Why is the generic name linked to a name in <span style="font-family:courier new,courier,monospace;">/etc/alternatives</span> which is symlinked to the target, instead of the generic name being directly symlinked to the target? This was done so that the configuration information is contained in the <span style="font-family:courier new,courier,monospace;">/etc</span> directory, centralizing the location of configuration data).</p>
<pre  style="font-family:times new roman;"><br /><span style="font-size:100%;"><br /></span></pre>
