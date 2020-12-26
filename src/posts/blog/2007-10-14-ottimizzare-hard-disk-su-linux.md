---
title: "Ottimizzare hard disk su linux"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-10-14"
permalink: "ottimizzare-hard-disk-su-linux/"
layout: "template_posts_md"
---
<p>Dalla documentazione di gentoo </p>
<table class="ntable" border="0" cellpadding="0" cellspacing="0"  width="100%">
<tbody>
<tr>
<td bgcolor="#7a5ada">
<p class="codetitle">Codice&nbsp;6: Test delle prestazioni del disco</p>
</td>
</tr>
<tr>
<td dir="ltr" align="left" bgcolor="#eeeeff">
<pre># <span class="code-input">hdparm -tT /dev/hda</span>       </pre>
</td>
</tr>
</tbody>
</table>
<p> Per l&#8217;ottimizzazione &egrave; possibile utilizzare uno dei seguenti esempi (o una configurazione personalizzata) che usano <span class="path" dir="ltr">/dev/hda</span> come disco (sostituirlo con il proprio): </p>
<p> <a name="doc_chap_pre7"></a> </p>
<table class="ntable" border="0" cellpadding="0" cellspacing="0"  width="100%">
<tbody>
<tr>
<td bgcolor="#7a5ada">
<p class="codetitle">Codice&nbsp;7: Ottimizzazione delle prestazioni del disco</p>
</td>
</tr>
<tr>
<td dir="ltr" align="left" bgcolor="#eeeeff">
<pre><span class="code-comment">Attivare il DMA:</span> # <span class="code-input">hdparm -d 1 /dev/hda</span>  <span class="code-comment">Attivare il DMA e altre opzioni sicure di ottimizzazione:</span> # <span class="code-input">hdparm -d 1 -A 1 -m 16 -u 1 -a 64 /dev/hda</span>       </pre>
</td>
</tr>
</tbody>
</table>
