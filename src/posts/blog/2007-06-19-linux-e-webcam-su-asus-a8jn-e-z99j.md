---
title: "Linux e webcam su asus A8JN e Z99J"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-06-19"
permalink: "linux-e-webcam-su-asus-a8jn-e-z99j/"
layout: "template_posts_md"
---
<p>Finalmente la Webcam FUNZIONA.<br />Sul mio Asus Z99Jseries (riconosciuto come un A8JN)<br />per installare la webcam è stato sufficiente scaricare il pacchetto<br /><a href="http://mxhaard.free.fr/spca50x/Download/gspcav1-20070508.tar.gz">http://mxhaard.free.fr/spca50x/Download/gspcav1-20070508.tar.gz</a></p>
<p>dal seguente sito</p>
<p><a href="http://mxhaard.free.fr/download.html">http://mxhaard.free.fr/download.html</a></p>
<p>e dare</p>
<p>make<br />make install<br />modprobe gspca</p>
<p>e ora FUNZIONA!!!</p>
<p>Potete provarla con l&#8217;ottimo VLC (File -> Apri periferica di acquisizione)<br />Se l&#8217;immagine dovesse avere strani colori aggiungete questa riga al file</p>
<p><span style="color: rgb(51, 102, 255);">/etc/modprobe.conf :</span><br /><span style="color:#000080;"><span style="font-size: 11pt;font-size:85%;" ><span style="color: rgb(204, 0, 0);">options gspca force_rgb=1</span></span></span><span style="color: rgb(204, 0, 0);"></p>
<p></span>se invece l&#8217;immagine è troppo scura provate ad aggiungere questo:</p>
<p><span style="font-size:100%;"><code style="color: rgb(204, 0, 0);">options gspca force_rgb=0 gamma=4</p>
<p><span style="color: rgb(0, 0, 0);">e poi ricaricare il modulo con</span></p>
<p></code></span></p>
<blockquote style="color: rgb(0, 0, 0);"><p><span style="font-size:100%;">modprobe -r gspca<br />modprobe gspca</span></p></blockquote>
<p>Inoltre è possibile cambiare al volo i parametri di gspca</p>
<p><span style="font-weight: bold;"></p>
<blockquote><p>cd /sys/module/gspca/parameters</p></blockquote>
<p></span><br />I parametri sono i seguenti:</p>
<blockquote><p><span style="font-weight: bold;">autoexpo</span><br /><span style="font-weight: bold;">compress</span><br /><span style="font-weight: bold;">debug</span><br /><span style="font-weight: bold;">force_rgb</span><br /><span style="font-weight: bold;">gamma</span><br /><span style="font-weight: bold;">GBlue</span><br /><span style="font-weight: bold;">GGreen</span><br /><span style="font-weight: bold;">GRed</span><br /><span style="font-weight: bold;">lightfreq</span><br /><span style="font-weight: bold;">OffBlue</span><br /><span style="font-weight: bold;">OffGreen</span><br /><span style="font-weight: bold;">OffRed</span><br /><span style="font-weight: bold;">usbgrabber</span></p></blockquote>
<p>per leggerli basta un cat</p>
<p>e per modificarli :</p>
<p><code><span style="font-weight: bold;"></p>
<blockquote><p>echo "_valore_" > _parametro_ </p></blockquote>
<p></span><br />Allego di seguito una breve descrizione dei parametri:</p>
<p></code><span style="font-weight: bold;">autoexpo</span>:Enable/Disable auto exposure (default=1: enabled) (PC-CAM 600/Zc03xx/spca561a/Etoms Only !!!) (int)<br /><span style="font-weight: bold;">debug</span>:Debug level: 0=none, 1=init/detection, 2=warning, 3=config/control, 4=function call, 5=max (int)<br /><span style="font-weight: bold;">force_rgb</span>:Read RGB instead of BGR (int)<br /><span style="font-weight: bold;">gamma</span>:gamma setting range 0 to 7 3-> gamma=1 (int)<br /><span style="font-weight: bold;">OffRed</span>:OffRed setting range -128 to 128 (int)<br /><span style="font-weight: bold;">OffBlue</span>:OffBlue setting range -128 to 128 (int)<br /><span style="font-weight: bold;">OffGreen</span>:OffGreen setting range -128 to 128 (int)<br /><span style="font-weight: bold;">GRed</span>:Gain Red setting range 0 to 512 /256  (int)<br /><span style="font-weight: bold;">GBlue</span>:Gain Blue setting range 0 to 512 /256  (int)<br /><span style="font-weight: bold;">GGreen</span>:Gain Green setting range 0 to 512 /256  (int)<br /><span style="font-weight: bold;">compress</span>:Turn on/off compression (not functional yet) (int)<br /><span style="font-weight: bold;">usbgrabber</span>:Is a usb grabber 0x0733:0x0430 ? (default 1)  (int)<br /><span style="font-weight: bold;">lightfreq</span>:Light frequency banding filter. Set to 50 or 60 Hz, or zero to NoFliker (default=50) (int)</p>
