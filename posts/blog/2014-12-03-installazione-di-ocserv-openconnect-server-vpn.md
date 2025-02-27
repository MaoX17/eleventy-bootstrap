---
title: "Installazione di Ocserv openconnect server vpn"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2014-12-03"
permalink: "installazione-di-ocserv-openconnect-server-vpn/"
layout: "template_posts_md"
icon:
  - linux
  - vpn
  - net
---
<h3>Installazione</h3>
<pre>
yum install autoconf automake gcc libtasn1-devel zlib zlib-devel  trousers trousers-devel gmp-devel gmp xz texinfo libnl-devel libnl  tcp_wrappers-libs tcp_wrappers-devel tcp_wrappers dbus dbus-devel  ncurses-devel pam-devel readline-devel bison bison-devel flex gcc  automake autoconf wget
</pre>
<pre>
wget <a title="http://www.infradead.org/~tgr/libnl/files/libnl-3.2.25.tar.gz" rel="nofollow" href="http://www.infradead.org/%7Etgr/libnl/files/libnl-3.2.25.tar.gz">http://www.infradead.org/~tgr/libnl/files/libnl-3.2.25.tar.gz</a>
tar -zxvf nettle-2.7.1.tar.gz
cd nettle-2.7.1
./configure --prefix=/opt/
make &amp;&amp; make install
</pre>
<pre>
tar -xvf gnutls-3.3.10.tar.xz
cd gnutls-3.3.10
export LD_LIBRARY_PATH=/opt/lib/:/opt/lib64/
NETTLE_CFLAGS="-I/opt/include/" NETTLE_LIBS="-L/opt/lib64/ -lnettle"  HOGWEED_CFLAGS="-I/opt/include" HOGWEED_LIBS="-L/opt/lib64/ -lhogweed"  ./configure --prefix=/opt/
</pre>
<pre>
wget <a title="http://www.carisma.slowglass.com/~tgr/libnl/files/libnl-3.2.24.tar.gz" rel="nofollow" href="http://www.carisma.slowglass.com/%7Etgr/libnl/files/libnl-3.2.24.tar.gz">http://www.carisma.slowglass.com/~tgr/libnl/files/libnl-3.2.24.tar.gz</a>
tar xvf libnl-3.2.24.tar.gz
cd libnl-3.2.24
./configure --prefix=/opt/
make &amp;&amp; make install
</pre>
<pre>
tar -xvf ocserv-0.8.8.tar.xz
cd ocserv-0.8.8
ls
LIBGNUTLS_CFLAGS="-I/opt/include/" LIBGNUTLS_LIBS="-L/opt/lib/ -lgnutls"  LIBNL3_CFLAGS="-I/opt/include" LIBNL3_LIBS="-L/opt/lib/ -lnl-3  -lnl-route-3" ./configure --prefix=/opt/
make &amp;&amp; make install
</pre>
<pre>
export LD_LIBRARY_PATH=/opt/lib/:/opt/lib64/

export PATH=$PATH:/opt/bin:/opt/sbin
</pre>
<h3>Configurazione di Ocserv &#8211; openconnect server vpn</h3>
<h4>Generazione dei certificati</h4>
<pre>
mkdir /etc/ocserv/

cd /etc/ocserv/

export LD_LIBRARY_PATH=/opt/lib/:/opt/lib64/

export PATH=$PATH:/opt/bin:/opt/sbin

certtool --generate-privkey --outfile ca-key.pem

cat &lt;&lt; _EOF_ &gt; ca.tmpl
cn = "VPN CA"
organization = "Provincia di Prato"
serial = 1
expiration_days = 9999
ca
signing_key
cert_signing_key
crl_signing_key
_EOF_

certtool --generate-self-signed --load-privkey ca-key.pem --template ca.tmpl --outfile ca-cert.pem
certtool --generate-privkey --outfile server-key.pem

cat &lt;&lt; _EOF_ &gt; server.tmpl
cn = "openconnect.provincia.prato.it"
organization = "ProvinciaDiPrato"
expiration_days = 9999
signing_key
encryption_key #only if the generated key is an RSA one
tls_www_server
_EOF_

certtool --generate-certificate --load-privkey server-key.pem  --load-ca-certificate ca-cert.pem --load-ca-privkey ca-key.pem  --template server.tmpl --outfile server-cert.pem

certtool --generate-privkey --outfile mpadmin-key.pem

cat &lt;&lt; _EOF_ &gt; mpadmin.tmpl
cn = "mpadmin"
unit = "admins"
expiration_days = 9999
signing_key
tls_www_client
_EOF_

certtool --generate-certificate --load-privkey mpadmin-key.pem  --load-ca-certificate ca-cert.pem --load-ca-privkey ca-key.pem  --template mpadmin.tmpl --outfile mpadmin-cert.pem
</pre>
<h3>File di configurazione: ocserv.conf</h3>
<pre>
[root@localhost ocserv]# cat ocserv.conf
# User authentication method. Could be set multiple times and in that case
# all should succeed.
# Options: certificate, pam.
auth = "certificate"
#auth = "plain[./test1.passwd]"
#auth = "pam"

# A banner to be displayed on clients
banner = "Welcome"

# Use listen-host to limit to specific IPs or to the IPs of a provided hostname.
#listen-host = [IP|HOSTNAME]

use-dbus = no

# Limit the number of clients. Unset or set to zero for unlimited.
#max-clients = 1024
max-clients = 16

# Limit the number of client connections to one every X milliseconds
# (X is the provided value). Set to zero for no limit.
#rate-limit-ms = 100

# Limit the number of identical clients (i.e., users connecting multiple times)
# Unset or set to zero for unlimited.
max-same-clients = 2

