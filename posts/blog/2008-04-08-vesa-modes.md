---
title: "VESA modes"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2008-04-08"
permalink: "vesa-modes/"
layout: "template_posts_md"
---
<h2><a name="ss5.3">5.3 What VESA modes are available to me? </a> </h2>
<p>This really depends on the type of VESA 2.0 compliant graphic card that you have in your system, and the amount of video memory available. This is just a matter of testing which modes work best for your graphic card. </p>
<p>The following table shows the mode numbers you can input at the VGA prompt or for use with the LILO program. (actually these numbers are plus 0x200 to make it easier to refer to the table) </p>
</p>
<pre>Colours   640x400 640x480 800x600 1024x768 1152x864 1280x1024 1600x1200<br /> --------+--------------------------------------------------------------<br /> 4 bits |    ?       ?     0x302      ?        ?        ?         ?<br /> 8 bits |  0x300   0x301   0x303    0x305    0x161    0x307     0x31C<br /> 15 bits |    ?     0x310   0x313    0x316    0x162    0x319     0x31D<br /> 16 bits |    ?     0x311   0x314    0x317    0x163    0x31A     0x31E<br /> 24 bits |    ?     0x312   0x315    0x318      ?      0x31B     0x31F<br /> 32 bits |    ?       ?       ?        ?      0x164      ? </pre>
<p>Key: 8 bits = 256 colours, 15 bits = 32,768 colours, 16 bits = 65,536 colours, 24 bits = 16.8 million colours, 32 bits &#8211; same as 24 bits, but the extra 8 bits can be used for other things, and fits perfectly with a 32 bit PCI/VLB/EISA bus. </p>
