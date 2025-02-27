---
title: "SquidGuard su fedora e CentOS - lex.yy.c"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2008-01-30"
permalink: "problema-e-soluzione-installazione-squidguard-su-fedora-e-centos-lexyyc/"
layout: "template_posts_md"
icon:
  - linux
  - sistemi
---
<p>Nel caso in cui, durante l&#8217;installazione di squidguard si riceve il<br />
seguente errore:</p>
<p>[root@proxy squidGuard-1.3]# make<br />
making all in squidGuard-1.3<br />
make[1]: Entering directory `/root/sw/squidGuard-1.3/src&#8217;<br />
making all in src<br />
gcc -I.. -I. -I. -I/usr/local/BerkeleyDB/include -DHAVE_CONFIG_H -g -O2<br />
-I/usr/local/BerkeleyDB/include -c main.c<br />
gcc -I.. -I. -I. -I/usr/local/BerkeleyDB/include -DHAVE_CONFIG_H -g -O2<br />
-I/usr/local/BerkeleyDB/include -c sgLog.c<br />
gcc -I.. -I. -I. -I/usr/local/BerkeleyDB/include -DHAVE_CONFIG_H -g -O2<br />
-I/usr/local/BerkeleyDB/include -c sgDb.c<br />
gcc -I.. -I. -I. -I/usr/local/BerkeleyDB/include -DHAVE_CONFIG_H -g -O2<br />
-I/usr/local/BerkeleyDB/include -c sgDiv.c<br />
gcc -I.. -I. -I. -I/usr/local/BerkeleyDB/include -DHAVE_CONFIG_H -g -O2<br />
-I/usr/local/BerkeleyDB/include -c sgFree.c<br />
yacc -d sg.y || (cp y.tab.c.bison y.tab.c &amp;&amp; cp y.tab.h.bison y.tab.h)<br />
/bin/sh: yacc: command not found<br />
gcc -I.. -I. -I. -I/usr/local/BerkeleyDB/include -DHAVE_CONFIG_H -g -O2<br />
-I/usr/local/BerkeleyDB/include -c y.tab.c<br />
: sg.l || cp lex.yy.c.flex lex.yy.c<br />
gcc -I.. -I. -I. -I/usr/local/BerkeleyDB/include -DHAVE_CONFIG_H -g -O2<br />
-I/usr/local/BerkeleyDB/include -c lex.yy.c<br />
gcc: lex.yy.c: No such file or directory<br />
gcc: no input files<br />
make[1]: *** [lex.yy.o] Error 1<br />
make[1]: Leaving directory `/root/sw/squidGuard-1.3/src&#8217;<br />
make: *** [all] Error 1</p>
<p>La soluzione è semplice:<br />
[root@proxy squidGuard-1.3]# <strong>yum install flex byacc</strong><br />
[root@proxy squidGuard-1.3]# make clean<br />
[root@proxy squidGuard-1.3]# ./configure<br />
[root@proxy squidGuard-1.3]# make<br />
[root@proxy squidGuard-1.3]# make install</p>
<p>Problema risolto!!!</p>
