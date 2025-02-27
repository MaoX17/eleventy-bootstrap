---
title: "Postfix Comandi utili"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2009-01-23"
permalink: "postfix-comandi-utili.html"
layout: "template_posts_md"
---
<p>Postfix version:<br />
<code><br />
# postconf mail_version<br />
</code><br />
Postfix default settings:<br />
<code><br />
# postconf -d<br />
</code><br />
Postfix non-default settings:<br />
<code><br />
# postconf -n<br />
</code><br />
Delete one message with the named queue ID from default queues:<br />
incoming, active and deferred<br />
<code><br />
# postsuper -d queue-id<br />
</code><br />
Delete all messages from the queues:<br />
<code><br />
# postsuper -d ALL<br />
</code><br />
Flush the mail queue:<br />
<code><br />
# postfix flush<br />
</code></p>
