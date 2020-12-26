---
title: "Windows 2000 non riconosce il disco superiore a 137GB"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-03-13"
permalink: "windows-2000-non-riconosce-il-disco-superiore-a-137gb/"
layout: "template_posts_md"
---
<p><font size="5"><font size="4">A me riconosceva un disco da 250GB com uno da 128GB</p>
<p> <font size="3">SOLUZIONE:</p>
<p> <a class="moz-txt-link-freetext" href="http://support.microsoft.com/default.aspx?scid=kb;en-us;q305098">http://support.microsoft.com/default.aspx?scid=kb;en-us;q305098</a></p>
<p> Occorre creare la seguente chiave di registro:<br /> In<br /> </font></font></font><strong>HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Atapi\Parameters</strong></p>
<p> Value name: <strong>EnableBigLba</strong><br /> Data type: REG_DWORD<br /> Value data: 0x1</p>
<p> riavviare e tutto funziona.</p>
