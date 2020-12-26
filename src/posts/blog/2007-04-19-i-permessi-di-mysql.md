---
title: "I permessi di mysql"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-04-19"
permalink: "i-permessi-di-mysql/"
layout: "template_posts_md"
---
<p><code><br />
CREATE USER 'root'@'172.21.3.35' IDENTIFIED BY '';<br />
GRANT ALL ON *.* TO 'root'@'172.21.3.35' WITH GRANT OPTION;<br />
FLUSH PRIVILEGES;<br />
</code><br />
<br />
<span style="font-weight: bold;">ATTENZIONE</span>:</p>
<p>In 4.1.x, you don&#8217;t need to use CREATE USER.  Simply using GRANT to<br />
grant privileges to a user implicitly &#8220;creates&#8221; the user.<br />
<br />
Quindi per la versione 4.1 e precedenti:<br />
<code><br />
GRANT ALL ON *.* TO 'root'@'172.21.3.35' WITH GRANT OPTION;<br />
SET PASSWORD FOR 'root'@'172.21.3.35' = PASSWORD('mypass');<br />
FLUSH PRIVILEGES;<br />
</code></p>
