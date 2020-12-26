---
title: "[Slack] &#8211; Libnet per dsniff-2.3"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-03-13"
permalink: "slack-libnet-per-dsniff-23/"
layout: "template_posts_md"
---
<p><font style="font-weight: bold;" size="4"><font size="3">Problema:<br /> </font></font><br /> La versione di Libnet per dsniff 2.3 che sono riuscito a installare (e che permette il funzionamento di dsniff) è:<br /> Libnet-1.0.2a</p>
<p> Dopo aver dato ./configure<br /> make</p>
<p> ottengo il seguente errore:</p>
<p> In file included from src/libnet_resolve.c:36:<br /> include/libnet.h:87:8: missing terminating &#8221; character<br /> include/libnet.h:89:50: missing terminating &#8221; character<br /> make: *** [src/libnet_resolve.o] Error 1</p>
<p> Questo errore è dovuto dal fatto che c&#8217;è un errore nel file include/libnet.h</p>
<p> <font style="font-weight: bold;" size="3">Soluzione:</font></p>
<p> Editare il file include/libnet.h<br /> e sostituire le righe:</p>
<p> #error &#8220;byte order has not been specified, you&#8217;ll<br /> need to #define either LIBNET_LIL_ENDIAN or LIBNET_BIG_ENDIAN.  See the<br /> documentation regarding the libnet-config script.&#8221;</p>
<p> con</p>
<p> #error &#8220;byte order has not been specified, you&#8217;ll need to #define either LIBNET_LIL_ENDIAN or LIBNET_BIG_ENDIAN.  See the documentation regarding the libnet-config script.&#8221;</p>
<p> in pratica si deve mettere tutta la stringa su una stessa riga.</p>
<p> Adesso salvare, uscire e ricominciare con ./configure &amp;&amp; make &amp;&amp; make install</p>
