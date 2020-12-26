---
title: "Configurazione automatica proxy"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2008-12-04"
permalink: "configurazione-automatica-proxy/"
layout: "template_posts_md"
---
<p>Ottimo sito di riferimento:</p>
<p><a href="http://findproxyforurl.com/wpad_tutorial.html">http://findproxyforurl.com/wpad_tutorial.html</a></p>
<p><a href="http://blog.freyguy.com/archives/2006/03/01/proxy-auto-detect-ie-and-firefox/">http://blog.freyguy.com/archives/2006/03/01/proxy-auto-detect-ie-and-firefox/</a></p>
<p><a href="http://techblog.mirabito.net.au/?p=21">http://techblog.mirabito.net.au/?p=21</a></p>
<p>Esempio</p>
<p>cat wpad.dat</p>
<p>function FindProxyForURL(url, host)<br />
{</p>
<p>if (isInNet(host, &#8220;172.21.0.0&#8221;, &#8220;255.255.0.0&#8221;)){<br />
return &#8220;DIRECT&#8221;;<br />
}</p>
<p>if (isInNet(host, &#8220;172.17.0.0&#8221;, &#8220;255.255.0.0&#8221;)){<br />
return &#8220;DIRECT&#8221;;<br />
}<br />
if (isInNet(host, &#8220;172.22.0.0&#8221;, &#8220;255.255.0.0&#8221;)){<br />
return &#8220;DIRECT&#8221;;<br />
}<br />
if (isInNet(host, &#8220;192.168.0.0&#8221;, &#8220;255.255.255.0&#8221;)){<br />
return &#8220;DIRECT&#8221;;<br />
}<br />
if (isInNet(host, &#8220;10.10.0.0&#8221;, &#8220;255.255.0.0&#8221;)){<br />
return &#8220;DIRECT&#8221;;<br />
}<br />
if (isInNet(host, &#8220;159.213.89.64&#8221;, &#8220;255.255.255.224&#8221;)){<br />
return &#8220;DIRECT&#8221;;<br />
}</p>
<p>if (dnsDomainIs(host, &#8220;.pippo.it&#8221;)) {<br />
return &#8220;DIRECT&#8221;;<br />
}<br />
if (dnsDomainIs(host, &#8220;.pluto.it&#8221;)) {<br />
return &#8220;DIRECT&#8221;;<br />
}</p>
<p>if (<br />
shExpMatch(host,&#8221;*.pippo.it&#8221;) ||<br />
shExpMatch(host,&#8221;www.topolino.it&#8221;)<br />
) {<br />
return &#8220;DIRECT&#8221;;<br />
}</p>
<p>return &#8220;PROXY squid.prvprato1:3128; PROXY squid01.prvprato1:3128; PROXY squid02.prvprato1:3128&#8243;;<br />
// DIRECT&#8221;;<br />
}</p>
