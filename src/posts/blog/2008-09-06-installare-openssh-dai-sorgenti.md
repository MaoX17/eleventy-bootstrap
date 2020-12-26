---
title: "Installare Openssh dai sorgenti"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2008-09-06"
permalink: "installare-openssh-dai-sorgenti"
layout: "template_posts_md"
---
<p><code><br />
./configure --sysconfdir=/etc/ssh --with-tcp-wrappers --with-md5-passwords<br />
make -j 7<br />
make install</p>
<p>controllare che il file /etc/ld.so.conf contenga le path delle librerie epoi lanciare<br />
ldconfig</p>
<p>Questo di seguito è il file /etc/rc.d/rc.sshd</p>
<p>####################/etc/rc.d/rc.sshd#####################################</p>
<p>root@proxy2:~# cat /etc/rc.d/rc.sshd<br />
#!/bin/sh<br />
# Start/stop/restart the secure shell server:</p>
<p>sshd_start() {<br />
  # Create host keys if needed.<br />
  if [ ! -r /etc/ssh/ssh_host_key ]; then<br />
    /usr/local/bin/ssh-keygen -t rsa1 -f /etc/ssh/ssh_host_key -N ''<br />
  fi<br />
  if [ ! -f /etc/ssh/ssh_host_dsa_key ]; then<br />
    /usr/local/bin/ssh-keygen -t dsa -f /etc/ssh/ssh_host_dsa_key -N ''<br />
  fi<br />
  if [ ! -f /etc/ssh/ssh_host_rsa_key ]; then<br />
    /usr/local/bin/ssh-keygen -t rsa -f /etc/ssh/ssh_host_rsa_key -N ''<br />
  fi<br />
  /usr/local/sbin/sshd -f /etc/ssh/sshd_config<br />
}</p>
<p>sshd_stop() {<br />
  killall sshd<br />
}</p>
<p>sshd_restart() {<br />
  if [ -r /var/run/sshd.pid ]; then<br />
    echo "WARNING: killing listener process only.  To kill every sshd process, you must"<br />
    echo "         use 'rc.sshd stop'.  'rc.sshd restart' kills only the parent sshd to"<br />
    echo "         allow an admin logged in through sshd to use 'rc.sshd restart' without"<br />
    echo "         being cut off.  If sshd has been upgraded, new connections will now"<br />
    echo "         use the new version, which should be a safe enough approach."<br />
    kill `cat /var/run/sshd.pid`<br />
  else<br />
    killall sshd<br />
  fi<br />
  sleep 1<br />
  sshd_start<br />
}</p>
<p>case "$1" in<br />
'start')<br />
  sshd_start<br />
  ;;<br />
'stop')<br />
  sshd_stop<br />
  ;;<br />
'restart')<br />
  sshd_restart<br />
  ;;<br />
*)<br />
  echo "usage $0 start|stop|restart"<br />
esac</p>
<p>################################# FINE ######################################################</p>
<p>decommentare le seguenti righe nel file<br />
/etc/ssh/sshd_config</p>
<p>HostKey /etc/ssh/ssh_host_rsa_key<br />
HostKey /etc/ssh/ssh_host_dsa_key</p>
<p>lanciare<br />
ln -s /etc/ssh/moduli /usr/local/etc/</p>
<p>Riavviare sshd<br />
</code></p>
