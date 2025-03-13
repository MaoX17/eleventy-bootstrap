---
title: "Robocopy - backup e script"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2008-09-24"
permalink: "robocopy-backup-e-script/"
layout: "template_posts_md"
icon:
  - win
---

A chi interessa può scaricare robocopy dal seguente link:

[robocopy.zip](https://www.maurizio.proietti.name/wp-content/uploads/2008/09/robocopy.zip)

Una guida dettagliata di tutti i parametri è la seguente:
[http://www.ss64.com/nt/robocopy.html](http://www.ss64.com/nt/robocopy.html)

Robocopy è una utility eccezionale e può essere usata anche con una comoda GUI liberamente scaricabile

[http://download.microsoft.com/download/f/d/0/fd05def7-68a1-4f71-8546-25c359cc0842/UtilitySpotlight2006_11.exe](http://download.microsoft.com/download/f/d/0/fd05def7-68a1-4f71-8546-25c359cc0842/UtilitySpotlight2006_11.exe)

Nel seguente sito è presente un buon esempio di utilizzo automatico:

[http://korel.com.au/vbs/robocopy-log-scanner/](http://korel.com.au/vbs/robocopy-log-scanner/)

Di seguito elenco alcuni usi classici di robocopy come strumento di backup:

```
robocopy.exe “C:\Documents and Settings\Utente\” E:\Mirror\ /E /COPYALL /ZB LOG:e:\log.log /XO

```
