---
title: "Trasferire via ftp solo i file nuovi"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2015-09-14"
permalink: "trasferire-via-ftp-solo-i-file-nuovi/"
layout: "template_posts_md"
icon:
  - linux
  - ftp

---
<p><code> wget -m --ftp-user=xxxx --ftp-password=yyy ftp://ftp.dominio.it/www.dominio.it/</code></p>
<p><code></p>
<p>nohup comando<br />
Then press ctrl + z which will temporarily suspend the command<br />
bg<br />
This will start executing the command in backgroud<br />
To see what background process that is running you can type command:<br />
$ jobs</p>
<p>rsync -avzu -e "ssh -p 2222" root@xx.xx.xx.xx:/var/www/html/ORIG/*  /home/DEST/public_html/ > /home/DEST/public_html/rsync.log 2> /home/DEST/public_html/rsync.err<br />
</code></p>
