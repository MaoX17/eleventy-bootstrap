---
title: "Slackware 12 su Asus Z99j o Aj8n - Gestione ACPI e tasti funzione"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-07-04"
permalink: "slackware-12-su-asus-z99j-o-aj8n-gestione-acpi-e-tasti-funzione/"
layout: "template_posts_md"
icon:
  - linux
  - slackware
---
<p>Apena installata, la mia distro preferita (ovviamente Slackware 12) ACPI aveva qualche problama.<br />Sulla barra non compariva l&#8217;icona del controllo delle batterie e i tasti funzione non funzionavano 🙂<br />Ecco come ho risolto:</p>
<p>In fondo al file /etc/rc.d/rc.modules ho aggiunto le seguenti righe:<br />#######################################################<br />## ACPI MAOX X ASUS<br />/sbin/modprobe asus_acpi<br />/sbin/modprobe video<br />/sbin/modprobe battery<br />/sbin/modprobe container<br />/sbin/modprobe button<br />/sbin/modprobe ac<br />/sbin/modprobe thermal<br />/sbin/modprobe processor<br />/sbin/modprobe fan</p>
<p>/sbin/depmod -ae<br />###########################################################à<br />In queso modo è comparsa l&#8217;icona delle batterie e posso gestire il risparmio energetico.</p>
<p>Per i tasti funzione:<br />in /etc/acpi ho modificato il file acpi_handler.sh come segue:</p>
<p>###########################################################<br />root@trinity2:/etc/acpi# cat acpi_handler.sh<br />#!/bin/sh<br /># Default acpi script that takes an entry for all actions</p>
<p>IFS=${IFS}/<br />set $@</p>
<p>case &#8220;$1&#8221; in<br />  button)<br />    case &#8220;$2&#8221; in<br />      power) /sbin/init 0<br />         ;;<br />      *) logger &#8220;ACPI action $2 is not defined&#8221;<br />         ;;<br />    esac<br />    ;;<br />  hotkey)<br />    case &#8220;$2&#8221; in<br />      ATKD)<br />        case &#8220;$3&#8221; in<br />                0000005e)<br />                        logger &#8220;WIFI in Accenione&#8230;&#8221;<br />                        /etc/acpi/wifi_on.sh<br />                        logger &#8220;WIFI Acceso!&#8221;<br />                        echo &#8220;WIFI Acceso!&#8221; | wall<br />                ;;<br />                0000005f)<br />                        logger &#8220;WIFI in Spegnimento&#8230;&#8221;<br />                        /etc/acpi/wifi_off.sh<br />                        logger &#8220;WIFI Spento!&#8221;<br />                        echo &#8220;WIFI Spento!&#8221; | wall<br />                ;;<br />                00000032)<br />                        logger &#8220;MUTE / UNMUTE AUDIO&#8230;&#8221;<br />                        MUTE=`amixer get PCM | grep Left | grep -v Right | cut -d &#8221; &#8221; -f 9`<br />                        if [ $MUTE == [on] ]; then<br />                                /usr/bin/amixer set PCM mute<br />                        else<br />                                /usr/bin/amixer set PCM unmute<br />                        fi<br />                ;;<br />                00000031)<br />                        logger &#8220;Abbasso il volume&#8230;&#8221;<br />                        amixer set PCM 2-<br />                ;;<br />                00000030)<br />                        logger &#8220;Alzo il volume&#8230;&#8221;<br />                        amixer set PCM 2+<br />                ;;<br />                *)<br />                        logger &#8220;AA $3 AA $4&#8221;<br />                        logger &#8220;BB $3 BB $4&#8221;<br />                ;;<br />        esac<br />      ;;<br />      *) logger &#8220;ACPI action $2 is not defined&#8221;<br />      ;;<br />    esac<br />  ;;<br />  *)<br />    logger &#8220;ACPI group $1 / action $2 is not defined $3 AAA $4 BBBB $5 CCCC&#8221;<br />  ;;<br />esac<br />###############################################################</p>
<p>Con questo file riesco a controllare il volume e l&#8217;attivazione della wireless dai tasti funzione su linux.<br />Premendo Fn+F10 attivo o disattivo l&#8217;audio<br />Premendo Fn+F11 abbasso l&#8217;audio<br />Premendo Fn+F12 alzo l&#8217;audio</p>
<p>e, sempre in /etc/acpi/ ho aggiunto i seguenti file:<br />#################WIFI_ON############################################<br />root@trinity2:/etc/acpi# cat wifi_on.sh<br />#!/bin/bash<br />/sbin/ifconfig eth0 down<br />/sbin/modprobe ipw3945<br />/sbin/depmod -ae<br />/sbin/ipw3945d -quiet<br />sleep 5<br />/sbin/dhcpcd -d -t 15 eth1<br />#################################################################</p>
<p>#######################WIFI_OFF###############################<br />root@trinity2:/etc/acpi# cat wifi_off.sh<br />#!/bin/bash<br />/sbin/ifconfig eth1 down</p>
<p>/sbin/ipw3945d -kill<br />/sbin/ipw3945d -kill<br />killall ipw3945d</p>
<p>/sbin/rmmod ipw3945<br />/sbin/depmod -ae</p>
<p>/etc/rc.d/rc.inet1 restart<br />###############################################################</p>
<p>poi un bel<br />chmod ugo+x /etc/acpi/wifi_*</p>
<p>In questo modo posso attivare e disabilitare la wireless tramite la combinazione di tasti<br />Fn+F2</p>
