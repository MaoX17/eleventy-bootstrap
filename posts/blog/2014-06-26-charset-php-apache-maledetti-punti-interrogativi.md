---
title: "Charset php apache - maledetti punti interrogativi"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2014-06-26"
permalink: "charset-php-apache-maledetti-punti-interrogativi/"
layout: "template_posts_md"
icon:
  - linux
  - php
  - apache
---
<p>Alcune soluzioni per i charset corretti (per non visualizzare le lettere accentate come dei punti interrogativi)<br />
Prima Soluzione:<br />
<meta http-equiv="content-type" content="text/html; charset=utf-8" /></p>
<p>Seconda Soluzione:<br />
Aggiungere al VirtualHost:<br />
AddDefaultCharset utf-8</p>
<p>Terza soluzione (php):<br />
$ita=array(&#8220;ita&#8221;,&#8221;it&#8221;,&#8221;Italian&#8221;,&#8221;it_IT&#8221;,&#8221;it_IT.ISO8859-1&#8243;,&#8221;it_IT.ISO_8859-1&#8243;);<br />
setlocale(LC_ALL,$ita);</p>
<p>Fatto!!</p>
