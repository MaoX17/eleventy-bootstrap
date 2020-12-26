---
title: "[SAMBA] &#8211; Failed to modify password entry for user XXX"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-05-02"
permalink: "samba-failed-to-modify-password-entry-for-user-xxx/"
layout: "template_posts_md"
---
<p>I found that the error &quot;Failed to modify password entry for user&quot; <br />occured when I didn&#39;t have a matching system user of that same name.</p>
<p>Fix: Create a system user with something like:</p>
<p>adduser myuser</p>
<p>See if this solves the issue for you.</p>
