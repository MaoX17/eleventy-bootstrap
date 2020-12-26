---
title: "Che figata l&#8217;LVM!!"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2013-01-23"
permalink: "che-figata-llvm/"
layout: "template_posts_md"
---
<p>Comandi base per estendere e ridurre il filesystem su LVM2</p>
<p>Aumento dello spazio disco:</p>
<pre>
telinit 1
umount /opt
fdisk /dev/sdc (disco nuovo)
creo partizione sdc1 di tipo LVM (8e)
pvcreate /dev/sdc1
vgextend dati /dev/sdc1
lvextend /dev/dati/opt /dev/sdc1
e2fsck -f /dev/dati/opt
resize2fs /dev/dati/opt
mount /dev/dati/opt /opt
</pre>
<p>Diminuzione dello spazio disco:</p>
<pre>
telinit 1
umount /opt
e2fsck -f /dev/dati/opt
resize2fs -p /dev/dati/opt 88G (dove 88G è un valore leggermente più basso del valore totale a cui sottraggo la capacità del disco che sto togliendo. Es. Tot=100GB Disco-da-togliere=10GB -&gt; faccio un resize a 88GB per avere margine)
lvreduce -L 88G /dev/dati/opt
vgreduce dati /dev/sdc1 (disco da togliere)
pvremove /dev/sdc1
(i seguenti passaggi sono per recuperare lo spazio di margine che avevo lasciato - circa 2 GB)
lvextend -l +100%FREE /dev/dati/opt
e2fsck -f /dev/dati/opt
resize2fs /dev/dati/opt
</pre>
<p>FATTO!!!!</p>
