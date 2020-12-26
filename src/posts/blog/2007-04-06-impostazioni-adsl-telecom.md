---
title: "Impostazioni ADSL Telecom"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-04-06"
permalink: "impostazioni-adsl-telecom/"
layout: "template_posts_md"
---
<p>Fonte: <a href="http://www.andreabeggi.net/2005/11/29/impostazioni-adsl-telecom/">http://www.andreabeggi.net/2005/11/29/impostazioni-adsl-telecom/</a></p>
<p>A T T E N Z I O N E ! Questo post ha piu&#39; di sei mesi. Le informazioni<br />contenute potrebbero non essere aggiornate.</p>
<p>Mi capita spesso di installare connessioni ADSL di Telecom (o<br />Interbusiness), sia con router in comodato d&#39;uso che con apparecchi di<br />propriet&#224; del cliente. Spesso &#232; molto difficile districarsi nella<br />documentazione lasciata dai tecnici (quando la lasciano). Questo tipo di<br />connessione prevede un certo numero di IP statici.<br />I parametri da usare sono: connessione con protocollo RFC1483<br />&lt;<a href="http://www.faqs.org/rfcs/rfc1483.html">http://www.faqs.org/rfcs/rfc1483.html</a>&gt; routed, VPI e VCI: 8 e 35,<br />encapsulation: LLC, QoS: UBR.<br />Nel caso venga assegnata al cliente una classe da 8 indirizzi IP<br />(esempio x.y.z.192 &#8211; x.y.z.199 subnet mask 255.255.255.248), il primo &#232;<br />la rete, e non va usato; l&#39;ultimo &#232; l&#39;indirizzo di broadcast e non va<br />usato. Rimangono 6 indirizzi utili: x.y.z.193 &#8211; x.y.z.198.<br />Di questi, il router in comodato usa l&#39;indirizzo x.y.z.193, Il firewall,<br />in cascata, utilizzer&#224; x.y.z.194.<br />Se installate voi il router, l&#39;indirizzo WAN sar&#224; x.y.z.194, il GW<br />x.y.z.193. Nel caso il router fosse un Cisco, probabilmente dovrete<br />anche inserire gli indirizzi della connessione punto-punto, sempre<br />forniti da Telecom (sono di una classe diversa).<br />Alla fine avrete disponibili gli indirizzi da 195 a 198, che potrete<br />assegnare alla eventuale DMZ. Se il firewall, come accade di solito,<br />effettua il NAT, l&#39;indirizzo pubblico della rete locale sar&#224; quello<br />della porta WAN del firewall, cio&#232; x.y.z.194.</p>
<p>L&#39;indirizzo ip ptp &#232; necessario solo in alcuni modelli di router cisco.</p>
