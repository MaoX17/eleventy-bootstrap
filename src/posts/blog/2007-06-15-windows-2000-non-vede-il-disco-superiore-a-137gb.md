---
title: "Windows 2000 non vede il disco superiore a 137GB"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-06-15"
permalink: "windows-2000-non-vede-il-disco-superiore-a-137gb/"
layout: "template_posts_md"
---
<p><span style="font-family: times new roman;font-size:130%;" >Windows 2000 non vede il disco superiore a 137GB</span><span style="font-size:130%;"><br /></span><span style="font-family: times new roman;font-size:100%;" ><span style="font-size:130%;">A me riconosceva un disco da 250GB com uno da 128GB</span></p>
<p>SOLUZIONE:</p>
<p><a class="moz-txt-link-freetext" href="http://support.microsoft.com/default.aspx?scid=kb;en-us;q305098">http://support.microsoft.com/default.aspx?scid=kb;en-us;q305098</a></p>
<p>Occorre creare la seguente chiave di registro:<br />In<br /></span><span style="font-size:100%;"><strong style="font-family: times new roman;">HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Atapi\Parameters</strong></p>
<p><span style="font-family: times new roman;">Value name: </span><strong style="font-family: times new roman;">EnableBigLba</strong><br /><span style="font-family: times new roman;">Data type: REG_DWORD</span><br /><span style="font-family: times new roman;">Value data: 0x1</span></p>
<p><span style="font-family: times new roman;">riavviare e tutto funziona. </span></span></p>
<pre class="moz-signature" cols="50"><a class="moz-txt-link-freetext" href="http://maox.blogspot.com/"><br /></a></pre>
