---
title: "Fedora Core 7 on Fujitsu Lifebook S7110 &#8211; Linux on notebook"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-06-28"
permalink: "fedora-core-7-on-fujitsu-lifebook-s7110-linux-on-notebook/"
layout: "template_posts_md"
---
<div><span style="font-weight: bold;font-size:100%;">Installing Fedora 7 on Fujitsu Siemens Lifebook S 7110</span>Last updated: 27/06/2007 &#8211; <span style="color: #ff0033;">Work In Progress</span></p>
<p>General Hardware Specifications of Lifebook S 7110:</p></div>
<table border="1" width="90%">
<tbody>
<tr>
<td width="33%">
<div class="headings">Hardware Components</div>
</td>
<td width="33%">
<div class="headings">Status under Linux</div>
</td>
<td width="33%">
<div class="headings">Notes</div>
</td>
</tr>
<tr bgcolor="#008000">
<td width="33%">Intel Core 2 Duo T5500</td>
<td width="33%">Works</td>
<td width="33%">No special procedure required during installation.</td>
</tr>
<tr bgcolor="#008000">
<td width="33%">14.1 XGA TFT Display</td>
<td width="33%">Works</td>
<td width="33%">Select Generic LCD Display in Installer</td>
</tr>
<tr bgcolor="#008000">
<td width="33%">Intel 945</td>
<td width="33%">Works</td>
<td width="33%">.</td>
</tr>
<tr bgcolor="#008000">
<td width="33%">1 GB RAM</td>
<td width="33%">Works</td>
<td width="33%">No special procedure required during installation</td>
</tr>
<tr bgcolor="#008000">
<td width="33%">40 GB SATA Hard Drive</td>
<td width="33%">Works</td>
<td width="33%">No special procedure required during installation</td>
</tr>
<tr bgcolor="#008000">
<td width="33%">Internal Atheros Wireless Networking (Wi-Fi Certified)</td>
<td width="33%">Works</td>
<td width="33%">With madwifi driver:</p>
<p><a href="http://sourceforge.net/project/showfiles.php?group_id=82936">http://sourceforge.net/project/showfiles.php?group_id=82936</a></td>
</tr>
<tr bgcolor="#008000">
<td width="33%">Integrated Network Card</td>
<td width="33%">Works</td>
<td width="33%">No special procedure required during installation</td>
</tr>
<tr bgcolor="yellow">
<td width="33%">Internal 56k Modem</td>
<td width="33%">Not Tested</td>
<td width="33%">In progress</td>
</tr>
<tr bgcolor="#008000">
<td width="33%">CD-RW DVD-RW Drive</td>
<td width="33%">Works</td>
<td width="33%">No special procedure required during installation</td>
</tr>
<tr bgcolor="yellow">
<td width="33%">IrDA</td>
<td width="33%">Not Tested</td>
<td width="33%">In progress</td>
</tr>
<tr bgcolor="#008000">
<td width="33%">Intel High Definition Audio Controller</td>
<td width="33%">Works</td>
<td width="33%">No special procedure required if using Kernel 2.6.x.</p>
<p>ALSA Sound drivers required for Kernel 2.4.x</td>
</tr>
<tr bgcolor="#008000">
<td width="33%">USB</td>
<td width="33%">Works</td>
<td width="33%">No special procedure required during installation</td>
</tr>
<tr bgcolor="#008000">
<td width="33%">ACPI</td>
<td width="33%">Works</td>
<td width="33%">No special procedure required during installation</td>
</tr>
<tr bgcolor="yellow">
<td width="33%">PCMCIA/PCCARD</td>
<td width="33%">Not tested</td>
<td width="33%">In Progress</td>
</tr>
<tr bgcolor="yellow">
<td width="33%">FireWire/IEEE1394</td>
<td width="33%">Not Tested</td>
<td width="33%">In Progress</td>
</tr>
<tr bgcolor="yellow">
<td width="33%">Bluthoot</td>
<td width="33%">Not Tested</td>
<td width="33%">In Progress</td>
</tr>
<tr bgcolor="#008000">
<td width="33%">Battery</td>
<td width="33%">Works</td>
<td width="33%">No special procedure required during installation</td>
</tr>
<tr bgcolor="red">
<td width="33%">FingerPrint</td>
<td width="33%">Not Works</td>
<td width="33%"></td>
</tr>
</tbody>
</table>
<p>This laptop is operating under Kernel version 2.6.21</p>
<p>installazione di Fedora 7:</p>
<ul>
<li><a href="http://www.fedoraonline.it/modules/mydownloads/">Scaricare Fedora 7 </a></li>
<li><a title="fedora 7 installation" href="http://www.fedoraonline.it/modules/wfsection/article.php?articleid=131">Installare Fedora 7</a></li>
</ul>
<div>Operazioni post-installazione</div>
<p><a href="http://blog.maurizio.proietti.name/?p=101"><strong>Installare il supporto per mp3  mplayer e dvd player</strong></a></p>
<p><a href="http://blog.maurizio.proietti.name/?p=408"><span style="font-weight: bold;">Installare Flash Palyer su Fedora Core 7</span></a><br />
<span style="font-weight: bold;"><br />
<a href="http://blog.maurizio.proietti.name/?p=103">Installare True Type Font su Fedora Core 7</a></span></p>
<p><strong><a href="http://blog.maurizio.proietti.name/?p=104">Installare RealPlayer su Fedora Core 7</a><br />
</strong></p>
<p><strong><a href="http://blog.maurizio.proietti.name/?p=105">Installare Adobe Reader su Fedora Core 7</a></strong></p>
<p><strong></strong><strong><a href="http://blog.maurizio.proietti.name/?p=415">Multimedia-Codecs su Fedora Core 7</a></strong></p>
<p><strong></strong><strong><a href="http://blog.maurizio.proietti.name/?p=411">Fedora 7 java runtime engine jre e java development kit jdk e firefox plugin</a></strong></p>
<p><strong></strong><strong><a href="http://blog.maurizio.proietti.name/?p=84">Beryl su KDE su Fedora Core 7</a> </strong></p>
<p><a href="http://blog.maurizio.proietti.name/?p=107"><strong>Madwifi ng driver for atheros minipci wireless su Fedora Core 7</strong></a></p>
<p><a href="http://blog.maurizio.proietti.name/?p=108"><strong>Aircrack-ng su Fedora Core 7 con driver atheros madwifi-ng(ath_pci)</strong></a></p>
<p><a href="http://blog.maurizio.proietti.name/?p=109"><br />
<strong>Kismet su Fedora 7 con driver atheros (ath_pci)</strong></a></p>
<div class="headings"><strong><a href="http://blog.maurizio.proietti.name/?p=110">Suspend to ram &#8211; sospensione in ram su Fedora 7</a></strong></p>
<p><strong>Abilitare Frame Buffer a 1024&#215;768 su Fedora Core 7<br />
</strong></p>
<p>More Specific Information. Specific stuff such as:</p></div>
<ul style="font-weight: bold;">
<li>df -hl</li>
</ul>
<p>[root@localhost ~]# df -hl<br />
Filesystem         Dimens. Usati Disp. Uso% Montato su<br />
/dev/sda2              34G  4,5G   28G  14% /<br />
tmpfs                 501M     0  501M   0% /dev/shm</p>
<ul style="font-weight: bold;">
<li>lspci</li>
</ul>
<p>[root@localhost ~]# lspci<br />
00:00.0 Host bridge: Intel Corporation Mobile 945GM/PM/GMS, 943/940GML and 945GT Express Memory Controller Hub (rev 03)<br />
00:02.0 VGA compatible controller: Intel Corporation Mobile 945GM/GMS, 943/940GML Express Integrated Graphics Controller (rev 03)<br />
00:02.1 Display controller: Intel Corporation Mobile 945GM/GMS, 943/940GML Express Integrated Graphics Controller (rev 03)<br />
00:1b.0 Audio device: Intel Corporation 82801G (ICH7 Family) High Definition Audio Controller (rev 02)<br />
00:1c.0 PCI bridge: Intel Corporation 82801G (ICH7 Family) PCI Express Port 1 (rev 02)<br />
00:1c.1 PCI bridge: Intel Corporation 82801G (ICH7 Family) PCI Express Port 2 (rev 02)<br />
00:1c.2 PCI bridge: Intel Corporation 82801G (ICH7 Family) PCI Express Port 3 (rev 02)<br />
00:1d.0 USB Controller: Intel Corporation 82801G (ICH7 Family) USB UHCI Controller #1 (rev 02)<br />
00:1d.1 USB Controller: Intel Corporation 82801G (ICH7 Family) USB UHCI Controller #2 (rev 02)<br />
00:1d.2 USB Controller: Intel Corporation 82801G (ICH7 Family) USB UHCI Controller #3 (rev 02)<br />
00:1d.3 USB Controller: Intel Corporation 82801G (ICH7 Family) USB UHCI Controller #4 (rev 02)<br />
00:1d.7 USB Controller: Intel Corporation 82801G (ICH7 Family) USB2 EHCI Controller (rev 02)<br />
00:1e.0 PCI bridge: Intel Corporation 82801 Mobile PCI Bridge (rev e2)<br />
00:1f.0 ISA bridge: Intel Corporation 82801GBM (ICH7-M) LPC Interface Bridge (rev 02)<br />
00:1f.1 IDE interface: Intel Corporation 82801G (ICH7 Family) IDE Controller (rev 02)<br />
00:1f.2 SATA controller: Intel Corporation 82801GBM/GHM (ICH7 Family) SATA AHCI Controller (rev 02)<br />
00:1f.3 SMBus: Intel Corporation 82801G (ICH7 Family) SMBus Controller (rev 02)<br />
02:00.0 Ethernet controller: Marvell Technology Group Ltd. 88E8055 PCI-E Gigabit Ethernet Controller (rev 12)<br />
05:00.0 Ethernet controller: Atheros Communications, Inc. AR5006EG 802.11 b/g Wireless PCI Express Adapter (rev 01)<br />
08:03.0 CardBus bridge: O2 Micro, Inc. OZ711MP1/MS1 MemoryCardBus Controller (rev 21)<br />
08:03.4 FireWire (IEEE 1394): O2 Micro, Inc. Firewire (IEEE 1394) (rev 02)</p>
<ul style="font-weight: bold;">
<li>lsusb</li>
</ul>
<p>[root@localhost ~]# lsusb<br />
Bus 002 Device 001: ID 0000:0000<br />
Bus 004 Device 001: ID 0000:0000<br />
Bus 005 Device 001: ID 0000:0000<br />
Bus 003 Device 003: ID 08ff:2580 AuthenTec, Inc.<br />
Bus 003 Device 001: ID 0000:0000<br />
Bus 001 Device 001: ID 0000:0000</p>
<div class="headings">Contact Information:</div>
<ul>
<li>e-mail address: mao17[at]katamail[dot]com</li>
</ul>
