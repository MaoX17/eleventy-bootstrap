---
title: "Apache: No space left on device: Couldn’t create accept lock"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2015-04-01"
permalink: "apache-no-space-left-on-device-couldnt-create-accept-lock/"
layout: "template_posts_md"
---
<p>from: <a href="https://major.io/2007/08/24/apache-no-space-left-on-device-couldnt-create-accept-lock/">major.io</a></p>
<p>This error completely stumped me a couple of weeks ago. Apparently someone was adjusting the Apache configuration, then they checked their syntax and attempted to restart Apache. It went down without a problem, but it refused to start properly, and didn’t bind to any ports.</p>
<p>Within the Apache error logs, this message appeared over and over:</p>
<p>[emerg] (28)No space left on device: Couldn&#8217;t create accept lock<br />
Apache is basically saying “I want to start, but I need to write some things down before I can start, and I have nowhere to write them!” If this happens to you, check these items in order:</p>
<p>1. Check your disk space<br />
This comes first because it’s the easiest to check, and sometimes the quickest to fix. If you’re out of disk space, then you need to fix that problem. 🙂</p>
<p>2. Review filesystem quotas<br />
If your filesystem uses quotas, you might be reaching a quota limit rather than a disk space limit. Use repquota / to review your quotas on the root partition. If you’re at the limit, raise your quota or clear up some disk space. Apache logs are usually the culprit in these situations.</p>
<p>3. Clear out your active semaphores<br />
Semaphores? What the heck is a semaphore? Well, it’s actually an apparatus for conveying information by means of visual signals. But, when it comes to programming, semaphores are used for communicating between the active processes of a certain application. In the case of Apache, they’re used to communicate between the parent and child processes. If Apache can’t write these things down, then it can’t communicate properly with all of the processes it starts.</p>
<p>I’d assume if you’re reading this article, Apache has stopped running. Run this command as root:</p>
<pre>ipcs -s</pre>
<p>If you see a list of semaphores, Apache has not cleaned up after itself, and some semaphores are stuck. Clear them out with this command:</p>
<pre> for i in `ipcs -s | awk '/httpd/ {print $2}'`; do (ipcrm -s $i); done</pre>
<p>Now, in almost all cases, Apache should start properly. If it doesn’t, you may just be completely out of available semaphores. You may want to increase your available semaphores, and you’ll need to tickle your kernel to do so. Add this to /etc/sysctl.conf:</p>
<pre>
kernel.msgmni = 1024
kernel.sem = 250 256000 32 1024</pre>
<p>And then run </p>
<pre>sysctl -p </pre>
<p>to pick up the new changes.</p>
