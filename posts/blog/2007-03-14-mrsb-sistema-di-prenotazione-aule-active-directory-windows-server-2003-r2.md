---
title: "MRSB - Sistema di prenotazione - active directory 2003 R2"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-03-14"
permalink: "mrsb-sistema-di-prenotazione-aule-active-directory-windows-server-2003-r2/"
layout: "template_posts_md"
icon:
  - win
  - php
  - apache
---
<p>Hi,<br />first of all, i&#39;m sorry for my bad english!</p>
<p>I solved some problem occurred in ldap authentication with ADS Windows <br />2003 R2.</p>
<p>i&#39;ve changed:</p>
<p>auth_ldap.inc in this manner:</p>
<p>function authValidateUser($user, $pass)<br />{<br />global $auth;<br />global $ldap_host;<br />global $ldap_base_dn;<br />global $ldap_user_attrib;<br />global $ldap_filter;<br />global $account_suffix; // &lt;&#8212;&#8212;- added LINE 26<br />&#8230;<br />&#8230;</p>
<p>// establish ldap connection<br />// the &#39;@&#39; suppresses errors<br />$ldap = @ldap_connect($ldap_host);<br />ldap_set_option($ldap, LDAP_OPT_PROTOCOL_VERSION, 3); // &lt;&#8212;&#8212;&#8211; Added <br />line 77<br />ldap_set_option($ldap, LDAP_OPT_REFERRALS, 0); //disable plain text <br />passwords // &lt;&#8212;&#8212;&#8212; Added line 78</p>
<p>// Check that connection was established<br />&#8230;<br />&#8230;</p>
<p>//if(@ldap_bind($ldap, $dn, $pass)) // &lt;&#8212;- changed line 92 from &#8230;<br />if(@ldap_bind($ldap, $user.$account_suffix, $pass)) // &lt;&#8212; &#8230; to</p>
<p>&#8230;<br />&#8230;</p>
<p>i&#39;ve configured<br />config.inc.php<br />like this:</p>
<p># Where is the LDAP server<br />$ldap_host = &quot;172.21.1.20&quot;;<br />$ldap_base_dn = &quot;cn=users, dc=pippo, dc=local&quot;;<br />$account_suffix = &quot;@pippo.local&quot;;<br />$ldap_user_attrib = &quot;sAMAccountName&quot;;</p>
<p>In the follow line there was an error &#8230;<br />#//$ldap_user_filter = <br />&quot;memberOf=CN=ServicePrenotazioniSale,OU=ServiceGroup,dc=prvprato1,dc=local&quot;;</p>
<p>this is correct<br />$ldap_filter = <br />&quot;memberOf=CN=ServicePrenotazioniSale,OU=ServiceGroup,dc=pippo,dc=local&quot;;</p>
<p>I hope someone can use this information to solve same problem.<br />Good bye.</p>
<p>P.S.<br />mrbs is a very good program!!!</p>
