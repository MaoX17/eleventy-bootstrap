---
title: "Propel e portali &#8211; appunti utili&#8230; a me"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2015-08-17"
permalink: "propel-e-portali-appunti-utili-a-me/"
layout: "template_posts_md"
icon:
  - php
  - propel

---
<p>Installazione Propel</p>
<p>just create a new composer.json file at the root of your project&#8217;s directory with the following content:</p>
<pre>{
"require": {
"propel/propel": "~2.0@dev"
}
}

wget http://getcomposer.org/composer.phar

php composer.phar install
</pre>
<p>Per testarlo:</p>
<pre>cd myproject
e lancia
vendor/bin/propel
export PATH=$PATH:/path/to/vendor/bin/
cd mkdir propel
mkdir propel/class
propel init
propel model:build
vim composer.json
{
"require": {
"propel/propel": "~2.0@dev"
},
"autoload": {
"classmap": ["propel/class/"]
}
}

php composer.phar dump-autoload

propel config:convert
</pre>
<p>nei file php:</p>
<pre>require_once 'include.inc.php';
// setup the autoloading
require_once 'vendor/autoload.php';
//require_once 'vendor/autoload.php';
// setup Propel
require_once 'generated-conf/config.php';
</pre>
<p>e poi:</p>
<pre><!--?php 
require_once 'include.inc.php';
require_once 'vendor/autoload.php';
require_once 'generated-conf/config.php';

//use Avvisi;

$avviso = new Avvisi();
$avviso-&gt;setAvviso("prova 1 2 3");&lt;br ?--> $avviso-&gt;setDtAvviso("2013-12-11");
echo $avviso-&gt;getAvviso();
var_dump($avviso-&gt;getDtAvviso());
$d1=new DateTime("2012-07-08 11:14:15.638276");
var_dump($d1);
echo $d1-&gt;format('Y-m-d H:i');
echo $avviso-&gt;getDtAvviso()-&gt;format('Y-m-d H:i');
$newDate = $avviso-&gt;getDtAvviso();
$newDate = $newDate-&gt;format('Y-m-d H:i:s'); // for example
$avviso-&gt;save()
?&gt;
</pre>
<p>[modifica]<br />
Propel &#8211; Installazione con reverse</p>
<p>just create a new composer.json file at the root of your project&#8217;s directory with the following content:</p>
<pre>{
"require": {
"propel/propel": "~2.0@dev"
}
}

wget http://getcomposer.org/composer.phar

php composer.phar install
</pre>
<p>Per testarlo:</p>
<pre>cd myproject
e lancia
vendor/bin/propel
export PATH=$PATH:/path/to/vendor/bin/
cd mkdir propel
mkdir propel/class
genera il file propel.yml :
Attenzione che deve essere INDENTATO!!!!
</pre>
<pre>
propel:
  general:
      project: bandi_concorsi
      version: 0.4

  paths:
      projectDir:  /var/www/vhosts/bandi_concorsi
      schemaDir: /var/www/vhosts/bandi_concorsi/propel
      phpDir: /var/www/vhosts/bandi_concorsi/propel/class
      phpConfDir: /var/www/vhosts/bandi_concorsi/propel
      # Directory in which your composer.json resides
#      composerDir: {empty}

## All Database settings ##
  database:
      connections:
          default:
              adapter: mysql
              dsn: mysql:host=localhost;dbname=bandi_concorsi
              user: root
              password:
              settings:
                  charset: utf8

          bandi_concorsi:
              adapter: mysql
              dsn: "mysql:host=localhost;dbname=bandi_concorsi"
              user: root
              password:
              settings:
                  charset: utf8

          albopretorio:
              adapter: mysql
              dsn: "mysql:host=192.168.0.20;dbname=albopretorio"
              user: user_db
              password: pass_db_pass
              attributes:

          protocollo:
              adapter: pgsql
              dsn: "pgsql://protocolloro:protocolloro@192.168.0.23:5433/protocollo"
              user: protocolloro
              password: protocolloro
              attributes:
</pre>
<pre>
propel reverse --output-dir="./propel"
propel model:build
vim composer.json
{
"require": {
"propel/propel": "~2.0@dev"
},
"autoload": {
"classmap": ["propel/class/"]
}
}

php composer.phar dump-autoload

propel config:convert
</pre>
<p>nei file php:</p>
<pre>require_once 'include.inc.php';
// setup the autoloading
require_once 'vendor/autoload.php';
//require_once 'vendor/autoload.php';
// setup Propel
require_once 'propel/config.php';

e poi:

<!--?php 
require_once 'include.inc.php';
require_once 'vendor/autoload.php';
require_once 'propel/config.php';

//use Avvisi;

$avviso = new Avvisi();
$avviso-&gt;setAvviso("prova 1 2 3");&lt;br ?--> $avviso-&gt;setDtAvviso("2013-12-11");
echo $avviso-&gt;getAvviso();
var_dump($avviso-&gt;getDtAvviso());
$d1=new DateTime("2012-07-08 11:14:15.638276");
var_dump($d1);
echo $d1-&gt;format('Y-m-d H:i');
echo $avviso-&gt;getDtAvviso()-&gt;format('Y-m-d H:i');
$newDate = $avviso-&gt;getDtAvviso();
$newDate = $newDate-&gt;format('Y-m-d H:i:s'); // for example
$avviso-&gt;save()
?&gt;
</pre>
