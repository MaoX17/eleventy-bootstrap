---
title: "Sendmail: Flush specific messages from mail queue"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2008-06-22"
permalink: "sendmail-flush-specific-messages-from-mail-queue.html"
layout: "template_posts_md"
---
<p>Thanks<br /><a href="http://actychen.blogspot.com/2006/11/sendmail-flush-specific-messages-from.html">http://actychen.blogspot.com/2006/11/sendmail-flush-specific-messages-from.html</a></p>
<p>You can flush the sendmail queue by this command.<br />If is useful for check the status of mail server.</p>
<p>1. Flush all</p>
<p># /usr/sbin/sendmail -q -v</p>
<p>2. Flush specific domain</p>
<p># /usr/sbin/sendmail -qR pippo.it -v</p>
