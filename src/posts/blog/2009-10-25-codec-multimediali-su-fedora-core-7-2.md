---
title: "Codec Multimediali su Fedora Core 7"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2009-10-25"
permalink: "codec-multimediali-su-fedora-core-7-2/"
layout: "template_posts_md"
---
<p>Per installare i codec apriamo la shell, diventiamo root e diamo questi comandi singolarmente:</p>
<div>wget ftp://mplayerhq.hu/MPlayer/releases/codecs/all-20061022.tar.bz2<em>tar xjf all-20061022.tar.bz2<br />
mkdir /usr/lib/win32<br />
mv all-20061022/* /usr/lib/win32<br />
rm -fr all-20061022 </em></div>
