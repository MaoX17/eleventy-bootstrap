---
title: "Installare vmware tools su una slackware 12.2"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2009-02-25"
permalink: "vmware-esxi-installare-vmware-tools-su-una-slackware-122/"
layout: "template_posts_md"
icon:
  - linux
  - slackware
  - vmware
---
<p>Questa è una guida per installare i VMWare Tools su Slackware 12.2</p>
<p>Questi sono i passaggi da seguire:</p>
<p><code><br />
links "http://prdownloads.sourceforge.net/libdnet/libdnet-1.11.tar.gz?download"<br />
tar -zxvf libdnet-1.11.tar.gz<br />
cd libdnet-1.11<br />
./configure<br />
make && make install && ldconfig<br />
wget http://download.icu-project.org/files/icu4c/4.0.1/icu4c-4_0_1-src.tgz<br />
wget http://slackbuilds.org/slackbuilds/12.2/libraries/icu4c.tar.gz<br />
tar -zxvf icu4c-4_0_1-src.tgz<br />
tar -zxvf icu4c.tar.gz<br />
cd icu4c<br />
mv ../icu4c-4_0_1-src.tgz ./<br />
./icu4c.SlackBuild<br />
mv /tmp/icu4c-4.0.1-i486-1_SBo.tgz /root/<br />
installpkg ./icu4c-4.0.1-i486-1_SBo.tgz<br />
wget http://mesh.dl.sourceforge.net/sourceforge/open-vm-tools/open-vm-tools-2009.02.18-148847.tar.gz<br />
tar -zxvf open-vm-tools-2009.02.18-148847.tar.gz<br />
cd open-vm-tools-2009.02.18-148847<br />
./configure --includedir=/usr/include/uriparser --without-x --without-icu<br />
make<br />
</code></p>
<p>Dalla VIM cliccare su Inventory-> Virtual Machine -> Install VMware Tools<br />
tornare sulla console</p>
<p><code><br />
mount /mnt/cdrom<br />
cp /mnt/cdrom/VMwareTools-3.5.0-123629.tar.gz /root/<br />
tar -zxvf VMwareTools-3.5.0-123629.tar.gz<br />
cd open-vm-tools-2009.02.18-148847/modules/linux/<br />
for i in *; do sudo mv ${i} ${i}-only; tar -cf ${i}.tar ${i}-only; done<br />
cp *.tar /root/vmware-tools-distrib/lib/modules/source/<br />
cd /root/vmware-tools-distrib/<br />
mkdir /etc/pam.d<br />
touch /etc/rc.d/init.d/network<br />
ifconfig eth0 down<br />
ifconfig eth1 down<br />
ifconfig eth2 down<br />
rmmod pcnet32<br />
./vmware-install.pl<br />
vmware-config-tools.pl<br />
</code></p>
<p>Ringrazio marcpem per <a href="http://ubuntuforums.org/showthread.php?t=987631">l&#8217;how to originale</a></p>
<p>Spero sia di aiuto a tutti.<br />
Saluti</p>
