---
title: "Esempio veloce di reverse proxy con apache"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2013-12-05"
permalink: "esempio-veloce-di-reverse-proxy-con-apache/"
layout: "template_posts_md"
---
<p><code><br />
###########<br />
# EXAMPLE #<br />
###########<br />
#<br />
# To define the URL /my-gateway/ as a gateway to an appserver with address<br />
# http://some.app.intranet/ on a private network, after loading the<br />
# modules and including this configuration file:<br />
#<br />
# ProxyRequests Off  <-- this is an important security setting
# ProxyPass /my-gateway/ http://some.app.intranet/
# <Location /my-gateway/><br />
#	ProxyPassReverse /<br />
#	ProxyHTMLEnable On<br />
#	ProxyHTMLURLMap http://some.app.intranet/ /my-gateway/<br />
#	ProxyHTMLURLMap / /my-gateway/<br />
# </Location><br />
</code></p>
