---
title: "La chiocciola davanti alle funzioni PHP"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-05-10"
permalink: "la-chiocciola-davanti-alle-funzioni-php/"
layout: "template_posts_md"
---
<p>La chiocciola davanti alle funzioni PHP<br />    &lt;<a href="http://www.phptips.it/2007/03/09/la-chiocciola-davanti-alle-funzioni-php/">http://www.phptips.it/2007/03/09/la-chiocciola-davanti-alle-funzioni-php/</a>&gt;</p>
<p>sorgente:</p>
<p><a href="http://www.phptips.it/2007/03/09/la-chiocciola-davanti-alle-funzioni-php/">http://www.phptips.it/2007/03/09/la-chiocciola-davanti-alle-funzioni-php/</a></p>
<p>Molto spesso capita di vedere in codice PHP scritto da altre persone una <br />&quot;@&quot; davanti al nome di una funzione. La @ davanti al nome di una <br />funzione impedisce alla funzione stessa di ritornare errori a schermo <br />qualora non vada a buon fine. Ad esempio</p>
<p>PHP:</p>
<p>   1.<br />      // Non stampa errori a schermo se fallisce<br />   2.<br />      $fp = @fopen &lt;<a href="http://www.php.net/fopen">http://www.php.net/fopen</a>&gt;(&quot;nome_file.txt&quot;,&quot;r&quot;);</p>
<p>Utile, ma da usare con cautela&#8230;</p>
