---
title: "Come installare VMWare server su Fedora Core 7"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-07-03"
permalink: "come-installare-vmware-server-su-fedora-core-7/"
layout: "template_posts_md"
---
<p>Una meravigliosa guida che spiega come installare vmware server su fedora 7.</p>
<p><a href="http://www.howtoforge.com/vmware_server_fedora7"><tt>http://www.howtoforge.com/vmware_server_fedora7</tt></a></p>
<p>ecco il cuore della guida:</p>
<p>make[2]: *** [/tmp/vmware-config2/vmmon-only/linux/driver.o] Error 1<br />make[1]: *** [_module_/tmp/vmware-config2/vmmon-only] Error 2<br />make[1]: Leaving directory `/usr/src/kernels/2.6.21-1.3194.fc7-i686&#8242;<br />make: *** [vmmon.ko] Error 2<br />make: Leaving directory `/tmp/vmware-config2/vmmon-only&#8217;<br />Unable to build the vmmon module.</p>
<p>For more information on how to troubleshoot module-related problems, please<br />visit our Web site at &#8220;http://www.vmware.com/download/modules/modules.html&#8221; and<br />&#8220;http://www.vmware.com/support/reference/linux/prebuilt_modules_linux.html&#8221;.</p>
<p>Execution aborted. </p>
<p>This happens because VMware Server isn&#8217;t ready for a 2.6.21 kernel yet (the default kernel in Fedora 7 is 2.6.21.3). Therefore, we must patch VMware Server a little bit. This can be done as follows:</p>
<p class="command">wget http://knihovny.cvut.cz/ftp/pub/vmware/vmware-any-any-update110.tar.gz<br />tar xvfz vmware-any-any-update110.tar.gz<br />cd vmware-any-any-update110<br />./runme.pl</p>
<p>The <span class="system">./runme.pl</span> command will continue the VMware Server installation. This time it should succeed, and again you can accept all default values. When it asks you</p>
<p class="system">In which directory do you want to keep your virtual machine files?<br />[/var/lib/vmware/Virtual Machines]</p>
<p>you can either accept the default value or specify a location that has enough free space to store your virtual machines. </p>
<p>At the end of the installation, you will be asked to enter a serial number:</p>
<p class="system">Please enter your 20-character serial number.</p>
<p class="system">Type XXXXX-XXXXX-XXXXX-XXXXX or &#8216;Enter&#8217; to cancel:</p>
<p>Fill in your serial number for VMware Server. </p>
<p>After the successful installation, you can delete the VMware Server download file and the installation directory:</p>
<p class="command">cd /home/falko/Desktop<br />rm -fr vmware-server-distrib<br />rm -f VMware-server-*.tar.gz</p>
<p> You will now find VMware Server under <span class="system">Applications > Other</span></p>
<pre class="moz-signature" cols="72"><span style="font-size:130%;"><span style="font-style: italic; font-weight: bold;font-size:130%;" >ATTENZIONE:</span><span style="font-size:130%;"><br /></span><span style="font-style: italic; font-weight: bold;font-size:130%;" >Può essere causa di errore l'assenza di xinetd, quindi prima di iniziare l'installazione assicurarsi di avere xinetd:</span><span style="font-size:130%;"><br /></span><span style="font-style: italic;"><span style="font-size:130%;"><span style="font-weight: bold;">yum install xinetd</span><br /><br /><span style="font-weight: bold;">ATTENZIONE 2:</span><br /><span style="font-weight: bold;">Una altra possibile causa di problemi è la presenza del file</span><br /><span style="font-weight: bold;">/etc/vmware/not_configured</span><br /><span style="font-weight: bold;">occorre eliminarlo:</span><br /><span style="font-weight: bold;">rm /etc/vmware/not_configured</span><br /></span><br /></span></span></pre>
