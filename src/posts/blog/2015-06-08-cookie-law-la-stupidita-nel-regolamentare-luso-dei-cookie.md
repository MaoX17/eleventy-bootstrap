---
title: "Cookie Law - La stupidità nel regolamentare l’uso dei cookie"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2015-06-08"
permalink: "cookie-law-la-stupidita-nel-regolamentare-luso-dei-cookie/"
layout: "template_posts_md"
icon:
  - cookie
  - law
  - css


---
<p>Premetto che <strong>ritengo la “cookie law” una delle cose più stupide ed inutili mai viste.</strong><br />
<strong> Paragonabile FORSE solo alla norma sugli amministratori di sistema in quando a idiozia.</strong><br />
<strong> Detto questo… visto che siamo TUTTI costretti ad adeguarci … UBBIDISCO..</strong></p>
<p><strong>Ma vorrei sollevare una riflessione… quanto sarà costato e costerà a tutti, enti pubblici e società private, questo stupido giochetto ?</strong></p>
<p><span style="color: #ff0000;">Meditate gente, meditate!</span></p>
<p>Detto questo &#8230; ecco la soluzione più rapida che ho trovato (quando non sia possibile adottare un plugin ad HOC)</p>
<p>Nella sezione HEAD del sito aggiungere quanto segue:</p>
<pre>

&lt;!-- ---------------- cookie ------------------------- --&gt;
&lt;link rel="stylesheet" media="screen" href="http://www.provincia.prato.it/cookie.css" type="text/css" /&gt;
&lt;!-- ---------------- /cookie ------------------------- --&gt;

</pre>
<p>Nel Body inserire in alto quanto segue:</p>
<pre>
&lt;!-- ---------------- cookie ------------------------- --&gt;
&lt;div id="banner_cookie"&gt;
&lt;div id="banner_interno"&gt;
&lt;div id="banner_sx"&gt;
Questo sito utilizza cookies tecnici e di terze parti per funzionalit&amp;agrave; quali la condivisione sui &lt;i&gt;social network&lt;/i&gt; e/o la visualizzazione
di media.
Se non acconsenti all'utilizzo dei cookie di terze parti, alcune di queste funzionalit&amp;agrave; potrebbero essere non disponibili.
Per maggiori informazioni consulta la &lt;a target="_blanc" href="http://www.miosito.it/privacy_cookie.html"&gt;privacy policy&lt;/a&gt;
&lt;/div&gt;
&lt;div id="banner_dx"&gt;
Acconsenti all'utilizzo di cookie di terze parti?
&lt;br /&gt;
&lt;br /&gt;
&lt;a href='javascript:void(0);' onclick='CookieOk();'&gt;&lt;b&gt;Si, acconsento&lt;/b&gt;&lt;/a&gt;
&lt;a href='javascript:void(0);' onclick='CookieKo();'&gt;&lt;b&gt;No, non acconsento&lt;/b&gt;&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;

&lt;script type="text/javascript" src="http://www.miosito.it/cookie.js"&gt;&lt;/script&gt;
&lt;!-- ---------------- /cookie ------------------------- --&gt;
</pre>
<p>I due file sono i seguenti:</p>
<p>cookie.css:</p>
<pre>
#banner_cookie {
display: none;
z-index: 99999;
position: fixed;
left: 0px;
right: 0px;
top: 0px;
width: 100%;
min-height: 40px;
padding: 14px;
background-color: #000000;
background-color: rgba(0, 0, 0, 0.8);
color: #ffffff;
line-height: 1.5;
font-family: "Lucida Grande", Verdana, Arial, Helvetica, sans-serif;
font-size: 14px;
text-align: left;
}

#banner_interno {
width: 960px;
margin-left: auto;
margin-right: auto;
}
#banner_sx {
width: 60%;
float: left;
padding-right: 24px;
}

#banner_dx {
width: 35%;
float: right;
}

#banner_sx a {
color: #ffffff;
text-decoration: underline;
}

#banner_sx a:hover, #banner_sx a:focus {
color: #000000;
background: #ffffff;
text-decoration: underline;
}

#banner_dx a {
padding: 4px;
border-radius: 4px;
background: #dfdfdf;
color: #000000;
font-weight: bold;
text-decoration: none;
}

#banner_dx a:hover, #banner_dx a:focus {
color: #dfdfdf;
background: #000000;
}
</pre>
<p>cookie.js:</p>
<pre>
function CookieOk()
{
var expiration = new Date();
expiration.setTime(expiration.getTime() + (60000*60*24*365));
setCookie("ok_cookie","1",expiration,"/");
document.getElementById("banner_cookie").style.display="none";
window.location.reload(true);
}
function CookieKo()
{
var expiration = new Date();
expiration.setTime(expiration.getTime() + (60000*60*24*365));
setCookie("ok_cookie","2",expiration,"/");
document.getElementById("banner_cookie").style.display="none";
}

function setCookie(name,value,expires,path,domain,secure){document.cookie=name+"="+escape(value)+((expires==null)?"":"; expires="+expires.toGMTString())+((path==null)?"":"; path="+path)+((domain==null)?"":"; domain="+domain)+((secure==null)?"":"; secure")}
function getCookie(name){var cname=name+"=";var dc=document.cookie;if(dc.length&gt;0){begin=dc.indexOf(cname);if(begin!=-1){begin+=cname.length;end=dc.indexOf(";",begin);if(end==-1)end=dc.length;return unescape(dc.substring(begin,end))}}return null}
function delCookie(name,path,domain){if(getCookie(name)){document.cookie=name+"="+((path==null)?"":"; path="+path)+((domain==null)?"":"; domain="+domain)+"; expires=Thu, 01-Jan-70 00:00:01 GMT"}}

var check_cookie = getCookie("ok_cookie");

if ( (check_cookie == null) || (window.location.href.indexOf("privacy")&gt;0) )
{
document.getElementById("banner_cookie").style.display="block";
}
</pre>
