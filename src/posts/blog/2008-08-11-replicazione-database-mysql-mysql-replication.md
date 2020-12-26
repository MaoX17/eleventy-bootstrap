---
title: "Replicazione Database MySQL  &#8211; Mysql replication"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2008-08-11"
permalink: "replicazione-database-mysql-mysql-replication/"
layout: "template_posts_md"
---
<p><tt>Sul MASTER:</tt></p>
<p><tt>ipotizzo che il master sia il 192.168.0.20</tt></p>
<p><tt></tt>&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212; /etc/my.cnf del Master 192.168.0.20 &#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8211;</p>
<p>[client]<br />
port            = 3306<br />
socket          = /tmp/mysql.sock</p>
<p>[mysqld]<br />
port            = 3306<br />
socket          = /tmp/mysql.sock<br />
skip-locking<br />
key_buffer = 256M<br />
max_allowed_packet = 1M<br />
table_cache = 256<br />
sort_buffer_size = 1M<br />
read_buffer_size = 1M<br />
read_rnd_buffer_size = 4M<br />
myisam_sort_buffer_size = 64M<br />
thread_cache = 8<br />
query_cache_size= 16M<br />
log-slow-queries=/var/log/mysql-slow-queries.log<br />
thread_concurrency = 8<br />
log-warnings</p>
<p><strong>server-id = 1<br />
relay-log = /usr/local/mysql/data/mysql-relay-bin<br />
relay-log-index = /usr/local/mysql/data/mysql-relay-bin.index<br />
master-info-file = /usr/local/mysql/data/mysql-master.info<br />
relay-log-info-file = /usr/local/mysql/data/mysql-relay-log.info<br />
log-bin = /usr/local/mysql/data/mysql-bin<br />
</strong><br />
[mysqldump]<br />
quick<br />
max_allowed_packet = 16M</p>
<p>[mysql]<br />
no-auto-rehash</p>
<p>[isamchk]<br />
key_buffer = 128M<br />
sort_buffer_size = 128M<br />
read_buffer = 2M<br />
write_buffer = 2M</p>
<p>[myisamchk]<br />
key_buffer = 128M<br />
sort_buffer_size = 128M<br />
read_buffer = 2M<br />
write_buffer = 2M</p>
<p>[mysqlhotcopy]<br />
interactive-timeout</p>
<p>&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;-<br />
<tt></tt></p>
<p><tt>operazioni sul master:</tt></p>
<p><tt>mysql</tt></p>
<p><tt></tt>GRANT SUPER,REPLICATION CLIENT,REPLICATION SLAVE,RELOAD ON *.* to slaveuser@&#8217;192.168.0.25&#8242; identified by &#8216;slavepw&#8217;;<br />
FLUSH PRIVILEGES;<br />
<tt></tt></p>
<p><tt></tt>&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212; /etc/my.cnf dello Slave 192.168.0.25 &#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8211;</p>
<p>[mysqld]<br />
datadir=/var/lib/mysql<br />
socket=/var/lib/mysql/mysql.sock<br />
# Default to using old password format for compatibility with mysql 3.x<br />
# clients (those using the mysqlclient10 compatibility package).<br />
old_passwords=1</p>
<p><strong># changes made to do slave<br />
server-id = 2<br />
relay-log = /var/lib/mysql/mysql-relay-bin<br />
relay-log-index = /var/lib/mysql/mysql-relay-bin.index<br />
#log-error = /var/lib/mysql/mysql.err<br />
master-info-file = /var/lib/mysql/mysql-master.info<br />
relay-log-info-file = /var/lib/mysql/mysql-relay-log.info<br />
##datadir = /var/lib/mysql<br />
master-host=192.168.0.20<br />
# Nome con cui lo slave si presenta al master<br />
report-host = 192.168.0.25<br />
master-user=slaveuser<br />
master-password=slavepw<br />
#master-port=3300<br />
master-connect-retry=30<br />
# end slave setup</strong></p>
<p><strong></strong> log-warnings</p>
<p>## Risolve un bug<br />
skip-bdb</p>
<p>[mysql.server]<br />
user=mysql<br />
basedir=/var/lib</p>
<p>[mysqld_safe]<br />
err-log=/var/log/mysqld.log<br />
pid-file=/var/run/mysqld/mysqld.pid</p>
<p>&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;-</p>
<p>operazioni sullo Slave:</p>
<p>mysql -u root -p<br />
&gt; load data from master;</p>
<h4>Problemi e soluzioni</h4>
<p>Appena configurato il master-slave ho avuto i seguenti errori nei log  e conseguenti problemi di replica master-slave</p>
<p>Error reading slave log configuration<br />
080811 15:01:08 [ERROR] Error reading slave log configuration<br />
080811 15:01:08 [ERROR] Failed to initialize the master info structure</p>
<p>Ho risolto stoppando lo slave, stoppando il master e cancellando dal master i file:<br />
/usr/local/mysql/data/mysql-relay-bin<br />
/usr/local/mysql/data/mysql-relay-bin.index<br />
/usr/local/mysql/data/mysql-master.info<br />
/usr/local/mysql/data/mysql-relay-log.info<br />
/usr/local/mysql/data/mysql-bin</p>
<p>Saluti a tutti</p>
<p>Maurizio</p>
