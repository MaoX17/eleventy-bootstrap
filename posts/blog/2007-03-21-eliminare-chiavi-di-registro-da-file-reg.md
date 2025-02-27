---
title: "Eliminare chiavi di registro da file .reg"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-03-21"
permalink: "eliminare-chiavi-di-registro-da-file-reg/"
layout: "template_posts_md"
---
<p>Eliminazione di chiavi e valori del Registro di sistema<br />Per eliminare una chiave del Registro di sistema con un file reg, <br />inserire un trattino (-) davanti al PercorsoRegistrodisistema nel file <br />reg. Per eliminare ad esempio la sottochiave Test dalla seguente chiave <br />del Registro di sistema:<br />HKEY_LOCAL_MACHINE\Software<br />inserire un trattino davanti alla seguente chiave nel file reg:<br />HKEY_LOCAL_MACHINE\Software\Test<br />L&#39;esempio riportato di seguito corrisponde a un file reg che consente di <br />eseguire questa operazione.<br />[-HKEY_LOCAL_MACHINE\Software\Test]<br />Per eliminare un valore del Registro di sistema con un file reg, <br />inserire un trattino (-) dopo il segno di uguale (=) che segue il <br />NomeElementoDati nel file reg. Per eliminare ad esempio la sottochiave <br />TestValue dalla seguente chiave:<br />HKEY_LOCAL_MACHINE\Software\Test<br />inserire un trattino dopo &quot;TestValue&quot;= nel file reg. L&#39;esempio riportato <br />di seguito corrisponde a un file reg che consente di eseguire questa <br />operazione.<br />HKEY_LOCAL_MACHINE\Software\Test<br />&quot;TestValue&quot;=-<br />Per creare il file reg, utilizzare Regedit.exe per esportare la chiave <br />del Registro di sistema che si desidera eliminare, quindi utilizzare il <br />Blocco note per modificare il file reg e inserire il trattino.</p>
