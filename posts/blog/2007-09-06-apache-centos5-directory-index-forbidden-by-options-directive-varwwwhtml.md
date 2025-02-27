---
title: "Apache CentOS5 - Directory index forbidden"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-09-06"
permalink: "apache-centos5-directory-index-forbidden-by-options-directive-varwwwhtml/"
layout: "template_posts_md"
icon:
  - linux
  - apache
  
---
<p>[Apache + CentOS5] &#8211;  Directory index forbidden by Options directive: /var/www/html/</p>
<p> I was having the same exact problem as you, this is what fixed &#8220;/&#8221; directory listings for me </p>
<p> In <b>/etc/httpd/conf.d</b> you will see a file entitled <b>welcome.conf</b></p>
<p> It looks like this:</p>
<p> <b>&lt;LocationMatch &#8220;^/+$&#8221;&gt;<br /> Options -Indexes<br /> ErrorDocument 403 /error/noindex.html<br /> &lt;/LocationMatch&gt;</b></p>
<p> Change it to this:</p>
<p> <b>&lt;LocationMatch &#8220;^/+$&#8221;&gt;<br /> Options Indexes<br /> ErrorDocument 403 /error/noindex.html<br /> &lt;/LocationMatch&gt;</b></p>
<p> All we actually changed was the hyphen in front of Indexes. This worked for me, hopefully it works for you.</p>
