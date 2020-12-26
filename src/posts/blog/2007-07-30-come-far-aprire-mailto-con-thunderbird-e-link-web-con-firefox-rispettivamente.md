---
title: "Come far aprire mailto con thunderbird e link web con firefox rispettivamente"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-07-30"
permalink: "come-far-aprire-mailto-con-thunderbird-e-link-web-con-firefox-rispettivamente/"
layout: "template_posts_md"
---
<p>Mi &egrave; capitato che firefox non aprisse i link di tipo mailto con thunderbird<br /> e che thunderbird non aprisse i link web con firefox.<br /> Per risolvere seguire la guida allegata:<br /> <a href="http://gentoo-wiki.com/TIP_Integrate_Thunderbird_and_Firefox">http://gentoo-wiki.com/TIP_Integrate_Thunderbird_and_Firefox</a></p>
<p> <font size="-1"><b>File:</b> ~/.thunderbird/<i>&lt;random_string&gt;</i>/prefs.js</font> </p>
<div class="scroll">
<pre>user_pref("network.protocol-handler.app.ftp","/usr/bin/firefox"); user_pref("network.protocol-handler.app.http","/usr/bin/firefox"); user_pref("network.protocol-handler.app.https","/usr/bin/firefox"); </pre>
</p></div>
<p> <font size="-1"><b>File:</b> ~/.mozilla/firefox/<i>&lt;random_string&gt;</i>/prefs.js</font> </p>
<div class="scroll">
<p>If you are using the binary version of Thunderbird, add the following line: </p>
<pre>user_pref("network.protocol-handler.app.mailto","/usr/bin/thunderbird-bin");</pre>
<p>Otherwise, add this line: </p>
<pre>user_pref("network.protocol-handler.app.mailto","/usr/bin/thunderbird");</pre>
</p></div>
<p></p>
