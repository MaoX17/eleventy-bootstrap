---
title: "Gestire le date in php e MySQL"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-05-11"
permalink: "gestire-le-date-in-php-e-mysql/"
layout: "template_posts_md"
---
<p>Gestire le date in php e MySQL</p>
<p>[Origine: <a href="http://www.abaconline.com/?q=node/24">http://www.abaconline.com/?q=node/24</a> ]</p>
<p>    Funzioni php</p>
<p>      Conversione data</p>
<p>Convertire la data da formato europeo (gg/mm/aaaa) in formato americano <br />(aaaa-mm-gg) per inserirla in una tabella MySQL</p>
<p>function convertiData($dataEur){<br />$rsl = explode (&#39;/&#39;,$dataEur);<br />$rsl = array_reverse($rsl);<br />return implode($rsl,&#39;-&#39;);<br />}</p>
<p>        Esempio</p>
<p>&lt;?php echo convertiData(&quot;01/02/2003&quot;); ?&gt;</p>
<p>da come risultato =&gt; 2003-02-01</p>
<p><p>      Visualizzare la data</p>
<p>Per visualizzare la data di oggi si utilizza la funzione *date()* <br />indicando come argomento il formato che ci interessa</p>
<p>&lt;?php echo date(&quot;d/m/Y&quot;); ?&gt;</p>
<p>da come risultato</p>
<p>11/05/2007</p>
<p>Per informazioni sui vari formati della data si pu&#242; consultare il sito <br />ufficiale di php qui &lt;<a href="http://it2.php.net/manual/it/function.date.php">http://it2.php.net/manual/it/function.date.php</a>&gt;</p>
<p><p>Per stampare la data nell&#39;anno successivo, come ad esempio per le date <br />di scadenza si pu&#242; utilizzare</p>
<p>&lt;?php echo strftime(&quot;%d/%m/%Y&quot;,mktime(0,0,0,date(&quot;m&quot;), date(&quot;d&quot;), <br />date(&quot;Y&quot;)+1)); ?&gt;</p>
<p>che da come risultato</p>
<p>11/05/2008</p>
<p><p>    Funzioni Mysql</p>
<p>      Query</p>
<p>Se una tabella contiene un campo date, &#232; possibile visualizzare il <br />giorno in formato gg/mm/aaaa utilizzando la funzione MySQL *date_format*.</p>
<p>date_format(&lt;campo&gt;,&#39;%d/%m/%Y&#39;)</p>
<p>        Esempio</p>
<p>La tabella fattura contiene il campo /giorno/ di tipo date. Eseguendo la <br />query</p>
<p>SELECT date_format(giorno,&#39;%d/%m/%Y&#39;) giorno FROM fattura</p>
<p>si otterranno tutte le date delle fatture.</p>
<p>Per informazioni sui vari formati da utilizzare in date_format si pu&#242; <br />consultare il sito ufficiale di MySQL qui <br />&lt;<a href="http://dev.mysql.com/doc/mysql/en/Date_and_time_functions.html">http://dev.mysql.com/doc/mysql/en/Date_and_time_functions.html</a>&gt;</p>
<p><p>    Calcolare il giorno della settimana</p>
<p>Per sapere se un giorno &#232; luned&#236; o marted&#236;, ecc utilizzare</p>
<p>ELT(DAYOFWEEK(&lt;campo data&gt;),&#39;dom&#39;,&#39;lun&#39;,&#39;mar&#39;,&#39;mer&#39;,&#39;gio&#39;,&#39;ven&#39;,&#39;sab&#39;)</p>
<p><p>      Test se una data sta per scadere 1 mese prima</p>
<p>Supponiamo che il campo scadenza contiene delle date, vogliamo <br />evidenziare le date in cui manca un mese alla scadenza. Con il seguente <br />test nel campo staperscadere avremo i valor si/no a seconda della data <br />di scadenza</p>
<p>IF( (date_add(scadenza, interval -1 month) &lt; now())<br />and (scadenza &gt;= now()) ,si,no) staperscadere</p>
<p><p>    Calcolare quanti gioni mancano alla scadenza</p>
<p>Supponiamo che il campo data_pagamento contiene la data di scadenza di <br />una fattura. Per sapere quanti giorni mancano da oggi alla scadenza si <br />pu&#242; usare</p>
<p>(TO_DAYS(data_pagamento)-TO_DAYS(now())) giorni_mancanti</p>
