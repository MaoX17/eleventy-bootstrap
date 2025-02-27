---
title: "Fedora e Acrobat Reader &#8211; expr: errore di sintassi"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-06-15"
permalink: "fedora-e-acrobat-reader-expr-errore-di-sintassi/"
layout: "template_posts_md"
---
<p>Ho installato Acrobat Reader AdobeReader_ita-7.0.8-1.i386.rpm preso dal<br />sito Adobe.<br />Quando lo lancio, ottengo questo errore:<br />||</p>
<p>$ acroread</p>
<p>expr: errore di sintassi<br />expr: errore di sintassi<br />expr: errore di sintassi<br />&#8230;</p>
<p>all&#39;infinito, finch&#233; non premo ctrl+c</p>
<p>SOLUZIONE:<br />A chi mai servisse, ho trovato la soluzione in rete in questo forum:<br />Link:<br />&lt;<a href="https://fcp.surfsite.org/modules/newbb/viewtopic.php?topic_id=26864&amp;forum=12&amp;post_id=114769">https://fcp.surfsite.org/modules/newbb/viewtopic.php?topic_id=26864&amp;forum=12&amp;post_id=114769</a>&gt;</p>
<p>In pratica, bisogna aprire lo script /usr/bin/acroread e fare le<br />seguenti sostituzioni:<br />||</p>
<p>418# echo $mfile| sed<br />&#39;s/libgtk-x11-\([0-9]*\).0.so.0.\([0-9]\)00.\([0-9]*\)\|\(.*\)/\1\2\3/g&#39;<br />419 echo $mfile| sed<br />&#39;s/libgtk-x11-\([0-9]*\).0.so.0.\([0-9]*\)00.\([0-9]*\)\|\(.*\)/\1\2\3/g&#39;</p>
<p>644# MIN_GTK_VERSION=&quot;240&quot;<br />645 MIN_GTK_VERSION=&quot;2040&quot;</p>
<p>I numeri all&#39;inizio sono i numeri di riga&#8230;<br />In realt&#224;, a me bastava solo la prima delle due.<br />C&#39;era un errore di sintassi nella riga di sed.</p>
