---
title: "Outlook Web Access (OWA): Dividere Front-end (su internet) da Back-end (in LAN): Aumentare la sicurezza di OWA"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-03-14"
permalink: "outlook-web-access-owa-dividere-front-end-su-internet-da-back-end-in-lan-aumentare-la-sicurezza-di-owa/"
layout: "template_posts_md"
---
<p><font size="4"><span style="font-weight: bold;"></span><span  style="font-weight: bold;"></span></font><font size="3">Hardware &amp; Software utilizzati:</font></p>
<p> Server con installato Windows 2000 server e Microsoft Exchange 5.5 e <br /> Outlook Web Access che gestisce le caselle di posta di tutti gli utenti<br /> della rete.<br /> Server Pentium II 300 MHz con installato Slackware.</p>
<p> Disinstallo apache mysql php openssl e scarico i seguenti sorgenti:</p>
<p> [mysql-standard-4.1.14-pc-linux-gnu-i686-glibc23.tar.gz]<br /> openssl-0.9.7h.tar.gz<br /> openssh<br /> php-4.4.0.tar.gz<br /> httpd-2.0.54.tar.gz</p>
<p> X installare openssl:<br /> ./config shared<br /> make <br /> make test<br /> make install</p>
<p> X installare openssh:<br /> ./configure<br /> make <br /> make install</p>
<p> X installare httpd2+php+mysql:<br /> httpd2:<br /> ./configure &#8211;enable-so &#8211;enable-cgi &#8211;enable-info &#8211;enable-rewrite &#8211;enable-speling &#8211;enable-usertrack &#8211;enable-deflate  &#8211;enable-ssl &#8211;enable-mime-magic &#8211;enable-ext-filter &#8211;enable-proxy &#8211;enable-proxy-connect &#8211;enable-proxy-ftp &#8211;enable-proxy-http &#8211;enable-modules=all<br /> make<br /> make install</p>
<p> cd ../php-NN<br /> ./configure &#8211;with-apxs2=/usr/local/apache2/bin/apxs &#8211;with-mysql=/usr/local/mysql<br /> make <br /> make install</p>
<p> <font size="3">A questo punto creo un certificato self-signed x iis<br /> come descritto nel seguente link:<br /> <a class="moz-txt-link-freetext" href="http://dejavu.mu.nu/archives/080563.php">http://dejavu.mu.nu/archives/080563.php</a></p>
<p> che riporto di seguito:</font></p>
<p> ######################################################################################################<br /> May 10, 2005<br /> Self-Signed IIS SSL Certificates using OpenSSL</p>
<p> Self-Signed IIS SSL Certificates using OpenSSL</p>
<p> This tutorial assumes that you have a Linux box with OpenSSL installed,and that you want to create a self-signed certificate for IIS5.0</p>
<p> 1. Set up your CA (you only have to do this once)<br /> ON THE LINUX BOX&#8230;<br /> * Create a private key</p>
<p> openssl genrsa -des3 -out CA.key 1024</p>
<p> (You&#8217;ll need to supply a passphrase. DON&#8217;T FORGET THIS!!)</p>
<p> * Set this to read-only for root for security</p>
<p> chmod 400 CA.key</p>
<p> * Create the CA certificate</p>
<p> openssl req -new -key CA.key -x509 -days 1095 -out CA.crt</p>
<p> (Provide appropriate responses to the prompts&#8230;for Common Name, you might want to use something like &#8220;OurCompany CA&#8221;)</p>
<p> * Set the certificate to read-only for root for security</p>
<p> chmod 400 CA.crt</p>
<p> 2. Obtain a CSR<br /> ON THE IIS BOX&#8230;<br /> * Open the Internet Manager<br /> * Select the site for which you want to create a key<br /> * Right-click and choose Properties<br /> * Select the &#8220;Directory Security&#8221; tab<br /> * Click the &#8220;Server Certificate&#8221; button<br /> * Follow the prompts to create a CSR<br /> * Save your CSR, then transfer it to the Linux box for further processing. (For the following steps, we&#8217;ll refer to your CSR as &#8220;new.csr&#8221;)</p>
<p> 3. Sign the CSR<br /> ON THE LINUX BOX&#8230;<br /> * Sign the CSR (all of this on one line)</p>
<p> openssl x509 -req -days 365 -in new.csr -CA CA.crt -CAkey CA.key -CAcreateserial -out new.crt</p>
<p> * Transfer the new.crt file back to the IIS box</p>
<p> 4. Install self-signed certificate<br /> ON THE IIS BOX&#8230;<br /> * Open the Internet Manager<br /> * Select the site to install the key<br /> * Right-click and choose properties<br /> * Select the &#8220;Directory Security&#8221; tab<br /> * Click the &#8220;Server Certificate&#8221; button<br /> * Specify that you want to complete the pending request<br /> * Select the .crt file that you just transferred</p>
<p> That&#8217;s it!</p>
<p> Now&#8230;here&#8217;s the updated info, with special thanks to David MacKenzie:David&#8217;s comments: I found your instructions for creating a self-signed cert for IIS using OpenSSL invaluable&#8211;thanks! (I found them by google.) There&#8217;s one subtlety I&#8217;d like to suggest you add to them. If the IIS server is Outlook Web Access for an Exchange server, then installing the SSL cert breaks Public Folders administration from the Exchange System Manager MMC console. ESM complains that the cert isn&#8217;t connected to a recognized authority, and if you fix that, it complains that the system name is wrong. After more googling, I found an answer that worked for me, shown below as additional steps for your check list. I&#8217;m using Windows 2000 SP3 and Exchange 2000 SP3.</p>
<p> 1. If the IIS server is running Outlook Web Access for Exchange, make ourselves recognized as a CA<br /> ON THE IIS BOX&#8230;<br /> * Open Internet Explorer<br /> * Tools&gt;Internet Options<br /> * Content tab<br /> * Certificates<br /> * Import<br /> * Next<br /> * Browse<br /> * Files of type: X.509 Certificate (*.cer, *.crt)<br /> * Select CA.crt<br /> * Open<br /> * Next<br /> * Next<br /> * Finish<br /> 2. If the IIS server is running Outlook Web Access for Exchange, fix Public Folders management for the Exchange Server Manager<br /> ON THE IIS BOX&#8230;<br /> * Open Internet Services Manager<br /> * Right-click on exchange&gt;Default Web Site&gt;Exadmin<br /> * Properties<br /> * Directory Security tab<br /> * Secure communications Edit<br /> * Uncheck Require secure channel (SSL)<br /> * OK<br /> * OK<br /> Posted by MoMo at May 10, 2005 11:32 AM </p>
<p> ##################################################################################################</p>
<p> <font size="3">A questo punto iis disporrà di un certificato e quindi potrà comunicare in https</p>
<p> Iniziamo a configurare apache2 per funzionare come proxy<br /> (fruttando il mod_proxy)</p>
<p> Prima di tutto occorre creare un certificato per il server apache come segue:<br /> [ripresa dal sito:<br /> <a class="moz-txt-link-freetext" href="http://www.vanemery.com/Linux/Apache/apache-SSL.html">http://www.vanemery.com/Linux/Apache/apache-SSL.html</a><br /> ]</p>
<p> </font><br /> ###################################################################################################</p>
<p> <span style="font-weight: bold;">Step 1: Setup your own CA (Certificate Authority)</span></p>
<p> In order to run a secure (SSL/TLS encrypted) web server, you have to have a private key and a certificate for the server. For a commercial web site, you will probably want to purchase a certificate signed by a well-known root CA. For Intranet or special-purpose uses like this, you can be your own CA. This is done with the OpenSSL tools.</p>
<p> Here, we will make a private CA key and a private CA X.509 certificate. We will also make a directory for the certs and keys:</p>
<p> [root]# mkdir /root/CA<br /> [root]# chmod 0770 /root/CA<br /> [root]# cd /root/CA</p>
<p> [root]# openssl genrsa -des3 -out my-ca.key 2048<br /> Generating RSA private key, 2048 bit long modulus<br /> &#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230;..+++<br /> &#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230;+++<br /> e is 65537 (0x10001)<br /> Enter PEM pass phrase:<br /> Verifying password &#8211; Enter PEM pass phrase:</p>
<p> [root]# openssl req -new -x509 -days 3650 -key my-ca.key -out my-ca.crt<br /> Using configuration from /usr/share/ssl/openssl.cnf<br /> Enter PEM pass phrase:<br /> You are about to be asked to enter information that will be incorporated<br /> into your certificate request.<br /> What you are about to enter is what is called a Distinguished Name or a DN.<br /> There are quite a few fields but you can leave some blank<br /> For some fields there will be a default value,<br /> If you enter &#8216;.&#8217;, the field will be left blank.<br /> &#8212;&#8211;<br /> Country Name (2 letter code) [GB]:US<br /> State or Province Name (full name) [Berkshire]:Kentucky<br /> Locality Name (eg, city) [Newbury]:Fayette County<br /> Organization Name (eg, company) [My Company Ltd]:VanEmery.Com<br /> Organizational Unit Name (eg, section) []:Certificate Authority<br /> Common Name (eg, your name or your server&#8217;s hostname) []:VanEmery.Com CA<br /> Email Address []:hostmaster@vanemery.com</p>
<p> [root]# openssl x509 -in my-ca.crt -text -noout</p>
<p> Notes:  The first OpenSSL command makes the key. The second command makes the X.509 certificate with a 10-year lifetime. The third command lets you view the completed certificate. Make sure that you keep the password in a safe place, you will need this every time you sign another certificate! You will probably also want to make backups of the cert and key and lock them in a safe place.</p>
<p> <span style="font-weight: bold;">Step 2: Make a key and a certificate for the web server:</span></p>
<p> Now, we have to make an X.509 certificate and corresponding private key for the web server. Rather than creating a certificate directly, we will create a key and a certificate request, then &#8220;sign&#8221; the certificate request with the CA key we made in Step 1. You can make keys for multiple web servers this way. One thing to note is that SSL/TLS private keys for web servers need to be either 512 or 1024 bits. Any other key size may be incompatible with certain browsers.</p>
<p> [root]# openssl genrsa -des3 -out mars-server.key 1024<br /> Generating RSA private key, 1024 bit long modulus<br /> &#8230;.++++++<br /> .++++++<br /> e is 65537 (0x10001)<br /> Enter PEM pass phrase:<br /> Verifying password &#8211; Enter PEM pass phrase:</p>
<p> You could also create a private key without file encryption:</p>
<p> [root]# openssl genrsa -out mars-server.key 1024</p>
<p> [root]# openssl req -new -key mars-server.key -out mars-server.csr<br /> Using configuration from /usr/share/ssl/openssl.cnf<br /> Enter PEM pass phrase:<br /> You are about to be asked to enter information that will be incorporated<br /> into your certificate request.<br /> What you are about to enter is what is called a Distinguished Name or a DN.<br /> There are quite a few fields but you can leave some blank<br /> For some fields there will be a default value,<br /> If you enter &#8216;.&#8217;, the field will be left blank.<br /> &#8212;&#8211;<br /> Country Name (2 letter code) [GB]:TW<br /> State or Province Name (full name) [Berkshire]:Taipei County<br /> Locality Name (eg, city) [Newbury]:Nankang<br /> Organization Name (eg, company) [My Company Ltd]:VanEmery.Com<br /> Organizational Unit Name (eg, section) []:Web Services<br /> Common Name (eg, your name or your server&#8217;s hostname) []:mars.vanemery.com &lt;=== This must be the real FQDN of your server!!!<br /> Email Address []:hostmaster@vanemery.com</p>
<p> Please enter the following &#8216;extra&#8217; attributes<br /> to be sent with your certificate request<br /> A challenge password []:<br /> An optional company name []:</p>
<p> # openssl x509 -req -in mars-server.csr -out mars-server.crt -sha1 -CA my-ca.crt -CAkey my-ca.key -CAcreateserial -days 3650<br /> Signature ok<br /> subject=/C=TW/ST=Taipei County/L=Nankang/O=VanEmery.Com/OU=Web <a class="moz-txt-link-abbreviated" href="mailto:Services/CN=mars.vanemery.com/Email=hostmaster@vanemery.com">Services/CN=mars.vanemery.com/Email=hostmaster@vanemery.com</a><br /> Getting CA Private Key<br /> Enter PEM pass phrase:</p>
<p> [root]# openssl x509 -in mars-server.crt -text -noout</p>
<p> Make sure that your server name is the same as the FQDN that your clients will use when connecting to your site. Also, let&#8217;s get in the habit of protecting our keys with appropriate permissions:</p>
<p> [root]# chmod 0400 *.key</p>
<p> Now, we need to move the new keys and certs into the proper directories in the /etc/httpd hierarchy:</p>
<p> [root]# cp mars-server.crt /etc/httpd/conf/ssl.crt<br /> [root]# cp mars-server.key /etc/httpd/conf/ssl.key<br /> [root]# cp my-ca.crt /etc/httpd/conf/ssl.crt</p>
<p> ######################################################################################################</p>
<p> <font size="3">La documentazione l&#8217;ho trovata nel seguente link:<br /> <a class="moz-txt-link-freetext" href="http://www.sikurezza.org/ml/03_04/msg00041.html">http://www.sikurezza.org/ml/03_04/msg00041.html</a></p>
<p> che riporto di seguito per comodità</font></p>
<p> #####################################################################################################</p>
<p> How to make Apache working with OWA (OutLook web access), using mod_proxy.</p>
<p> Table of Content:</p>
<p> 1. The purpose of the document<br /> 2. What we need<br /> 3. Configuration<br /> 4. TroubleShooting.</p>
<p> 1. PURPOSE OF THE DOCUMENT</p>
<p> Sometimes someone ask us to make possible to access his e-mail account from<br /> Internet. In best cases we can use a simple and powerful web-mail, but in<br /> worst cases we MUST use OWA, AKA Outlook Web Access.</p>
<p> The problem is twice:</p>
<p> 1) Using Exchange server 5.5 or 2000 in normal edition we can&#8217;t separate OWA<br /> from the Exchange Machine.<br /> 2) Using OWA, we MUST use IIS that we know suxXXs in security.</p>
<p> So, to avoid these problems we can use Apache mod_proxy to:</p>
<p>  + Separate services to a FrontEnd &lt;-&gt; BackEnd scenario<br />  + Putting IIS in a DMZ and make that most attacks were made to the<br /> front-end Apache (that is better).</p>
<p> The purpose of this document is how to install and, of course, make work<br /> Apache mod_proxy to make possible to access OWA trought IIS.</p>
<p> The scenario we&#8217;ll be:</p>
<p> Client &#8212;-&gt; Apache (mod_proxy) &lt;&#8212;&#8212;&gt; IIS-Exchange</p>
<p> 2. WHAT WE NEED</p>
<p> Naturally we need:</p>
<p>   + A Working Exchange 2000/5.5 installation<br />   + A Working IIS + SSL maximum patchlevel with OWA correctly installed on<br /> the same Exchange machine<br />   + A working ApacheII with SSL and mod_proxy support on another Machine</p>
<p> 3. Configuration</p>
<p> Ok, let&#8217;s go.</p>
<p> The configuration to make all these work is quite simple, but include a<br /> work-around. OWA infact return FQDN urls to the client; so we must make that<br /> the client always think to connect to the apache, and the Apache always<br /> think to connect to the IIS server for the same domain name! Better<br /> explanation will be parsing configuration files 🙂</p>
<p> For security reasons we&#8217;ll configure all using SSL connections, so there<br /> will be a Secure Connection between Client and Apache, and between Apache<br /> and IIS, so no data go on the net unencrypted.<br /> This is important thing because as Microsoft says in Q29661 Article, only<br /> Basic Authentication is possible between front-end back-end, also if<br /> front-end is IIS and not Apache. By the way&#8230; using Integrated Windows<br /> Authentication with ourconfiguration will make IE not work 🙂</p>
<p> We can configure our wonderful apache server machine. I suggest to use the<br /> httpd&#8217; latest version.<br /> Naturally we assume that the reader has any experiences with Virtual Hosts,<br /> normal and SSL Based, for further information please read Apache<br /> documentation.</p>
<p> For firts we assume that the scenario is you have a public or private<br /> domain, (Ex. owa.myexistentdomain.com) so in your DNS you must translate<br /> this domain to the Apache IP Address (could be public or private) .</p>
<p> After that you MUST put into the /etc/hosts file of the apache machine this<br /> string:</p>
<p> owa.myexistentdomain.com 192.168.0.1 # substitute this ip with the IIS-OWA<br /> internal IP address.</p>
<p> we make this action to make possible the apache to understand and correctly<br /> proxy the connection because OWA sends him the FQDN as the URL to contact!!!</p>
<p> So in your ssl.conf:</p>
<p> &lt;VirtualHost privateip:443&gt; #substitute this IP with the address resolved by<br /> the dns for owa.myexistentdomain.com!!!</p>
<p>     SSLEngine on<br />     SSLProxyEngine on<br />     SSLProtocol +all<br />     SSLCipherSuite HIGH:MEDIUM</p>
<p>     SSLCertificateFile /apache/conf/ssl.crt/server.crt<br />     SSLCertificateKeyFile /apache/conf/ssl.key/server.key</p>
<p>    &lt;Files ~ &#8220;\.(cgi|shtml|phtml|php3?)$&#8221;&gt;<br />     SSLOptions +StdEnvVars<br />    &lt;/Files&gt;</p>
<p>     ServerAdmin root@xxxxxxxxxxxxxxxxxxxxxxxx<br />     ServerName owa.myexistentdomain.com:443</p>
<p>     &lt;Location &#8220;/exchange&#8221;&gt;</p>
<p>     ProxyPass <a class="moz-txt-link-freetext" href="https://owa.myexistentdomain.com/exchange">https://owa.myexistentdomain.com/exchange</a><br />     ProxyPassReverse <a class="moz-txt-link-freetext" href="https://owa.myexistentdomain.com/exchange">https://owa.myexistentdomain.com/exchange</a><br />     &lt;/Location&gt;</p>
<p>     &lt;Location &#8220;/exchweb&#8221;&gt;<br />     ProxyPass <a class="moz-txt-link-freetext" href="https://owa.myexistentdomain.com/exchweb">https://owa.myexistentdomain.com/exchweb</a><br />     ProxyPassReverse <a class="moz-txt-link-freetext" href="https://owa.myexistentdomain.com/exchweb">https://owa.myexistentdomain.com/exchweb</a><br />     &lt;/Location&gt;</p>
<p>     &lt;Location &#8220;/public&#8221;&gt;<br />     ProxyPass  <a class="moz-txt-link-freetext" href="https://owa.myexistentdomain.com/public">https://owa.myexistentdomain.com/public</a><br />     ProxyPassReverse <a class="moz-txt-link-freetext" href="https://owa.myexistentdomain.com/public">https://owa.myexistentdomain.com/public</a><br />     &lt;/Location&gt;<br /> #<br />     ErrorLog logs/owa_ssl_error<br />     CustomLog logs/owa_ssl_acces common<br />     CustomLog logs/ssl_owa_request_log \<br />           &#8220;%t %h %{SSL_PROTOCOL}x %{SSL_CIPHER}x \&#8221;%r\&#8221; %b&#8221;</p>
<p>     # mod_security Configuration</p>
<p>     SecFilterEngine On<br /> #    SecAuditEngine On<br /> #    SecAuditLog logs/audit_log<br /> #    SecFilterScanPOST On<br />     SecFilterDefaultAction deny,log,status:409<br />       # Filters<br />       SecFilter &#8220;\.\./&#8221;<br />       SecFilter &#8220;&lt;( |\n)*script&#8221;<br />       SecFilter &#8220;&lt;(.|\n)+&gt;&#8221;<br />       SecFilter &#8220;root.exe*&#8221;<br />       SecFilter &#8220;cmd.exe*&#8221;<br />       SecFilter &#8220;default.ida*&#8221;<br />       SecFilter &#8220;delete( |\n)+from&#8221;<br />       SecFilter &#8220;insert( |\n)+into&#8221;<br />       SecFilter &#8220;select( |\n)+from&#8221;</p>
<p> &lt;/VirtualHost&gt;</p>
<p> Now, we can make a simple html or php page to put in htdocs/ that redirect<br /> every single connection from the original site to the <a class="moz-txt-link-freetext" href="https://">https://</a> one, a simple<br /> php example here:</p>
<p> &lt;?<br /> header(&#8220;location: <a class="moz-txt-link-freetext" href="https://owa.myexistentdomain.com/">https://owa.myexistentdomain.com/</a>&#8220;;);<br /> ?&gt;</p>
<p> Now, after that we MUST correctly configure IIS to make he can response to a<br /> connection made from the client from a different Domain Name.</p>
<p> So, take IIS Admin interface and put into the Virtual Domain in witch OWA<br /> lives and into the:</p>
<p> Properties -&gt; Web Site -&gt; IP Address -&gt; Advanced</p>
<p> Add the identity to the web server:</p>
<p> IP Address:       Put here the local ip address of the Exchange-IIS machine<br /> TCP Port:         80 of course<br /> Host Header Name: Here you must put owa.myexistentdomain.com</p>
<p> click OK and save 🙂</p>
<p> Naturally you must the identity also of the SSL identity in witch the port<br /> is 443 and the ip is the same of the previus configuration (norma identity).</p>
<p> Click OK and save 🙂</p>
<p> Now, into the menu&#8217;:</p>
<p> Properties -&gt; Web Site -&gt; IP Address:</p>
<p> put the IP address of the IIS-Exchange machine.</p>
<p> now, a VERY important thing are:</p>
<p> + tell IIS to refuse any NON-SSL Connection (search into &#8220;Directory<br /> Security&#8221; and Edit certificate properties)<br /> + Disable Integrated Windows Authentication and Enable Basic one (search<br /> into &#8220;Directory Security&#8221;).</p>
<p> Now we suggest to:</p>
<p> + use IISLockdown utility to hardenize IIS configuration (is free avaiable<br /> on microsoft site)<br /> + Use Apache mod_protection or mod_security to avoid attack (search<br /> freshmeat for them)</p>
<p> Now all is working!!! Point our browser to<br /> <a class="moz-txt-link-freetext" href="http://owa.myexistentdomain.com/exchange/">http://owa.myexistentdomain.com/exchange/</a> or<br /> <a class="moz-txt-link-freetext" href="https://owa.myexistentdomain.com/exchange/">https://owa.myexistentdomain.com/exchange/</a> and go on!!!!</p>
<p> 4. TroubleShooting.</p>
<p> For first thing I suggest to try different browsers instead of IE that is<br /> buggy.<br /> Doing this configuration I find out that forcing SSLv3 with HIGH encryption,<br /> Netscape works but IE will NOT WORK saying the stupid error &#8220;Navigation<br /> Cancelled&#8221; 😀 (thank you Mr. Bill&#8230; you make me happy).</p>
<p> After that try this:</p>
<p> + Try to connect directly to IIS to ensure that is not an IIS or OWA problem<br /> + Pinging from a client owa.myexistentdomain.com I reach the apache IP<br /> Address.<br /> + Pinging from The apache Server owa.myexistentdomain.com I reach the<br /> Exchange-IIS IP Address.<br /> + Both Apache and IIS Certificates are valid and built on the<br /> owa.myexistentdomain.com Common Name<br /> + Try to disable NTLM Auth, sometimes IE is more stupid that he would<br /> appear.<br /> + Recontrol Apache and IIS Configuration</p>
<p> + Try to sniff the traffic to manage what it is going on!!!!</p>
<p> Best Regards,</p>
<p> Federico ego_pfe@xxxxxxxxx</p>
<p> Credits: I must say thank to buzzzo, without him my lamerness would take<br /> windward 😉</p>
