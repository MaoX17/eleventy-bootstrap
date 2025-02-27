---
title: "lilo su hdc invece che hda"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2008-04-23"
permalink: "lilo-su-hdc-invece-che-hda/"
layout: "template_posts_md"
---
<h2><a href="http://www.pluto.it/files/ildp/HOWTO/LILO/LILO.html#toc4">Installare su <code>hdc</code> per avviarlo come <code>hda</code> usando <code>bios=</code></a></h2>
<p>Lilo permette di mappare l&#8217;immagine del kernel da un disco e di istruire il BIOS perché la recuperi da un altro disco.  Per esempio, a me capita spesso di installare Linux su un disco collegato come <code>hdc</code> (disco principale del controller secondario), e di avviarlo come sistema autonomo sul controller IDE primario di un altro computer. Ho fatto una copia del floppy di installazione in una piccola partizione, per poter installare su <code>hdc</code> eseguendo <em>chroot</em> su una console virtuale, continuando ad usare il sistema per fare altro.</p>
<p>Il file <em>lilo.conf</em> usato per installare Lilo ha questo aspetto:</p>
</p>
<pre># Questo file deve essere usato da un sistema che giri su /dev/hdc<br />boot = /dev/hdc   # sovrascrive l'MBR di hdc<br />disk = /dev/hdc   # specifica come hdc verrà visto:<br />  bios = 0x80    #  il bios lo vedrà come primo disco<br />delay = 0<br />vga = 0<br /><br />image = /boot/vmlinux  # l'immagine risiede su /dev/hdc1<br /> root = /dev/hda1     # ma all'avvio sarà su hda1<br /> label = Linux<br /> read-only<br /></pre>
<p>Questo file di configurazione deve essere usato da un Lilo funzionante <b>su /dev/hdc1</b>. Le mappe di Lilo che vengono scritte nel settore di avvio (<code>/dev/hdc</code>) devono far riferimento ai file residenti in <code>/boot</code> (attualmente installati su hdc); questi file verranno letti da hda quando il disco verrà avviato come sistema autonomo.</p>
<p>Io chiamo questo file di configurazione <code>/mnt/etc/lilo.conf.hdc</code> (<code>/mnt</code> è dove viene montato hdc durante l&#8217;installazione). L&#8217;installazione di Lilo avviene invocando &#8220;<code>cd /mnt; chroot . sbin/lilo -C /etc/lilo.conf.hdc</code>&#8221;. Si faccia riferimento alla pagina di manuale di <em>chroot</em> se questo comando sembra una magia.</p>
<p>La direttiva &#8220;<code>bios=</code>&#8221; di <code>lilo.conf</code> si usa per dire a Lilo che cosa il BIOS pensa dei propri dispositivi. Le chiamate al BIOS identificano i floppy e i dischi rigidi con un numero: 0x00 e 0x01 selezionano i dischi floppy, 0x80 e i numeri successivi selezionano i dischi rigidi (i vecchi BIOS possono accedere solo a due dischi). Il significato di &#8220;<code>bios = 0x80</code>&#8221; usato nell&#8217;esempio precedente significa quindi &#8220;usa 0x80 nelle chiamate al BIOS per <code>/dev/hdc</code>&#8221;.</p>
<p>Questa direttiva di Lilo può essere utile in altre situazioni, per esempio quando il proprio BIOS è in grado di avviare il sistema da dischi SCSI piuttosto che da dischi IDE. Quando sono presenti sia dispositivi IDE che SCSI, Lilo non può sapere se 0x80 si riferirà all&#8217;uno o all&#8217;altro, poiché l&#8217;utente può scegliere quale usare tramite i menu di configurazione del BIOS, e non è possibile accedere al BIOS mentre Linux è in funzione.</p>
<p>Lilo, come comportamento predefinito, assume che i dischi IDE vengano mappati per primi dal BIOS. Si può annullare questo comportamento usando nel proprio <code>/etc/lilo.conf</code> istruzioni come queste:</p>
</p>
<pre>disk = /dev/sda<br /> bios = 0x80<br /></pre>
