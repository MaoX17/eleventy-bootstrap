---
title: Eliminare chiavi di registro da file .reg
tags:
  - post
htmlClass: html
bodyClass: body
date: 2007-03-21
permalink: eliminare-chiavi-di-registro-da-file-reg/
layout: template_posts_md
---

# Eliminazione di chiavi e valori del Registro di sistema  

Per eliminare una chiave del Registro di sistema con un file reg,  
inserire un trattino (-) davanti al PercorsoRegistrodisistema nel file  
reg. 
Per eliminare ad esempio la sottochiave Test dalla seguente chiave  
del Registro di sistema:  

`HKEY_LOCAL_MACHINE\Software`

inserire un trattino davanti alla seguente chiave nel file reg:  

`HKEY_LOCAL_MACHINE\Software\Test`

L'esempio riportato di seguito corrisponde a un file reg che consente di  
eseguire questa operazione.  

`[-HKEY_LOCAL_MACHINE\Software\Test]`

Per eliminare un valore del Registro di sistema con un file reg,  
inserire un trattino (-) dopo il segno di uguale (=) che segue il  
NomeElementoDati nel file reg. 

Per eliminare ad esempio la sottochiave TestValue dalla seguente chiave:  

`HKEY_LOCAL_MACHINE\Software\Test`

inserire un trattino dopo "TestValue"= nel file reg. 

L'esempio riportato  di seguito corrisponde a un file reg che consente di eseguire questa  
operazione.  
```
HKEY_LOCAL_MACHINE\Software\Test  
"TestValue"=-  

```

Per creare il file reg, utilizzare Regedit.exe per esportare la chiave del Registro di sistema che si desidera eliminare, quindi utilizzare il Blocco note per modificare il file reg e inserire il trattino.
