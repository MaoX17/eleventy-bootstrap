---
title: "Apache + NTLM"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-07-24"
permalink: "apache-ntlm/"
layout: "template_posts_md"
---
<p><strong><span class="hilite"><a  href="http://mkeadle.org/index.php?p=31">http://mkeadle.org/index.php?p=31</a></p>
<p> </span></strong></p>
<p><strong><span class="hilite">Apache</span> and <span class="hilite">NTLM</span></strong></p>
<p>Here&#8217;s where the <span class="hilite">NTLM</span> authentication comes in. Head over to the <a  onclick="javascript:urchinTracker ('/outgoing/modntlm.sourceforge.net/');"  href="http://modntlm.sourceforge.net/">mod_ntlm homepage</a> and grab a copy. <a  onclick="javascript:urchinTracker ('/outgoing/www.gentoo.org/');"  href="http://www.gentoo.org/">Gentoo</a> doesn&#8217;t currently have an ebuild for mod_ntlm, so I had to install by hand, but there may be RPMs floating around somewhere if that&#8217;s your game. In order for mod_ntlm to work, you&#8217;ll need to have the server running <span class="hilite">Apache</span> joined to the domain. The process used in <a href="http://mkeadle.org/index.php?p=13">Squid + <span  class="hilite">NTLM</span></a> can be used for that.</p>
<p>The neat thing about mod_ntlm is how easy it is to setup once it&#8217;s installed. All mod_ntlm functionality is controlled through <a  onclick="javascript:urchinTracker ('/outgoing/httpd.apache.org/docs-2.0/howto/htaccess.html');"  href="http://httpd.apache.org/docs-2.0/howto/htaccess.html">.htaccess files</a> (link for Apache2). Here&#8217;s a copy of the <a  href="http://mkeadle.org/squid/DOThtaccess">mod_ntlm enabled .htaccess</a> I&#8217;m using. Once in place, users will be auto-authed by <span  class="hilite">NTLM</span> and you&#8217;ll be able to grab their username from the <a  onclick="javascript:urchinTracker ('/outgoing/members.tripod.com/DarrenCGI/env_var.html');"  href="http://members.tripod.com/DarrenCGI/env_var.html">REMOTE_USER</a> environment variable.</p>
<pre class="moz-signature" cols="72"> </pre>
