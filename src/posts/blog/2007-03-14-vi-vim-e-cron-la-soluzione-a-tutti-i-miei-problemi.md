---
title: "Vi / Vim e cron&#8230; la soluzione a tutti i miei problemi"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-03-14"
permalink: "vi-vim-e-cron-la-soluzione-a-tutti-i-miei-problemi/"
layout: "template_posts_md"
---
<p>Da sempre uso vim (e lo invoco con il comando vi).<br />Su slackware, dopo l&#39;insatllazione, la prima operazione che faccio &#232;:<br />rm /usr/bin/vi<br />ln -s /usr/bin/vim /usr/bin/vi<br />e subito dopo<br />cp /usr/share/vim/vim63/vimrc_example.vim /root/.vimrc</p>
<p>il problema sta proprio in questo&#8230;<br />in /usr/share/vim/vim63/vimrc_example.vim ci sono delle impostazioni<br />che creano problemi con il funzionamento di cron<br />infatti, il comando crontab -e (lancato da root) nn mi funzionava e <br />nonostante apportassi modifiche cron nn se ne accorgeva neanche.<br />Tutto ok, invece, se lanciavo lo stesso comando x altri utenti<br />crontab -e -u pippo<br />tutto OK!!</p>
<p>Per risolvere &#232; bastato aggiungere in /root/.vimrc la seguente riga</p>
<p>set backupcopy=yes</p>
<p>subito dopo la riga</p>
<p>set nocompatible</p>
<p>Adesso tutto funziona perfettamente.</p>
