---
title: "Limitare l&#8217;acceso con apache&#8230;"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-04-26"
permalink: "limitare-lacceso-con-apache/"
layout: "template_posts_md"
---
<p>AuthName &quot;Test&quot;<br />AuthType basic<br />AuthUserFile /var/www/allowedusers<br />require valid-user<br />Order allow,deny<br />Allow from my.ip.address.here<br />Satisfy any</p>
<p>E funzica correttamente, se mi collego da &#39;my.ip.address.here&#39; mi fa<br />passare senza chiedermi niente, altrimenti chiede la password.<br />Prova un po&#39; a vedere se ti funziona meglio con il &#39;Order&#39;&#8230;</p>
