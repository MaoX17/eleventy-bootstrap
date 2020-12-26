---
title: "Dovecot con supporto mysql su fedora &#8211; creare il proprio rpm"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-06-15"
permalink: "dovecot-con-supporto-mysql-su-fedora-creare-il-proprio-rpm/"
layout: "template_posts_md"
---
<pre><span style="font-family: times new roman;font-size:100%;" ><span style="font-size:130%;">DOVECOT con supporto mysql <br /><br /></span>La stessa cosa vista x postfix la si può fare x Dovecot: <br />wget <a class="moz-txt-link-freetext" href="http://download.fedora.redhat.com/pub/fedora/linux/core/development/source/SRPMS/dovecot-1.0-2.rc17.fc7.src.rpm">http://download.fedora.redhat.com/pub/fedora/linux/core/development/source/SRPMS/dovecot-1.0-2.rc17.fc7.src.rpm</a> <br />rpm -Uhv dovecot-1.0-2.rc17.fc7.src.rpm <br />wget <a class="moz-txt-link-freetext" href="http://www.dovecot.org/releases/dovecot-1.0.rc22.tar.gz">http://www.dovecot.org/releases/dovecot-1.0.rc22.tar.gz</a> <br />cp dovecot-1.0.rc22.tar.gz /usr/src/redhat/SOURCES/ <br />cd /usr/src/redhat/SPECS <br />vi dovecot.specs <br />cambio  </span><span style="font-size:100%;"><br /><span style="font-family: times new roman;">%define build_postgres 0 </span><br /><span style="font-family: times new roman;">Release .......   </span><br /><span style="font-family: times new roman;">yum install gettext-devel  </span><br /><span style="font-family: times new roman;">rpmbuild -ba dovecot.specs </span><br /><span style="font-family: times new roman;">rpmbuild -bb dovecot.specs  </span><br /><span style="font-family: times new roman;">cd /usr/src/redhat/RPMS/i386/  </span><br /><span style="font-family: times new roman;">rpm -Uhv ./dovecot-*   </span><br /><span style="font-family: times new roman;">Seguo  </span><a style="font-family: times new roman;" href="http://wiki.dovecot.org/DovecotLDAPostfixAdminMySQL" target="_blank">http://wiki.dovecot.org/DovecotLDAPostfixAdminMySQL</a><br /></span><br /></pre>
