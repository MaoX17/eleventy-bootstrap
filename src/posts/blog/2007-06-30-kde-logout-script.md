---
title: "KDE logout script"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-06-30"
permalink: "kde-logout-script/"
layout: "template_posts_md"
---
<p>Come fare in modo che venga lanciato un comando alla chiusura della sessione di KDE (logout) e quindi anche allo spegnimento (shutdown) e al restart (reboot):</p>
<p>La procedura èmolto semplice:</p>
<p>mkdir ~/.kde/shutdown/<br />creare lo script che chiameremo per es. logout.sh</p>
<p>renderlo eseguibile con</p>
<p>chmod ugo+x logout.sh</p>
<p>FATTO! adesso dovrebbe funzionare.</p>
