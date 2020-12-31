---
title: "Fedora JRE JDK e firefox plugin"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2009-10-25"
permalink: "fedora-java-runtime-engine-jre-e-java-development-kit-jdk-e-firefox-plugin-2/"
layout: "template_posts_md"
icon:
  - linux
---
<p>Installo i pacchetti necessari:<br />
yum install compat-libstdc++-296.i386 compat-libstdc++-33.i386<br />
Installiamo la jre e la jdk<br />
Andiamo su<br />
<a href="http://java.sun.com/javase/downloads/index.jsp">http://java.sun.com/javase/downloads/index.jsp</a><br />
e scarichiamo la jdk (ultima versione formato rpm)</p>
<p>chmod ugo+x jdk-6u1-linux-i586-rpm.bin<br />
./jdk-6u1-linux-i586-rpm.bin<br />
rispondere yes per accettare la licenza</p>
<p>[root@trinity2 ~]# ls /usr/bin/java -la<br />
lrwxrwxrwx 1 root root 22 12 giu 20:56 /usr/bin/java -&gt;<br />
/etc/alternatives/java<br />
[root@trinity2 ~]# ls -la /etc/alternatives/java<br />
lrwxrwxrwx 1 root root 35 12 giu 20:56 /etc/alternatives/java -&gt;<br />
/usr/lib/jvm/jre-1.5.0-gcj/bin/java<br />
[root@trinity2 ~]# rm /etc/alternatives/java<br />
rm: rimuovere link simbolico `/etc/alternatives/java&#8217;? y<br />
[root@trinity2 ~]# ln -s /usr/java/jdk1.6.0_01/bin/java<br />
/etc/alternatives/java</p>
<p>[root@trinity2 ~]# java -version<br />
java version &#8220;1.6.0_01&#8221;<br />
Java(TM) SE Runtime Environment (build 1.6.0_01-b06)<br />
Java HotSpot(TM) Client VM (build 1.6.0_01-b06, mixed mode, sharing)</p>
<p>adesso abilitiamo il plugin per firefox<br />
[root@trinity2 ~]# ln -s<br />
/usr/java/jdk1.6.0_01/jre/plugin/i386/ns7/libjavaplugin_oji.so<br />
/usr/lib/firefox-2.0.0.4/plugins/</p>
