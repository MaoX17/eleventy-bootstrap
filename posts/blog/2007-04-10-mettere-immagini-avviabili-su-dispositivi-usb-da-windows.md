---
title: "Mettere immagini avviabili su dispositivi USB da windows"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-04-10"
permalink: "mettere-immagini-avviabili-su-dispositivi-usb-da-windows/"
layout: "template_posts_md"
---
<p>Mettere immagini avviabili su dispositivi USB da windows</p>
<p>1. Formatta in FAT la tua chiavetta (o disco) usb<br />2. Scarica la tua immagine da mettere sull&#8217;usb e WinImage (scaricalo e<br />installalo)<br />3. Apri WinImage, selezione l&#8217;immagine avviabile da trasferire sull&#8217;usb;<br />Poi scegli &#8220;Usa disco rimovibile (x:)&#8221;<br />4. Seleziona Scrivi immagine.<br />5. Il sw dirà che l&#8217;immagine deve essere ridimensionata&#8230; ecc&#8230;<br />rispodi si e continua<br />6. Adesso se non funziona l&#8217;avvio da usb scarica<br /><a href="http://www.kernel.org/pub/linux/utils/boot/syslinux/syslinux-3.36.zip">http://www.kernel.org/pub/linux/utils/boot/syslinux/syslinux-3.36.zip</a><br />e lancia syslinux x:<br />con x: unità della penna usb</p>
</p>
<p>Originale: <a href="http://www.damnsmalllinux.org/talk/node/67">http://www.damnsmalllinux.org/talk/node/67</a></p>
<p>   2.f &#8211; Imprinting Bootable Images to USB Devices (Windows)</p>
<p>This is how to install DSL to a USB Key from Windows XP (98,NT,2000?)<br />workstation without burning the ISO and without having to boot into DSL<br />from the CD and partition theUSB key. (of course if you want to<br />partition it you&#8217;ll have to use a partitioning tool, cfdisk, or<br />something else like<br />that)</p>
<p>1. Procure USB Key and make sure it is formatted with FAT, just to be<br />sure its working. (ugh.)</p>
<p>2. Download the images necessary (as of this writing, bootimage 0.8 was<br />used and filesystem image 0.9.0.1 was used.) and also download WinImage<br />(a share/freeware program &#8212; google it.), and install Daemon Tools or<br />some other ISO viewing/manipulating program.</p>
<p>3. Open winimage, Select the boot image you wish to use, select &#8220;Use<br />removable disk (x:) with x: being the drive letter of your USB key you<br />wish to install DSL onto.</p>
<p>4. Select write image. It may say &#8216;image must be resized&#8217; blah blah. Do it.</p>
<p>5. Once that is complete, view the USB drives contents in windows<br />Explorer. Mount the filesystem image to another drive. The filesystem<br />image contains a directory called &#8216;boot&#8217;. You can overwrite the files in<br />the root of the USB Key with the files from boot/. This basically replaces<br />bootimage 0.8 (since it seems to not be updated with the system release)<br />with what I&#8217;ll just call bootimage-current. (basically the boot files<br />for whatever filesystem image you&#8217;re using) In this case, 0.9.0.1.</p>
<p>6. Confirm overwriting of the files. Assuming your bios is up to date,<br />and you&#8217;ve read a lot of the other facts on &#8216;making sure your usb key<br />will work with your bios, etc&#8217;) then all you should have to do is reboot<br />and set the USB drive as the boot drive. DSL boots up, loads, and thats<br />where<br />I&#8217;m writing this from.</p>
<p>7. For more help on &#8216;customizing&#8217; your DSL install check doom4&#8217;s post in<br />this forum about &#8216;DSL on USB-stick HOWTO&#8217; It also goes over some DSL<br />basics that I didn&#8217;t cover.<br /><a href="http://damnsmalllinux.org/cgi-bin/forums/ikonboard.cgi?;act=ST;f=11;t=3613">http://damnsmalllinux.org/cgi-bin/forums/ikonboard.cgi?;act=ST;f=11;t=3613</a></p>
<p>For the record, stay away from cheap knockoff USB keys&#8230;they&#8217;re fine<br />for windows and stuff like that but apparently it doesn&#8217;t like DSL.</p>
