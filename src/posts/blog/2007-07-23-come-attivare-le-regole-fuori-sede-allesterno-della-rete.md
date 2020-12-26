---
title: "Come attivare le regole fuori sede all&#8217;esterno della rete"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-07-23"
permalink: "come-attivare-le-regole-fuori-sede-allesterno-della-rete/"
layout: "template_posts_md"
---
<p><a  href="http://support.microsoft.com/default.aspx?scid=kb;en-us;262352&amp;Product=exch2k">http://support.microsoft.com/default.aspx?scid=kb;en-us;262352&amp;Product=exch2k</a> </p>
<h1 class="title"><small><small>How to enable Out-of-Office replies to the Internet in Exchange 2000/2003</small></small> <small><small>Server</small></small></h1>
<div class="appliesToLink"><a  href="http://support.microsoft.com/default.aspx?scid=kb;en-us;262352&amp;Product=exch2k#appliesto">View products that this article applies to.</a></div>
<p> <script>function loadTOCNode(){}</script> </p>
<div class="articleProperty">
<table>
<tbody>
<tr>
<td>Article ID</td>
<td>:</td>
<td>262352</td>
</tr>
<tr>
<td>Last Review</td>
<td>:</td>
<td>February 26, 2007</td>
</tr>
<tr>
<td>Revision</td>
<td>:</td>
<td>2.2</td>
</tr>
</tbody>
</table></div>
<div class="notice">This article was previously published under Q262352</div>
<h2 class="subTitle" id="tocHeadRef">SUMMARY</h2>
<p> <script type="text/javascript">loadTOCNode(1, 'summary');</script> </p>
<div class="sbody">By default in Microsoft Exchange Server 2000, Out-of-Office replies to the Internet is disabled. Many administrators do not allow Out-of-Office auto-replies to be sent outside of the Exchange organization to prevent unauthorized people from learning when users are out of the office. </div>
<h2 class="subTitle" id="tocHeadRef">MORE INFORMATION</h2>
<p> <script type="text/javascript">loadTOCNode(1, 'moreinformation');</script>To enable Out-of-Office replies to the Internet: </p>
<table class="list ol">
<tbody>
<tr>
<td class="number">1.</td>
<td class="text">Start Exchange System Manager.</td>
</tr>
<tr>
<td class="number">2.</td>
<td class="text">Double-click <b>Global Settings</b>, and then click <b>Internet Message Formats</b>. </td>
</tr>
<tr>
<td class="number">3.</td>
<td class="text">In the Details pane, right-click a domain name, and then click <b>Properties</b>. The default SMTP domain is &#8220;*&#8221;. </td>
</tr>
<tr>
<td class="number">4.</td>
<td class="text">In the <b>Properties</b> box, click the <b>Advanced</b> tab, and then click to select the <b>Out of office responses</b> check box. This enables Out-of-Office responses to the Internet for the selected domain.</td>
</tr>
</tbody>
</table>
<p> <tt></p>
<p> </tt> </p>
<pre class="moz-signature" cols="72">--  -- principio di Napoleone:  non attribuire a malintenzione cio' che puo'  essere semplicemente spiegato come imbecillita' -- MaoX Blog: <a class="moz-txt-link-freetext" href="http://maox.blogspot.com">http://maox.blogspot.com</a></pre>
