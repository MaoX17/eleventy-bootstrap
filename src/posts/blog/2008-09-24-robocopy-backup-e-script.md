---
title: "Robocopy &#8211; backup e script"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2008-09-24"
permalink: "robocopy-backup-e-script/"
layout: "template_posts_md"
---
<p>Scaricare robocopy da:</p>
<p><a title="robocopy" href="http://www.microsoft.com/downloads/details.aspx?familyid=9d467a69-57ff-4ae7-96ee-b18c4790cffd&amp;displaylang=en" target="_blank">http://www.microsoft.com/downloads/details.aspx?familyid=9d467a69-57ff-4ae7-96ee-b18c4790cffd&amp;displaylang=en</a></p>
<p>Il resourse kit è compatibile con Windows XP e Windows Server 2003 ma l&#8217;eseguibile (robocopy.exe) funziona anche su altri sistemi (windows 2000 per es.)</p>
<p>A chi interessa solo eseguibile e documentazione può trovalo nel seguente link:</p>
<p><a href="http://www.maurizio.proietti.name/wp-content/uploads/2008/09/robocopy.zip">robocopy</a></p>
<p>Con l&#8217;installazione standard gli eseguibili finiscono in</p>
<p>C:\Programmi\Windows Resource Kits\Tools\</p>
<p>Una guida dettagliata di tutti i parametri è la seguente:</p>
<p><a href="http://www.ss64.com/nt/robocopy.html" target="_blank">http://www.ss64.com/nt/robocopy.html</a></p>
<p>Robocopy è una utility eccezionale e può essere usata anche con una comoda GUI liberamente scaricabile <a href="http://download.microsoft.com/download/f/d/0/fd05def7-68a1-4f71-8546-25c359cc0842/UtilitySpotlight2006_11.exe" target="_blank"></a></p>
<p><a href="http://download.microsoft.com/download/f/d/0/fd05def7-68a1-4f71-8546-25c359cc0842/UtilitySpotlight2006_11.exe" target="_blank">qui</a></p>
<p>Nel seguente sito c&#8217;è un buon esempio di utilizzo automatico:</p>
<p><a href="http://korel.com.au/vbs/robocopy-log-scanner/" target="_blank">http://korel.com.au/vbs/robocopy-log-scanner/</a></p>
<p>Di seguito elenco alcuni usi &#8220;classici&#8221; di robocopy come strumento di backup:</p>
<blockquote><p>robocopy.exe &#8220;C:\Documents and Settings\Utente\&#8221; E:\Mirror\ /E /COPYALL /ZB LOG:e:\log.log /XO</p></blockquote>
