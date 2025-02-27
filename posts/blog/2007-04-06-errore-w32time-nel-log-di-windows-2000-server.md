---
title: "Errore W32TIME nel log di Windows 2000 server"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-04-06"
permalink: "errore-w32time-nel-log-di-windows-2000-server/"
layout: "template_posts_md"
---
<p>Errore W32TIME nel log di Windows 2000 server <br />&lt;<a href="http://www.andreabeggi.net/2004/02/08/errore-w32time-nel-log-di-windows-2000-server/">http://www.andreabeggi.net/2004/02/08/errore-w32time-nel-log-di-windows-2000-server/</a>&gt; </p>
<p>A T T E N Z I O N E ! Questo post ha piu&#39; di sei mesi. Le informazioni <br />contenute potrebbero non essere aggiornate.</p>
<p>Errore W32TIME nel log di Windows 2000 server, quando PDC di una foresta:</p>
<p>This Machine is a PDC of the domain at the root of the forest. Configure <br />to sync from External time source using the net command, &#39;net time <br />/setsntp:&#39;</p>
<p>Risoluzione:</p>
<p>1) fermare il servizio w32time (net stop w32time)</p>
<p>2) configurare con un time server esterno affidabile, es: Istituto <br />Elettrotecnico Nazionale G.Ferraris &#8211; Torino (net time /setsntp:time.ien.it)</p>
<p>3) testare il funzionamento con w32tm -once -test -v</p>
<p>4) sincronizzare (w32tm -s), si ottiene una risposta tipo: &quot;RPC to local <br />server returned 0&#215;6b5″; se si ottiene 0&#215;0 la sincronizzazione non &#232; <br />andata a buon fine, accertarsi di avere effettivamente fermato il <br />servizio w32time</p>
<p>5) fare ripartire il servizio w32time</p>
<p>Credit: Adrian Grigoroff (<a href="http://www.eventid.net">www.eventid.net</a> &lt;<a href="http://www.eventid.net">http://www.eventid.net</a>&gt;)<br />Credit: Andrea Beggi <br />(<a href="http://www.andreabeggi.net/2004/02/08/errore-w32time-nel-log-di-windows-2000-server/">http://www.andreabeggi.net/2004/02/08/errore-w32time-nel-log-di-windows-2000-server/</a>)</p>
