---
title: "Problemi con libmysqlclient.so e mysql binary installation"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-03-14"
permalink: "problemi-con-libmysqlclientso-e-mysql-binary-installation/"
layout: "template_posts_md"
---
<p>Ho scaricato ed estratto<br />MySQL-shared-4.1.18-0.i386.rpm<br />Poi ho copiato in /usr/local/mysql/lib<br />i file e i link che conteneva l&#39;rpm<br />ho aggiunto /usr/local/mysql/lib in /etc/ld.so.conf<br />e ho lancato ldconfig</p>
<p>      Fonte:    </p>
<p><a href="http://www.elbnet.com/supportlinks/mysql/manual_Placeholder.html">http://www.elbnet.com/supportlinks/mysql/manual_Placeholder.html</a></p>
<p>      M.2.4 Problems Using the Perl |DBI|/|DBD| Interface<br />      &lt;<a href="http://www.elbnet.com/supportlinks/mysql/manual_toc.html#Perl_support_problems">http://www.elbnet.com/supportlinks/mysql/manual_toc.html#Perl_support_problems</a>&gt;</p>
<p>If Perl reports that it can&#39;t find the `../mysql/mysql.so&#39; module, then <br />the problem is probably that Perl can&#39;t locate the shared library <br />`libmysqlclient.so&#39;.</p>
<p>You can fix this by any of the following methods:</p>
<p>    * Compile the |Msql-Mysql-modules| distribution with |perl<br />      Makefile.PL -static -config| rather than |perl Makefile.PL|.<br />    * Copy |libmysqlclient.so| to the directory where your other shared<br />      libraries are located (probably `/usr/lib&#39; or `/lib&#39;).<br />    * On Linux you can add the pathname of the directory where<br />      `libmysqlclient.so&#39; is located to the `/etc/ld.so.conf&#39; file.<br />    * Add the pathname of the directory where `libmysqlclient.so&#39; is<br />      located to the |LD_RUN_PATH| environment variable.</p>
<p>If you get the following errors from |DBD-mysql|, you are probably using <br />|gcc| (or using an old binary compiled with |gcc|):</p>
<p>/usr/bin/perl: can&#39;t resolve symbol &#39;__moddi3&#39;<br />/usr/bin/perl: can&#39;t resolve symbol &#39;__divdi3&#39;</p>
<p>Add |-L/usr/lib/gcc-lib/&#8230; -lgcc| to the link command when the <br />`mysql.so&#39; library gets built (check the output from |make| for <br />`mysql.so&#39; when you compile the Perl client). The |-L| option should <br />specify the pathname of the directory where `libgcc.a&#39; is located on <br />your system.</p>
<p>Another cause of this problem may be that Perl and MySQL aren&#39;t both <br />compiled with |gcc|. In this case, you can solve the mismatch by <br />compiling both with |gcc|.</p>
<p>If you get the following error from |Msql-Mysql-modules| when you run <br />the tests:</p>
<p>t/00base&#8230;&#8230;&#8230;&#8230;install_driver(mysql) failed: Can&#39;t load &#39;../blib/arch/auto/DBD/mysql/mysql.so&#39; for module DBD::mysql: ../blib/arch/auto/DBD/mysql/mysql.so: undefined symbol: uncompress at /usr/lib/perl5/5.00503/i586-linux/DynaLoader.pm line 169.</p>
<p>it means that you need to include the compression library, -lz, to the <br />link line. This can be doing the following change in the file <br />`lib/DBD/mysql/Install.pm&#39;:</p>
<p>$sysliblist .= &quot; -lm&quot;;</p>
<p>to</p>
<p>$sysliblist .= &quot; -lm -lz&quot;;</p>
<p>After this, you MUST run &#39;make realclean&#39; and then proceed with the <br />installation from the beginning.</p>
<p>If you want to use the Perl module on a system that doesn&#39;t support <br />dynamic linking (like SCO) you can generate a static version of Perl <br />that includes |DBI| and |DBD-mysql|. The way this works is that you <br />generate a version of Perl with the |DBI| code linked in and install it <br />on top of your current Perl. Then you use that to build a version of <br />Perl that additionally has the |DBD| code linked in, and install that.</p>
<p>On SCO, you must have the following environment variables set:</p>
<p>shell&gt; LD_LIBRARY_PATH=/lib:/usr/lib:/usr/local/lib:/usr/progressive/lib<br />or<br />shell&gt; LD_LIBRARY_PATH=/usr/lib:/lib:/usr/local/lib:/usr/ccs/lib:/usr/progressive/lib:/usr/skunk/lib<br />shell&gt; LIBPATH=/usr/lib:/lib:/usr/local/lib:/usr/ccs/lib:/usr/progressive/lib:/usr/skunk/lib<br />shell&gt; MANPATH=scohelp:/usr/man:/usr/local1/man:/usr/local/man:/usr/skunk/man:</p>
<p>First, create a Perl that includes a statically linked |DBI| by running <br />these commands in the directory where your |DBI| distribution is located:</p>
<p>shell&gt; perl Makefile.PL -static -config<br />shell&gt; make<br />shell&gt; make install<br />shell&gt; make perl</p>
<p>Then you must install the new Perl. The output of |make perl| will <br />indicate the exact |make| command you will need to execute to perform <br />the installation. On SCO, this is |make -f Makefile.aperl inst_perl <br />MAP_TARGET=perl|.</p>
<p>Next, use the just-created Perl to create another Perl that also <br />includes a statically-linked |DBD::mysql| by running these commands in <br />the directory where your |Msql-Mysql-modules| distribution is located:</p>
<p>shell&gt; perl Makefile.PL -static -config<br />shell&gt; make<br />shell&gt; make install<br />shell&gt; make perl</p>
<p>Finally, you should install this new Perl. Again, the output of |make <br />perl| indicates the command to use.</p>
