---
title: "Usiamo vim di default su fedora"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-06-15"
permalink: "usiamo-vim-di-default-su-fedora/"
layout: "template_posts_md"
---
<p><span style="font-family: times new roman;font-size:100%;" class="Console" ><span style=""><span style="font-size:130%;">Come fare in modo che vi corrisponda a vim<br /></span><br />Iniziamo:<br />yum -y update</p>
<p>VI=VIM</span></span><span style="font-size:100%;"><br /></span> </p>
<p style="font-family: times new roman;" class="MsoNormal"><span class="Console"  style="font-size:100%;"><span style="">vi /etc/profile.d/vim.sh<o:p></o:p></span></span></p>
<p style="font-family: times new roman;" class="MsoNormal"><span style="font-size:100%;"> It should look like this:</span></p>
<p style="font-family: times new roman;" class="MsoNormal"> <span class="Console"  style="font-size:100%;"><span style="">if [ -n &#8220;$BASH_VERSION&#8221; -o -n &#8220;$KSH_VERSION&#8221; -o -n &#8220;$ZSH_VERSION&#8221; ]; then<o:p></o:p></span></span></p>
<p style="font-family: times new roman;" class="MsoNormal"><span class="Console"  style="font-size:100%;"><span style=""><span style="">  </span>[ -x /usr/bin/id ] || return<o:p></o:p></span></span></p>
<p style="font-family: times new roman;" class="MsoNormal"><span class="Console"  style="font-size:100%;"><span style=""><span style="">  </span>[ `/usr/bin/id -u` -le 100 ] &amp;&#038; return<o:p></o:p></span></span></p>
<p style="font-family: times new roman;" class="MsoNormal"><span class="Console"  style="font-size:100%;"><span style=""><span style="">  </span># for bash and zsh, only if no alias is already set<o:p></o:p></span></span></p>
<p style="font-family: times new roman;" class="MsoNormal"><span class="Console"  style="font-size:100%;"><span style=""><span style="">  </span>alias vi &gt;/dev/null 2&gt;&#038;1 || alias vi=vim<o:p></o:p></span></span></p>
<p style="font-family: times new roman;" class="MsoNormal"><span class="Console"  style="font-size:100%;"><span style="">fi<o:p></o:p></span></span></p>
<p style="font-family: times new roman;" class="MsoNormal"> <span style="font-size:100%;"><br />Add a # sign in front of lines 2 and 3, so that it looks like this:</span></p>
<p style="font-family: times new roman;" class="MsoNormal"><span class="Console"  style="font-size:100%;"><span style="">if [ -n &#8220;$BASH_VERSION&#8221; -o -n &#8220;$KSH_VERSION&#8221; -o -n &#8220;$ZSH_VERSION&#8221; ]; then<o:p></o:p></span></span></p>
<p style="font-family: times new roman;" class="MsoNormal"><span class="Console"  style="font-size:100%;"><span style="">#<span style="">  </span>[ -x /usr/bin/id ] || return<o:p></o:p></span></span></p>
<p style="font-family: times new roman;" class="MsoNormal"><span class="Console"  style="font-size:100%;"><span style="">#<span style="">  </span>[ `/usr/bin/id -u` -le 100 ] &amp;&#038; return<o:p></o:p></span></span></p>
<p style="font-family: times new roman;" class="MsoNormal"><span class="Console"  style="font-size:100%;"><span style=""><span style="">  </span># for bash and zsh, only if no alias is already set<o:p></o:p></span></span></p>
<p style="font-family: times new roman;" class="MsoNormal"><span class="Console"  style="font-size:100%;"><span style=""><span style="">  </span>alias vi &gt;/dev/null 2&gt;&#038;1 || alias vi=vim<o:p></o:p></span></span></p>
<p> <span style="font-family: times new roman;font-size:100%;" class="Console" ><span style="">fi</span></span></p>
