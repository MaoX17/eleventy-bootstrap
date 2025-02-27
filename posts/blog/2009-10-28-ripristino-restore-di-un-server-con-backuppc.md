---
title: "Ripristino restore di un server con BackupPc"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2009-10-28"
permalink: "ripristino-restore-di-un-server-con-backuppc/"
layout: "template_posts_md"
---
<p><strong>Installazione di una Distro linux &#8220;simile&#8221; a quella da ripristinare</strong><br />
Nelle mie prove ho installato, sulla macchina su cui eseguire il ripristino, la stessa ver. di distribuaione linux della macchina da ripristinare e tutto è andato a buon fine<br />
Ho notato che la presenza del kudzu (riconoscimento hardware) è molto utile.<br />
Conviene, quindi, in questa fase, installare kudzu e farlo partire al boot</p>
<p><strong>Copia di alcuni file originali</strong><br />
I seguenti file/cartelle sono necessari per il primo boot successivo al ripristino e quindi ne salvo una copia</p>
<p>cp -r /boot /boot.ORIG<br />
cp /etc/grub.conf /etc/grub.conf.ORIG<br />
cp /etc /fstab /etc /fstab.ORIG<br />
cp /etc /mtab /etc /mtab.ORIG<br />
cp /etc/modprobe.conf /etc/modprobe.conf.ORIG<br />
<strong> Installare e configurare rsyncd</strong><br />
Sulle CentOS:<br />
yum install rsync rsyncd xinetd<br />
vim /etc/rsyncd.conf<br />
##################################<br />
[root]<br />
comment = root area<br />
path = /<br />
read only = no<br />
list = yes<br />
uid = root<br />
gid = root<br />
hosts allow = 127.0.0.0/8 10.100.100.14/32 10.100.100.0/24<br />
##################################</p>
<p>/etc/init.d/xinetd restart</p>
<p>controllare che la porta 873 sia in ascolto</p>
<p><strong>Eseguo il ripristino da BackupPc</strong><br />
Configuro la macchina su cui devo eseguire il ripristino come se fosse una macchina da backuppare.<br />
[Nel nostro backuppc esiste già una macchina che si chiama &#8220;test&#8221; configurata sull&#8217;ip 10.100.100.3 che serve per i ripristini ]<br />
Mi collego sul profilo della macchina da ripristinare -&gt; naviga nel backup -&gt; seleziona tutto ripristina<br />
Ripristino dei file sull&#8217;host -&gt; Scegliere la macchina SU CUI ESEGUIRE IL RIPRISTINO (test)<br />
Ripristino dei file sulla condivisione -&gt; root<br />
Ripristino dei file al di sotto della directory (relativa alla condivisione)  -&gt; /<br />
Ed avvio il ripristino (che ci mette una vita!)</p>
<p><strong> Operazioni Post-Ripristino</strong><br />
Finito il ripristino mi collego alla macchina appena restorata e ri-copio i file originali:</p>
<p>cp -r /boot /boot.RECOVERY<br />
cp /etc/grub.conf /etc/grub.conf.RECOVERY<br />
cp /etc /fstab /etc /fstab.RECOVERY<br />
cp /etc /mtab /etc /mtab.RECOVERY<br />
cp /etc/modprobe.conf /etc/modprobe.conf.RECOVERY</p>
<p>cp -r /boot.ORIG /boot<br />
cp /etc/grub.conf.ORIG /etc/grub.conf<br />
cp /etc/fstab.ORIG /etc/fstab<br />
cp /etc/mtab.ORIG /etc/mtab<br />
cp /etc/modprobe.conf.ORIG /etc/modprobe.conf</p>
<p>a questo punto re-installo il grub:</p>
<p>grub-install –-recheck /dev/sda</p>
<p>[Nota:<br />
in realtà nella prova che ho fatto le operazioni appena descritte le ho fatte da una slax live con la seguente procedura:</p>
<p>loadkeys it<br />
mount -o bind /dev /mnt/sda1/dev<br />
mount -t proc none /mnt/sda1/proc<br />
chroot /mnt/sda1 /bin/bash<br />
grub-install /dev/sda</p>
<p>SE GRUB DA ERRORE<br />
/dev/sda1 does not have any corresponding BIOS drive.</p>
<p>allora usa il seguente comando:<br />
grub-install –recheck /dev/sda<br />
]</p>
<p>Riavviare il server e configurarlo correttamente in rete</p>