# TCP and UDP port number
tcp-port = 4444
udp-port = 4444

# Keepalive in seconds
keepalive = 32400

# Dead peer detection in seconds
dpd = 440

# MTU discovery (DPD must be enabled)
try-mtu-discovery = false

# The key and the certificates of the server
# The key may be a file, or any URL supported by GnuTLS (e.g.,
# tpmkey:uuid=xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxx;storage=user
# or pkcs11:object=my-vpn-key;object-type=private)
#
# There may be multiple certificate and key pairs and each key
# should correspond to the preceding certificate.
server-cert = /etc/ocserv/server-cert.pem
server-key = /etc/ocserv/server-key.pem

# Diffie-Hellman parameters. Only needed if you require support
# for the DHE ciphersuites (by default this server supports ECDHE).
# Can be generated using:
# certtool --generate-dh-params --outfile /path/to/dh.pem
#dh-params = /path/to/dh.pem

# If you have a certificate from a CA that provides an OCSP
# service you may provide a fresh OCSP status response within
# the TLS handshake. That will prevent the client from connecting
# independently on the OCSP server.
# You can update this response periodically using:
# ocsptool --ask --load-cert=your_cert --load-issuer=your_ca --outfile response
# Make sure that you replace the following file in an atomic way.
#ocsp-response = /path/to/ocsp.der

# In case PKCS #11 or TPM keys are used the PINs should be available
# in files. The srk-pin-file is applicable to TPM keys only (It's the storage
# root key).
#pin-file = /path/to/pin.txt
#srk-pin-file = /path/to/srkpin.txt

# The Certificate Authority that will be used
# to verify clients if certificate authentication
# is set.
#ca-cert = /path/to/ca.pem
ca-cert = /etc/ocserv/ca-cert.pem

# The object identifier that will be used to read the user ID in the client certificate.
# The object identifier should be part of the certificate's DN
# Useful OIDs are:
#  CN = 2.5.4.3, UID = 0.9.2342.19200300.100.1.1
#cert-user-oid = 0.9.2342.19200300.100.1.1

# The object identifier that will be used to read the user group in the client
# certificate. The object identifier should be part of the certificate's DN
# Useful OIDs are:
#  OU (organizational unit) = 2.5.4.11
#cert-group-oid = 2.5.4.11

# A revocation list of ca-cert is set
#crl = /path/to/crl.pem

# GnuTLS priority string
tls-priorities = "PERFORMANCE:%SERVER_PRECEDENCE:%COMPAT"

# To enforce perfect forward secrecy (PFS) on the main channel.
#tls-priorities = "NORMAL:%SERVER_PRECEDENCE:%COMPAT:-RSA"

# The time (in seconds) that a client is allowed to stay connected prior
# to authentication
auth-timeout = 40

# The time (in seconds) that a client is not allowed to reconnect after
# a failed authentication attempt.
#min-reauth-time = 2

# Cookie validity time (in seconds)
# Once a client is authenticated he's provided a cookie with
# which he can reconnect. This option sets the maximum lifetime
# of that cookie.
cookie-validity = 172800

# Script to call when a client connects and obtains an IP
# Parameters are passed on the environment.
# REASON, USERNAME, GROUPNAME, HOSTNAME (the hostname selected by client),
# DEVICE, IP_REAL (the real IP of the client), IP_LOCAL (the local IP
# in the P-t-P connection), IP_REMOTE (the VPN IP of the client). REASON
# may be "connect" or "disconnect".
#connect-script = /usr/bin/myscript
#disconnect-script = /usr/bin/myscript

# UTMP
use-utmp = true

# PID file
pid-file = /var/run/ocserv.pid

# The default server directory. Does not require any devices present.
#chroot-dir = /path/to/chroot

# socket file used for IPC, will be appended with .PID
# It must be accessible within the chroot environment (if any)
socket-file = /var/run/ocserv-socket

# The user the worker processes will be run as. It should be
# unique (no other services run as this user).
run-as-user = nobody
run-as-group = daemon
# Network settings

device = vpns

# The default domain to be advertised
default-domain = provincia.prato.it

ipv4-network = 172.21.0.0
ipv4-netmask = 255.255.0.0
# Use the keywork local to advertize the local P-t-P address as DNS server
ipv4-dns = 172.21.1.29

# The NBNS server (if any)
#ipv4-nbns = 192.168.2.3

#ipv6-address =
#ipv6-mask =
#ipv6-dns =

# Prior to leasing any IP from the pool ping it to verify that
# it is not in use by another (unrelated to this server) host.
ping-leases = false

# Leave empty to assign the default MTU of the device
# mtu =

#route = 192.168.1.0/255.255.255.0
#route = 192.168.5.0/255.255.255.0

#
# The following options are for (experimental) AnyConnect client
# compatibility. They are only available if the server is built
# with --enable-anyconnect
#

# Client profile xml. A sample file exists in doc/profile.xml.
# This file must be accessible from inside the worker's chroot.
# The profile is ignored by the openconnect client.
#user-profile = profile.xml

# Unless set to false it is required for clients to present their
# certificate even if they are authenticating via a previously granted
# cookie. Legacy CISCO clients do not do that, and thus this option
# should be set for them.
#always-require-cert = false

######################################################################################
</pre>
<h3>Creo file di start del servizio: ocserv.start</h3>
<pre>
[root@localhost ocserv]# cat ocserv.start
#!/bin/bash
export LD_LIBRARY_PATH=/opt/lib/:/opt/lib64/
export PATH=$PATH:/opt/bin/:/opt/sbin/
iptables -t nat -F
iptables -t nat -A POSTROUTING -j MASQUERADE
ocserv -c /etc/ocserv/ocserv.conf

########################################################################################
</pre>
