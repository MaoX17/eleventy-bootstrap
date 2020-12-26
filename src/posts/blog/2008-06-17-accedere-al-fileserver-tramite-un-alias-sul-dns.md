---
title: "Accedere al fileserver tramite un alias sul dns"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2008-06-17"
permalink: "accedere-al-fileserver-tramite-un-alias-sul-dns/"
layout: "template_posts_md"
---
<h2>Accedere al fileserver tramite un alias sul dns</h2>
<p>A partire da win 2000 in poi la ricerca dei nomi in rete avviene a livello dns.<br />Se la query dns fallisce allora il pc prova a usare netbios (wins o broadcast)<br />Per abilitare l&#8217;uso delle condivisioni e quindi l&#8217;accesso a un file server tramite un alias sul dns occorre aggiungere sul server una chiave di registro fatta come segue:</p>
<p><strong>HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\LanmanServer\Parameters<br /></strong>    Nome valore: DisableStrictNameChecking<br />Dato REG_DWORD il tipo<br />Radice: Decimale<br />Valore: 1</p>
<p>fatto questo si è verificato un errore di accesso alla macchina server</p>
<p>ho trovato questo articolo:<br /><a href="http://support.microsoft.com/kb/870911/it">http://support.microsoft.com/kb/870911/it</a><br /><a href="http://technet2.microsoft.com/windowsserver/en/library/2bbd23c5-a01d-49bc-8b1c-6d309767c5e71033.mspx?mfr=true">http://technet2.microsoft.com/windowsserver/en/library/2bbd23c5-a01d-49bc-8b1c-6d309767c5e71033.mspx?mfr=true</a></p>
<p>e ho dato i seguenti comandi:<br />setspn -d HOST/FS1.prvprato1.local fs1<br />setspn -d HOST/FS1.prvprato1 fs1<br />setspn -d HOST/FS1 fs1</p>
<p>setspn -A host/FS1 fs2</p>
<p>e ora funziona</p>
