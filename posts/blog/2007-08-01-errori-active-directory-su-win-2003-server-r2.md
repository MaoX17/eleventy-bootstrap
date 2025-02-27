---
title: "Errori active directory su win 2003 server R2"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-08-01"
permalink: "errori-active-directory-su-win-2003-server-r2/"
layout: "template_posts_md"
---
<p>Errori Presenti nella sezione applicazioni del Visualizzatore Eventi</p>
<p>Tipo evento:    Errore<br />
Origine evento:    Userenv<br />
Categoria evento:    Nessuno<br />
ID evento:    1058<br />
Data:        01/08/2007<br />
Ora:        12.39.15<br />
Utente:        NT AUTHORITY\SYSTEM<br />
Computer:    DC01<br />
Descrizione:<br />
Impossibile accedere al file gpt.ini per l&#8217;oggetto Criteri di gruppo<br />
cn={D69C3F55-6EEF-4DB1-9383-87B54A8457CA},cn=policies,cn=system,DC=prvprato1,DC=local.<br />
Il file deve essere presente nel percorso<br />
&lt;\\prvprato1.local\SysVol\prvprato1.local\Policies\{D69C3F55-6EEF-4DB1-9383-87B54A8457CA}\gpt.ini&gt;.<br />
(Accesso negato. ). Elaborazione dei Criteri di gruppo interrotta.</p>
<p>Per ulteriori informazioni, consultare la Guida in linea e supporto<br />
tecnico all&#8217;indirizzo <a href="http://go.microsoft.com/fwlink/events.asp">http://go.microsoft.com/fwlink/events.asp</a>.</p>
<p>Tipo evento:    Errore<br />
Origine evento:    Userenv<br />
Categoria evento:    Nessuno<br />
ID evento:    1030<br />
Data:        01/08/2007<br />
Ora:        12.39.15<br />
Utente:        NT AUTHORITY\SYSTEM<br />
Computer:    DC01<br />
Descrizione:<br />
Impossibile eseguire una query per reperire l&#8217;elenco degli oggetti<br />
Criteri di gruppo. È possibile che nel registro eventi si trovino<br />
messaggi registrati in precedenza dal modulo criteri in cui viene data<br />
una spiegazione del problema.</p>
<p>Per ulteriori informazioni, consultare la Guida in linea e supporto<br />
tecnico all&#8217;indirizzo <a href="http://go.microsoft.com/fwlink/events.asp">http://go.microsoft.com/fwlink/events.asp</a>.</p>
<p>Soluzione</p>
<p>Per risolvere ho lanciato sul dc:</p>
<p>*gpupdate* /force</p>
