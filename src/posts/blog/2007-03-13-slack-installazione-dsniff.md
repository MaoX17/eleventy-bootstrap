---
title: "[Slack] &#8211; Installazione dsniff"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-03-13"
permalink: "slack-installazione-dsniff/"
layout: "template_posts_md"
---
<p><font style="font-weight: bold;" size="3">Problema:</font></p>
<p> /record.c: In function `record_save&#8217;:<br />   ./record.c:130: `R_NOOVERWRITE&#8217; undeclared (first use in this function)<br />   ./record.c:130: (Each undeclared identifier is reported only once<br />   ./record.c:130: for each function it appears in.)<br />   ./record.c:130: warning: passing arg 2 of pointer to function from<br />   incompatible pointer type<br />   ./record.c:130: too few arguments to function<br />   ./record.c: In function `record_dump&#8217;:<br />   ./record.c:143: structure has no member named `seq&#8217;<br />   ./record.c:143: `R_NEXT&#8217; undeclared (first use in this function)<br />   ./record.c: In function `record_init&#8217;:<br />   ./record.c:167: warning: assignment makes pointer from integer without a cast<br />   ./record.c: In function `record_close&#8217;:<br />   ./record.c:206: too few arguments to function<br />   make: *** [record.o] Error 1<br /> <!--QuoteEnd--><!--QuoteEEnd--><br /> <font style="font-weight: bold;" size="3">Soluzione:</font></p>
<p> This little fix will allow dsniff to install on any slackware box&#8230;</p>
<p> Change directory to /usr/include</p>
<p> Create a symbolic link with:<br /> ln -s db3/db_185.h db_185.h</p>
<p> Then do a ./configure, make, make install.</p>
