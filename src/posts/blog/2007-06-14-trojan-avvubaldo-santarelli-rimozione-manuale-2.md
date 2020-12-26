---
title: "[TROJAN] &#8211; avv.Ubaldo Santarelli &#8211; rimozione manuale 2"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-06-14"
permalink: "trojan-avvubaldo-santarelli-rimozione-manuale-2/"
layout: "template_posts_md"
---
<p>[Fonte:</p>
<p><a href="http://www.pcalsicuro.com/main/2007/05/avv-ubaldo-santarelli-un-altro-avvocato-torna-a-colpire/">http://www.pcalsicuro.com/main/2007/05/avv-ubaldo-santarelli-un-altro-avvocato-torna-a-colpire/</a>]<br />Dopo alcuni mesi tornano le e-mail di diffida, delle cui precedenti <br />varianti avevamo gi&#224; parlato QUI e QUI.</p>
<p>Questa volta il testo dell&#39;e-mail &#232;:</p>
<p>     Egregio Signore/a<br />     Come da Raccomandata a.r.</p>
<p>     Oggetto: Messa in mora del debitore ex art. 1219 c.c.</p>
<p>     La mia assistita mi informa che a tutt&#39;oggi risulta un credito nei <br />Vostri confronti dicomplessivi €. 900,00, come risulta dalla <br />documentazione allegata.</p>
<p>     Per quanto precede Vi rendo noto che, in difetto di ricezione, <br />entro e non oltre dieci giorni dal ricevimento della presente, del <br />complessivo importo di €. 900,00 oltre gli interessi dal dovuto al saldo <br />di € 670,00, agir&#242; legalmente nei Vostri confronti, con sensibile <br />aggravio di spese.</p>
<p>     Rimango in attesa di un Vostro riscontro in merito – nel termine di <br />cui sopra – e distintamente Vi saluto.</p>
<p>     Avv. Ubaldo Santarelli</p>
<p>Il link fornito nell&#39;e-mail invita l&#39;utente ad aprire una pagina web in <br />cui si comunica la messa in mora e si mostra il documento in dimensioni <br />molto piccole. L&#39;utente, invitato a cliccarci sopra per leggere il <br />documento, scaricher&#224; un trojan.hijacker dalle dimensioni di 32.512 bytes.</p>
<p>Eseguito, il trojan aggiunge tra l&#39;elenco dei siti attendibili i <br />seguenti siti:</p>
<p>     coppieesibizioniste.biz<br />     gooogle.bz<br />     my-securedoc.com<br />     mysessoblog.com<br />     mycreditoweb.com<br />     phishnigfix.biz<br />     preferiti-windows.com<br />     ricercadoppia.com<br />     qoogler.com</p>
<p>La home page di Internet Explorer viene reindirizzata a gooogle.bz (di <br />cui avevamo gi&#224; parlato) e le zone di Internet Explorer vengono alterate.</p>
<p>Viene creato il file:</p>
<p>     C:\WINDOWS\system32\winsvc\svc\google.exe<br />     C:\WINDOWS\gratis.pbk (per le connessioni dialer)</p>
<p>e viene creata la seguente chiave di registro:</p>
<p>     HKEY_CLASSES_ROOT\CLSID\{16C7013F-912E-42ac-AA8E-A10A180DFF51}</p>
<p>Da questa chiave deriva poi anche l&#39;icona Connessione Veloce presente <br />all&#39;interno di Risorse del computer.</p>
<p>Vengono create due icone, chiamate Explorer.lnk e Internet.lnk, sul <br />desktop e nei programmi del menu avvio. Hanno la stessa icona di <br />Internet Explorer, per cui l&#39;utente crede di lanciare il browser della <br />Microsoft e si vede aprire un&#39;altra pagina.</p>
<p>Il trojan ha anche funzioni di dialer:</p>
<p>     8993993** Wind Telecomunicazioni S.p.A<br />     8990325** CSINFO S.p.A<br />     8994511** Wind Telecomunicazioni S.p.A</p>
<p>Prevx1 rimuove il trojan.</p>
<p>*** RIMOZIONE MANUALE ***</p>
<p>&#8211; Attraverso regedit (START &#8211; Esegui &#8211; &quot;regedit&quot;) eliminiamo &#8211; se <br />presenti &#8211; le seguenti chiavi di registro:</p>
<p>     HKEY_CLASSES_ROOT\CLSID\{16C7013F-912E-42ac-AA8E-A10A180DFF51}</p>
<p>&#8211; Riavviamo il computer. Al riavvio cancelliamo il file</p>
<p>     C:\WINDOWS\system32\winsvc\svc\google.exe</p>
<p>&#8211; Cancelliamo la falsa icona di Internet Explorer sul desktop. La <br />riconosciamo cliccando con il tasto destro sull&#39;icona e cliccando su <br />propriet&#224;. Se vedremo nel campo destinazione la voce analcord.com quella <br />&#232; l&#39;icona da eliminare. Lo stesso facciamo nel menu start &#8211; programmi, <br />cerchiamo il collegamento che richiama analcord.com.</p>
<p>&#8211; Apriamo risorse del computer, dove prima c&#39;era la connessione veloce <br />ora ci dovrebbe essere un riquadro bianco. Facciamo click con il tasto <br />destro e poi elimina.</p>
<p>&#8211; Dobbiamo modificare la home page di Internet Explorer, la quale punta <br />ancora a gooogle.bz. Per fare ci&#242;, senza scomodare il registro di <br />sistema, possiamo aprire Internet Explorer cliccando con il tasto destro <br />sull&#39;icona del programma e cliccando su propriet&#224; internet. Rimuoviamo <br />gooogle.bz quindi dalla home page e modifichiamo anche l&#39;elenco dei siti <br />attendibili, andando su Protezione &#8211; Siti attendibili &#8211; Siti.</p>
<p>Dovremmo aver rimosso manualmente l&#39;infezione.</p>
<p>&#8212;<br />principio di Napoleone:<br />non attribuire a malintenzione cio&#39; che puo&#39;<br />essere semplicemente spiegato come imbecillita&#39;<br />&#8212;<br />MaoX Blog:<br /><a href="http://maox.blogspot.com">http://maox.blogspot.com</a></p>
