---
title: "Migrare un dominio Windows 2000 a Windows 2003"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-06-27"
permalink: "migrare-un-dominio-windows-2000-a-windows-2003.html"
layout: "template_posts_md"
---
<h1></h1>
<p></p>
<div id="corpo"><strong>Nuove caratteristiche di  Windows 2003 &#8211; Perchè migrare ?</strong> </p>
<p align="justify"><span style="font-family:Verdana;font-size:85%;">In questo documento analizzeremo velocemente i miglioramenti del nuovo sistema operativo di Microsoft rispetto al suo predecessore Windows 2000 nonchè le nuove caratteristiche di Windows 2003 per poi seguire nel dettaglio una migrazione di un dominio Active Directory Windows 2000  a un dominio Active Directory Windows 2003.</span></p>
<p align="justify"><span style="font-family:Verdana;font-size:85%;">Ad Aprile Microsoft ha  rilasciato 4 versione del nuovo sistema operativo che sono :</span></p>
<ul>
<li>
<p align="justify"><span style="font-family:Verdana;font-size:85%;">Windows 2003 Server Standard    Edition</span>   </p>
</li>
<li>
<p align="justify"><span style="font-family:Verdana;font-size:85%;">Windows 2003 Server    Enterprise Edition</span>   </p>
</li>
<li>
<p align="justify"><span style="font-family:Verdana;font-size:85%;">Windows 2003 Server    DataCenter Edition</span>   </p>
</li>
<li>
<p align="justify"><span style="font-family:Verdana;font-size:85%;">Windows 2003 Server Web    Edition</span> </p>
</li>
</ul>
<p align="justify"><span style="font-family:Verdana;font-size:85%;">con prezzi diversi e caratteristiche diverse; questo per offrire al mercato soluzioni ad-hoc con un prezzo contenuto come ad esempio nel caso di Windows 2003 Server Web Edition.</p>
<p>La  versione Web Edition è in realtà un sistema operativo progettato esclusivamente per le esigenze applicative dei servizi Web e supporta 1 o 2 processori e max 2 GByte di RAM; in questa versione non sono presenti i servizi di Active Directory, DNS, DHCP e i servizi di stampa.</p>
<p>Nella versione Standard Edition sono presenti i servizi i servizi Web, stampa, Terminal Server , DNS e DHCP ed i servizi di Load Balancing; puo&#8217; supportare fino a 4 GByte di RAM.</p>
<p>La versione Enterprise Edition  supporta fino a 8 nodi per i servizi di  clustering e 32 Gbyte di RAM con max 8 processori.</p>
<p>La versione Datacenter Edition è una versione per hardware proprietari del  sistema operativo che supporta da 8 a 64 processor.</span></p>
<p align="justify"><span style="font-family:Verdana;font-size:85%;">Inoltre tutte le versioni di Windows 2003 supportano di una caratteristica molto importante che aiuta a diminuire i tempi di down time dei server : <strong>Hot-add memory</strong>, ovvero la  possibilità di aggiungere memoria Ram senza effettuare il power-off del server.</span></p>
<p align="justify"><span style="font-family:Verdana;font-size:85%;">Informazioni aggiuntive circa i   requisiti di sistema si possono trovare sul sito Microsoft all&#8217; indirizzo :</p>
<p><a href="http://www.microsoft.com/italy/windowsserver2003/default.mspx"> </a><a href="http://www.microsoft.com/italy/windowsserver2003/default.mspx%3C/a%3E" class="external free" title="">&#8221; rel=&#8221;nofollow&#8221;>http://www.microsoft.com/italy/windowsserver2003/default.mspx</a></span></p>
<p align="justify"><span style="font-family:Verdana;font-size:85%;">Anche se a primo impatto il nuovo Windows 2003 Server per la sua interfaccia grafica potrebbe assomigliare in realtà al già noto sistema operativo per Workstation  WindowsXP, nuove caratteristiche e grossi miglioramenti riguardanti la sicurezza sono stati introdotti rispetto alla versione precedente.</span></p>
<p align="justify"><strong><span style="font-family:Verdana;font-size:85%;">Migliorie nella gestione e  nelle prestazioni : </span></strong></p>
<p align="justify"><span style="font-family:Verdana;font-size:85%;">è stato rivisto il funzionamento del Global Catalog che ora è presente nella cache di tutti i Domain Controller, la replica degli oggetti di Active Directory è stata migliorata perchè viene replicato solo l&#8217;attributo modificato e non tutto l&#8217;oggetto. Altri miglioramenti sono stati apportati al KCC e all&#8217; ISTG per la generazione della topologia di replica. Ora è possibile creare delle &#8220;Trust&#8221;  tra foreste, promuovere un server a Domain controller aggiuntivo per una foresta utilizzando delle informazioni su nastro o CD-Rom con l&#8217;utility DCPromo  /ADV o backappare file aperti grazie alla caratteristica &#8220;Shadow Copy&#8221;<br />Inoltre è stata semplificata al gestione delle Group Policy con la Group Policy  Management Console.</span></p>
<p align="justify"><span style="font-family:Verdana;font-size:85%;"><strong>Migliorie in tema di  sicurezza :</strong> la filosofia ora è :<<>></span></p>
<p align="justify"><span style="font-family:Verdana;font-size:85%;">Tutte quelle che erano considerate le &#8220;best practices&#8221; in Windows 2000 sono state importate in Windows 2003. Il gruppo EveryOne non ha più Full control sulle directory, IIS 6.0 è stato totalmente riscritto ed ora è più &#8220;chiuso&#8221;  grazie ad alcune modifiche che su IIS 5.0 venivano apportate con il LockDown Tool di Microsoft ed ora già presenti nelal nuova versione.</span></p>
<p align="justify"><span style="font-family:Verdana;font-size:85%;">Ma le modifiche più importanti sono: la ridenominzione di un dominio, ovvero la possibilità di aggiungere, rimuovere o rinominare oggetti nello Schema di Active Directory e il nuovo prodotto ADAM (Active Direcotry in Application Mode).</span></p>
<p align="justify"><span style="font-family:Verdana;font-size:85%;">Intanto è già tempo di Service Pack; infatti canali non ufficiali Microsoft annunciano per Giugno l&#8217;uscita della prima Major Update di Windows Server 2003.</span></p>
<p align="justify"><span style="font-family:Verdana;font-size:85%;">Ma queste sono solo alcune delle nuove caratteristiche di Windows Server 2003, altre importanti modifiche si possono trovare sul sito ufficiale Microsoft o anche su altri articoli presenti su questo sito :</span></p>
<p> <strong> </p>
<p align="justify"><span style="font-family:Verdana;font-size:85%;"> <a href="http://www.sysadmin.it/pages/guide/guide.asp?ID=42">Windows.Net  Panoramica nuove funzionalità</a></span></p>
<p align="justify"><span style="font-family:Verdana;font-size:85%;"> <a href="http://www.sysadmin.it/pages/guide/guide.asp?ID=41">IIS 6.0 : potenza ,  sicurezza e scalabilità.</a></span></p>
<p align="justify">
<p> </strong> </p>
<p align="justify"><strong><span style="font-family:Verdana;font-size:85%;">Il processo di migrazione.</span></strong></p>
<p align="justify"><span style="font-family:Verdana;font-size:85%;">Il processo di migrazione di un dominio Windows 2000 a Windows 2003 può avvenire in diversi modi: per gradi, aggiungendo inizialmente dei server Windows 2003 come  membri del dominio Windows 2000 o aggiungendo un Domain Controller Windows 2003 ad un dominio esistente Windows 2000, oppure aggiornando direttamente i server Windows 2000 a Windows 2003.</span></p>
<p align="justify"><span style="font-family:Verdana;font-size:85%;">In questo documento analizzeremo la migrazione di un dominio da Windows 2000 ADV con un unica foresta e dominio a Windows 2003 aggiungendo un nuovo server Windows 2003 come Domain Controller aggiuntivo del dominio Windows 2000 per poi aggiornare successivamente anche gli altri Domani Controller a Windows 2003.</span></p>
<p align="justify"><span style="font-family:Verdana;font-size:85%;">Immaginiamo di avere un dominio Windows 2000 con 2 DC e diverse workstation come membri del dominio. Primo passo è sicuramente la verifica dei requisiti minimi di sistema e della compatibility list del nuovo hardware del server che andremo ad installare e quello degli altri 2 DC che andremo successivamente ad aggiornare; una volta verificato il tutto andremo ad effettuare l&#8217; installazione di Windows 2003 sul nuovo server.</span></p>
<p align="justify"><span style="font-family:Verdana;font-size:85%;">Teminata l&#8217;installazione di Windows 2003 sul nuovo server Windows 2003 prima di procedere con la promozione a DC del nuovo server dovremmo estendere lo scheda di Active Directory 2000 per passare da un totale di 1006 di oggetti di Active Directory 2000 a 1253 di Active Directory 2003.<br />Per prima cosa dobbiamo assicuraci che sugli altri 2 DC ci sia installato almeno la Service Pack 3 che ha risolto alcuni problemi di replica tra i DC, dopodichè andremo, con CD-Rom di Windows 2000 alla mano ad aggiornare lo schema sui DC Windows 2000.<br />Per prima cosa installeremo su uno dei 2  DC Windows 2000 i Support Tools di Windows 2000 presenti nel CD-Rom d&#8217;installazione nella directory /Support/Tools per usare l&#8217;utility NETDOM.</span></p>
<p align="justify"><span style="font-family:Verdana;font-size:85%;">Installati i Support Tools da  una shell di ms-dos andremo a digitare il comando : <strong>Netdom /query fsmo </strong> </span></p>
<p align="center"><span style="font-family:Verdana;font-size:85%;"> <a href="http://www.sysadmin.it/images/guide/win2003/netdom.jpg"> <img loading="lazy" src="http://www.sysadmin.it/images/guide/win2003/netdom.jpg" alt="" border="0" height="192" width="334" /></a></span></p>
<p align="justify"><span style="font-family:Verdana;font-size:85%;">Con questa utility verrano  visualizzati i  cinque <strong> <a href="http://www.sysadmin.it/pages/guide/guide.asp?ID=7">Operation Master  Roles</a> </strong>e i relativi server che detengono i ruoli. Una volta individuato il DC che detiene il ruolo di &#8220;Schema Master&#8221; collegarsi al DC e da esegui digitare: <a href="file:///d:/i386/adprep">d:\i386\adprep</a> /forestprep (D  come lettera del lettore CD-Rom che contiene il CD di Windows 2003)</span></p>
<p align="center"><span style="font-family:Verdana;font-size:85%;"> <a href="http://www.sysadmin.it/images/guide/win2003/adprepforestprep.jpg"> <img loading="lazy" src="http://www.sysadmin.it/images/guide/win2003/adprepforestprep.jpg" alt="" border="0" height="278" width="330" /></a></span></p>
<p align="justify"><span style="font-family:Verdana;font-size:85%;">A questo punto confermare con  il tasto &#8220;C&#8221; </span></p>
<p align="justify"><span style="font-family:Verdana;font-size:85%;">Al termine collegarsi sul DC &#8220;Operation  Master&#8221; e da esegui digitare: <a href="file:///d:/i386/adprep">d:\i386\adprep</a>  /domainprep (D come lettera del lettore CD-Rom che contiene il CD di Windows  2003)</span></p>
<p align="justify"><span style="font-family:Verdana;font-size:85%;">Dopo aver verificato che l&#8217;event log dei rispettivi DC non contengano errori collegarsi al server windows 2003 ed avviare la promozione a DC da esegui digitando : DCPROMO</span></p>
<p align="center"><span style="font-family:Verdana;font-size:85%;"> <a href="http://www.sysadmin.it/images/guide/win2003/dcpromo1.jpg"> <img loading="lazy" src="http://www.sysadmin.it/images/guide/win2003/dcpromo1.jpg" alt="" border="0" height="193" width="256" /></a></span></p>
<p align="justify"><span style="font-family:Verdana;font-size:85%;">A questo punto scegliere &#8220;Additional Domain Controller for existing domain&#8221; e cliccare su next; inserire userid e password dell&#8217;amminstratore del dominio Windows 2000 compreso il nome del dominio e cliccare su next.</p>
<p>Nella schermata successiva inserire il nome DNS del dominio Windows 2000 ed poi ancora  il nome Netbios del dominio Windows 2000; alla fine del processo il server al successivo riavvio entrerà a far parte del nuovo dominio Windows 2000/2003 insieme agli altri 2 DC Windows 2000.</span></p>
<p align="center"><span style="font-family:Verdana;font-size:85%;"> <a href="http://www.sysadmin.it/images/guide/win2003/dcpromo2.jpg"> <img loading="lazy" src="http://www.sysadmin.it/images/guide/win2003/dcpromo2.jpg" alt="" border="0" height="193" width="256" /></a></span></p>
<p align="justify"><span style="font-family:Verdana;font-size:85%;">Ultimo passo a questo punto è spostare tutti e 5 i Master Opertation Roles sul nuovo server windows 2003 di modo da poter tranquillamente aggiornare a Windows 2003 gli altri 2 DC senza dare disservizio all&#8217;interno del dominio. Per far questo dal vecchio DC Windows 2000 apriamo una shell di dos e utilizziamo il tool da riga di comando chiamato : ntdsutil.</p>
<p>A questo punto digitiamo i seguenti comandi seguiti dal testo invio :</span></p>
<p align="justify"><span style="font-family:Verdana;font-size:85%;"><strong>roles<br />connections<br />connect to server </strong>  (nome del server windows2003 che conterrà i ruoli)<br /><strong> quit</strong><br /><strong>transfer schema master     </strong>            e confermare<br /><strong>transfer domain naming master     </strong>e confermare<br /><strong>transfer pdc                           </strong>           e confermare<br /><strong>transfer rid master  </strong>                      e confermare<br /><strong>transfer infrastructure master   </strong>    e  confermare<br /><strong>exit</strong><br /><strong>quit</strong></span></p>
<p align="center"><span style="font-family:Verdana;font-size:85%;"> <a href="http://www.sysadmin.it/images/guide/win2003/ntdsutil.jpg"> <img loading="lazy" src="http://www.sysadmin.it/images/guide/win2003/ntdsutil.jpg" alt="" border="0" height="269" width="299" /></a></span></p>
<p align="justify"><span style="font-family:Verdana;font-size:85%;">A questo punto verificare  sempre con il comando <strong>Netdom /query fsmo </strong>che il nuovo server Windows 2003 contenga tutti i ruoli per un corretto funzionamento del dominio; si potranno quindi successivamente spostare gli applicativi presenti sui 2 DC Windows 2000 sul nuovo server.<br />Ultimo passo quindi aggiornare i 2 DC Windows 2000 a Windows 2003 inserendo semplicemente il CD-Rom di Windows 2003 e lanciando il setup e scegliendo &#8220;Aggiornamento&#8221;. Una volta completato l&#8217;aggiornamento dei 2 DC sara&#8217; possibile ridistribuire i ruoli tra i vari DC con l&#8217;utility ntdsutil usata in precedenza.</span></p>
<p align="justify"><span style="font-family:Verdana;font-size:78%;">(a cura di GB)</span></p>
</p></div>
