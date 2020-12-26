---
title: "Error 1325. &#8216;Documenti&#8217; is not a valid short file name. &#8211; SOLUTION"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2008-06-05"
permalink: "error-1325-documenti-is-not-a-valid-short-file-name-solution/"
layout: "template_posts_md"
---
<p>Ho ottenuto il seguente errore da qualche giorno.<br />Non riuscivo + a installare niente, l&#39;errore era sempre lo stesso:</p>
<p>Tipo evento:    Errore<br />Origine evento:    MsiInstaller<br />Categoria evento:    Nessuno<br />ID evento:    11325<br />Data:        05/06/2008<br />Ora:        23.33.30<br />Utente:        NEO\Administrator<br />Computer:    NEO<br />Descrizione:<br />Product: Windows Installer Clean Up &#8212; Error 1325. &#39;Documenti&#39; is not a <br />valid short file name.</p>
<p>Per ulteriori informazioni, consultare la Guida in linea e supporto <br />tecnico all&#39;indirizzo <a href="http://go.microsoft.com/fwlink/events.asp">http://go.microsoft.com/fwlink/events.asp</a>.<br />Dati:<br />0000: 7b 31 32 31 36 33 34 42   {121634B<br />0008: 30 2d 32 46 34 42 2d 31   0-2F4B-1<br />0010: 31 44 33 2d 41 44 41 33   1D3-ADA3<br />0018: 2d 30 30 43 30 34 46 35   -00C04F5<br />0020: 32 44 44 35 32 7d         2DD52} </p>
<p>L&#39;errore &#232; insorto dopo aver cambiato lettera all&#39;unit&#224; su cui si trova <br />la cartella &quot;speciale&quot; Documenti.<br />Ho riassegnato la lettera precedente all&#39;unit&#224; e tutto &#232; tornato ok.</p>
<p>Saluti<br />MaoX</p>
