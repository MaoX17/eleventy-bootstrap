---
title: "Creare o Revocare certificato openvpn"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2008-01-23"
permalink: "creare-o-revocare-certificato-openvpn/"
layout: "template_posts_md"
---
<p><tt>Questi sono i passaggi necessari:</p>
<p>#################################<br />CREARE UN CERTIFICATO:<br />cd /etc/openvpn/easy-rsa/<br />. ./vars<br />./build-key NOMEUTENTE</p>
<p>vi /etc/openvpn/ipp.txt</p>
<p>#################################<br />REVOCARE UN CERTIFICATO<br />cd /etc/openvpn/easy-rsa/<br />. ./vars<br />./revoke-full NOMEUTENTE</p>
<p>!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!<br />Dalla guida:<br /><a href="http://openvpn.net/easyrsa.html">http://openvpn.net/easyrsa.html</a></p>
<p></tt> </p>
<pre>BUILD AND SIGN A CERTIFICATE SIGNING REQUEST USING A<br />LOCALLY INSTALLED ROOT CERTIFICATE/KEY -- this<br />script generates and signs a certificate in one step,<br />but it requires that the generated certificate and<br />private key files be copied to the destination host<br />over a secure channel. <br />1. ./build-key mycert (no password protection)<br />2. OR ./build-key-pass mycert (with password protection)<br />3. OR ./build-key-pkcs12 mycert (PKCS #12 format)<br />4. OR ./build-key-server mycert (with nsCertType=server)<br />5. mycert.crt and mycert.key will be built in your   <br />KEY_DIR directory, and mycert.crt will be signed   <br />by your root CA. If ./build-key-pkcs12 was used a   <br />mycert.p12 file will also be created including the   <br />private key, certificate and the ca certificate. </pre>
<p><tt><br />!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!<br />Dalla guida:<br /><a href="http://openvpn.net/howto.html#pki">http://openvpn.net/howto.html#pki</a><br /></tt> </p>
<h3>Generate certificates &amp; keys for 3 clients</h3>
<p>Generating client certificates is very similar to the previous step. On Linux/BSD/Unix:</p>
<blockquote>
<pre><b>./build-key client1 ./build-key client2 ./build-key client3</b></pre>
</blockquote>
<p>On Windows:</p>
<blockquote>
<pre><b>build-key client1 build-key client2 build-key client3</b></pre>
</blockquote>
<p>If you would like to password-protect your client keys, substitute the <b>build-key-pass</b> script.</p>
<p>Remember that for each client, make sure to type the appropriate <b>Common Name</b> when prompted, i.e. &#8220;client1&#8221;, &#8220;client2&#8221;, or &#8220;client3&#8221;. Always use a unique common name for each client.</p>
