---
title: "RunAs HowTo Run OpenVPN as a non-admin user in Windows"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2008-09-05"
permalink: "runas-howto-run-openvpn-as-a-non-admin-user-in-windows.html"
layout: "template_posts_md"
---
<p>THANK YOU!!!</p>
<p><a href="http://openvpn.se/files/howto/openvpn-howto_run_openvpn_as_nonadmin.html">http://openvpn.se/files/howto/openvpn-howto_run_openvpn_as_nonadmin.html</a></p>
<p><strong>Mathias Sundman</strong> (<a href="mailto:mathias@openvpn.se">mathias@openvpn.se</a>)<br />
2005-02-17<br />
Rev 1.1</p>
<h2>Introduction</h2>
<p>With the current implementation of the TAP-Win32 driver included with OpenVPN,    administrator privileges is required to open the TAP device. This means that    openvpn.exe must be executed with administrator privileges. In many situations    it&#8217;s un recommended to do your day-to-day work logged on with an administrator    account. Especially corporate environments often have a policy that users should    never have administrator rights even on their local machine. Fortunately there    are a few ways to work around this so OpenVPN can be used even in these environments.</p>
<p>Here I present you with two ways to run OpenVPN / OpenVPN GUI as a non-admin    user:</p>
<h2></h2>
<h2>1) Use the OpenVPN Service</h2>
<p>Included in the OpenVPN / OpenVPN GUI installation package there is a small    service wrapper for OpenVPN. This service simply starts all configuration files    it finds in the OpenVPN\config folder. If you want your OpenVPN tunnel to always    be up, regardless of whether you are logged on or not, you can simply configure    the OpenVPN Service to start automatically at boot-time. However it might be    more convenient to be able to start and stop the tunnel when you want, which    you can do by starting and stopping the service. For more information about    the OpenVPN Service see the &#8220;Running OpenVPN as a Windows Service&#8221;    section in <a href="http://openvpn.net/INSTALL-win32.html#running_as_windows_service">INSTALL-win32</a>.</p>
<p>The major disadvantage with this method is that there is no way to supply the    OpenVPN Service with the password used to encrypt your private key. This means    that you must use an un-encrypted private key when using this method. A way    to get around the problem with having your private key lying unprotected on    your hard drive is to import it to the MS Certificate Store and use the &#8211;cryptoapicert    option to load it. Remember that the service is running as &#8220;Local System&#8221;    (by default) so you must import the key/cert into the System account, not your    user account. (There is work in progress to allow OpenVPN to access also user    account key/cert&#8217;s). To load a key/cert into the System accounts CertStore you    must use the Certificates MMC Snap-In, not Internet Explorer.</p>
<h3>Give a normal user right to control the OpenVPN Service</h3>
<p>Normally starting and stopping a service requires administrator privileges,    but you can assign a normal user the right to control an individual service.    You do this with the subinacl.exe utility included in the Windows Resource Kit.    You can also download it here:</p>
<p><a href="http://www.microsoft.com/downloads/details.aspx?FamilyID=e8ba3e56-d8fe-4a91-93cf-ed6985e3927b&amp;displaylang=en">http://www.microsoft.com/downloads/details.aspx?FamilyID=e8ba3e56-d8fe-4a91-93cf-ed6985e3927b&amp;displaylang=en</a></p>
<p>To give the user &#8220;John&#8221; the right to start and stop the OpenVPN service,    log on as administrator and run the following command:</p>
<p><em>subinacl /SERVICE &#8220;OpenVPNService&#8221; /GRANT=john=TO</em></p>
<p>You can also give a user right to control a service through the use of Group    Policies. See this <a href="http://support.microsoft.com/default.aspx?scid=kb;en-us;288129">support    article</a> for more info.</p>
<h3>Control the OpenVPN service from OpenVPN GUI</h3>
<p>A default installation of OpenVPN GUI does not give you any way to control    the OpenVPN service. There is however two ways to do this. If you are running    as administrator, and just want a convenient way to control the OpenVPN Service,    you can enable a hidden menu for this. You enable this by setting the following    registry value to &#8220;1&#8221;:</p>
<p><em>HKEY_LOCAL_MACHINE\SOFTWARE\OpenVPN-GUI\allow_service</em></p>
<p>Since OpenVPN GUI 1.0-rc2 there is a special mode called &#8220;Service Only&#8221;    that is suitable for users running without admin privileges. This mode changes    the behavior of the &#8220;Connect&#8221; and &#8220;Disconnect&#8221; actions to    start and stop the OpenVPN service instead of launching openvpn.exe directly,    like it usually does. It also hides the &#8220;Proxy Settings&#8221; menu as it    has no effect on the service. To enable this mode set the following registry    value to &#8220;1&#8221;:</p>
<p><em>HKEY_LOCAL_MACHINE\SOFTWARE\OpenVPN-GUI\service_only</em></p>
<p>Also remember that a normal user don&#8217;t have write access to the OpenVPN\config    folder, so he won&#8217;t be able to edit the OpenVPN config file or change his password,    unless you give him write access to these files. To hide these menu items set    the following registry values to &#8220;0&#8221;:</p>
<p><em>HKEY_LOCAL_MACHINE\SOFTWARE\OpenVPN-GUI\allow_edit</em></p>
<p><em>HKEY_LOCAL_MACHINE\SOFTWARE\OpenVPN-GUI\allow_password</em></p>
<h2>2) Windows &#8220;RunAs&#8221; feature</h2>
<p>Since Windows 2000, there is a feature that allows you to start an application    as another user than the currently logged on account. The best way to use this    feature is by starting OpenVPN GUI as administrator this way. Since OpenVPN    GUI is then running as administrator any number of OpenVPN tunnels can started    and stopped as long as OpenVPN GUI is running.</p>
<p><strong>* Keep in mind that by using this feature you are potentially giving    your users a way to escalate their privileges to administrator rights. If your    main reason for not running as administrator is to protect against malicious    code on the web from executing with administrator rights in your computer, then    this could be a good way to run OpenVPN GUI, but if your users under no circumstances    should be able to run other applications as administrator, you should NOT use    this way to run OpenVPN GUI either!</strong></p>
<p>While installing OpenVPN / OpenVPN GUI, make sure to un-check &#8220;AutoStart    OpenVPN GUI&#8221;, as you will need to create your start-up shortcut manually.</p>
<h3>Create a &#8220;RunAs&#8221; short-cut in Windows 2000</h3>
<ul>
<li>Create a normal Short-Cut to openvpn-gui.exe (c:\program files\openvpn\bin\openvpn-gui.exe)      on the desktop.</li>
<li>Right-click the short-cut and select Properties.</li>
<li>Check &#8220;Run as a different user&#8221;.</li>
</ul>
<p>When you double-click this short-cut, you will now be prompted for the username    and password of the user you want to run as. If you want OpenVPN-GUI to auto-start    when you logon, move this short-cut to your &#8220;Startup&#8221; folder on the    Start-&gt;Programs menu. You will then be prompted for username and password    directly every time you log on.</p>
<p>I&#8217;m not aware of any way to save the credentials so you don&#8217;t have to type    them every time in Windows 2000.</p>
<h3>Create a &#8220;RunAs&#8221; short-cut in Windows XP</h3>
<ul>
<li>Create a normal Short-Cut to openvpn-gui.exe (c:\program files\openvpn\bin\openvpn-gui.exe)      on the desktop.</li>
<li>Right-click the short-cut and select Properties.</li>
<li>Click &#8220;Advanced&#8230;&#8221;</li>
<li>Check &#8220;Run with different credentials&#8221;.</li>
</ul>
<p>When you double-click this short-cut, you will now be prompted for the username    and password of the user you want to run as. If you want OpenVPN-GUI to auto-start    when you logon, move this short-cut to your &#8220;Startup&#8221; folder on the    Start-&gt;Programs menu. You will then be prompted for username and password    directly every time you log on.</p>
<h3>Create a &#8220;RunAs&#8221; short-cut in Windows XP that saves the administrator    password</h3>
<p><strong>WARNING: When using this method the user will be able to start ANY    application as administrator with the right knowledge.</strong></p>
<ul>
<li>Create a normal Short-Cut to openvpn-gui.exe (c:\program files\openvpn\bin\openvpn-gui.exe)      on the desktop.</li>
<li>Right-click the short-cut and select Properties.</li>
<li>In the Target box, insert the following before the path to openvpn-gui.exe:      &#8220;runas /savecred /user:administrator &#8220;.</li>
<li>Double-click the new short-cut, and enter the administrator password.</li>
</ul>
<p>Next time you run this short-cut, it will start OpenVPN GUI as administrator    automatically without prompting you for any credentials. If you want OpenVPN-GUI    to auto-start when you logon, move this short-cut to your &#8220;Startup&#8221;    folder on the Start-&gt;Programs menu.</p>
<h2>Future</h2>
<p>There is work in progress to enhance the OpenVPN Service so it can be controlled    via a TCP socket. This will allow individual tunnels to started and stopped    at will, as well as supplying OpenVPN with the password used to encrypt the    private key. OpenVPN GUI 2.0 will be rewritten to make use of this service.</p>
