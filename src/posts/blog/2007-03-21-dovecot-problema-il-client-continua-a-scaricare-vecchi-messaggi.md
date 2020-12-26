---
title: "Dovecot &#8211; problema &#8211; il client continua a scaricare vecchi messaggi"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-03-21"
permalink: "dovecot-problema-il-client-continua-a-scaricare-vecchi-messaggi/"
layout: "template_posts_md"
---
<p>Allora, forse ho individuato il problema&#8230;</p>
<p>[maillog]<br />Mar 19 08:50:59 zion dovecot: pop3-login: Login: user=&lt;xxx@xxx.com&gt;&#8230;<br />Mar 19 08:50:59 zion dovecot: pop3(xxx@xxx.com): mbox sync: Expunged <br />message reappeared in mailbox<br />/var/spool/mail/vhosts/xxx/xxx (U ID 7953 &lt; 7976, seq=1, idx_msgs=0)<br />Mar 19 08:51:11 zion dovecot: pop3(xxx@xxx.com): mbox sync: UID inserted <br />in the middle of mailbox /var/spool/mail/vhosts/xxx.com/xxx (7976 &gt; <br />7953, seq=1, idx_msgs=8)<br />[/maillog]</p>
<p>*************************************<br /><a href="http://wiki.dovecot.org/MboxProblems">http://wiki.dovecot.org/MboxProblems</a></p>
<p>If you insert messages, or if you &quot;undelete&quot; messages (eg. replace mbox <br />from a backup), you may see errors in Dovecot&#39;s logs:</p>
<p>mbox sync: UID inserted in the middle of mailbox /home/tss/mail/inbox <br />(817 &gt; 787, seq=18, idx_msgs=32)</p>
<p>***************************************</p>
<p>probabilmente &#232; stato modificato qlcs sui file mbox del dovecot che ora <br />impazzisce.</p>
<p>Secondo me la soluzione migliore &#232;:</p>
<p>Far scaricare le caselle di posta da tutti i pc in cui sn configurate; <br />Cancellare i file mbox del dovecot, riavviare dovecot</p>
<p>Ciaoooooo</p>
