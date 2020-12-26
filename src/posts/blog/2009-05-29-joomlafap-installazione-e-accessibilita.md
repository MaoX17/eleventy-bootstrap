---
title: "JoomlaFAP installazione e accessibilità"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2009-05-29"
permalink: "joomlafap-installazione-e-accessibilita/"
layout: "template_posts_md"
---
<p><strong>Intro</strong><br />
Prima di tutto occorre ringraziare per il MERAVIGLIOSO progetto e agiungere i corretti riferimenti<br />
Sito del progetto: http://joomlacode.org/gf/project/joomlafap1_5</p>
<p>Download: http://joomlacode.org/gf/project/joomlafap1_5/frs/</p>
<p>Segnalazioni di errore su: http://joomlacode.org/gf/project/joomlafap1_5/tracker/</p>
<p>Le istruzioni sono nei video tutorial: http://joomlacode.org/gf/project/joomlafap1_5/docman/?subdir=466</p>
<p><strong>Installazione e configurazione</strong></p>
<p>Scarica joomla 1.5 &#8211; Joomla_1.5.10_ita-Stable.tgz e esegui l&#8217;installazione</p>
<p>Scarica il template<br />
<a href="http://joomlacode.org/gf/download/frsrelease/9169/34135/tpl_accessible_81.zip" target="_blank"> http://joomlacode.org/gf/download/frsrelease/9169/34135/tpl_accessible_81.zip</a><br />
da qui<br />
<a href="http://joomlacode.org/gf/project/joomlafap1_5/frs/?action=FrsReleaseBrowse&amp;frs_package_id=3542" target="_blank"> http://joomlacode.org/gf/project/joomlafap1_5/frs/?action=FrsReleaseBrowse&amp;frs_package_id=3542</a></p>
<p>oppure usa quello allegato che è modificato da me copiandolo nella root del sito ed estraendolo lì con tar -zxvf template&#8230;.)</p>
<p><a href="http://www.maurizio.proietti.name/wp-content/uploads/2009/05/template-maox-accessibiletar.gz">template-maox-accessibiletar</a></p>
<p>scarica il modulo per le access-key da qui<br />
<a href="http://joomlacode.org/gf/project/joomlafap1_5/frs/?action=FrsReleaseBrowse&amp;frs_package_id=3543" target="_blank"> http://joomlacode.org/gf/project/joomlafap1_5/frs/?action=FrsReleaseBrowse&amp;frs_package_id=3543</a></p>
<p>attualmente è il seguente:<br />
<a href="http://joomlacode.org/gf/download/frsrelease/9022/33465/com_accesskeys_77.zip" target="_blank"> http://joomlacode.org/gf/download/frsrelease/9022/33465/com_accesskeys_77.zip</a></p>
<p>Poi scarica le patch del core da qui<br />
<a href="http://joomlacode.org/gf/project/joomlafap1_5/scmsvn/?action=browse&amp;path=%2Fcorepatches%2F" target="_blank">http://joomlacode.org/gf/project/joomlafap1_5/scmsvn/?action=browse&amp;path=%2Fcorepatches%2F</a></p>
<p>basta il file delle differenze:<br />
joomla_fap_15_2009-03-29.diff</p>
<p>oppure, su linux (dopo aver installato subversion) creare una dir<br />
temporanea:<br />
mkdir tmp<br />
cd tmp<br />
svn checkout &#8211;username anonymous http://joomlacode.org/svn/joomlafap1_5/corepatches/<br />
password: anonymous</p>
<p>copiare il file delle differenze nella root del sito:<br />
cp joomla_fap_15_2009-03-29.diff ../</p>
<p>ed eseguire la patch:<br />
patch -p0 &lt; joomla_fap_15_2009-03-29.diff</p>
<p>Adesso copiare nella root del sito i 3 file delle differenze allegati di seguito ed<br />
eseguire:<br />
(serve x passare la validazione dell&#8217;xhtml)</p>
<p><a href="http://blog.maurizio.proietti.name/wp-content/uploads/2009/05/maoxcom_contact.diff">maoxcom_contact</a></p>
<p><a href="http://blog.maurizio.proietti.name/wp-content/uploads/2009/05/maoxcom_newsfeeds.diff">maoxcom_newsfeeds</a></p>
<p><a href="http://blog.maurizio.proietti.name/wp-content/uploads/2009/05/maoxcom_weblinks.diff">maoxcom_weblinks</a></p>
<p>patch -p0 &lt; MaoX.com_newsfeeds.diff<br />
patch -p0 &lt; MaoX.com_weblinks.diff<br />
patch -p0 &lt; MaoX.com_contact.diff</p>
<p>Nella sezione amministrativa:</p>
<p>modificare il Top Menu (sezione moduli) come nelle immagini allegate di seguito</p>
<p><a href="http://www.maurizio.proietti.name/wp-content/uploads/2009/05/menu_top01.jpg"><img loading="lazy" class="alignnone size-medium wp-image-363" title="menu_top01" src="http://www.maurizio.proietti.name/wp-content/uploads/2009/05/menu_top01-300x91.jpg" alt="" width="300" height="91" /></a></p>
<p><a href="http://www.maurizio.proietti.name/wp-content/uploads/2009/05/menu_top02.jpg"><img loading="lazy" class="alignnone size-medium wp-image-364" title="menu_top02" src="http://www.maurizio.proietti.name/wp-content/uploads/2009/05/menu_top02-300x94.jpg" alt="" width="300" height="94" srcset="https://www.maurizio.proietti.name/wp-content/uploads/2009/05/menu_top02-300x94.jpg 300w, https://www.maurizio.proietti.name/wp-content/uploads/2009/05/menu_top02-768x241.jpg 768w, https://www.maurizio.proietti.name/wp-content/uploads/2009/05/menu_top02-1024x322.jpg 1024w, https://www.maurizio.proietti.name/wp-content/uploads/2009/05/menu_top02.jpg 1280w" sizes="(max-width: 300px) 85vw, 300px" /></a></p>
<p>Installare il componente access_key<br />
Settare il template accessibile come predefinito.</p>
<p>Il risultato può essere visualizzato qui:</p>
<p><a href="http://portale-energia.provincia.prato.it/" target="_blank">http://portale-energia.provincia.prato.it/</a></p>
