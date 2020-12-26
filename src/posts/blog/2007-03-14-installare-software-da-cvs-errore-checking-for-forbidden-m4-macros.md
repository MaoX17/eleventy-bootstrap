---
title: "Installare software da CVS &#8211; Errore &#8211; Checking for forbidden M4 macros&#8230;"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-03-14"
permalink: "installare-software-da-cvs-errore-checking-for-forbidden-m4-macros/"
layout: "template_posts_md"
---
<p>dopo aver scaricato il sw occorre lanciare ./autogen.sh</p>
<p>pu&#242; capitare che il comando restituisca il seguente errore:</p>
<p>Checking for forbidden M4 macros&#8230;<br />***Error***: some autoconf macros required to build gtkhtml2<br />  were not found in your aclocal path, or some forbidden<br />  macros were found.  Perhaps you need to adjust your<br />  ACLOCAL_FLAGS?</p>
<p>in tal caso si pu&#242; risolvere con il comando:</p>
<p>ACLOCAL_FLAGS=&quot;-I /usr/local/share/aclocal&quot;<br />./autogen.sh</p>
<p>in seguito</p>
<p>make<br />[root]<br />make install</p>
