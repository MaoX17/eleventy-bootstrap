---
title: "Configurazione di Postfix + Ldap"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2008-11-13"
permalink: "configurazione-di-postfix-ldap/"
layout: "template_posts_md"
---
<p>main.cf</p>
<p>mail_owner = postfix<br />
#<br />
myhostname = proxy-tmp.pippo.it</p>
<p>mydomain = pippo.it<br />
myorigin = $mydomain<br />
mydestination = $myhostname, localhost.$mydomain, localhost</p>
<p>mynetworks = 127.0.0.0/8 172.21.1.15/32 192.168.0.20/32 192.168.0.25/32 192.168.0.21/32 192.168.0.22/32</p>
<p>helpful_warnings = yes<br />
inet_protocols = ipv4</p>
<p>#If this parameter is non-empty (the default), then the Postfix SMTP server will reject mail for unknown local users.<br />
#To turn off local recipient checking in the Postfix SMTP server, specify &#8220;local_recipient_maps =&#8221; (i.e. empty).<br />
local_recipient_maps =</p>
<p>local_transport = error:local mail delivery is disabled<br />
virtual_alias_maps = hash:/etc/postfix/virtual</p>
<p>relay_domains =<br />
relay_recipient_maps =<br />
parent_domain_matches_subdomains = debug_peer_list smtpd_access_maps</p>
<p># Filtri sul &#8220;client&#8221; smtp che si connette al server<br />
#La connessione può avvenire dall&#8217;interno (solo x mail2k3 e le macchine in MZ e i server in DMZ) oppure da internet<br />
# Il default o comunque l&#8217;ultima opzione è permettere l&#8217;accesso perchè se si connettono da internet non posso specificarli a mano.<br />
##Devo specificare in access_client chi può fare cosa fra gli indirizzi che conosco.<br />
smtpd_client_restrictions =<br />
        permit_mynetworks,<br />
        check_client_access hash:/etc/postfix/maps/access_client<br />
        reject_rbl_client sbl.spamhaus.org,<br />
        reject_rbl_client zen.spamhaus.org,<br />
        permit</p>
<p>## Necessario per specificare il &#8220;next hop&#8221; verso exchange x mail in ricezione<br />
transport_maps = hash:/etc/postfix/transport</p>
<p># Filtri sul &#8220;RCPT TO&#8221; quindi sull&#8217;indirizzo di destinazione<br />
smtpd_recipient_restrictions =<br />
        check_recipient_access ldap:/etc/postfix/maps/ldap-access.cf,<br />
        check_recipient_access hash:/etc/postfix/maps/access_recipient,<br />
        permit_mynetworks,<br />
        reject_non_fqdn_recipient,<br />
        reject_invalid_hostname,<br />
        reject</p>
<p>## Controllo degli header (da implementare)<br />
header_checks = regexp:/etc/postfix/header_checks</p>
<p>readme_directory = no<br />
sample_directory = /etc/postfix<br />
sendmail_path = /usr/sbin/sendmail<br />
html_directory = no<br />
setgid_group = postdrop<br />
command_directory = /usr/sbin<br />
manpage_directory = /usr/local/man<br />
daemon_directory = /usr/libexec/postfix<br />
newaliases_path = /usr/bin/newaliases<br />
mailq_path = /usr/bin/mailq<br />
queue_directory = /var/spool/postfix<br />
data_directory = /var/lib/postfix<br />
debug_peer_level = 4<br />
&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8211;<br />
maps/access_recipient:</p>
<p>pippo.it                              551 Indirizzo inesistente. Si prega di Telefonare al +39 055.5449<br />
&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;<br />
maps/ldap-access.cf</p>
<p>version = 3<br />
server_host = dc01.pippo.local<br />
search_base = dc=pippo, dc=local<br />
query_filter = (&#038;(proxyAddresses=*smtp:%s*)(&#038;(!(userAccountControl:1.2.840.113556.1.4.803:=2)))(objectClass=*)(!(displayNamePrintable=nomail)))</p>
<p>result_attribute = mail</p>
<p>### ATTENZIONE  &#8211; Questa è la parte + importante e NON DOCUMENTATA! Occorre che la risposta ### sia: &#8221; OK username o mail&#8221;</p>
<p>result_format  =  OK %s<br />
bind = yes<br />
bind_dn = CN=utente,CN=Users,DC=pippo,DC=local<br />
bind_pw = password<br />
#debuglevel = 1</p>
<p>&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8211;</p>
<p>##################################################################<br />
ATTENZIONE  &#8211; Questa è la parte + importante e NON DOCUMENTATA! Occorre che la risposta sia:<br />
&#8220;OK username o mail&#8221;<br />
e NON vicevers come è documentato:<br />
&#8220;username o mail OK&#8221;<br />
##################################################################</p>
