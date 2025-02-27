---
title: "Problemi con i dischi in raid su windows &#8211; SOLUZIONE"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-10-29"
permalink: "problemi-con-i-dischi-in-raid-su-windows-soluzione/"
layout: "template_posts_md"
---
<p>Oggi ho fatto qualche test si un paio di server.<br />Avevo un server da formattare e ho deciso di fare qualche controllo sul<br />funzionamento del<br />mirror hardware e software su windows.</p>
<p>Parto dal raid hardware.<br />La macchina monta 2 dischi SATA con relativo controller (adaptec) che<br />supporta il mirror.<br />Imposto il mirror<br />Installo Windows<br />Levo uno dei 2 dischi, lo metto su un pc, converto il disco in<br />&quot;Dinamico&quot; come richiesto dal SO<br />Il pc con WIN non vede nemmeno la partizione.</p>
<p>Lo rimonto sul server, il controller definisce il raid DEGRADED ma il<br />sistema parte e funziona regolarmente.<br />Entro nel bios del controller, ACCETTO la modifica alla configurazione<br />che ha rilevato (altrimenti non mi fa fare niente)<br />Mi accorgo che il controller rileva che il secondo disco appartiene ad<br />un altro array (LEGACY).<br />Cancello questo array.<br />Il controller a questo punto riconosce subito il disco come quello<br />mancante nell&#39;array valido,<br />lo inserisce in automatico nel giusto array e inizia il rebuild&#8230;.</p>
<p>Ho poi formattato tutto, disattivato il raid hardware installato win su<br />uno dei 2 dischi e poi attivato il raid sofware (mirror).<br />&#8211; Aggiorno i dischi da base a dinamici (cliccare col dx sul riquadro sx)<br />&#8211; Cliccare con il dx sul disco di origine e scegli aggiungi mirror</p>
<p>Levo uno dei 2 dischi, lo metto su un pc, converto il disco in<br />&quot;Dinamico&quot; come richiesto dal SO<br />Faccio &quot;importa dischi esterni&quot;<br />mi importa il raid (con 2 dischi e 1 mancante)<br />clicco su quello mancante e scelgo ELIMINA raid<br />Sul disco inserito -&gt; &quot;riattiva volume specifico&quot;<br />Sul disco inserito -&gt; &quot;cambia lettera&quot; -&gt; Assegna nuova lettera</p>
<p>Il PC VEDE IL DISCO ED ACCEDE AI DATI!!!!</p>
<p>Rimetto il disco sul server,<br />importo i dischi esterni,<br />elimino il volume del secondo disco (quello tolto e rimesso)<br />Ricreo il raid.</p>
<p>Morale???<br />Forse &#232; meglio usare un raid software, almeno se mi si rompe la scheda<br />madre o il controller posso comunque recuperare i dati.</p>
