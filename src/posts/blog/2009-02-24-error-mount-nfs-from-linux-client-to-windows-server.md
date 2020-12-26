---
title: "Error &#8211; mount nfs from linux client to windows server"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2009-02-24"
permalink: "error-mount-nfs-from-linux-client-to-windows-server/"
layout: "template_posts_md"
---
<p>Ho avuto un problema con il mount di una share nfs windows server 2003 r2 da parte di un client linux.<br />
Ottenevo sempre un problema di timeout o un errore di i/o.<br />
Nei log c&#8217;era:<br />
portmap: server localhost not responding, timed out</p>
<p>Il problema si risolve avviando il servizio portmap:</p>
<p>su redhat/centos:<br />
<code><br />
/etc/init.d/portmap start<br />
</code></p>
<p>su slackware:<br />
<code><br />
chmod ugo+x /etc/rc.d/rc.rpc<br />
/etc/rc.d/rc.rpc start<br />
</code></p>
