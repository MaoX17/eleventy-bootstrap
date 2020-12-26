---
title: "[Postfix] &#8211; warning: mail_queue_enter: create file maildrop Permission denied"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-08-23"
permalink: "postfix-warning-mail_queue_enter-create-file-maildrop-permission-denied/"
layout: "template_posts_md"
---
<p>Problema riscontrato nell&#39;invio di posta tramite webamil:</p>
<p>[root@zion vhosts]# tail /var/log/maillog<br />Aug 23 15:48:15 zion postfix/postdrop[18637]: warning: mail_queue_enter: <br />create file maildrop/575635.18637: Permission denied<br />Aug 23 15:48:25 zion postfix/postdrop[18637]: warning: mail_queue_enter: <br />create file maildrop/576016.18637: Permission denied<br />Aug 23 15:48:32 zion postfix/postfix-script[18759]: warning: not owned <br />by group postdrop: /var/spool/postfix/public<br />Aug 23 15:48:32 zion postfix/postfix-script[18760]: warning: not owned <br />by group postdrop: /var/spool/postfix/maildrop<br />Aug 23 15:48:35 zion postfix/postdrop[18637]: warning: mail_queue_enter: <br />create file maildrop/576412.18637: Permission denied<br />Aug 23 15:48:45 zion postfix/postdrop[18637]: warning: mail_queue_enter: <br />create file maildrop/576891.18637: Permission denied<br />Aug 23 15:48:55 zion postfix/postdrop[18637]: warning: mail_queue_enter: <br />create file maildrop/577268.18637: Permission denied<br />Aug 23 15:49:05 zion postfix/postdrop[18637]: warning: mail_queue_enter: <br />create file maildrop/577665.18637: Permission denied<br />Aug 23 15:49:15 zion postfix/postdrop[18637]: warning: mail_queue_enter: <br />create file maildrop/578053.18637: Permission denied<br />Aug 23 15:49:25 zion postfix/postdrop[18637]: warning: mail_queue_enter: <br />create file maildrop/578454.18637: Permission denied</p>
<p>[root@zion vhosts]# postfix check<br />postfix/postfix-script: warning: not owned by group postdrop: <br />/var/spool/postfix/public<br />postfix/postfix-script: warning: not owned by group postdrop: <br />/var/spool/postfix/maildrop</p>
<p>SOLUZIONE:</p>
<p>/etc/init.d/Mailscanner stop<br />killall -9 postdrop</p>
<p>[root@zion vhosts]# chgrp -R postdrop /var/spool/postfix/public<br />[root@zion vhosts]# chgrp -R postdrop /var/spool/postfix/maildrop/<br />[root@zion vhosts]# postfix check<br />[root@zion vhosts]# /etc/init.d/Mailscanner start</p>
