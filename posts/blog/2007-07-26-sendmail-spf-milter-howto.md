---
title: "Sendmail + SPF milter howto"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-07-26"
permalink: "sendmail-spf-milter-howto/"
layout: "template_posts_md"
---
<p>Controllo che sendmail &gt; 8.11 e compilato con il supporto MILTER:</p>
<p>sendmail -d0.1 -bt &lt; /dev/null | grep MILTER</p>
<p>wget <a href="http://www.libspf2.org/spf/libspf2-1.2.5.tar.gz">http://www.libspf2.org/spf/libspf2-1.2.5.tar.gz</a><br />wget <a href="http://dfn.dl.sourceforge.net/sourceforge/smfs/smf-spf-2.0.2.tar.gz">http://dfn.dl.sourceforge.net/sourceforge/smfs/smf-spf-2.0.2.tar.gz</a></p>
<p>tar -zxvf libspf2-1.2.5.tar.gz<br />cd libspf2-1.2.5<br />./configure<br />make &#038;&amp; make check<br />make install<br />ldconfig</p>
<p></p>
<p>Quando si lancia make check si ottengono questi errori, cmq poi tutto funziona correttamente</p>
<p>&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;<br />make[3]: Entering directory<br />`/root/Ordine/software/SPF_milter/libspf2-1.2.5/tests&#8217;</p>
<p>Running single tests on the parser&#8230;<br />Running tests from test_parser.txt (with args &#8221;)&#8230;<br />All regression tests passed<br />PASS: run_single_parser</p>
<p>Running single tests using adoption roll data&#8230;<br />Running tests from test_adopt_roll.txt (with args &#8221;)&#8230;<br />Error:  101 tests failed<br />FAIL: run_single_adopt_roll</p>
<p>Running single tests using data from the RFC examples&#8230;<br />Running tests from test_rfc_examples.txt (with args &#8221;)&#8230;<br />Error:  46 tests failed<br />FAIL: run_single_rfc_examples</p>
<p>Running single tests using static test dns zone file&#8230;</p>
<p>Running piped tests using live data&#8230;<br />Running tests from test_live.txt (with args &#8216;-pipe -test-opt=-dns=test<br />&#8211;todo=121=FIXME &#8211;todo=135.result=FIXME &#8211;todo=136.result=FIXME<br />&#8211;todo=137.result=FIXME &#8211;todo=139=Persistent_data_error?<br />&#8211;todo=140=Persistent_data_error? &#8211;todo=142=Persistent_data_error?<br />&#8211;todo=145=Persistent_data_error? &#8211;todo=146=Persistent_data_error?<br />&#8211;todo=149=Persistent_data_error? &#8211;todo=154=Persistent_data_error?<br />&#8211;todo=155=Persistent_data_error? &#8211;todo=156=Persistent_data_error?<br />&#8211;todo=157=Persistent_data_error? &#8211;todo=158=Persistent_data_error?<br />&#8211;todo=159=Persistent_data_error? &#8211;todo=160=Persistent_data_error?<br />&#8211;todo=161=Persistent_data_error? &#8211;todo=162=Persistent_data_error?<br />&#8211;todo=163=Persistent_data_error? &#8211;todo=164=Persistent_data_error?<br />&#8211;todo=165=Persistent_data_error? &#8211;todo=166=Persistent_data_error?<br />&#8211;todo=167=Persistent_data_error? &#8211;todo=168=FIXME &#8211;todo=169=FIXME&#8217;)&#8230;<br />Error:  569 tests failed<br />FAIL: run_single_tdns</p>
<p>Running piped tests using static test dns zone file&#8230;</p>
<p>Running single tests using live data&#8230;<br />Running tests from test_live.txt (with args &#8216;&#8211;todo=121=FIXME<br />&#8211;todo=135.result=FIXME &#8211;todo=136.result=FIXME &#8211;todo=137.result=FIXME<br />&#8211;todo=168=FIXME &#8211;todo=169=FIXME&#8217;)&#8230;<br />Error:  215 tests failed<br />FAIL: run_many_tdns</p>
<p>Running single tests using live data&#8230;<br />Running tests from test_live.txt (with args &#8216;&#8211;todo=121=FIXME<br />&#8211;todo=135.result=FIXME &#8211;todo=136.result=FIXME &#8211;todo=137.result=FIXME<br />&#8211;todo=168=FIXME &#8211;todo=169=FIXME&#8217;)&#8230;<br />Error:  215 tests failed<br />FAIL: run_single_live</p>
<p>Running piped tests using live data&#8230;<br />Running tests from test_live.txt (with args &#8216;-pipe &#8211;todo=121=FIXME<br />&#8211;todo=135.result=FIXME &#8211;todo=136.result=FIXME &#8211;todo=137.result=FIXME<br />&#8211;todo=139=Persistent_data_error? &#8211;todo=140=Persistent_data_error?<br />&#8211;todo=142=Persistent_data_error? &#8211;todo=145=Persistent_data_error?<br />&#8211;todo=146=Persistent_data_error? &#8211;todo=149=Persistent_data_error?<br />&#8211;todo=154=Persistent_data_error? &#8211;todo=155=Persistent_data_error?<br />&#8211;todo=156=Persistent_data_error? &#8211;todo=157=Persistent_data_error?<br />&#8211;todo=158=Persistent_data_error? &#8211;todo=159=Persistent_data_error?<br />&#8211;todo=160=Persistent_data_error? &#8211;todo=161=Persistent_data_error?<br />&#8211;todo=162=Persistent_data_error? &#8211;todo=163=Persistent_data_error?<br />&#8211;todo=164=Persistent_data_error? &#8211;todo=165=Persistent_data_error?<br />&#8211;todo=166=Persistent_data_error? &#8211;todo=167=Persistent_data_error?<br />&#8211;todo=168=FIXME &#8211;todo=169=FIXME&#8217;)&#8230;<br />Error:  569 tests failed<br />FAIL: run_many_live<br />=======================================<br />6 of 7 tests failed<br />Please report to libspf2@rt.anarres.org<br />=======================================<br />make[3]: *** [check-TESTS] Error 1<br />make[3]: Leaving directory<br />`/root/Ordine/software/SPF_milter/libspf2-1.2.5/tests&#8217;<br />make[2]: *** [check-am] Error 2<br />make[2]: Leaving directory<br />`/root/Ordine/software/SPF_milter/libspf2-1.2.5/tests&#8217;<br />make[1]: *** [check-recursive] Error 1<br />make[1]: Leaving directory<br />`/root/Ordine/software/SPF_milter/libspf2-1.2.5/tests&#8217;<br />make: *** [check-recursive] Error 1<br />root@proxy2:~/Ordine/software/SPF_milter/libspf2-1.2.5#</p>
<p>&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;</p>
<p>cd ..</p>
<p>cd smf-spf-2.0.2<br />make<br />make install</p>
<p>vi /etc/mail/smfs/smf-spf.conf</p>
<p>/usr/local/sbin/smf-spf -c /etc/mail/smfs/smf-spf.conf</p>
<p>  Add these lines to your Sendmail configuration file (usually sendmail.mc):</p>
<p>define(`confMILTER_MACROS_HELO&#8217;, confMILTER_MACROS_HELO`, {verify}&#8217;)dnl<br />INPUT_MAIL_FILTER(`smf-spf&#8217;, `S=unix:/var/run/smfs/smf-spf.sock,<br />T=S:30s;R:1m&#8217;)dnl</p>
<p>IMPORTANT: make sure that libmilter is compiled with<br />BROKEN_PTHREAD_SLEEP defined.<br />If this symbol is not defined, libmilter will use sleep() in<br />signal-handler thread,<br />which may cause various program misbehaviors, including coredumps.<br />To rebuild Sendmail with this symbol defined, add the following line to your<br />Sendmail/devtools/Site/site.config.m4:</p>
<p>  APPENDDEF(`confENVDEF&#8217;, `-DBROKEN_PTHREAD_SLEEP&#8217;)</p>
<p>vi /usr/share/sendmail/cf/m4/cf.m4</p>
<p>[La necessità di inserire il parametro sopra-descritto mi è ignota, ma quando ho provato a<br />aggiungerlo sendmail non partiva]</p>
<p>m4 /etc/mail/sendmail.mc > /etc/mail/sendmail.cf</p>
<p>A questo punto possiamo riavviare sendmail e controllare su /var/log/maillog<br />se il controllo SPF funziona.<br />(e a me FUNZIONA 🙂 )</p>
