---
title: "[TROJAN] - avv.Ubaldo Santarelli - rimozione manuale"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-06-14"
permalink: "trojan-avvubaldo-santarelli-rimozione-manuale/"
layout: "template_posts_md"
icon:
  - win
---
<p>Marco Giuliani, esperto di sicurezza che collabora con la societ&#224; di <br />sicurezza Prevx, ha pubblicato interessanti informazioni su un nuovo <br />messaggio e-mail che sta circolando nelle inbox degli italiani inviato <br />da un fantomatico avvocato con allegato un codice malware. Simili tipi <br />di attacchi di ingegneria sociale erano gi&#224; emersi negli ultimi mesi del <br />2006 (dettagli pubblicati su PC Al Sicuro). Si tratta di messaggi di <br />posta scritti in perfetto italiano che tentano di indurre i malcapitati <br />destinatari a seguire link che conducono a siti web malintenzionati.</p>
<p>Il testo della nuova e-mail nociva:</p>
<p>CITAZIONE<br />&quot;Egregio Signore/a Come da Raccomandata a.r. Oggetto: Messa in mora del <br />debitore ex art. 1219 c.c. La mia assistita mi informa che a tutt&#39;oggi <br />risulta un credito nei Vostri confronti di complessivi €. 900,00, come <br />risulta dalla documentazione allegata. Per quanto precede Vi rendo noto <br />che, in difetto di ricezione, entro e non oltre dieci giorni dal <br />ricevimento della presente, del complessivo importo di €. 900,00 oltre <br />gli interessi dal dovuto al saldo di € 670,00, agir&#242; legalmente nei <br />Vostri confronti, con sensibile aggravio di spese. Rimango in attesa di <br />un Vostro riscontro in merito – nel termine di cui sopra – e <br />distintamente Vi saluto. Avv. Ubaldo Santarelli&quot;.</p>
<p>Il link fornito nell&#39;e-mail invita l&#39;utente ad aprire una pagina web in <br />cui si comunica la messa in mora e viene mostrato il documento in <br />dimensioni molto ridotte. L&#39;utente, invitato a cliccare sul file per <br />leggere il documento, scaricher&#224; un trojan.hijacker dalle dimensioni di <br />32.512 bytes.</p>
<p>Il Trojan aggiunge una serie di domini nocivi nell&#39;elenco dei siti <br />attendibili di internet. La home page di Internet Explorer viene <br />reindirizzata a gooogle.bz (analisi) e le zone di Internet Explorer <br />vengono alterate. Vengono creati I file: <br />C:\WINDOWS\system32\winsvc\svc\google.exe e C:\WINDOWS\gratis.pbk (per <br />le connessioni dialer) e viene creata una chiave di registro che crea <br />l&#39;icona Connessione Veloce presente all&#39;interno di Risorse del computer.</p>
<p>Il codice nocivo crea inoltre due collegamenti, chiamate Explorer.lnk e <br />Internet.lnk, sul desktop e nei programmi del menu avvio. Hanno la <br />stessa icona di Internet Explorer, per cui l&#39;utente crede di lanciare il <br />browser di Microsoft. Il trojan ha anche funzioni di dialer: 8993993** <br />Wind Telecomunicazioni S.p.A, 8990325** CSINFO S.p.A, 8994511** Wind <br />Telecomunicazioni S.p.A</p>
<p>Giuliani ha pubblicato anche una procedura per la rimozione manuale <br />dell&#39;infezione:</p>
<p>- Attraverso regedit (START - Esegui - &quot;regedit&quot;) eliminiamo - se <br />presenti - le seguenti chiavi di registro:<br />HKEY_CLASSES_ROOT\CLSID\{16C7013F-912E-42ac-AA8E-A10A180DFF51}</p>
<p>- Riavviamo il computer. Al riavvio cancelliamo il file <br />C:\WINDOWS\system32\winsvc\svc\google.exe</p>
<p>- Cancelliamo la falsa icona di Internet Explorer sul desktop. La <br />riconosciamo cliccando con il tasto destro sull&#39;icona e cliccando su <br />propriet&#224;. Se vedremo nel campo destinazione la voce analcord.com quella <br />&#232; l&#39;icona da eliminare. Lo stesso facciamo nel menu start - programmi, <br />cerchiamo il collegamento che richiama analcord.com.</p>
<p>- Apriamo risorse del computer, dove prima c&#39;era la connessione veloce <br />ora ci dovrebbe essere un riquadro bianco. Facciamo click con il tasto <br />destro e poi elimina.</p>
<p>- Dobbiamo modificare la home page di Internet Explorer, la quale punta <br />ancora a gooogle.bz. Per fare ci&#242;, senza scomodare il registro di <br />sistema, possiamo aprire Internet Explorer cliccando con il tasto destro <br />sull&#39;icona del programma e cliccando su propriet&#224; internet. Rimuoviamo <br />gooogle.bz quindi dalla home page e modifichiamo anche l&#39;elenco dei siti <br />attendibili, Protezione - Siti attendibili - Siti.</p>
<p><p>&#8212;<br />principio di Napoleone:<br />non attribuire a malintenzione cio&#39; che puo&#39;<br />essere semplicemente spiegato come imbecillita&#39;<br />&#8212;<br />MaoX Blog:<br /><a href="http://maox.blogspot.com">http://maox.blogspot.com</a></p>
