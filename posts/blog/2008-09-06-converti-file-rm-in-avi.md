---
title: "Converti file RM in AVI"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2008-09-06"
permalink: "converti-file-rm-in-avi.html"
layout: "template_posts_md"
---
<p><code><br />
#!/bin/sh<br />
for i in `ls *.rm`<br />
do<br />
rm frameno.avi<br />
mencoder $i -ovc frameno -oac mp3lame -lameopts vbr=3 -o frameno.avi<br />
mencoder $i -o $i.avi-oac copy -ovc lavc -lavcopts vcodec=mpeg4:vpass=1:vbitrate=1800<br />
mencoder $i -o $i.avi -oac copy -ovc lavc -lavcopts vcodec=mpeg4:vpass=2:vbitrate=1800<br />
done<br />
</code></p>
