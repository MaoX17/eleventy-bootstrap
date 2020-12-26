---
title: "Ftp &#8211; Automatizzare mget con un basch script"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-07-30"
permalink: "ftp-automatizzare-mget-con-un-basch-script/"
layout: "template_posts_md"
---
<p>Ecco cosa scrivere in uno script per eseguire comandi ftp tramite un <br />bash script</p>
<p>{ echo &quot;open indirizzo.ip.server.ftp<br />        user ftpuser ftppassword<br />        hash<br />        type ascii<br />        mget file<br />        close&quot;<br />} | ftp -i -n -v 2&gt;&amp;1</p>
