---
title: "Ottimizzazione dell&#8217;utilizzo della memoria in Exchange Server 2003"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-07-25"
permalink: "ottimizzazione-dellutilizzo-della-memoria-in-exchange-server-2003/"
layout: "template_posts_md"
---
<p><a href="http://technet.microsoft.com/it-it/library/2d63b567-c73c-4cc7-bd95-77b18749219b.aspx">http://technet.microsoft.com/it-it/library/2d63b567-c73c-4cc7-bd95-77b18749219b.aspx</a><br /><a href="http://support.microsoft.com/?kbid=815372"><tt>http://support.microsoft.com/?kbid=815372</tt></a></p>
<p>In pratica le operazioni da compiere su un server windows 2003 server<br />con Exchange 2003 e con 2 GB di ram (o più di 2 GB di Ram) sono:</p>
<p>Modificare il boot.ini come segue:<br />aggiungere</p>
<p><b>/3GB  </b><b>/USERVA=3030</p>
<p>Modifica della chiave di registro:</p>
<p></b>HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager<br />Nome valore: <b>HeapDeCommitFreeBlockThreshold</b><br />Tipo valore: REG_DWORD<br />Dati valore: <b>0x00040000</b> (scelta consigliata)<br />Valore predefinito: non presente</p>
