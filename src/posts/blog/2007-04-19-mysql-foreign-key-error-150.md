---
title: "Mysql Foreign key error 150"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-04-19"
permalink: "mysql-foreign-key-error-150/"
layout: "template_posts_md"
---
<p>Foregin keys have to be indexed in both tables, as explained in the<br />manual<br />http://dev.*mysql*.com/doc/*mysql*/en/innodb-*foreign*-*key*-constraints.html <br />&lt;<a href="http://dev.mysql.com/doc/mysql/en/innodb-foreign-key-constraints.html">http://dev.mysql.com/doc/mysql/en/innodb-foreign-key-constraints.html</a>&gt;</p>
<p>  You need an index on owner.owner before you can create the *foreign <br />**key*<br />constraint.</p>
