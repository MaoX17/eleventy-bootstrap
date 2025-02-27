---
title: "Installazione da sorgenti - problema con le librerie"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-03-14"
permalink: "installazione-da-sorgenti-problema-con-le-librerie/"
layout: "template_posts_md"
---
<p><font size="4">Problema:</font>durante l&#8217;installazione di un programma  dai sorgenti <br /> (con il classico ./configure &amp;&amp; make &amp;&amp; make install) <br /> l&#8217;installazione nn va a buon fine perchè le <span  style="font-weight: bold;">librerie e i file *.la </span><br  style="font-weight: bold;"> <span style="font-weight: bold;">(per es. /usr/lib/libgmodule-2.0.la) </span><br  style="font-weight: bold;"> <span style="font-weight: bold;">vengono cercati in /usr/lib invece che in /usr/local/lib</span></p>
<p> A me è successo dopo aver installato dai sorgenti <br /> gtk2, gtkmm, ecc</p>
<p> In questo caso ci sono 3 modi che possono risolvere il <br /> problema:</p>
<p> 1) export LDFLAGS=-Wl,-R/usr/local/lib &amp;&amp; ./configure</p>
<p> 2) Creare link simbolici:<br /> cd /usr/local/lib<br /> for i in `ls *.la`<br /> do<br /> ln -s $i /usr/lib/$i<br /> done</p>
<p> 3) Controllare e modificare il parametro &#8216;dependency_libs&#8217; nei file *.la <br /> (che sono editabili con un qualsiasi editor di testi)<br /> in modo che comprenda anche la path /usr/local/lib</p>
