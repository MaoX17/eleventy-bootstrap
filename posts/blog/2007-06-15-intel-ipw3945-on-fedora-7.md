---
title: "Intel ipw3945 on Fedora 7"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-06-15"
permalink: "intel-ipw3945-on-fedora-7/"
layout: "template_posts_md"
---
<div class="smallfont"> <strong>Intel ipw3945 on Fedora 7</strong> </div>
<hr style="color: rgb(209, 209, 225);" size="1"><!-- / icon and title --> <script type="text/javascript"><!-- google_ad_client = "pub-6438771988880563"; google_ad_width = 300; google_ad_height = 250; google_ad_format = "300x250_as"; google_ad_type = "text_image"; google_ad_channel ="0558553640"; google_color_border = "FAFAFA"; google_color_bg = "FAFAFA"; google_color_link = "000000"; google_color_url = "000000"; google_color_text = "000000"; //--></script> <script style="display: none;" type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"> </script><!-- message --> Taken from the following website link. Copied and pasted hence the layout.</p>
<p><a href="http://forums.fedoraforum.org/showthread.php?p=805589#post805589">http://forums.fedoraforum.org/showthread.php?p=805589#post805589</a><br /><a href="http://fedoramobile.org/Members/opsec/intel-ipw3945-on-fedora-7/" target="_blank">http://fedoramobile.org/Members/ops&#8230;45-on-fedora-7/</a></p>
<p><b>This howto will show you how to blacklist/remove iwl3945 / mac80211 in Fedora 7 and install / use the &#8220;known working&#8221; ipw3945 kernel module / driver, microcode firmware, regulatory daemon and startup init script. For this you will need to have root privileges and have roots path/environment.</b></p>
<p>Applicable to Fedora Versions</p>
<p>* Fedora Core 7</p>
<p>Requirements<br />Explanation of requirements.</p>
<p>1. kernel-devel (kernel development files for building modules against the running kernel)<br />2. gcc (C++ compiler)<br />3. ipw3945-1.2.1.tgz (driver / kernel module)<br />4. ipw3945-ucode-1.14.2.tgz (microcode / firmware)<br />5. ipw3945d-1.7.22.tgz (regulatory daemon)<br />6. ipw3945 (startup init script)</p>
<p>Doing the Work</p>
<p>Basic description of what will be done and what is expected. Learn to become root here.</p>
<p>1. Blacklisting the offending modules:</p>
<div style="margin: 5px 20px 20px;">
<div class="smallfont" style="margin-bottom: 2px;">Code:</div>
<pre class="alt2" style="border: 1px inset ; margin: 0px; padding: 6px; overflow: auto; width: 640px; height: 34px;"><div dir="ltr" style="text-align: left;">#nano /etc/modprobe.d/blacklist</div></pre>
</p></div>
<p>add these exact lines at the bottom then save and exit:</p>
<div style="margin: 5px 20px 20px;">
<div class="smallfont" style="margin-bottom: 2px;">Code:</div>
<pre class="alt2" style="border: 1px inset ; margin: 0px; padding: 6px; overflow: auto; width: 640px; height: 66px;"><div dir="ltr" style="text-align: left;"># iwl3945  blacklist iwl3945    blacklist mac80211</div></pre>
</p></div>
<p>2. Reboot the system:</p>
<div style="margin: 5px 20px 20px;">
<div class="smallfont" style="margin-bottom: 2px;">Code:</div>
<pre class="alt2" style="border: 1px inset ; margin: 0px; padding: 6px; overflow: auto; width: 640px; height: 34px;"><div dir="ltr" style="text-align: left;">#] reboot</div></pre>
</p></div>
<p>3. Create a temp directory on your desktop called &#8216;ipw3945&#8217; and download the following files into it:</p>
<div style="margin: 5px 20px 20px;">
<div class="smallfont" style="margin-bottom: 2px;">Code:</div>
<pre class="alt2" style="border: 1px inset ; margin: 0px; padding: 6px; overflow: auto; width: 640px; height: 34px;"><div dir="ltr" style="text-align: left;"> $] mkdir /home/$user/Desktop/ipw3945 (replace $user with your username)</div></pre>
</p></div>
<p><a href="http://prdownloads.sourceforge.net/ipw3945/ipw3945-1.2.1.tgz?download" target="_blank">http://prdownloads.sourceforge.net/&#8230;.1.tgz?download</a><br /><a href="http://bughost.org/ipw3945/ucode/ipw3945-ucode-1.14.2.tgz" target="_blank">http://bughost.org/ipw3945/ucode/ip&#8230;code-1.14.2.tgz</a><br /><a href="http://bughost.org/ipw3945/daemon/ipw3945d-1.7.22.tgz" target="_blank">http://bughost.org/ipw3945/daemon/ipw3945d-1.7.22.tgz</a><br /><a href="http://fedoraos.org/ipw3945/ipw3945" target="_blank">http://fedoraos.org/ipw3945/ipw3945</a></p>
<p>4. Install kernel development packages and gcc compiler:</p>
<div style="margin: 5px 20px 20px;">
<div class="smallfont" style="margin-bottom: 2px;">Code:</div>
<pre class="alt2" style="border: 1px inset ; margin: 0px; padding: 6px; overflow: auto; width: 640px; height: 34px;"><div dir="ltr" style="text-align: left;">#] yum install kernel-devel gcc</div></pre>
</p></div>
<p>5. Unpack the gzipped tarballs into the directory on your desktop called &#8216;ipw3945&#8217; that we created earlier:</p>
<div style="margin: 5px 20px 20px;">
<div class="smallfont" style="margin-bottom: 2px;">Code:</div>
<pre class="alt2" style="border: 1px inset ; margin: 0px; padding: 6px; overflow: auto; width: 640px; height: 82px;"><div dir="ltr" style="text-align: left;">$] tar xvfz ipw3945-1.2.1.tgz     <br />$] tar xvfz ipw3945-ucode-1.14.2.tgz     <br />$] tar xvfz ipw3945d-1.7.22.tgz</div></pre>
</p></div>
<p>6. Copy ucode firmware and regulatory daemon to their respective locations:</p>
<div style="margin: 5px 20px 20px;">
<div class="smallfont" style="margin-bottom: 2px;">Code:</div>
<pre class="alt2" style="border: 1px inset ; margin: 0px; padding: 6px; overflow: auto; width: 640px; height: 50px;"><div dir="ltr" style="text-align: left;">cp ipw3945-ucode-1.14.2/ipw3945-ucode /lib/firmware<br />cp ipw3945d-1.7.22/ipw3945d /sbin</div></pre>
</p></div>
<p>(or choose the version for x86_64 if necessary)</p>
<p>7. Compile and copy the resuling kernel module to the correct location (for more options here see &#8216;more information&#8217; below):</p>
<div style="margin: 5px 20px 20px;">
<div class="smallfont" style="margin-bottom: 2px;">Code:</div>
<pre class="alt2" style="border: 1px inset ; margin: 0px; padding: 6px; overflow: auto; width: 640px; height: 114px;"><div dir="ltr" style="text-align: left;"> $] cd ipw3945-1.2.1 &&amp; make    <br />$] su --login     <br />#] cp /home/$user/Desktop/ipw3945/ipw3945-1.2.1/ipw3945.ko /lib/modules/2.6.21-1.3212.fc7/kernel/drivers/net/wireless/     <br />#] chmod 744 /lib/modules/2.6.21-1.3212.fc7/kernel/drivers/net/wireless/ipw3945.ko<br />#] depmod -ae</div></pre>
</p></div>
<p>8. Install startup init script:</p>
<div style="margin: 5px 20px 20px;">
<div class="smallfont" style="margin-bottom: 2px;">Code:</div>
<pre class="alt2" style="border: 1px inset ; margin: 0px; padding: 6px; overflow: auto; width: 640px; height: 66px;"><div dir="ltr" style="text-align: left;">#] cp /home/$user/Desktop/ipw3945/ipw3945 /etc/init.d     <br />#] chmod +x /etc/init.d/ipw3945     <br />#] chkconfig --add ipw3945 &&amp; chkconfig ipw3945 on</div></pre>
</p></div>
<p>9. Reboot the system:</p>
<div style="margin: 5px 20px 20px;">
<div class="smallfont" style="margin-bottom: 2px;">Code:</div>
<pre class="alt2" style="border: 1px inset ; margin: 0px; padding: 6px; overflow: auto; width: 640px; height: 34px;"><div dir="ltr" style="text-align: left;">#] reboot</div></pre>
</p></div>
<p>Troubleshooting<br />How to test<br />Explanation troubleshooting basics and expectations.</p>
<p>1. Configure the device:</p>
<div style="margin: 5px 20px 20px;">
<div class="smallfont" style="margin-bottom: 2px;">Code:</div>
<pre class="alt2" style="border: 1px inset ; margin: 0px; padding: 6px; overflow: auto; width: 640px; height: 34px;"><div dir="ltr" style="text-align: left;"> #] system-config-network</div></pre>
</p></div>
<p>new &#8211;&gt; wireless connection &#8211;&gt; Intel Corporation PRO/Wireless 3945ABG Network Connection &#8211;&gt; forward</p>
<p>2. Restart the network:</p>
<p>Once you have disabled all other network cards, configured your ip address, gateway, DNS, subnet mask,<br />SSID, wifi channel, and encryption key:</p>
<div style="margin: 5px 20px 20px;">
<div class="smallfont" style="margin-bottom: 2px;">Code:</div>
<pre class="alt2" style="border: 1px inset ; margin: 0px; padding: 6px; overflow: auto; width: 640px; height: 34px;"><div dir="ltr" style="text-align: left;"> # service network restart</div></pre>
</p></div>
<p>Common problems and fixes</p>
<p>Many laptops with built in wireless have a WLAN switch that is a toggle switch for enabling/disabling the wireless radio.</p>
<p>Please make sure you check this is on, or your ipw3945 wireless adapter will not detect correctly or work at all.</p>
<p>Also, disable all other network cards before attempting to use the ipw3945.<br />More Information</p>
<p>Special Notes:</p>
<p>If you&#8217;d like Monitor Mode, Promiscuous Mode or RadioTap enabled for this device you will need to edit the Makefile in</p>
<p>Step 7 before compiling the kernel module uncomment the corresponding line(s):</p>
<div style="margin: 5px 20px 20px;">
<div class="smallfont" style="margin-bottom: 2px;">Code:</div>
<pre class="alt2" style="border: 1px inset ; margin: 0px; padding: 6px; overflow: auto; width: 640px; height: 98px;"><div dir="ltr" style="text-align: left;"> CONFIG_IPW3945_MONITOR=y<br />CONFIG_IEEE80211_RADIOTAP=y<br />CONFIG_IPW3945_PROMISCUOUS=y </div></pre>
</p></div>
<p>Added Reading</p>
<p>* <a href="http://fedoraos.org/" target="_blank">http://fedoraos.org</a> </p>
<pre class="moz-signature" cols="50"> </pre>
