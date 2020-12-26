---
title: "Rinomina file &#8211; da spazio ad underscore"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2008-09-06"
permalink: "rinomina-file-da-spazio-ad-underscore/"
layout: "template_posts_md"
---
<p><code><br />
#!/bin/sh<br />
for i in *.rm<br />
do<br />
mv "$i" `echo $i | tr ' ' '_'`<br />
done<br />
</code></p>
