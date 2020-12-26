---
title: "Installation of Oracle 9i (R2) on (Oracle) Enterprise Linux"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-06-06"
permalink: "installation-of-oracle-9i-r2-on-oracle-enterprise-linux/"
layout: "template_posts_md"
---
<div class="contentHeader" align="left"> Installation of Oracle 9i (R2) on (Oracle) Enterprise Linux</p>
<p> fonte:<br /> <a class="moz-txt-link-freetext" href="http://ivan.kartik.sk/oracle/install_ora9_elinux.html">http://ivan.kartik.sk/oracle/install_ora9_elinux.html</a> </div>
<p> This paper (HOWTO) describes step-by-step installation of Oracle 9i database software on Enteprise Linux. Installation steps are valid for 32 bit (x86) and 64 bit (x86_64) architectures. </p>
<p> This paper covers following steps: </p>
<ul>
<li><a  href="http://ivan.kartik.sk/oracle/install_ora9_elinux.html#st1">Pre-Instalation Tasks</a></li>
<li><a  href="http://ivan.kartik.sk/oracle/install_ora9_elinux.html#st2">Download &amp; Install</a></li>
<li><a  href="http://ivan.kartik.sk/oracle/install_ora9_elinux.html#st3">Post-Instalation Tasks</a></li>
<li><a  href="http://ivan.kartik.sk/oracle/install_ora9_elinux.html#st4">Common Installation Errors</a></li>
</ul>
<p> </p>
<h3><a name="st1">Pre-Instalation Tasks</a></h3>
<p> 1. Create oracle User Account</p>
<p> Login as root and create te user oracle which belongs to dba group. </p>
<div class="contentCommand">su &#8211;<br /> # groupadd dba<br /> # groupadd oinstall<br /> # useradd -g oinstall -G dba oracle </div>
<p> 2. Setting System parameters<br /> Edit the /etc/sysctl.conf and add following lines: </p>
<div class="contentCommand">kernel.sem = 250 32000 100 128<br /> kernel.shmmax = 2147483648<br /> kernel.shmmni = 128<br /> kernel.shmall = 2097152<br /> kernel.msgmnb = 65536<br /> kernel.msgmni = 2878<br /> fs.file-max = 65536<br /> net.ipv4.ip_local_port_range = 1024 65000 </div>
<p> <font color="red">Note: You need execute &#8220;sysctl -p&#8221; or reboot system to apply above settings.</font> </p>
<p> Edit the /etc/security/limits.conf file and add following lines: </p>
<div class="contentCommand">* &#8211; nproc 16384<br /> * &#8211; nofile 16384 </div>
<p> 3. Setting Oracle Enviroment<br /> Edit the /home/oracle/.bash_profile file and add following lines: </p>
<p> <font color="red">Use this settings for 32bit (x86) architecture.</font> </p>
<div class="contentCommand">ORACLE_BASE=/opt/oracle<br /> ORACLE_HOME=$ORACLE_BASE/920<br /> ORACLE_SID=MYORACLE<br /> LD_LIBRARY_PATH=$ORACLE_HOME/lib<br /> LD_ASSUME_KERNEL=2.4.19<br /> PATH=$<a class="moz-txt-link-freetext" href="PATH:$ORACLE_HOME/bin">PATH:$ORACLE_HOME/bin</a></p>
<p> export ORACLE_BASE ORACLE_HOME ORACLE_SID LD_LIBRARY_PATH LD_ASSUME_KERNEL PATH </p></div>
<p> <font color="red">Use this settings for 64bit (x86_64) architecture.</font> </p>
<div class="contentCommand">ORACLE_BASE=/opt/oracle<br /> ORACLE_HOME=$ORACLE_BASE/920<br /> ORACLE_SID=MYORACLE<br /> LD_LIBRARY_PATH=$ORACLE_HOME/lib<br /> LD_LIBRARY_PATH_32=$ORACLE_HOME/lib32<br /> PATH=$<a class="moz-txt-link-freetext" href="PATH:$ORACLE_HOME/bin">PATH:$ORACLE_HOME/bin</a></p>
<p> export ORACLE_BASE ORACLE_HOME ORACLE_SID LD_LIBRARY_PATH LD_LIBRARY_PATH_32 PATH </p></div>
<p> Save the .bash_profile and execute following commands for load new enviroment: </p>
<div class="contentCommand">cd /home/oracle<br /> . .bash_profile </div>
<p> 4. Create base directory for Oracle</p>
<p> Login as root and create base directory for Oracle ($ORACLE_BASE). </p>
<div class="contentCommand">su &#8211;<br /> # cd /opt<br /> # mkdir oracle<br /> # chown oracle:dba oracle </div>
<p> </p>
<h3><a name="st2">Download &amp; Install</a></h3>
<p> 1. Install required .rpm packages</p>
<p> Some additional packages are required for succesful instalation of Oracle software. To check whether required packages are installed on your operating system one of following commands: </p>
<div class="contentCommand">rpm -q compat-db compat-gcc-32 compat-gcc-32-c++ compat-libcom_err compat-libcwait compat-libgcc-296 compat-libstdc++-296 compat-libstdc++-33 gcc gcc-c++ glibc glibc-common glibc-devel glibc-headers glibc-kernheaders libgcc make </div>
<p> or</p>
<div class="contentCommand"> rpm -qa &#8211;qf &#8216;%{name}-%{version}-%{release}.%{arch}\n&#8217;|egrep &#8216;compat|glibc|gcc&#8217;|sort </div>
<p> Required packages <font color="red">for 32bit (x86)</font> architecture: </p>
<div class="contentCommand"> binutils-2.15.92.0.2-21<br /> compat-db-4.1.25-9<br /> compat-gcc-32-3.2.3-47.3<br /> compat-gcc-32-c++-3.2.3-47.3<br /> compat-libcom_err-1.0-5<br /> compat-libcwait-2.1-1<br /> compat-libgcc-296-2.96-132.7.2<br /> compat-libstdc++-296-2.96-132.7.2<br /> compat-libstdc++-33-3.2.3-47.3<br /> gcc-3.4.6-3.1<br /> gcc-c++-3.4.6-3.1<br /> glibc-2.3.4-2.25<br /> glibc-common-2.3.4-2.25<br /> glibc-devel-2.3.4-2.25<br /> glibc-headers-2.3.4-2.25<br /> glibc-kernheaders-2.4-9.1.98.EL<br /> libgcc-3.4.6-3.1<br /> make-3.80-6.EL4.i386 </div>
<p> <font color="red">Note: Package compat-libcwait-2.1-1.i386.rpm is not included in Enterpise Linux installation media. You can download this package <a href="http://oss.oracle.com/projects/compat-oracle/files/RedHat/"  target="_blank">here</a>. </font></p>
<p> Required packages <font color="red">for 64bit (x86_64)</font> architecture: </p>
<div class="contentCommand"> binutils-2.15.92.0.2-21.x86_64<br /> compat-db-4.1.25-9.i386<br /> compat-db-4.1.25-9.x86_64<br /> compat-gcc-32-3.2.3-47.3.x86_64<br /> compat-gcc-32-c++-3.2.3-47.3.x86_64<br /> compat-libcom_err-1.0-5.i386<br /> compat-libcom_err-1.0-5.x86_64<br /> compat-libgcc-296-2.96-132.7.2.i386<br /> compat-libstdc++-296-2.96-132.7.2.i386<br /> compat-libstdc++-33-3.2.3-47.3.i386<br /> compat-libstdc++-33-3.2.3-47.3.x86_64<br /> gcc-3.4.6-3.1.x86_64<br /> gcc-c++-3.4.6-3.1.x86_64<br /> glibc-2.3.4-2.25.i686<br /> glibc-2.3.4-2.25.x86_64<br /> glibc-common-2.3.4-2.25.x86_64<br /> glibc-devel-2.3.4-2.25.i386<br /> glibc-devel-2.3.4-2.25.x86_64<br /> glibc-headers-2.3.4-2.25.x86_64<br /> glibc-kernheaders-2.4-9.1.98.EL.x86_64<br /> libgcc-3.4.6-3.1.i386<br /> libgcc-3.4.6-3.1.x86_64<br /> make-3.80-6.EL4.x86_64 </div>
<p> Install the required packages using the rpm command: </p>
<div class="contentCommand"># rpm -ivh <i>&lt;package_name&gt;.rpm</i> </div>
<p> If all required packages were installed succesfuly then login as root and switch the GCC 3.4 compiler binary with GCC 3.2 compiler binary as following: </p>
<div class="contentCommand">su &#8211;<br /> # cd /usr/bin<br /> # mv ./gcc ./gcc34<br /> # mv ./gcc32 ./gcc </div>
<p> 2. Download the Oracle 9i (9.2.0.4) software from <a  href="http://www.oracle.com/technology/software/products/oracle9i/index.html"  target="_blank">Oracle website</a> for apropriate architecture.<br /> Direct link to <a  href="http://www.oracle.com/technology/software/products/oracle9i/htdocs/linuxsoft.html"  target="_blank">Oracle Database 32bit (x86)</a><br /> Direct link to <a  href="http://www.oracle.com/technology/software/products/oracle9i/htdocs/linuxx8664soft.html"  target="_blank">Oracle Database 64bit (x86_64)</a></p>
<p> Extract the files using following command (<font color="red">for 32bit</font> architecture): </p>
<div class="contentCommand">gunzip ship_9204_linux_disk1.cpio.gz<br /> gunzip ship_9204_linux_disk2.cpio.gz<br /> gunzip ship_9204_linux_disk3.cpio.gz</p>
<p> cpio -idmv &lt; ship_9204_linux_disk1.cpio<br /> cpio -idmv &lt; ship_9204_linux_disk2.cpio<br /> cpio -idmv &lt; ship_9204_linux_disk3.cpio </div>
<p> or <font color="red">for 64bit</font> architecture: </p>
<div class="contentCommand">gunzip amd64_db_9204_Disk1.cpio.gz<br /> gunzip amd64_db_9204_Disk2.cpio.gz<br /> gunzip amd64_db_9204_Disk3.cpio.gz</p>
<p> cpio -idmv &lt; amd64_db_9204_Disk1.cpio<br /> cpio -idmv &lt; amd64_db_9204_Disk2.cpio<br /> cpio -idmv &lt; amd64_db_9204_Disk3.cpio </div>
<p> When all archives were extracted you&#8217;ve got three directories Disk1, Disk2 and Disk3.</p>
<p> 3. Start the Oracle software installation process.</p>
<p> Now the system is prepared for Oracle software installation. To start the installation process execute the following commands (as oracle): </p>
<div class="contentCommand">cd Disk1<br /> ./runInstaller </div>
<p> </p>
<h3><a name="st3">Post-Instalation Tasks</a></h3>
<p> 1. Switch back the GCC binaries </p>
<div class="contentCommand">su &#8211;<br /> # cd /usr/bin<br /> # mv ./gcc ./gcc32<br /> # mv ./gcc34 ./gcc </div>
<p> 2. (Optional) You may consider to use rlwrap for comfortable work with sqlplus. RPM package for RedHat compatible (x86) distribution you can download <a  href="http://ivan.kartik.sk/oracle/download_from.php?site_id=5">here</a>. RPM for x86_64 architecture you can download <a  href="http://ivan.kartik.sk/oracle/download_from.php?site_id=9">here</a>. </p>
<div class="contentCommand"> su &#8211;<br /> # rpm -ivh rlwrap-0.24-rh.i386.rpm<br /> # exit<br /> echo &#8220;alias sqlplus=&#8217;rlwrap sqlplus'&#8221; &gt;&gt; /home/oracle/.bash_profile<br /> . /home/oracle/.bash_profile </div>
<p> </p>
<h3><a name="st4">Common Installation Errors</a></h3>
<p> <font color="red"> Unable to load native library: /tmp/OraInstall2006-12-20_11-11-34AM/jre/lib/i386/libjava.so: symbol __libc_wait, version GLIBC_2.0 not defined in file libc.so.6 with link time reference </font><br /> Solution: Install new JRE 1.3.1 version. Edit the Disk1/install/linux/oraparam.ini and set path to new JRE for JRE_LOCATION variable. For more information see Download &amp; Install section. </p>
<p> <font color="red">/opt/oracle/jre/1.1.8/bin/../lib/i686/native_threads/libzip.so: symbol errno, version GLIBC_2.0 not defined in file libc.so.6 with link time reference (libzip.so) </font><br /> Solution: Set the LD_ASSUME_KERNEL=2.4.19 </p>
<p> <font color="red"> /tmp/OraInstall2006-12-20_11-38-19AM/jre/lib/i386/libawt.so: libXp.so.6: cannot open shared object file: No such file or directory </font><br /> Solution: Install the xorg-x11-deprecated-libs package. </p>
<p> <font color="red">Starting Oracle Intelligent Agent&#8230;/opt/oracle/920/bin/dbsnmpwd: line 156: 10736 Segmentation fault nohup $ORACLE_HOME/bin/dbsnmp $* &gt;&gt;$DBSNMP_WDLOGFILE 2&gt;&amp;1<br /> /opt/oracle/920/bin/dbsnmpwd: line 156: 10749 Segmentation fault nohup $ORACLE_HOME/bin/dbsnmp $* &gt;&gt;$DBSNMP_WDLOGFILE 2&gt;&amp;1<br /> /opt/oracle/920/bin/dbsnmpwd: line 156: 10761 Segmentation fault nohup $ORACLE_HOME/bin/dbsnmp $* &gt;&gt;$DBSNMP_WDLOGFILE 2&gt;&amp;1<br /> /opt/oracle/920/bin/dbsnmpwd: line 156: 10773 Segmentation fault nohup $ORACLE_HOME/bin/dbsnmp $* &gt;&gt;$DBSNMP_WDLOGFILE 2&gt;&amp;1 </font><br /> Solution: Download and apply patch nr.: 3238244 from <a class="moz-txt-link-freetext" href="http://metalink.oracle.com">http://metalink.oracle.com</a>. </p>
<p> <font color="red">Exception in thread &#8220;main&#8221; java.lang.InternalError: Can&#8217;t connect to X11 window server using &#8216;localhost:0.0&#8217; as the value of the DISPLAY variable. </font><br /> Solution: Execute &#8220;export DISPLAY=:0.0&#8221; (as oracle user) and &#8220;xhost +&#8221; as user who has opened X session (for example logged in KDE, GNOME, etc.). If the value is other than 127.0.0.1 or localhost you should &#8220;xhost +&#8221; on client machine. </p>
<p> <font color="red"> Error in invoking target install of makefile /opt/oracle/920/ctx/lib/ins_ctx.mk<br /> Error in invoking target install of makefile /opt/oracle/920/precomp/lib/ins_precomp.mk<br /> Error in invoking target install of makefile /opt/oracle/920/plsql/lib/ins_plsql.mk<br /> Error in invoking ntcontab.o of makfile /opt/oracle/920/network/lib/ins_net_client.mk </font><br /> Solution: Some of required packages is missing (not installed on your OS) or GCC binaries wasn&#8217;t changed. For more information see Download &amp; Install section. </p>
<p> <center><br /> </center> </p>
<pre class="moz-signature" cols="50">--  principio di Napoleone: non attribuire a malintenzione cio' che puo' essere semplicemente spiegato come imbecillita' MaoX Blog: Problemi e soluzioni di un sistemista informatico: <a class="moz-txt-link-freetext" href="http://maox.blogspot.com">http://maox.blogspot.com</a></pre>
