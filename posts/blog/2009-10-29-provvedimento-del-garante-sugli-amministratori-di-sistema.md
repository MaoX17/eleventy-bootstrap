---
title: "Provvedimento del garante sugli Amministratori di sistema"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2009-10-29"
permalink: "provvedimento-del-garante-sugli-amministratori-di-sistema/"
layout: "template_posts_md"
---
<p>Premetto che <span style="text-decoration: line-through;">la ritengo una gran cagata&#8230; e completamente inutile, visto che</span> i log NON HANNO ALCUN VALORE PROBATORIO!</p>
<p>Ma visto che dobbiamo adeguarci&#8230; cerchiamo di farlo a COSTO ZERO!</p>
<p>Io ho risolto (sto risolvendo) così:</p>
<h2>Installo <strong>rsyslog</strong> con logging su file sul logserver</h2>
<p>Su un server <strong>linux CentOs 5.*</strong></p>
<div><span style="font-size: x-small; font-family: Arial;">yum install rsyslog*</span></div>
<div><span style="font-size: x-small; font-family: Arial;">vim /etc/sysconfig/rsyslog</span></div>
<div><span style="font-size: x-small; font-family: Arial;">sostituisco</span></div>
<div><span style="font-size: x-small; font-family: Arial;">SYSLOGD_OPTIONS=&#8221;-m  0&#8243;<br />
con<br />
SYSLOGD_OPTIONS=&#8221;-m 0 -r&#8221;</span></div>
<div><span style="font-size: x-small; font-family: Arial;">vim /etc/rsyslog.conf</span></div>
<div>###################################################</div>
<div><span style="font-size: x-small; font-family: Arial;">$template DynAuth, &#8220;/var/log/TUTTI/%$MONTH%/%$DAY%/%FROMHOST%.log&#8221;<br />
local1.*,user.*,auth.*,authpriv.*,kern.* ?DynAuth<br />
$EscapeControlCharactersOnReceive off<br />
%msg:::space-cc%<br />
*.info;mail.none;authpriv.none;cron.none                /var/log/messages<br />
authpriv.*                                              /var/log/secure<br />
mail.*                                                  -/var/log/maillog<br />
cron.*                                                  /var/log/cron<br />
*.emerg                                                 *<br />
uucp,news.crit                                          /var/log/spooler<br />
local7.*                                                /var/log/boot.log<br />
local3.*                                                /var/log/varie.log</span></div>
<div>###################################################</div>
<div>vedi<span style="font-size: x-small; font-family: Arial;"><a title="http://openskill.info/infobox.php?ID=1475" href="http://openskill.info/infobox.php?ID=1475"> http://openskill.info/infobox.php?ID=1475</a></span></div>
<div>
<h2>Abilitare il logging su tutti i server linux</h2>
<p>Su un qualsiasi server <strong>linux</strong></p>
</div>
<div>cat /etc/syslog.conf</p>
<p>auth.*;authpriv.*;local1.*          @logserver.dominio</p>
</div>
<div>Su ogni server devo poi creare utenti PERSONALI da assegnare a tutti gli AdS:</div>
<div>useradd -G wheel -m -s /bin/bash username</div>
<div>passwd username</div>
<div>Aggiungo</div>
<div>AllowUsers username</div>
<div>in /etc/ssh/sshd_config</div>
<div>lancio</div>
<div>visudo</div>
<div>e aggiungo o decommento la riga seguente:</div>
<div>%wheel  ALL=(ALL)       ALL</div>
<div>In questo modo gli AdS dovranno loggarsi con il loro account ed usare sudo</div>
<div>(consiglio il sudo -i o sudo -u per diventare root)</div>
<div>Il vantaggio dell&#8217;uso di sudo sta nel fatto che ho potuto cambiare password a root e metterla in cassaforte senza la necessità di comunicarla a tutti gli AdS (dato che sudo permette di diventare root inserendo la propria password)</div>
<div>
<h2>Abilitare il logging su Oracle 9i</h2>
</div>
<div><span style="font-size: x-small; font-family: Arial;">mkdir /var/log/oracle/<br />
chown -R oracle:dba /var/log/oracle/<br />
SHOW  PARAMETER audit<br />
ALTER SYSTEM SET audit_trail=OS SCOPE=SPFILE;<br />
ALTER  SYSTEM SET audit_sys_operations=TRUE SCOPE=SPFILE;<br />
ALTER SYSTEM SET  audit_file_dest=&#8221;/var/log/oracle&#8221; SCOPE=SPFILE;<br />
AUDIT SESSION;<br />
SHUTDOWN  IMMEDIATE<br />
startup</span></div>
<div>Occorre poi creare un cron sul logserver che filtra solo i login/logout  e prelevi i risultati.</div>
<div>Nella ver 9i infatti non è possibile inviare i log a un remote syslog</div>
<div>
<h2>Abilitare il logging su Postgres<span style="font-size: x-small; font-family: Arial;"> </span></h2>
<p><span style="font-size: x-small;"><span style="font-family: Arial;">Modifico<br />
/usr/local/pgsql/data/postgresql.conf<br />
come segue:</span></span></p>
<p><span style="font-size: x-small;"><span style="font-family: Arial;">log_destination = &#8216;syslog&#8217;</span></span></p>
<div><span style="font-size: x-small; font-family: Arial;">syslog_facility = &#8216;LOCAL1&#8217;<br />
syslog_ident = &#8216;postgres&#8217;</span></div>
<div><span style="font-size: x-small; font-family: Arial;"> </span></div>
<div><span style="font-size: x-small; font-family: Arial;">log_connections = true<br />
log_disconnections = true<br />
log_duration =  true</span></div>
</div>
<div><span style="font-size: x-small; font-family: Arial;">log_hostname = true</span></div>
<div>
<h2>Abilitare il logging su MySql</h2>
</div>
<div>Dato che mysql non supporta la scrittura di log su syslog si può risolvere nel seguente modo:</p>
<p>Nel file<br />
/etc/my.cnf</p>
<p>nella sezione<br />
[mysqld]</p>
<p>aggiungo<br />
log=/var/log/mysql.log</p>
<p>Poi lancio all&#8217;avvio il seguente comando:</p>
<p><span style="text-decoration: line-through;">tail -f /var/log/mysql.log | egrep &#8216;Connect|Quit&#8217; | logger -p LOCAL1.info -t mysql &amp;</span></p>
<p>(ringrazio Stefano Coletta (http://www.mindcreations.com/) per la precisazione:</p>
<p><em>l’egrep va corredato dall’opzione –line-buffered altrimenti non funziona  correttamente</em>)</p>
<p>tail -f /var/log/mysql.log | egrep –line-buffered &#8216;Connect|Quit&#8217; | logger -p  LOCAL1.info -t mysql &amp;</p>
<p>e lo salvo nell&#8217; rc.local</p>
<p>e lo metto anche nella sezione <strong>postrotate </strong>del <strong>logrotate </strong>in<br />
/etc/logrotate.d/mysql-log-rotate</p>
<p>Altrimenti, come suggeritomi dal buon <em>Alessandro Corbelli</em> di <em><a href="http://www.web4web.it"><span class="moz-txt-link-abbreviated">www.web4web.it</span></a></em> si possono usare le named pipe:</p>
<p><a href="http://www.linuxjournal.com/article/2156">http://www.linuxjournal.com/article/2156</a></p>
<p><a href="http://www.linuxjournal.com/content/using-named-pipes-fifos-bash">http://www.linuxjournal.com/content/using-named-pipes-fifos-bash</a></p>
<p><em>Non loggo tutto su file ma ho creato una named pipe ed in inittab ho inserito, in respawn, uno script<span> </span> così composto<span> </span></em></p>
<p><em><span> </span>while [ true ]; do<br />
tail -f &lt;namedpipe&gt; | egrep &#8216;Connect|Quit&#8217; | logger&#8230;<br />
done</em></p>
<p><em>Le prestazioni sono &#8216;abbastanza&#8217; decenti.<br />
Il while sarebbe anche superfluo&#8230;</em></p>
<p>Occorre fare attenzione a un particolare:</p>
<p><strong>Se si utilizza la named pipe con lo script in inittab, nello script NON deve esserci il tail, ma il cat.</strong></p>
<p><strong>Quindi lo script diventa:</strong></p>
<p>while [ true ]; do<br />
<strong>cat</strong> &lt;namedpipe&gt; | egrep &#8216;Connect|Quit&#8217; | logger -p LOCAL1.info -t mysql<br />
done</p>
<p><em><br />
</em></p>
</div>
<div>
<h2>Abilitare il logging sui server Windows</h2>
<p>Sui server <strong>windows</strong></p>
</div>
<div>
<p>Ho usato snare:</p>
<p>SnareSetup-3.1.5-MultiArch.exe</p>
<p><a href="http://www.intersectalliance.com/projects/SnareWindows/index.html">http://www.intersectalliance.com/projects/SnareWindows/index.html</a></p>
<p>Come “Destination snare server address” ho messo lo stesso ip del log server e come porta la 514</p>
<h2>Abilitare il logging su Exchange</h2>
<div>Per abilitare il logging sel mailserver:</p>
<p><strong>Gestore sistema Exchange</strong> -&gt; Gruppi amministrativi -&gt; &lt;nome&gt;  -&gt; server -&gt; NomeServer -&gt; tasto dx sul server -&gt; registrazione Diagnostica<br />
-&gt; MSExchangeIS -&gt; private o cassetta postale -&gt; Accessi = minima; Controllo accessi = minima (oppure logons=minima e access control = minima)</p>
<p>Poi su <strong>snare</strong>:<br />
Creo un nuovo oggetto:<br />
Identify the high level event = Any event(s)<br />
Event ID Search Term = 1009,1016,1013,1029<br />
General Search Term = *<br />
Select the User Match Type = Include<br />
User Search Term = *admin*<br />
Identify the event types to be captured = Success Audit + Failure Audit<br />
Identify the event logs = Security  + Application<br />
Select the Alert Level = Critical</p>
</div>
<div>
<h2>Abilitare il logging sul FileServer</h2>
</div>
<div>Creo un nuovo oggetto:<br />
Identify the high level event = Any event(s)<br />
Event ID Search Term = 538,540,552,551,682,683,528<br />
General Search Term = *<br />
Select the User Match Type = Include<br />
User Search Term = *admin*<br />
Identify the event types to be captured = TUTTI<br />
Identify the event logs = Security<br />
Select the Alert Level = Critical</div>
<h2>Immodificabilità dei log</h2>
<p>Ogni notte, sul logserver, parte un cron che mi crea un md5 di tutti i file di log</p>
<p>Lo chiamo Z_calcola_md5.sh in modo che il cron lo chiama da ultimo DOPO il logrotate</p>
<p>cat /etc/cron.daily/Z_calcola_md5.sh</p>
<p>########################################<br />
#!/bin/bash<br />
TMP=`/bin/date &#8211;date=&#8217;1 days ago&#8217; +%m/%d`<br />
FILE_NAME=&#8221;MD5-`/bin/date &#8211;date=&#8217;1 days ago&#8217; +%m-%d`.md5&#8243;<br />
DEST_DIR01=&#8221;/var/log/TUTTI&#8221;<br />
DEST_DIR=&#8221;$DEST_DIR01/$TMP/&#8221;<br />
MD5_DIR=&#8221;/var/log/TUTTI/MD5/&#8221;<br />
cd $MD5_DIR<br />
find  $DEST_DIR  -type f -exec md5sum {} \;  &gt; $FILE_NAME<br />
#########################################</p>
<p>A questo punto posso creare un tar.gz e salvare i log su un dvd o effettuarne un backup</p>
</div>
<div id="_mcePaste" style="overflow: hidden; position: absolute; left: -10000px; top: 1995px; width: 1px; height: 1px;">
<p><a href="http://www.linuxjournal.com/article/2156">http://www.linuxjournal.com/article/2156</a></p>
<p><a href="http://www.linuxjournal.com/content/using-named-pipes-fifos-bash">http://www.linuxjournal.com/content/using-named-pipes-fifos-bash</a></p>
</div>
