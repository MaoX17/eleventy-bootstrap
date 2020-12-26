---
title: "Winbindd e Squid &#8211; Errore in avvio"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-03-14"
permalink: "winbindd-e-squid-errore-in-avvio/"
layout: "template_posts_md"
---
<p>Winbindd non parte e da il seguente errore:</p>
<p>  invalid permissions on socket directory /var/lib/samba/winbindd_privileged</p>
<p>Soluzione:</p>
<p>chown -R root:squid /var/lib/samba/winbindd_privileged<br />chmod -R u+rwx /var/lib/samba/winbindd_privileged<br />chmod -R g-w /var/lib/samba/winbindd_privileged<br />chmod -R g+rx /var/lib/samba/winbindd_privileged<br />chmod -R o-rwx /var/lib/samba/winbindd_privileged</p>
