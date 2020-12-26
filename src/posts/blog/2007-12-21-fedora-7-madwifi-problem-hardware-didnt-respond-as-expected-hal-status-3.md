---
title: "Fedora 7 madwifi problem &#8211; &#8216;Hardware didn&#8217;t respond as expected&#8217; (HAL status 3)"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-12-21"
permalink: "fedora-7-madwifi-problem-hardware-didnt-respond-as-expected-hal-status-3/"
layout: "template_posts_md"
---
<p>To solve this problem with<br />Atheros Communications, Inc. AR5006EG 802.11 b/g Wireless PCI Express<br />Adapter (rev 01)<br />i installed<br /><a href="http://snapshots.madwifi.org/madwifi-ng/madwifi-ng-r3067-20071220.tar.gz">http://snapshots.madwifi.org/madwifi-ng/madwifi-ng-r3067-20071220.tar.gz</a><br />then, in the file<br />/etc/modprobe.d/blacklist<br />add the following line:<br />blacklist ath5k<br />and reboot.</p>
<p>Bye</p>
