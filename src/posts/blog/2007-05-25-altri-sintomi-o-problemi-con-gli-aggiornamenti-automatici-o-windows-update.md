---
title: "Altri sintomi o problemi con gli aggiornamenti automatici o windows update"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-05-25"
permalink: "altri-sintomi-o-problemi-con-gli-aggiornamenti-automatici-o-windows-update/"
layout: "template_posts_md"
---
<p>Dal sito microsoft:</p>
<p> <a href="http://support.microsoft.com/kb/278316">http://support.microsoft.com/kb/278316</a><br /> <a href="http://support.microsoft.com/kb/296220">http://support.microsoft.com/kb/296220</a></p>
<h1 class="title">Gli ID evento ESENT 1000, 1202, 412 e 454 vengono registrati ripetutamente nel registro applicazione</h1>
<div class="appliesToLink"><a  href="http://support.microsoft.com/kb/278316#appliesto">Visualizza i prodotti ai quali l&#8217;articolo e&#8217; applicato.</a></div>
<p> <script>function loadTOCNode(){}</script> </p>
<div class="articleProperty">
<table>
<tbody>
<tr>
<td>Identificativo articolo</td>
<td>:</td>
<td>278316</td>
</tr>
<tr>
<td>Ultima modifica</td>
<td>:</td>
<td>martedì 18 ottobre 2005</td>
</tr>
<tr>
<td>Revisione</td>
<td>:</td>
<td>6.0</td>
</tr>
</tbody>
</table></div>
<div class="section">
<h2 class="subTitle" id="tocHeadRef">Sintomi </h2>
<p> <script type="text/javascript">loadTOCNode(1, 'symptoms');</script> </p>
<div class="sbody"> Ogni cinque minuti nel registro applicazione vengono registrati i seguenti messaggi relativi a ID eventi:</p>
<p> <b>Messaggio 1</b> </p>
<p class="indent"> Tipo evento: Errore<br /> Origine evento: Userenv<br /> Categoria evento: Nessuna<br /> ID evento: 1000<br /> Data: 7/6/2000<br /> Ora: 14.56.53<br /> Utente: WINDOWS NT AUTHORITY\SYSTEM<br /> Computer: ASKO-ONE<br /> Descrizione: all&#8217;estensione Protezione sul lato client Criteri di gruppo sono stati inviati dei flag (17). Essa ha restituito un codice di stato di errore (1208). </p>
<p> <b>Messaggio 2</b> </p>
<p class="indent"> Tipo evento: Avviso<br /> Origine evento: SceCli<br /> Categoria evento: Nessuna<br /> ID evento: 1202<br /> Data: 7/6/2000<br /> Ora: 14.56.53<br /> Utente: N/D<br /> Computer: ASKO-ONE<br /> Descrizione: criteri di protezione propagati con avviso. 0x4b8: si è verificato un errore esteso. Per ulteriori informazioni, vedere la sezione della Guida in linea relativa alla risoluzione dei problemi di protezione. </p>
<p> <b>Messaggio 3</b> </p>
<p class="indent"> Tipo evento: Errore<br /> Origine evento: ESENT<br /> Categoria evento: Registrazione/Ripristino <br /> ID evento: 454<br /> Data: 7/6/2000<br /> Ora: 14.56.53<br /> Utente: N/D<br /> Computer: ASKO-ONE<br /> Descrizione: servizi (PID) Impossibile recuperare o ripristinare il database. Errore imprevisto -530. </p>
<p> <b>Messaggio 4</b> </p>
<p class="indent"> Tipo evento: Errore<br /> Origine evento: ESENT<br /> Categoria evento: Registrazione/Ripristino <br /> ID evento: 412<br /> Data: 7/6/2000<br /> Ora: 14.56.53<br /> Utente: N/D<br /> Computer: ASKO-ONE<br /> Descrizione: servizi (PID) Impossibile leggere l&#8217;intestazione del registro. Errore -530. </p>
<p class="topOfPage"><a  href="http://support.microsoft.com/kb/278316#top"><img  src="cid:part1.05030509.05050302@katamail.com" alt="">Torna all&#8217;inizio</a></p>
</p></div>
<h2 class="subTitle" id="tocHeadRef">Cause </h2>
<p> <script type="text/javascript">loadTOCNode(1, 'cause');</script> </p>
<div class="sbody"> Questo problema si verifica quando il file di database dei Criteri di gruppo locale è danneggiato. </p>
<p class="topOfPage"><a  href="http://support.microsoft.com/kb/278316#top"><img  src="cid:part1.05030509.05050302@katamail.com" alt="">Torna all&#8217;inizio</a></p>
</p></div>
<h2 class="subTitle" id="tocHeadRef">Risoluzione </h2>
<p> <script type="text/javascript">loadTOCNode(1, 'resolution');</script> </p>
<div class="sbody"> Per risolvere questo problema, utilizzare la procedura descritta in questa sezione per ricreare il file dei Criteri di gruppo locale. </p>
<p> <b>Importante</b> L&#8217;implementazione di un modello di protezione su un controller di dominio potrebbe comportare la modifica delle impostazioni del Criterio controller dominio predefinito o del Criterio dominio predefinito. Il modello applicato potrebbe sovrascrivere le autorizzazioni sui nuovi file, sulle chiavi del Registro di sistema e sui servizi di sistema creati da altri programmi. Dopo l&#8217;applicazione di un modello di protezione, potrebbe essere necessario ripristinare questi criteri. Prima di eseguire questa procedura su un controller di dominio, creare un backup della condivisione SYSVOL. </p>
<p> <b>Nota</b> Quando si utilizza la seguente procedura, il computer viene ripristinato allo stato originale dell&#8217;installazione, in cui i Criteri di protezione locale non sono definiti. Potrebbe essere necessario avviare il computer in modalità provvisoria per rinominare o spostare i file. Per ulteriori informazioni su come effettuare questa operazione, vedere la Guida in linea di Windows 2000. </p>
<table class="list ol">
<tbody>
<tr>
<td class="number">1.</td>
<td class="text">Aprire la cartella %SystemRoot%\Security, creare una nuova cartella, quindi rinominarla &#8220;OldSecurity&#8221;. </td>
</tr>
<tr>
<td class="number">2.</td>
<td class="text">Spostare tutti i file con estensione LOG dalla cartella %SystemRoot%\Security alla cartella OldSecurity.</td>
</tr>
<tr>
<td class="number">3.</td>
<td class="text">Individuare il file Secedit.sdb nella cartella %SystemRoot%\Security\Database, quindi rinominarlo &#8220;Secedit.old&#8221;.</td>
</tr>
<tr>
<td class="number">4.</td>
<td class="text">Fare clic sul pulsante <b>Start</b>, scegliere <b>Esegui</b>, digitare <span class="userInput">mmc</span>, quindi scegliere <b>OK</b>.</td>
</tr>
<tr>
<td class="number">5.</td>
<td class="text">Scegliere <strong class="uiterm">Aggiungi/Rimuovi snap-in</strong> dal menu <b>Console</b>, quindi aggiungere lo snap-in Analisi e configurazione della protezione.</td>
</tr>
<tr>
<td class="number">6.</td>
<td class="text">Fare clic con il pulsante destro del mouse su <strong  class="uiterm">Analisi e configurazione della protezione</strong> e scegliere <b>Apri database</b>.</td>
</tr>
<tr>
<td class="number">7.</td>
<td class="text">Passare alla cartella %SystemRoot%\Security\Database, digitare Secedit.sdb nella casella <b>Nome file</b> e scegliere <b>Apri</b>.</td>
</tr>
<tr>
<td class="number">8.</td>
<td class="text">Alla richiesta di importare un modello, fare clic su <strong class="uiterm">Setup Security.inf</strong>, quindi scegliere <b>Apri</b>. </p>
<p>       <b>Nota</b> Se viene visualizzato un messaggio di errore &#8220;Accesso negato&#8221;, sarà possibile ignorarlo.</td>
</tr>
</tbody>
</table>
<p class="topOfPage"><a  href="http://support.microsoft.com/kb/278316#top"><img  src="cid:part1.05030509.05050302@katamail.com" alt="">Torna all&#8217;inizio</a></p>
</p></div>
</p></div>
<div class="appliesTo">
<hr />
<h5>Le informazioni in questo articolo si applicano a</h5>
<table class="list">
<tbody>
<tr>
<td class="bullet">•</td>
<td class="text">Microsoft Windows 2000 Service Pack 1</td>
</tr>
<tr>
<td class="bullet">•</td>
<td class="text">Microsoft Windows 2000 Service Pack 2</td>
</tr>
<tr>
<td class="bullet">•</td>
<td class="text">Microsoft Windows 2000 Advanced Server</td>
</tr>
<tr>
<td class="bullet">•</td>
<td class="text">Microsoft Windows 2000 Advanced Server</td>
</tr>
<tr>
<td class="bullet">•</td>
<td class="text">Microsoft Windows 2000 Service Pack 1</td>
</tr>
<tr>
<td class="bullet">•</td>
<td class="text">Microsoft Windows 2000 Service Pack 2</td>
</tr>
</tbody>
</table></div>
<p class="topOfPage"><a  href="http://support.microsoft.com/kb/278316#top"><img  src="cid:part1.05030509.05050302@katamail.com" alt="">Torna all&#8217;inizio</a></p>
<table>
<tbody>
<tr>
<td class="header">
<h5>Chiavi: </h5>
</td>
<td class="text">kberrmsg kbprb KB278316</td>
</tr>
</tbody>
</table>
<p> </p>
<h1 class="title"> Si registrano i punti di indicizzazione che funzionano e i messaggi di evento ESE98</h1>
<div class="appliesToLink"><a  href="http://support.microsoft.com/kb/296220#appliesto">Visualizza i prodotti ai quali l&#8217;articolo e&#8217; applicato.</a></div>
<p> <script>function loadTOCNode(){}</script> </p>
<div class="disclaimer mt">
<div class="label">NOTA: Questo articolo è stato tradotto da un sistema di traduzione automatica senza intervento umano. Microsoft mette a disposizione questi articoli come beneficio per coloro che non parlano la lingua inglese al fine di facilitarli nella comprensione. Microsoft non garantisce la qualità linguistica delle traduzioni e non è responsabile di qualsivoglia problema, diretto o indiretto, dovuto alla erronea interpretazione dei contenuti o dell&#8217;ultilizzo degli stessi presso i clienti.</div>
</p></div>
<div class="articleProperty">
<table>
<tbody>
<tr>
<td>Identificativo articolo</td>
<td>:</td>
<td>296220</td>
</tr>
<tr>
<td>Ultima modifica</td>
<td>:</td>
<td>mercoledì 28 febbraio 2007</td>
</tr>
<tr>
<td>Revisione</td>
<td>:</td>
<td>2.3</td>
</tr>
</tbody>
</table></div>
<div class="section">
<h2 class="subTitle" id="tocHeadRef">Sintomi </h2>
<p> <script type="text/javascript">loadTOCNode(1, 'symptoms');</script> </p>
<div class="sbody">L&#8217;indicizzazione interrompe l&#8217;utilizzo e alcun o tutti i seguenti messaggi di errore sono inseriti nel registro di eventi di applicazione in un computer SharePoint Portal Server nel log: </p>
<div class="indent">Event Type: Errore <br /> Origine evento: ESE98 <br /> Categoria di eventi: Generale <br /> ID evento: 490 <br /> Descrizione: Il mssearch (1492), non è riuscito un tentativo per aprire il file &#8220;Server\Data\Ftdata\SharePointPortalServer\MSStmp.log Portale Files\SharePoint D:\Program&#8221; per la lettura/ scrivere l&#8217;accesso con l&#8217;errore di sistema 32 (0x00000020) : &#8220;il processo non può accedere al file perché esso è utilizzato da un altro processo&#8221;. L&#8217;operazione di apertura di file non si effettuerà con l&#8217;errore 1032 (0xfffffbf8). </div>
<div class="indent">-e&#8211; </div>
<div class="indent">Event Type: Errore <br /> Origine evento: ESE98 <br /> Categoria di eventi: Generale <br /> ID evento: 488 <br /> Descrizione: Il mssearch (1492), non è riuscito un tentativo per creare il file &#8220;Server\Data\Ftdata\SharePointPortalServer\MSStmp.log Portale Files\SharePoint D:\Program&#8221; &#8220;Accesso negato&#8221; con l&#8217;errore di sistema 5 (0x00000005). L&#8217;operazione di creazione sul file non si effettuerà con l&#8217;errore 1032 (0xfffffbf8). </div>
<div class="indent">-e&#8211; </div>
<div class="indent">Event Type: Errore <br /> Origine evento: ESE98 <br /> Categoria di eventi: Logging/Recovery <br /> ID evento: 413 <br /> Descrizione: Il mssearch (1492), il file Impossibile per creare un nuovo registro presenta perché il database non si può scrivere nell&#8217;unità di registro. L&#8217;unità è della lettura sola dello spazio misconfigure o danneggiato sul disco. Errore 1032. </div>
<div class="indent">-e&#8211; </div>
<div class="indent">Event Type: Errore <br /> Origine evento: ESE98 <br /> Categoria di eventi: Logging/Recovery <br /> ID evento: 492 <br /> Descrizione: Il mssearch (1492) la il file di registro sequenza in &#8220;Server\Data\Ftdata\SharePointPortalServer\ Portale Files\SharePoint D:\Program&#8221; è stato arrestato a causa di un errore irreversibile. Nessun ulteriore aggiornamento non è possibile per i database che utilizzano questa sequenza di registro di file. Il problema risolvere, riavviare o si ripristinare dal backup. </div>
<div class="indent">-e&#8211; </div>
<div class="indent">Event Type: Errore <br /> Origine evento: ESE98 <br /> Categoria di eventi: Logging/Recovery <br /> ID evento: 471 <br /> Descrizione: Mssearch Impossibile (1492) all&#8217;operazione #128.145.954 di rollback sul database Server\Data\Ftdata\SharePointPortalServer\sps.edb Portale Files\SharePoint D:\Program. Errore: -510. Si rifiuteranno tutti gli aggiornamenti di database futuro. </div>
<p class="topOfPage"><a  href="http://support.microsoft.com/kb/296220#top"><img  src="cid:part1.05030509.05050302@katamail.com" alt="">Torna all&#8217;inizio</a></p>
</p></div>
<h2 class="subTitle" id="tocHeadRef">Cause </h2>
<p> <script type="text/javascript">loadTOCNode(1, 'cause');</script> </p>
<div class="sbody">Questo problema si può verificare se un programma di backup ha bloccato i file JET di dati e log nella cartella Ftdata SharePoint Portal Server. Quando si esegue il backup e si ripristina un computer SharePoint Portal Server, si supporta il Solo script MSDMBACK.VBS che si fornisce con il prodotto o una soluzione di backup di terze parti che si certifica specificamente per l&#8217;utilizzo con SharePoint Portal Server. Se si utilizza tutto l&#8217;altro programma di backup che si include Microsoft Windows 2000 Backup, è possibile visualizzare i messaggi di errore che si descrive nella sezione &#8220;Sommario&#8221; di questo articolo. </p>
<p class="topOfPage"><a  href="http://support.microsoft.com/kb/296220#top"><img  src="cid:part1.05030509.05050302@katamail.com" alt="">Torna all&#8217;inizio</a></p>
</p></div>
<h2 class="subTitle" id="tocHeadRef">Risoluzione </h2>
<p> <script type="text/javascript">loadTOCNode(1, 'resolution');</script> </p>
<div class="sbody">Per risolvere questo problema, chiudere il processo di backup e riavviare il servizio di ricerca Microsoft (Mssearch.exe) sul server. </p>
<p class="topOfPage"><a  href="http://support.microsoft.com/kb/296220#top"><img  src="cid:part1.05030509.05050302@katamail.com" alt="">Torna all&#8217;inizio</a></p>
</p></div>
<h2 class="subTitle" id="tocHeadRef">Informazioni </h2>
<p> <script type="text/javascript">loadTOCNode(1, 'moreinformation');</script> </p>
<div class="sbody">Per impedirlo a questo problema di ricorrere, verificare a quello la cartella Ftdata SharePoint Portal Server che si indica evento i messaggi di registro di errore sono esclusi nel programma di backup non supportato sul server. Questa cartella risiede in genere sull&#8217;unità in cui ha installato i file di dati durante Processo di installazione (che si trova questa cartella in Data\Ftdata\SharePointPortalServer) a. Poiché verificano i dati che si possono essere spostato di file dopo l&#8217;installazione che lo Sps.edb e i file associati si trovino nel percorso a cui si fa il riferimento, registrare gli errori di evento. </p>
<p class="topOfPage"><a  href="http://support.microsoft.com/kb/296220#top"><img  src="cid:part1.05030509.05050302@katamail.com" alt="">Torna all&#8217;inizio</a></p>
</p></div>
</p></div>
<div class="appliesTo">
<hr />
<h5>Le informazioni in questo articolo si applicano a</h5>
<table class="list">
<tbody>
<tr>
<td class="bullet">•</td>
<td class="text">Microsoft SharePoint Portal Server 2001</td>
</tr>
</tbody>
</table></div>
<p class="topOfPage"><a  href="http://support.microsoft.com/kb/296220#top"><img  src="cid:part1.05030509.05050302@katamail.com" alt="">Torna all&#8217;inizio</a></p>
<table>
<tbody>
<tr>
<td class="header">
<h5>Chiavi: </h5>
</td>
<td class="text">kberrmsg kbprb KB296220 KbMtit kbmt</td>
</tr>
</tbody>
</table>
<p></p>
