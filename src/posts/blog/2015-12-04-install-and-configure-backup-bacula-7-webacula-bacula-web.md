---
title: "install and configure backup bacula 7 webacula bacula-web"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2015-12-04"
permalink: "install-and-configure-backup-bacula-7-webacula-bacula-web/"
layout: "template_posts_md"
icon:
  - linux
  - bacula

---
<p># Bacula Step by Step</p>
<p>Per maggiori informazioni, aggiornamenti ed esempi di configurazione clicca qui<br />
<a href="https://github.com/MaoX17/Bacula-7-step-by-step">https://github.com/MaoX17/Bacula-7-step-by-step</a></p>
<p>## Installazione</p>
<p>yum install yum install mysql mysql-devel mysql-server mysql-libs perl-DBD-MySQL perl-DBI</p>
<p>yum install php-*</p>
<p>wget https://repos.fedorapeople.org/repos/slaanesh/bacula7/epel-bacula7.repo<br />
cp epel-bacula7.repo /etc/yum-repos.d/<br />
yum update</p>
<p>yum install mt*</p>
<p>yum install bacula*</p>
<p>yum install epel-release</p>
<p>## Configurazione</p>
<p>cd /usr/libexec/bacula/</p>
<p>./create_mysql_database<br />
./make_mysql_tables<br />
./grant_mysql_privileges</p>
<p>Collego bacula a mysql<br />
alternatives &#8211;config libbaccats.so</p>
<p>### Impostazione per la libreria automatizzata (Sun StorageTek L40 Tape Library)</p>
<p>vim /usr/libexec/bacula/mtx-changer.conf<br />
offline=1<br />
offline_sleep=60<br />
load_sleep=60<br />
inventory=0<br />
vxa_packetloader=0<br />
debug_log=1</p>
<p>#### Se la libreria conteneva dati e si vuole una situazione pulita</p>
<p>prima di fare RELABEL</p>
<p>##### Script per riavvolgere i nastri e svuotarli<br />
for i in {1..40}<br />
do<br />
echo $i<br />
/usr/libexec/bacula/mtx-changer /dev/sg3 load $i /dev/st0 0 &amp;&amp; mt -f /dev/st0 rewind &amp;&amp; mt -f /dev/st0 weof &amp;&amp; mt -f /dev/st0 rewind &amp;&amp; /usr/libexec/bacula/mtx-changer /dev/sg3 unload $i /dev/st0 0<br />
done</p>
<p>#### Label dei volumi (nastri) con Barcodes</p>
<p>bconsole<br />
label barcodes</p>
<p>##### Note<br />
If your autochanger has barcode labels, you can label all the Volumes in your autochanger one after another by using the label barcodes command. For each tape in the changer containing a barcode, Bacula will mount the tape and then label it with the same name as the barcode. An appropriate Media record will also be created in the catalog. Any barcode that begins with the same characters as specified on the &#8220;CleaningPrefix=xxx&#8221; command, will be treated as a cleaning tape, and will not be labeled. For example with:</p>
<p>Please note that Volumes must be pre-labeled to be automatically used in the autochanger during a backup. If you do not have a barcode reader, this is done manually (or via a script).</p>
<p>Pool {<br />
Name &#8230;<br />
Cleaning Prefix = &#8220;CLN&#8221;<br />
}<br />
Any slot containing a barcode of CLNxxxx will be treated as a cleaning tape and will not be mounted.</p>
<p>#### Label del volume per il backup del Catalog<br />
bconsole<br />
label<br />
Automatically selected Catalog: MyCatalog<br />
Using Catalog &#8220;MyCatalog&#8221;<br />
The defined Storage resources are:<br />
1: File1<br />
2: File2<br />
3: STK<br />
Select Storage resource (1-3): 1<br />
Enter new Volume name: Vol-File-Bkp<br />
Defined Pools:<br />
1: Default<br />
2: Nastri-Win<br />
3: Nastri-LNX<br />
4: File<br />
5: Scratch<br />
Select the Pool (1-5): 1</p>
<p>Catalog record for Volume &#8220;Vol-File-Bkp&#8221;, Slot 0 successfully created.</p>
<p>*quit</p>
<p>#### ATTENZIONE In caso di errori (catalog not found)</p>
<p>check the permissions of your bacula-dir.conf. Your bacula-dir runs as user bacula and MUST have<br />
enough permissions to read its bacula-dir.conf (and also the query.sql).</p>
<p>chmod -R 777 /etc/bacula</p>
<p>## Installazione di Webacula<br />
(http://webacula.sourceforge.net/)</p>
<p>download and unpack webacula7</p>
<p>mv webacula-7.0.0 /usr/share/webacula<br />
cp /usr/share/webacula/install/apache/webacula.conf /etc/httpd/conf.d/</p>
<p>### Installo i componenti necessari a webacula</p>
<p>yum install php-ZendFramework-full.noarch php-ZendFramework-Auth-Adapter-Ldap.noarch php-ZendFramework-Db-Adapter-Mysqli.noarch php-ZendFramework-Db-Adapter-Pdo-Mysql.noarch</p>
<p>### Imposto i permessi per webacula tramite sudo</p>
<p>visudo:<br />
&#8230;&#8230;<br />
Defaults requiretty</p>
<p>### Per webacula<br />
Defaults:apache !requiretty<br />
apache ALL = NOPASSWD: /usr/sbin/bconsole, /sbin/stop</p>
<p>### Imposto la password di webacula<br />
./password-to-hash.php ##PASSWORD##</p>
<p>paste it in db.conf</p>
<p>### Ulteriori configurazioni di webacula<br />
cd /usr/share/webacula/<br />
vim application/config.ini</p>
<p>cd /usr/share/webacula/install<br />
./check_system_requirements.php</p>
<p>cd MySql/<br />
./10_make_tables.sh<br />
./20_acl_make_tables.sh</p>
<p>#### In caso estremo (per risolvere i problemi di login):<br />
mysql<br />
use bacula<br />
update webacula_users set pwd=&#8217;$P$BMAiISUFah71ZDpzy1Vx1emAZU5Rli1&#8242; where id = 1000;</p>
<p>## Installazione di Bacula Web<br />
(http://www.bacula-web.org/)<br />
download bacula-web 7<br />
The latest version Bacula-Web is available through the project site download page<br />
http://www.bacula-web.org/download.html</p>
<p>Go to your Apache root&#8217;s folder<br />
cd /var/www/html<br />
mkdir -v bacula-web<br />
tar -xzvf bacula-web.tar.gz -C /var/www/html/bacula-web<br />
chown -Rv apache: /var/www/html/bacula-web<br />
chmod -Rv ug+w /var/www/html/bacula-web/application/view/cache</p>
<p>From the installation folder, go to the folder mentioned below<br />
application/config/</p>
<p>&#8211; Open the file config.php.sample and modify the settings regarding your installation<br />
&#8211; Save this file as config.php in the same folder</p>
<p>### Test</p>
<p>Open your web browser and go to the address below</p>
<p>http://youserver/bacula-web/test.php</p>
<p>## RESTART BACULA FULL<br />
for i in `ls /etc/init.d/bacula-*`; do $i $1; done</p>
