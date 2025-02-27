---
title: "Aggiungere un record txt SPF a un dominio duckdns.org"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2020-12-19"
permalink: "aggiungere-un-record-txt-spf-a-un-dominio-duckdns-org/"
unsplash: duck
icon:
  - linux
  - duckdns
  
faicon: "fas fa-network-wired"
layout: "template_posts_md"
---

<figure class="wp-block-image size-large"><img src="https://www.duckdns.org/img/ducky_icon.png" alt=""/></figure>



<p>Occorre il seguente comando:</p>



<pre class="wp-block-code"><code>curl -G "https://www.duckdns.org/update" --data-urlencode "domains=MIO_DOMINIO.duckdns.org" --data-urlencode "token=TOKEN" --data-urlencode "txt=v=spf1 a:MIO_DOMINIO.duckdns.org ~all" --data-urlencode "verbose=true"</code></pre>



<p></p>
