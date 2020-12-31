---
title: "Squid - NTLM_AUTH - Permessi in base al gruppo"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-03-14"
permalink: "squid-ntlm_auth-permessi-in-base-al-gruppo/"
layout: "template_posts_md"
---
<p>INTERESSANTE<br />Fonte:<br /><a href="http://developer.apple.com/documentation/Darwin/Reference/ManPages/man1/ntlm_auth.1.html">http://developer.apple.com/documentation/Darwin/Reference/ManPages/man1/ntlm_auth.1.html</a></p>
<p>To  setup ntlm_auth for use by squid 2.5 with <br />group limitation in addi-tion to the above  example,  <br />the  following  should  be  added  to  the <br />_squid.conf_ file.</p>
<p>auth_param ntlm program ntlm_auth -helper-protocol=squid-2.5-ntlmssp \<br />-require-membership-of=&#39;WORKGROUP\Domain Users&#39;</p>
<p>auth_param basic program ntlm_auth -helper-protocol=squid-2.5-basic \<br />-require-membership-of=&#39;WORKGROUP\Domain Users&#39;</p>
