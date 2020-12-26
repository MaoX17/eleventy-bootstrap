---
title: "Linux Slow SSH Login Lento con SSH"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2008-08-29"
permalink: "linux-slow-ssh-login-login-lento-con-ssh"
layout: "template_posts_md"
---
<p>Thanks to <a href="http://www.hackosis.com/2007/12/15/linux-fix-slow-ssh-login/">http://www.hackosis.com/2007/12/15/linux-fix-slow-ssh-login/</a></p>
<h3>The Problem:</h3>
<p>By default, most SSH installations are set to do a reverse DNS lookup on any incoming connections. If the DNS server times out, or there is no record for your IP address, it can result in a <strong>very lengthy delay</strong> when logging into your Linux server via SSH.</p>
<h3>The Solution:</h3>
<p>There are about 3 different solutions to this problem.</p>
<ol>
<li>Disable reverse lookup on the SSH server you are connecting to.Append<br />
<tt id="code">UseDNS no <br />
UsePAM no </tt></p>
<p>to the <tt>/etc/ssh/sshd_config</tt> file on the server you are connecting to and restart the SSH daemon —</p>
<p><tt id="code">/etc/init.d/sshd restart</tt> or <tt id="code">/etc/init.d/ssh restart</tt>.</li>
<li>If you are connecting from a static IP, you may enter your host name in the <tt>/etc/hosts</tt> file.</li>
<li>Call your ISP and ask them to setup reverse hostnames for customer’s IP addresses.</li>
</ol>
<p>And enjoy your non-delay SSH login for more info check out the <a href="http://www.openbsd.org/cgi-bin/man.cgi?query=sshd_config">sshd_config man page</a>.</p>
