---
title: "Installa postfix con mysql e ldap"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2008-11-04"
permalink: "installa-postfix-con-mysql-e-ldap/"
layout: "template_posts_md"
---
<p>OpenLdap:<br />
env CPPFLAGS=&#8221;-I/usr/local/include -I/usr/local/ssl/include -I/usr/local/ssl/include/openssl&#8221; LDFLAGS=&#8221;-L/usr/local/lib -L/usr/local/ssl/lib&#8221; ./configure &#8211;with-wrappers &#8211;disable-slapd<br />
make depend<br />
make<br />
make install</p>
<p>Postfix:<br />
make -f Makefile.init makefiles CCARGS=&#8221;-I/usr/local/include -DHAS_LDAP -DHAS_MYSQL -I/usr/include -I/usr/include/mysql&#8221; AUXLIBS=&#8221;-L/usr/local/lib -lldap -L/usr/lib -llber -L/usr/lib/mysql -lmysqlclient -lz -lm&#8221;<br />
make<br />
make install</p>
