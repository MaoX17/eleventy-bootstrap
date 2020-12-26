---
title: "Soluzione problema aggiornamenti automatici windows update"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-05-25"
permalink: "soluzione-problema-aggiornamenti-automatici-windows-update/"
layout: "template_posts_md"
---
<p>Avevo sempre il seguente errore nell&#8217;event log:</p>
<p> Tipo evento: Errore<br /> Origine evento: ESENT<br /> Categoria evento: Registrazione/Ripristino <br /> ID evento: 412<br /> Data: 7/6/2000<br /> Ora: 14.56.53<br /> Utente: N/D<br /> Computer: ASKO-ONE<br /> Descrizione: servizi (PID) Impossibile leggere l&#8217;intestazione del registro. Errore -530.</p>
<p> <font face="Courier New" size="2">Event Type: Error<br /> Event Source: ESENT<br /> Event Category: Logging/Recovery <br /> Event ID: 413<br /> Date: 5/12/2005<br /> Time: 2:46:16 PM<br /> User: N/A<br /> Computer: [<em>computername</em>]<br /> Description:<br /> wuaueng.dll (1280) Unable to create the log. The drive may be read-only, out of disk space, misconfigured, or corrupted. Error -1032.</p>
<p> Per risolvere ho eseguito le seguenti operazioni:</p>
<p> ho stoppato il servizio &#8220;aggiornamenti automatici&#8221;<br /> ho cancellato tutto il contenuto di<br /> </font><strong>%windir%\SoftwareDistribution\DataStore\Logs\<br /> TRANNE edb.chk</p>
<p> </strong><font face="Courier New" size="2">ho riavviato il servizio e dalla pagina di windows update ho scelto &#8220;modifica impostazioni&#8221;<br /> e ho disattivato Microsoft Update.</p>
<p> A questo punto tutto ha funzionato!</p>
<p> Saluti<br /> </font></p>
