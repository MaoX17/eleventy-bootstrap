---
title: "Fedora 7 &#8211; Disabilitare il touchpad synaptics su KDE"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-10-21"
permalink: "fedora-7-disabilitare-il-touchpad-synaptics-su-kde/"
layout: "template_posts_md"
---
<p>Occorre modificare il proprio xorg.conf.<br />Allego di seguito il mio:</p>
<p>###################### xorg.conf #############################################################&#224;&#224;</p>
<p># Xorg configuration created by system-config-display</p>
<p>Section &quot;ServerLayout&quot;<br />	Identifier     &quot;single head configuration&quot;<br />	Screen      0  &quot;Screen0&quot; 0 0<br />	InputDevice    &quot;Keyboard0&quot; &quot;CoreKeyboard&quot;<br />	InputDevice    &quot;Mouse&quot; &quot;CorePointer&quot;<br />	InputDevice    &quot;Synaptics&quot; &quot;CorePointer&quot;<br />EndSection</p>
<p>Section &quot;InputDevice&quot;<br />	Identifier  &quot;Keyboard0&quot;<br />	Driver      &quot;kbd&quot;<br />	Option	    &quot;XkbModel&quot; &quot;pc105&quot;<br />	Option	    &quot;XkbLayout&quot; &quot;it&quot;<br />EndSection</p>
<p>## Mouse by maox<br />Section &quot;InputDevice&quot;<br />Identifier     &quot;Mouse&quot;<br />Driver         &quot;mouse&quot;<br />Option         &quot;CorePointer&quot;<br />Option         &quot;Device&quot; &quot;/dev/input/mice&quot;<br />Option         &quot;Protocol&quot; &quot;ExplorerPS/2&quot;<br />Option         &quot;ZAxisMapping&quot; &quot;4 5&quot;<br />Option         &quot;Emulate3Buttons&quot; &quot;true&quot;<br />Option         &quot;SHMConfig&quot; &quot;true&quot;<br />EndSection</p>
<p>Section &quot;InputDevice&quot;<br />	Identifier  &quot;Synaptics&quot;<br />	Driver      &quot;synaptics&quot;<br />	#Option	    &quot;Device&quot; &quot;/dev/input/mice&quot;<br />	Option	    &quot;Device&quot; &quot;/dev/psaux&quot;<br />	Option	    &quot;Protocol&quot; &quot;auto-dev&quot;<br />	Option	    &quot;Emulate3Buttons&quot; &quot;yes&quot;</p>
<p>Option         &quot;SendCoreEvents&quot; &quot;true&quot;<br />#Option         &quot;Device&quot; &quot;/dev/psaux&quot;<br />#Option         &quot;Protocol&quot; &quot;auto-dev&quot;<br />#Option         &quot;HorizScrollDelta&quot; &quot;0&quot;<br />#Per abilitare gsynaptics<br />Option         &quot;SHMConfig&quot; &quot;true&quot;</p>
<p>EndSection</p>
<p>Section &quot;Monitor&quot;<br />	Identifier   &quot;Monitor0&quot;<br />	ModelName    &quot;LCD Panel 1400&#215;1050&quot;<br />	HorizSync    31.5 &#8211; 90.0<br />	VertRefresh  59.0 &#8211; 75.0<br />	Option	    &quot;dpms&quot;<br />Option &quot;ForceBIOS&quot; &quot;1024&#215;768=1400&#215;1050&quot;<br />EndSection</p>
<p>Section &quot;Device&quot;<br />	Identifier  &quot;Videocard0&quot;<br />	Driver      &quot;intel&quot;<br />#Option &quot;ForceBIOS&quot; &quot;1024&#215;768=1400&#215;1050&quot;<br />#BusID       &quot;PCI:0:2:0&quot;<br />EndSection</p>
<p>Section &quot;Screen&quot;<br />	Identifier &quot;Screen0&quot;<br />	Device     &quot;Videocard0&quot;<br />	Monitor    &quot;Monitor0&quot;<br />	DefaultDepth     24<br />#	DefaultDepth     16<br />	SubSection &quot;Display&quot;<br />		Viewport   0 0<br />#		Depth     16<br />		Depth     24<br />		Modes    &quot;1400&#215;1050&quot; &quot;1024&#215;768&quot; &quot;800&#215;600&quot; &quot;640&#215;480&quot;<br />#		Modes    &quot;1400&#215;1050&quot; <br />	EndSubSection<br />EndSection</p>
<p>#########################################################################################</p>
<p>Occorre prestare attenzione alla sezione ServerLayout<br />InputDevice    &quot;Mouse&quot; &quot;CorePointer&quot;<br />InputDevice    &quot;Synaptics&quot; &quot;CorePointer&quot;</p>
<p>e alle relative due sezioni di inputdevice<br />in particolare occorre aggiungere la direttiva<br />    Option    &quot;SHMCONFIG&quot; &quot;on&quot;</p>
<p><p>Poi installa il pacchetto ksynaptics e tutte le dipendenze.<br />Il comando &#232;<br />&quot;sudo yum install ksynaptics&quot;.</p>
<p>Poi nel menu di KDE &quot;KDE Menu&quot;, nel Centro di Controllo, Nella sezione &quot;Periferiche&quot; trovi <br />Touch Pad</p>
<p>Se ti da errore riavvia X</p>
<p>Adesso tutto dovrebbe funzionare, nel centro di controllo di kde puoi trovare la sezione <br />touchpad dala quale attivare e disattivare il touchpad.<br />Inoltre compare nella barra delle applicazioni una icona per configurare e abilitare/disattivare il touchpad.<br />L&#39;attivazione o la disabilitazione pu&#242; essere ottenuta anche con la sequenza Ctrl-Alt-Q</p>
<p>Spero sia utile.<br />Fatemi sapere 🙂<br />Ciao<br />MaoX</p>
