---
title: "Linux Fedora 7 on Asus Z99J Series and Asus A8JN notebook"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-06-20"
permalink: "linux-fedora-7-on-asus-z99j-series-and-asus-a8jn-notebook/"
layout: "template_posts_md"
---
<style type="text/css">  <!--   @page { size: 21cm 29.7cm; margin: 2cm }   P { margin-bottom: 0.21cm }   TD P { margin-bottom: 0cm }   TH P { margin-bottom: 0cm }   H2 { margin-bottom: 0.21cm }   H3 { margin-bottom: 0.21cm }  -->  </style>
<div align="center"> <span style="font-weight: bold;font-size:100%;" >Installing Fedora 7 on </span><span style="font-family:Utopia,serif;"><span style="font-size:180%;"><br />Linux on Asus Z99J Series and <span style="font-family:Utopia,serif;"><span style="font-size:180%;">Asus A8JN</span></span></span></span> </p>
<p>Last updated: 27/06/2007 &#8211; <span style="color: rgb(255, 0, 51);">Work In Progress</span>  </p>
<p>General Hardware Specifications of Lifebook S 7110: </p></div>
<table border="1" width="90%">
<tbody>
<tr>
<td width="33%">
<div class="headings" align="center">Hardware Components</div>
</td>
<td width="33%">
<div class="headings" align="center">Status under Linux</div>
</td>
<td width="33%">
<div class="headings" align="center">Notes</div>
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
<td width="33%">Nvidia GEForce 7300</td>
<td width="33%">Works</td>
<td width="33%"><a href="http://maox.blogspot.com/2007/07/nvidia-geforce-7300-on-fedora-core-7.html">Follow this article</a></td>
</tr>
<tr bgcolor="#008000">
<td width="33%">1 GB RAM</td>
<td width="33%">Works</td>
<td width="33%">No special procedure required during installation</td>
</tr>
<tr bgcolor="#008000">
<td width="33%">120 GB SATA Hard Drive</td>
<td width="33%">Works</td>
<td width="33%">No special procedure required during installation</td>
</tr>
<tr bgcolor="#008000">
<td width="33%">Internal Intel Wireless Networking (Wi-Fi Certified)</td>
<td width="33%">Works</td>
<td width="33%">
<p><a href="http://maox.blogspot.com/2007/06/intel-ipw3945-on-fedora-7.html">With ipw3945 driver:<span style="text-decoration: underline;"> Follow this article<br /></span></a></p>
</td>
</tr>
<tr bgcolor="#008000">
<td width="33%">Integrated Network Card</td>
<td width="33%">Works</td>
<td width="33%">You need kernel >= 2.6.19<br />Special procedure required during installation.<br />Read below for more details</td>
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
<td width="33%">
<p>You need Kernel 2.6.x.</p>
<p>Special procedure required during installation.<br />Read below for more details </p>
</td>
</tr>
<tr bgcolor="#008000">
<td width="33%">USB</td>
<td width="33%">Works</td>
<td width="33%">No special procedure required during installation</td>
</tr>
<tr bgcolor="#008000">
<td width="33%">ACPI</td>
<td width="33%">Works</td>
<td width="33%">Special procedure required during installation.<br />Read below for more details</td>
</tr>
<tr bgcolor="yellow">
<td width="33%">PCMCIA/PCCARD</td>
<td width="33%">Not tested</td>
<td width="33%">In Progress</td>
</tr>
<tr bgcolor="#008000">
<td width="33%">FireWire/IEEE1394</td>
<td width="33%">Work</td>
<td width="33%">No special procedure required during installation</td>
</tr>
<tr bgcolor="#008000">
<td width="33%">Card Reader</td>
<td width="33%">Works</td>
<td width="33%">Special procedure required during installation.<br />Read below for more details</td>
</tr>
<tr bgcolor="#008000">
<td width="33%">Battery</td>
<td width="33%">Works</td>
<td width="33%">No special procedure required during installation</td>
</tr>
<tr bgcolor="#008000">
<td width="33%">Webcam</td>
<td width="33%">Works</td>
<td width="33%">Special procedure required during installation.<br />Read below for more details</td>
</tr>
</tbody>
</table>
<p>This laptop is operating under Kernel version 2.6.21 </p>
<p>installazione di Fedora 7: </p>
<ul>
<li><a href="http://www.fedoraonline.it/modules/mydownloads/">Scaricare Fedora 7 </a></li>
<li><a href="http://www.fedoraonline.it/modules/wfsection/article.php?articleid=131" title="fedora 7 installation">Installare Fedora 7</a></li>
</ul>
<div>Operazioni post-installazione</p>
<p><a href="http://maox.blogspot.com/2007/07/fedora-7-yum-repository.html">Utili repository per Fedora core 7</a></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:130%;">Sound System &#8211; Audio</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">After installation i cannot hear audio.<br />The default conf do not work.<br />I have changed my modprobe.conf<br />(see below) and everything work correctly.</span></span></p>
<p style="margin-bottom: 0cm;" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">[root@trinity2 ~]# cat /etc/modprobe.conf<br />alias eth0 r8169<br />alias scsi_hostadapter ata_piix<br />alias snd-card-0 snd-hda-intel<br />alias sound-slot-0 snd-hda-intel<br />options snd-hda-intel model=3stack<br />options snd-card-0 index=0</span></span></p>
<p></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:130%;">Webcam</span></span></p>
<p style="margin-bottom: 0cm;" align="left"><span style="font-family:Liberation Serif,serif;"><span style="font-size:85%;"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">On my Asus Z99Jseries (like a A8JN)<br />to make webcam work you have to install this software:<br /><a href="http://mxhaard.free.fr/spca50x/Download/gspcav1-20070508.tar.gz">http://mxhaard.free.fr/spca50x/Download/gspcav1-20070508.tar.gz</a><br />This is the home page:<br /><a href="http://mxhaard.free.fr/download.html">http://mxhaard.free.fr/download.html</a><br />You have to follow this steps:</span></span></span></span></p>
<p style="margin-bottom: 0cm;" align="left"><span style="font-family:Liberation Serif,serif;"><span style="font-size:85%;"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">wget <a href="http://mxhaard.free.fr/spca50x/Download/gspcav1-20070508.tar.gz">http://mxhaard.free.fr/spca50x/Download/gspcav1-20070508.tar.gz</a><br />tar -zxvf       <a href="http://mxhaard.free.fr/spca50x/Download/gspcav1-20070508.tar.gz">gspcav1-20070508.tar.gz</a><br /></span></span></span></span><span style="font-family:Liberation Serif,serif;"><span style="font-size:85%;"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">cd <a href="http://mxhaard.free.fr/spca50x/Download/gspcav1-20070508.tar.gz">gspcav1-20070508</a></span></span></span></span></p>
<p>                     <span style="color: rgb(0, 0, 0);"><span style="font-family:Liberation Serif,serif;"><span style="font-size:85%;"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">make<br />make install<br />modprobe gspca<br /></span></span></span></span></span><br />Now it work perfectly.<span style="font-family:Utopia,serif;"><span style="font-size:85%;"><span style="font-family:Utopia,serif;"><span style="font-size:85%;"><br />You can try it with vlc</span></span></span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left">If your image should be strange and with bad color change your<span style="color: rgb(51, 102, 255);"><br />/etc/modprobe.conf :</span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left">add this line</p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="color: rgb(0, 0, 128);"><span style="font-size:85%;"><span style="color: rgb(204, 0, 0);">options gspca force_rgb=1</span></span></span><span style="color: rgb(204, 0, 0);"><br /></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left">else, if your image is too dark, try this line:</p>
<p><span style="font-size:100%;"><code>options gspca force_rgb=0 gamma=4</p>
<p><span style="color: rgb(0, 0, 0);">when you have a change reload the module before retry</span><br /></code></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left">modprobe -r gspca<span style="font-size:100%;"><br />modprobe gspca</span></p>
<p><span style="color: rgb(0, 0, 0);"><br />You can change on the fly the gspca parameter here</span><br /><span style="font-weight: bold;"><br /></span>cd /sys/module/gspca/parameters<span style="font-weight: bold;"><br />autoexpo</span><span style="font-weight: bold;"><br />compress</span><span style="font-weight: bold;"><br />debug</span><span style="font-weight: bold;"><br />force_rgb</span><span style="font-weight: bold;"><br />gamma</span><span style="font-weight: bold;"><br />GBlue</span><span style="font-weight: bold;"><br />GGreen</span><span style="font-weight: bold;"><br />GRed</span><span style="font-weight: bold;"><br />lightfreq</span><span style="font-weight: bold;"><br />OffBlue</span><span style="font-weight: bold;"><br />OffGreen</span><span style="font-weight: bold;"><br />OffRed</span><span style="font-weight: bold;"><br />usbgrabber</span><br /><span style="color: rgb(0, 0, 0);"><br />to read them you can usa a cat</span><br /><span style="color: rgb(0, 0, 0);">to change them use this:</span><br /><span style="font-weight: bold;"><br /></span>echo &#8220;value&#8221; > parameter <code style="color: rgb(0, 0, 0);"><br />this is a little description:</p>
<p></code><span style="font-weight: bold; color: rgb(0, 0, 0);">autoexpo</span><span style="color: rgb(0, 0, 0);">:Enable/Disable auto exposure (default=1: enabled) (PC-CAM 600/Zc03xx/spca561a/Etoms Only !!!) (int)</span><br /><span style="font-weight: bold; color: rgb(0, 0, 0);">debug</span><span style="color: rgb(0, 0, 0);">:Debug level: 0=none, 1=init/detection, 2=warning, 3=config/control, 4=function call, 5=max (int)</span><br /><span style="font-weight: bold; color: rgb(0, 0, 0);">force_rgb</span><span style="color: rgb(0, 0, 0);">:Read RGB instead of BGR (int)</span><br /><span style="font-weight: bold; color: rgb(0, 0, 0);">gamma</span><span style="color: rgb(0, 0, 0);">:gamma setting range 0 to 7 3-> gamma=1 (int)</span><br /><span style="font-weight: bold; color: rgb(0, 0, 0);">OffRed</span><span style="color: rgb(0, 0, 0);">:OffRed setting range -128 to 128 (int)</span><br /><span style="font-weight: bold; color: rgb(0, 0, 0);">OffBlue</span><span style="color: rgb(0, 0, 0);">:OffBlue setting range -128 to 128 (int)</span><br /><span style="font-weight: bold; color: rgb(0, 0, 0);">OffGreen</span><span style="color: rgb(0, 0, 0);">:OffGreen setting range -128 to 128 (int)</span><br /><span style="font-weight: bold; color: rgb(0, 0, 0);">GRed</span><span style="color: rgb(0, 0, 0);">:Gain Red setting range 0 to 512 /256  (int)</span><br /><span style="font-weight: bold; color: rgb(0, 0, 0);">GBlue</span><span style="color: rgb(0, 0, 0);">:Gain Blue setting range 0 to 512 /256  (int)</span><br /><span style="font-weight: bold; color: rgb(0, 0, 0);">GGreen</span><span style="color: rgb(0, 0, 0);">:Gain Green setting range 0 to 512 /256  (int)</span><br /><span style="font-weight: bold; color: rgb(0, 0, 0);">compress</span><span style="color: rgb(0, 0, 0);">:Turn on/off compression (not functional yet) (int)</span><br /><span style="font-weight: bold; color: rgb(0, 0, 0);">usbgrabber</span><span style="color: rgb(0, 0, 0);">:Is a usb grabber 0x0733:0x0430 ? (default 1)  (int)</span><br /><span style="font-weight: bold; color: rgb(0, 0, 0);">lightfreq</span><span style="color: rgb(0, 0, 0);">:Light frequency banding filter. Set to 50 or 60 Hz, or zero to NoFliker (default=50) (int)</span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:130%;"><br /></span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:130%;">Card Reader</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">Every info from:<br /><a href="http://gentoo-wiki.com/HOWTO_SD_and_MMC_card_readers">http://gentoo-wiki.com/HOWTO_SD_and_MMC_card_readers</a></span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:130%;"><br /></span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:130%;">Lan</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Liberation Serif,serif;"><span style="font-size:85%;"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">Driver only included in newer Kernels (RTL8168b/8111b), Module name &#8220;r8169&#8221; or alternatively the proprietary Realtek-driver &#8220;<a href="http://www.realtek.com.tw/downloads/downloadsView.aspx?Langid=1&amp;PNid=13&#038;PFid=5&amp;Level=5&#038;Conn=4&amp;DownTypeID=3&#038;GetDown=false">r1000</a>&#8220;.<br />I recommend to use the build in kernel driver, because it&#8217;s making less trouble during an upgrade and it&#8217;s working as it should.</span></span></span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:130%;">TouchPad</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">Synaptics Touchpad, works with the dafualt configuration obtained after installation (including scrollbars)</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"></p>
<p><span style="font-family:Utopia,serif;"><span style="font-size:130%;">ACPI</span></span>    </p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">modprobe asus-laptop<br />load the correct module, but i had good experience with slackware and<br /><a href="http://sourceforge.net/projects/acpi4asus">http://sourceforge.net/projects/acpi4asus</a></span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><a href="http://maox.blogspot.com/2007/06/installare-il-supporto-per-mp3-mplayer.html"><strong>Installare il supporto per mp3  mplayer e dvd player</strong></a></p>
</p></div>
<p><a style="font-weight: bold;" href="http://maox.blogspot.com/2007/06/installare-macromedia-flash-player-su.html">Installare Flash Palyer su Fedora Core 7</a><br /><span style="font-weight: bold;"><br /><a href="http://maox.blogspot.com/2007/06/installare-true-type-font-su-fedora.html">Installare True Type Font su Fedora Core 7</a></span></p>
<p><strong><a href="http://maox.blogspot.com/2007/06/installare-real-player-su-fedora-core-7.html">Installare RealPlayer su Fedora Core 7</a><br /></strong></p>
<p><strong><a href="http://maox.blogspot.com/2007/06/installare-adobe-acrobat-reader-su.html">Installare Adobe Reader su Fedora Core 7</a></p>
<p></strong><strong><a href="http://maox.blogspot.com/2007/06/codec-multimediali-su-fedora-core-7.html">Multimedia-Codecs su Fedora Core 7</a></p>
<p></strong><strong><a href="http://maox.blogspot.com/2007/06/fedora-java-runtime-engine-jre-e-java.html">Fedora 7 java runtime engine jre e java development kit jdk e firefox plugin</a></p>
<p></strong><a href="http://maox.blogspot.com/2007/06/beryl-su-fedora-7.html"><strong></strong></a><a href="http://maox.blogspot.com/2007/06/beryl-su-fedora-7.html"><strong></strong></a><strong><a>Beryl su KDE su Fedora Core 7</a> </strong> </p>
<p><a href="http://maox.blogspot.com/2007/06/madwifi-ng-driver-for-atheros-minipci.html"><strong></strong></a></p>
</p>
<div class="headings"><strong><a href="http://maox.blogspot.com/2007/06/suspend-to-ram-sospensione-in-ram-su.html">Suspend to ram &#8211; sospensione in ram su Fedora 7</a></p>
<p><a href="http://maox.blogspot.com/2007/06/suspend-to-ram-sospensione-in-ram-su.html">Abilitare Frame Buffer a 1024&#215;768 su Fedora Core 7</a><br /></strong></p>
<p>More Specific Information. Specific stuff such as:</div>
<ul style="font-weight: bold;">
<li>lspci</li>
</ul>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style=";font-family:Utopia,serif;font-size:100%;"  >[root@trinity2 ~]# lspci</span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style=";font-family:Utopia,serif;font-size:100%;"  >00:00.0 Host bridge: Intel Corporation Mobile 945GM/PM/GMS, 943/940GML and 945GT Express Memory Controller Hub (rev 03)</span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">00:01.0 PCI bridge: Intel Corporation Mobile 945GM/PM/GMS, 943/940GML and 945GT Express PCI Express Root Port (rev 03)</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">00:1b.0 Audio device: Intel Corporation 82801G (ICH7 Family) High Definition Audio Controller (rev 02)</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">00:1c.0 PCI bridge: Intel Corporation 82801G (ICH7 Family) PCI Express Port 1 (rev 02)</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">00:1c.2 PCI bridge: Intel Corporation 82801G (ICH7 Family) PCI Express Port 3 (rev 02)</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">00:1c.3 PCI bridge: Intel Corporation 82801G (ICH7 Family) PCI Express Port 4 (rev 02)</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">00:1d.0 USB Controller: Intel Corporation 82801G (ICH7 Family) USB UHCI Controller #1 (rev 02)</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">00:1d.1 USB Controller: Intel Corporation 82801G (ICH7 Family) USB UHCI Controller #2 (rev 02)</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">00:1d.2 USB Controller: Intel Corporation 82801G (ICH7 Family) USB UHCI Controller #3 (rev 02)</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">00:1d.3 USB Controller: Intel Corporation 82801G (ICH7 Family) USB UHCI Controller #4 (rev 02)</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">00:1d.7 USB Controller: Intel Corporation 82801G (ICH7 Family) USB2 EHCI Controller (rev 02)</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">00:1e.0 PCI bridge: Intel Corporation 82801 Mobile PCI Bridge (rev e2)</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">00:1f.0 ISA bridge: Intel Corporation 82801GBM (ICH7-M) LPC Interface Bridge (rev 02)</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">00:1f.2 IDE interface: Intel Corporation 82801GBM/GHM (ICH7 Family) SATA IDE Controller (rev 02)</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">01:00.0 VGA compatible controller: nVidia Corporation G72M [Quadro NVS 110M/GeForce Go 7300] (rev a1)</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">02:00.0 Network controller: Intel Corporation PRO/Wireless 3945ABG Network Connection (rev 02)</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">03:00.0 Ethernet controller: Realtek Semiconductor Co., Ltd. RTL8111/8168B PCI Express Gigabit Ethernet controller (rev 01)</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">06:00.0 FireWire (IEEE 1394): Ricoh Co Ltd R5C832 IEEE 1394 Controller</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">06:00.1 Generic system peripheral [0805]: Ricoh Co Ltd R5C822 SD/SDIO/MMC/MS/MSPro Host Adapter (rev 19)</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">06:00.2 System peripheral: Ricoh Co Ltd Unknown device 0843 (rev 01)</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">06:00.3 System peripheral: Ricoh Co Ltd R5C592 Memory Stick Bus Host Adapter (rev 0a)</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">06:00.4 System peripheral: Ricoh Co Ltd xD-Picture Card Controller (rev 05)</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">[root@trinity2 ~]#</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"></p>
<p></p>
<ul style="font-weight: bold;">
<li>lsusb</li>
</ul>
<p></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">[root@trinity2 ~]# lsusb</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">Bus 003 Device 001: ID 0000:0000</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">Bus 002 Device 001: ID 0000:0000</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">Bus 001 Device 002: ID 093a:2500 Pixart Imaging, Inc.</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">Bus 001 Device 001: ID 0000:0000</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">Bus 005 Device 001: ID 0000:0000</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">Bus 005 Device 002: ID 0ac8:0321 Z-Star Microelectronics Corp.</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">Bus 004 Device 001: ID 0000:0000</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"><span style="font-family:Utopia,serif;"><span style="font-size:85%;">[root@trinity2 ~]#</span></span></p>
<p style="margin-bottom: 0cm; color: rgb(0, 0, 0);" align="left"></p>
<p></p>
<div class="headings">Contact Information:</div>
<ul>
<li>e-mail address: mao17[at]katamail[dot]com</li>
</ul>
