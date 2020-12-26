---
title: "Gestire MySQL con una classe in PHP"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-05-10"
permalink: "gestire-mysql-con-una-classe-in-php/"
layout: "template_posts_md"
---
<p>Gestire MySQL con una classe in PHP</p>
<p>sorgente:</p>
<p><a href="http://www.claudiogarau.it/php/Gestire_MySQL_con_una_classe_in_PHP.php">http://www.claudiogarau.it/php/Gestire_MySQL_con_una_classe_in_PHP.php</a></p>
<p>In questo breve articolo presentiamo un esempio su come potrabbe essere <br />costruita una classe per facilitare l&#39;interazione tra *PHP* e il DBMS <br />*MySQL*. La classe permette di eseguire tutte le principali operazioni <br />utilizzate generalmente nello sviluppo di applicazioni che si <br />interfacciano su basi di dati: connessione al DBMS; selezione del <br />database; query sulla tabella; estrazione di un singolo record; <br />conteggio dei records presenti nella tabella; estrazione dei records; <br />chiusura della connessione.</p>
<p>Ecco di seguito il codice necessario per sviluppare la nostra classe:</p>
<p>&lt;?PHP<br />class mysql {</p>
<p>//connessione al DBMS<br /> function Connect($host, $user, $pass, $data){<br />  $connessione = @mysql_connect(&quot;$host&quot;,&quot;$user&quot;,&quot;$pass&quot;);</p>
<p>//selezione del database<br />  @mysql_select_db(&quot;$data&quot;, $connessione);<br />  }</p>
<p>//query sulla tabella <br /> function Query($sql){<br />  $sql = @mysql_query($sql) or die (mysql_error());<br />  return $sql;<br />  }</p>
<p>//estrazione di un record<br /> function FetchRow($sql){<br />  $rows = @mysql_fetch_row($sql);<br />  return $rows;<br />  }</p>
<p>//conteggio dei records<br /> function FetchNum($sql){<br />  $num = @mysql_num_rows($sql);<br />  return $num;<br />  }</p>
<p>//estrazione dei records  <br />  function FetchArray($sql){<br />  $array = @mysql_fetch_array($sql);<br />  return $array;<br />  }</p>
<p>//chiusura della connessione<br /> function Close(){<br />  @mysql_close();<br />  }<br />}<br />?&gt;</p>
<p>La classe introduce le diverse funzioni native di PHP per <br />l&#39;interfacciamento a database MySQL evitandone la ripetizione quando <br />necessarie.</p>
