---
title: "Synce Linux Tytn Windows mobile 6"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2008-04-29"
permalink: "synce-linux-tytn-windows-mobile-6/"
layout: "template_posts_md"
---
<p>Thanks to<br /><a href="http://www.blogger.com/img/gl.link.gif">http://www.sbontolo.com/?q=comment/reply/1023/&amp;quote=1</a></p>
<p>Tutto ciò di cui ho avuto bisogno è un solo sito web e cioè <a href="http://www.sbontolo.com/www.synce.org">www.synce.org</a> .<br />Questo è il sito ufficiale dell&#8217;applicazione SynCE che si occupa di colmare il gap con windows in quanto a sincronizzazione.<br />Ma bando alle ciance e vediamo un pò cosa fare.<br />Iniziamo modificando la lista dei repository /etc/apt/sources.list e aggiungendo  </p>
<div align="left">
<pre><u><strong>deb http://ppa.launchpad.net/synce/ubuntu gutsy main<br />deb-src http://ppa.launchpad.net/synce/ubuntu gutsy main</strong></u></pre>
</div>
<p align="left">chiaramente potete anche aggiungerli tramite <em>Adept</em>.<br />Dopo aver aggiornato con un sudo <em>apt-get update</em> avremo a disposizione i repository.</p>
<p align="left">Prima di procedere è <u><strong>obbligatorio</strong></u> aggiornare i driver USB<br />eccovi i comandi da dare:</p>
<p>Scolleghiamo i vecchi driver con:</p>
<div align="left">
<pre><u><strong>sudo rmmod rndis_host cdc_ether usbnet</strong></u></pre>
</div>
<p align="left">Adesso rimuoviamoli con: </p>
<div align="left">
<pre><strong>sudo rm /lib/modules/`uname -r`/kernel/drivers/net/usb/{rndis_host,cdc_ether,usbnet}.ko</strong></pre>
<div align="left">
<p>Ora installiamo i nuovi con</p>
</p></div>
</p></div>
<div align="left">
<pre><u><strong>sudo apt-get install usb-rndis-source cdbs</strong></u></pre>
<p></p>
<pre><u><strong>sudo module-assistant auto-install usb-rndis</strong></u></pre>
</div>
<p>Adesso installiamo i nuovi driver con</p>
<pre><u><strong>sudo apt-get install odccm librra0-tools librapi2-tools</strong></u></pre>
<p>Ora proviamo a collegare il dispositivo e in un terminale diamo il comando </p>
<p><u><strong>pls</strong></u></p>
<p> Dovremmo avere una lista simile a questa</p>
<p><img loading="lazy" src="http://www.sbontolo.com/files/u1/ps.png" alt=" " height="247" width="481" /></p>
<p>Se invece dando il comando <em>pls</em> avete avuto un errore simile a questo:</p>
<pre>. WARNING **: synce_info_from_odccm: Failed to get a connection for <device_name>:<br />Not authenticated, you need to call !ProvidePassword with the correct password. pls:<br />Could not find configuration at path '(Default)'<br /></pre>
<p>allora il vostro dispositivo è protetto da password, per cui se avete Ubuntu vi serve SynCE-GNOME se avete Kubuntu (come me) installate SynCE-KPM.</p>
<p>Ok siamo a buon punto, adesso bisogna passare alla sincronizzazione vera e propria.<br />Aggiungiamo questi repository:</p>
<pre>deb http://opensync.gforge.punktart.de/repo/opensync-0.21/ feisty main<br />deb-src http://opensync.gforge.punktart.de/repo/opensync-0.21/ feisty main<br /></pre>
<p>e dopo aver aggiornato installiamo opensync con  :</p>
<pre><u><strong>sudo apt-get install libopensync-plugin-kdepim libopensync-plugin-python msynctool</strong></u></pre>
<p>come vedete ho usato i repository per la Feisty, infatti quelli er Hardy non sono completi,credo che risolveranno a breve.</p>
<p>Poi installiamo i <strong>SynCE</strong> con</p>
<pre>sudo apt-get install synce-sync-engine opensync-plugin-synce</pre>
<p>Ci siamo, adesso lanciamo SynCE engine con</p>
<p><strong><u>synce-engine</u></strong></p>
<p>Io ho ottenuto questo errore: </p>
<pre>File "/usr/bin/sync-engine", line 84, in <module><br />   configObj = Config.Config(progopts)<br /> File "/usr/lib/python2.5/site-packages/SyncEngine/config.py", line 292, in __init__<br />   oldconf = os.path.join(self.path,"config.xml")<br />AttributeError: Config instance has no attribute 'path'</pre>
<p>Risolto copiando il file <a href="http://synce.svn.sf.net/svnroot/synce/trunk/sync-engine/config/config.xml">config.xml</a>  nella cartella    ~/.synce/ e rilanciano l&#8217;engine.<br />Adesso che tutto funziona bisogna creare una partnership tra PC e dispositivo mobile. In un altro terminale,date questo comando</p>
<pre>$ create_partnership.py "Linux desktop" "Contacts,Calendar"<br /><br /><br />Se da il seguente errore:<br />[root@localhost ~]# create_partnership.py "Linux desktop" "Contacts,Calendar"<br />Creating partnership...<br />error: failed to create partnership<br />  org.freedesktop.DBus.Python.NameError: Traceback (most recent call last):<br /> File "/usr/lib/python2.5/site-packages/dbus/service.py", line 655, in _message_cb<br />   retval = candidate_method(self, *args, **keywords)<br /> File "/usr/lib/python2.5/site-packages/SyncEngine/kernel.py", line 689, in CreatePartnership<br />   id=self.PshipManager.CreateNewPartnership(name, sync_items).info.id<br /> File "/usr/lib/python2.5/site-packages/SyncEngine/pshipmgr.py", line 389, in CreateNewPartnership<br />   raise NoFreeSlots("all slots are currently full")<br />NameError: global name 'NoFreeSlots' is not defined<br /><br />significa che avete troppe partnership settate sul dispositivo.<br /><br />fare<br />list_partnerships.py<br />per vedere le partnership impostate<br />e usare<br />/usr/bin/delete_partnership.py<br />per eliminarne una.<br /><br /><br /></pre>
<p>Dove <em>Linux Desktop</em> è il nome che avrete dato al vostro PC (potete scegliere ciò che vi piace) mentre nella lista degli elementi da sincronzzare ci sono i contatti e il calendari. Potete anche aggiungere Tasks e Files.</p>
<p>Adesso passiamo a <strong>OpenSync</strong>.<br />Non sbraitate, abbiamo quasi finito!!<br />Vediamo quali plugin sono installati con il comando</p>
<pre>$ msynctool --listplugins</pre>
<p>Nella lista deve esserci il plugin chiamato synce-opensync-plugin.<br />Se non ci fosse scaricatelo da qui<a href="http://synce.svn.sf.net/svnroot/synce/trunk/sync-engine/plugins/synce-opensync-plugin-2x.py"> synce-opensync-plugin</a>  e mettetelo nella cartella /usr/lib/opensync/python-plugins</p>
<p>Creiamo un gruppo e aggiungiamoci i plugin</p>
<pre>$ msynctool --addgroup synce-sync<br />$ msynctool --addmember synce-sync synce-opensync-plugin<br />$ msynctool --addmember synce-sync kdepim-sync<br /></pre>
<p> Fatto! Se non avete spento sync-engine basta fare una sincronizzazione con </p>
<pre>$ msynctool --sync synce-sync</pre>
<p>Per provare che la sincronizzazione sia andata a buon fine provate a lanciare ad esempio Kontact (che gestisce i contatti appunto) e dovreste vedere tutti i contatti che avete anche sul palmare.</p>
<p>Io in realtà sono andato avanti perchè non riuscivo a sfogliare la card nel nel palmare.<br />Per far ciò mi sono affidato ad una programma nato per Gnome e cioè Nautilus.<br />Se vi interessa potete seguire i pochi passaggi a questo indirizzo</p>
<p></p>
<p><a href="http://www.synce.org/moin/SynceTools/SynceVfs">http://www.synce.org/moin/SynceTools/SynceVfs</a></p>
<p></p>
<p></p>
