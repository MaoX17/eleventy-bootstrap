---
title: "[Freebsd] - abilitare il su"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-03-24"
permalink: "freebsd-abilitare-il-su/"
layout: "template_posts_md"
icon:
  - linux
  - freebsd
  

---
<p>su - how to become a super user. avoid using root</p>
<p>If you&#39;re like most people new to Unix, you do everything as root.  You<br />shouldn&#39;t.   I know I don&#39;t follow my own advice, but I&#39;m trying to<br />improve.</p>
<p>Create yourself another account.  Use that instead of root.  Unless you<br />really need root.  You can always invoke su to become a super user.  <br />That way, you don&#39;t have to log out and back in every time you need the<br />power.</p>
<p>wheel</p>
<p>Only users in the wheel group can run su.  The group can be specified<br />when creating a user via adduser.  To add a user manuall, just put the<br />name of the user at the end of the line in /etc/group.  For example:</p>
<p>    wheel:*:0:root,marc</p>
<p>This adds the user marc to the wheel group.</p>
<p>su</p>
<p>To become super user, you do this:</p>
<p>    bash-2.02$ su<br />    Password:<br />    su-2.02#</p>
<p>At the password prompt, supply the root password.</p>
<p>Note that you might also want to use either the -l or the -m options. <br />Respectively, these options will simulate a full login or leave the<br />environment unmodified.  see man su<br />&lt;<a href="http://www.freebsd.org/cgi/man.cgi?query=su&amp;apropos=0&amp;sektion=0&amp;manpath=FreeBSD+2.2.8-RELEASE&amp;format=html">http://www.freebsd.org/cgi/man.cgi?query=su&amp;apropos=0&amp;sektion=0&amp;manpath=FreeBSD+2.2.8-RELEASE&amp;format=html</a>&gt;<br />for details.</p>
