---
title: "Problema nagios-plugin su CentOS 4 invalid option tune=pentium4"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2008-08-07"
permalink: "problema-installazione-nagios-plugin-su-centos-4-invalid-option"
layout: "template_posts_md"
---
<p>Ho avuto difficoltà ad installare i plugin del nagios.<br />
Dopo il make<br />
ottenevo l&#8217;errore:<br />
invalid option `tune=pentium4&#8242;</p>
<p>Per risolvere ho editato il file plugins/Makefile<br />
ed ho eliminato l&#8217;opzione:<br />
-mtune=pentium4</p>
<p>rilanciato il make e&#8230;<br />
TUTTO OK!</p>
<p>Saluti</p>
