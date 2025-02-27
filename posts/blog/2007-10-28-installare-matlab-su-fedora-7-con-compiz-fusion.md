---
title: "Installare Matlab su fedora 7 con compiz fusion"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-10-28"
permalink: "installare-matlab-su-fedora-7-con-compiz-fusion/"
layout: "template_posts_md"
---
<p>Intanto grazie a tutti coloro che hanno scritto le loro esperienze:<br /> <a  href="http://www.mathworks.com/matlabcentral/newsreader/view_thread/146723">http://www.mathworks.com/matlabcentral/newsreader/view_thread/146723</a><br /> <a href="http://www.fioreltech.net/linux/matlab_install.php">http://www.fioreltech.net/linux/matlab_install.php</a><br /> <a href="http://www.fioreltech.net/linux/matlab_R2007.php">http://www.fioreltech.net/linux/matlab_R2007.php</a></p>
<p> Dopo aver installato una serie di pacchetti<br /> yum install libXpm-devel mesa-libGL-devel mesa-libGLU-devel libXp-devel </p>
<p> e aver installato Matlab (ricordate di stoppare il SELinux con <b>setenforce 0</b>)<br /> e aver lanciato /usr/local/matlab/install_matlab al termine dell&#8217;installazione</p>
<p> ho incontrato vari problemi:<br /> #######################################################<br /> Matlab mi dava un Warning: Could not access OpenGL library<br /> per risolvere:<br /> cd /usr/local/matlab/sys/os/glnx86<br /> mv libgcc_s.so.1 libgcc_s.so.1_ORIG<br /> ln -sf /lib/libgcc_s.so.1 ./<br /> #########################################################<br /> Anche simulink ci si è messo di impegno per far casini:<br /> Can&#8217;t load &#8216;/usr/local/matlab/bin/glnx86/libmwsimulink.so&#8217;: libXft.so.1: cannot open shared object file: No such file or directory <b>undefined symbol: FcPatternInsertElt<br /> SOLUZIONE:<br /> </b>updatedb &amp;&amp; locate libXft.so<br /> /usr/lib/libXft.so<br /> /usr/lib/libXft.so.1.1<br /> /usr/lib/libXft.so.2<br /> /usr/lib/libXft.so.2.1.2<br /> ln -s /usr/lib/libXft.so.2 /usr/lib/libXft.so.1<br /> ##############################################################<br /> e ancora simulink:<br /> Can&#8217;t load &#8216;/usr/local/matlab/bin/glnx86/libmwsimulink.so&#8217;: /usr/local/matlab/bin/glnx86/libqt-mt.so.3: <b>undefined symbol: XftFreeTypeOpen<br /> </b>yum install qt <b><br /> </b>mv /usr/local/matlab7/bin/glnx86/libqt-mt.so.3.1.2 /usr/local/matlab7/<b>bin/glnx86/libqt-mt.so.3.1.2_ORIG<br /> cd </b>/usr/local/matlab7/bin/glnx86<br /> ln -s /usr/lib/qt-3.3/lib/libqt-mt.so.3.3.8 libqt-mt.so.3.1.2<br /> ################################################################<br /> Inoltre ho aggiunto la seguente riga al file:<br /> /usr/local/bin/matlab<br /> altrimenti matlab moriva improvvisamente<br /> export MATLAB_JAVA=/usr/java/default/</p>
<p> ovviamente dopo aver installato la jre 1.6.03<br /> ################################################################</p>
<p> Adesso funziona TUTTO!!!!</p>
