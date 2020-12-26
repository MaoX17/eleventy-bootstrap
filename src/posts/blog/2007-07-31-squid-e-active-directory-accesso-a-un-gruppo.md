---
title: "Squid e active directory &#8211; accesso a un gruppo"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-07-31"
permalink: "squid-e-active-directory-accesso-a-un-gruppo/"
layout: "template_posts_md"
---
<h5>Da: <a href="http://openskills.info/infobox.php?ID=1444">http://openskills.info/infobox.php?ID=1444</a><br /> </h5>
<h5><a href="http://openskills.info/infobox.php?ID=1444">Squid &#8211; Autenticazione utenti su dominio Active directory o NT4</a></h5>
<div id="boxinfo"> Autore: <b><a href="http://openskills.info/user.php?ID=3">al</a></b> &#8211; Ultimo Aggiornamento: <b>2007-04-13 15:27:39</b> &#8211; Data di creazione: <b>2007-04-13 15:19:34</b><br /> Tipo Infobox: <b>TIPS</b> &#8211; Skill: <b>4- ADVANCED</b></div>
<p>E&#8217; possibile configurare Squid per autenticare gli utenti che possono usare il proxy usando le credenziali di un dominio Active Directory o di tipo NT4.</p>
<p>L&#8217;autenticazione si basa su winbind, il demone fornito con Samba che permette l&#8217;autenticazione degli utenti locali di una macchina Linux su un domain controller di un dominio di tipo Active Directory o NT4.</p>
<p> Il servizio winbind deve essere in esecuzione (anche non configurato) e la macchina su cui gira Squid deve aver joinato il dominio.</p>
<p> In <code>/etc/squid/squid.conf</code> devono essere presenti le seguenti configurazioni:</p>
<p> Settaggi relativi al sistema di autenticazione:<br /> <code>auth_param ntlm program /usr/bin/ntlm_auth --helper-protocol=squid-2.5-basic</code></p>
<p> Alternativa che negozia automaticamente la password dell&#8217;utente loggato sul dominio<br /> <code>auth_param ntlm program /usr/bin/ntlm_auth --helper-protocol= squid-2.5-ntlmssp</code></p>
<p> Se si vuole permettere accesso solo a utenti del gruppo &#8220;navigatori&#8221; del dominio &#8220;DOMINIO&#8221; usare invece questa alternativa:<br /> <code>auth_param ntlm program /usr/bin/ntlm_auth --helper-protocol=squid-2.5-ntlmssp --require-membership-of="DOMINIO+navigatori"</code><br /> Notare che &egrave; necessario avere &#8220;<code>winbind separator = +</code>&#8221; in smb.conf (il file di configurazione di Samba) se si lascia il separator normale \ non funziona! </p>
<p> Le seguenti righe devono essere invece sempre presenti:<br /> <code>auth_param ntlm children 5<br /> auth_param ntlm max_challenge_reuses 0<br /> auth_param ntlm max_challenge_lifetime 2 minutes<br /> auth_param ntlm use_ntlm_negotiate on</code></p>
<p> E&#8217; poi necessario configurare le acl di Squid per forzare la richiesta di autenticazione (cambiare gli ip della local_network secondo le proprie esigenze):<br /> <code>acl password proxy_auth REQUIRED<br /> acl local_network src <var>192.168.171.0/24</var><br /> http_access allow local_network password</code></p>
