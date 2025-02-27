---
title: "Problemi con gli aggiornamenti automatici o windows update"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2007-05-25"
permalink: "problemi-con-gli-aggiornamenti-automatici-o-windows-update/"
layout: "template_posts_md"
---
<p>Al seguente link ho trovato una guida davvero ben fatta che riporto integralmente in seguito.<br /> <a href="http://wsus.editme.com/TroubleshootingClientSetup">http://wsus.editme.com/TroubleshootingClientSetup</a></p>
<p> </p>
<h1>Troubleshooting Client Setup</h1>
<hr size="1">
<p><font face="verdana,arial,helvetica,sans-serif" size="2">In some cases, AU clients do not show up in WSUS Administration console, and thus never receive updates from WSUS. There are several reasons why this can happen. </p>
<p> The first thing to establish is the settings that the client is using. To do this, run the following command:</p>
<p> <span  style="font-weight: bold; font-family: courier new,courier,monospace;">Reg query &#8220;HKLM\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate&#8221; /s</span> <br /> </font></p>
<p><font face="verdana,arial,helvetica,sans-serif" size="2">Ensure server and port number shown in the output exist and are correct. Typos in these settings can be the cause of your problem.<br /> </font></p>
<p><font face="verdana,arial,helvetica,sans-serif" size="2">Next check whether WSUS is installed on Default Website. If client policies point to the default web site for updating, check that WUS is also installed in Default Website. If you have installed WUS on a different port run the script <span  style="font-family: courier new,courier,monospace;">%Program Files%\MicrosoftWindowsUpdate\Services\&#8221;SetupInstallSelfupdateOnPort80.vbs</span>. <br /> </font></p>
<p><font face="verdana,arial,helvetica,sans-serif" size="2">Also, use the clientdiag tool from the RC (download this from the WSUS Beta Site) to see what other errors there might be.<br /> </font></p>
<hr />
<p><font face="verdana,arial,helvetica,sans-serif" size="2">If other computers are checking in fine but you have one or more that aren&#8217;t, check a couple relevant text logs for clues. There&#8217;s the main windows update log at <span style="font-weight: bold;">%systemroot%\WindowsUpdate.log</span> (WindowsUpdate all one word) and another log covering individual component updates at <span style="font-weight: bold;">%systemroot%\SoftwareDistribution\ReportingEvents.log</span> I found a handy page that has a list of error messages with some plain english messages. You&#8217;ll want to check that out at <a  href="http://perso.wanadoo.fr/doc.jm/WU5-ERR.htm">http://perso.wanadoo.fr/doc.jm/WU5-ERR.htm</a> <br /> </font></p>
<p><font face="verdana,arial,helvetica,sans-serif" size="2">I had one computer not checking in and found errors like this in the ReportingEvents.log: </font></p>
<div style="margin-left: 40px;"><span style="font-style: italic;">Windows failed to install the following update with error 0x800703e3: Automatic Updates. </span></p></div>
<p> <font face="verdana,arial,helvetica,sans-serif" size="2">and in WindowsUpdate.log I saw:</font></p>
<div style="margin-left: 40px;"><span style="font-style: italic;">start delayed initialization of WU client<br /> Loading inf file D:\WINDOWS\SoftwareDistribution\SelfUpdate\wusetup.inf<br /> .<br /> .<br /> .<br /> Required Version for binary D:\WINDOWS\system32\cdm.dll is: 5,8,0,2339<br /> Binary: D:\WINDOWS\system32\cdm.dll: Target version: 5.5.3790.2182 Required: 5.8.0.2339<br /> Required Version for binary D:\WINDOWS\system32\iuengine.dll is: 5,8,0,2339<br /> Binary: D:\WINDOWS\system32\iuengine.dll: Target version: 5.4.3790.2182 Required: 5.8.0.2339<br /> .<br /> .<br /> .<br /> WU client failed Searching for update with error 0x8024001b<br /> ISusInternal API CClientCallRecorder::DisconnectCall succeeds<br /> Starting File operations for section cdm<br /> InstallUpdatedBinaries failed with error 0x800703e3<br /> </span></div>
<p> A quick visit to the beta <a  href="http://update.microsoft.com/windowsupdate/v6/default.aspx?betathanksurl&amp;ln=en-us">v6 windowsupdate site</a> updated the WU client and everything just started working from my local WSUS after that. You can force the client to restart the AU process by doing:</p>
<div style="margin-left: 40px;"><span style="font-weight: bold;">pskill wuauclt</span> [or use task manager; I&#8217;m unsure if this step is neccesary or good]<br /> <span style="font-weight: bold;">net stop &#8220;Automatic Updates&#8221;<br /> net start &#8220;Automatic Updates&#8221;<br /> wuauclt /detectnow<br /> </span></div>
<p>If client machines do not have web access, download the full file Windows Update Client agent Agent from<br /> <a title="http://go.microsoft.com/fwlink/?LinkId=43264" target="_blank"  href="http://go.microsoft.com/fwlink/?LinkId=43264">http://go.microsoft.com/fwlink/?LinkId=43264</a></p>
<blockquote><p><strong>WindowsUpdateAgent20-x86.exe /wuforce /quiet</strong> to install it remotely. </p></blockquote>
<blockquote><p>Add <strong>/norestart</strong> if you&#8217;re doing it during the day (my clients didn&#8217;t need a reboot, but ya never know).</p></blockquote>
<blockquote><p> </p></blockquote>
<hr size="2" width="100%">
<p> </p>
<p>If you&#8217;re seeing error 0x8024400A and are running WSUS on Win2K3 SP1 it might be an IIS bug that&#8217;s causing it.  A hotfix is available.  See: <a  title="http://support.microsoft.com/Default.aspx?id=898708"  target="_blank"  href="http://support.microsoft.com/Default.aspx?id=898708">http://support.microsoft.com/Default.aspx?id=898708</a>  </p>
<p>I personally had success via a &#8220;shotgun&#8221; aproach suggested by <span  class="normalname"><a  href="http://www.wsus.info/forums/index.php?showuser=7896">ctobio</a> on the <a target="_blank" href="http://www.wsus.info/forums/">wsus.info</a> forums.  I&#8217;ve consolidated the operations into a batch file form here, suitable for running remotely:</span></p>
<p><font face="courier new,courier">REM Stop the Automatic Updates service<br /> net stop wuauserv</p>
<p> REM Stop the Windows Management Instrumentation service<br /> net stop winmgmt</p>
<p> REM Backup ReportingEvents.log.  Then, delete the contents of<br /> REM  %systemroot%\SoftwareDistribution and<br /> REM  %systemroot%\system32\WBEM\Repository<br /> copy %systemroot%\softwaredistribution\reportingevents.log %homedrive%\<br /> del /f /q %systemroot%\softwaredistribution\*.*<br /> move %homedrive%\reportingevents.log %systemroot%\softwaredistribution</p>
<p> REM Delete SusClientID and AccountDomainSid keys from<br /> REM  HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\WindowsUpdate<br /> SET WU_KEY=HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\WindowsUpdate<br /> reg delete %WU_KEY% /v SusClientID<br /> reg delete %WU_KEY% /v AccountDomainSid<br /> SET WU_KEY=</p>
<p> REM Start the Automatic Updates service<br /> net start wuauserv</p>
<p> REM Start the Windows Management Instrumentation service<br /> net start winmgmt</p>
<p> REM Force a group policy update<br /> gpupdate /force</p>
<p> REM Roll the WU Client&#8230;<br /> wuauclt /resetauthorization /detectnow</font></p>
<p>After you do this, you will have to delete the old and now spurious computer account in the WSUS admin interface.  Delete the old computer that shows a status of not having checked in for so many days.  Leave the account that&#8217;s never checked in.  This new account will be checking in and that should be reflected after a little while in the admin interface.  You&#8217;ll also have to move the new account into the proper group where the old one was.  Monitor the WindowsUpdate.log in %systemroot% on that client machine to ensure that it&#8217;s grabbing updates again.</p>
<p> </p>
<hr />
<p>If a client appears in the admin console but all the updates are flagged &#8220;unknown&#8221; the system cannot determine which updates are needed or installed. Multiple errors similar to the following may appear in the client&#8217;s <strong>Application</strong> event log:</p>
<blockquote style="margin-right: 0px;" dir="ltr">
<p><font face="Courier New" size="2">Event Type: Error<br /> Event Source: ESENT<br /> Event Category: General <br /> Event ID: 427<br /> Date: 5/17/2005<br /> Time: 10:51:44 AM<br /> User: N/A<br /> Computer: [<em>computername</em>]<br /> Description:<br /> wuaueng.dll (1280) The database engine could not access the file called C:\WINNT\SoftwareDistribution\DataStore\Logs\edb.log.</font></p>
</blockquote>
<p>Additionally the following error may appear once around the time of the first occurrence of the above error:</p>
<blockquote style="margin-right: 0px;" dir="ltr">
<p><font face="Courier New" size="2">Event Type: Error<br /> Event Source: ESENT<br /> Event Category: Logging/Recovery <br /> Event ID: 413<br /> Date: 5/12/2005<br /> Time: 2:46:16 PM<br /> User: N/A<br /> Computer: [<em>computername</em>]<br /> Description:<br /> wuaueng.dll (1280) Unable to create the log. The drive may be read-only, out of disk space, misconfigured, or corrupted. Error -1032.</font></p>
</blockquote>
<p>To resolve this problem, <em>stop</em> the <strong>Automatic Updates </strong>service on the affected client, <em>delete </em><strong>%windir%\SoftwareDistribution\DataStore\Logs\edb.log</strong> and <em>restart </em>the service.</p>
<p>[<em>I couldn&#8217;t find any record of this error at Microsoft or anywhere else.</em>] </p>
<hr />
<p>The following registry location can be useful to see what state the client is in </p>
<pre>HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\WindowsUpdate\Auto Update\AUState  This will have one of the following values   </pre>
<ul>
<li> 0—initial 24-hour timeout (Automatic Updates doesn&#8217;t run until 24 hours after it first detects an Internet connection.) </li>
<li> 1—waiting for the user to run Automatic Updates </li>
<li> 2—detection pending </li>
<li> 3—download pending (Automatic Updates is waiting for the user to accept the predownloaded prompt.) </li>
<li> 4—download in progress </li>
<li> 5—install pending </li>
<li> 6—install complete </li>
<li> 7—disabled </li>
<li>8—reboot pending (Updates that require a reboot were installed, but the reboot was declined. Automatic Updates won&#8217;t do anything until this value is cleared and a reboot occurs.)</li>
</ul>
<pre> </pre>
<p> </p>
<hr size="1">
<table>
<tbody>
<tr>
<th>Name</th>
<th>Version</th>
<th>Size</th>
<th>Date</th>
<th>User</th>
</tr>
<tr>
<td><a  href="http://wsus.editme.com/files/TroubleshootingClientSetup/Wsus%20error.txt">Wsus error.txt</a></td>
<td>1</td>
<td>1574</td>
<td>27/10/06 3.28</td>
<td>praveenr</td>
</tr>
<tr>
<td  style="padding-top: 0pt; padding-bottom: 0pt; padding-left: 10pt; font-size: small;"  colspan="5">Wsus error</td>
</tr>
</tbody>
</table>
<hr size="1">
<h4>Comments:</h4>
<p class="commenthead">From karmacop &#8211; 29/03/05 8.10</p>
<div class="commentbox">
<p>Hi</p>
<p>WUS is all working fine, but i accidentally removed all my clients ffrom the &#8216;All Computers&#8217; Group. Is there a way to get the computers back or do i need to re-install WUS?</p>
</p></div>
<p class="commenthead">From ipelivan &#8211; 20/04/05 15.07</p>
<div class="commentbox">
<p>Hi! I have simillar problem. I removed one client computer from computer group. How to get it back?</p>
</p></div>
<p class="commenthead">From jahovabob &#8211; 07/07/05 9.48</p>
<div class="commentbox">clientdiag can also be downloaded <a  href="http://download.microsoft.com/download/9/7/6/976d1084-d2fd-45a1-8c27-a467c768d8ef/WSUS%20Client%20Diagnostic%20Tool.EXE">here.</a> </div>
<p class="commenthead">From helsby &#8211; 06/10/05 8.45</p>
<div class="commentbox">You are better going to <a class="moz-txt-link-freetext" href="http://www.microsoft.com/windowsserversystem/updateservices/support/default.mspx">http://www.microsoft.com/windowsserversystem/updateservices/support/default.mspx</a> for the client diag download as this also has links to the readme. There are also server diag tools from this link too. </div>
<p class="commenthead">From rpaz &#8211; 08/01/06 17.42</p>
<div class="commentbox">
<p> </p>
<p>I&#8217;m a little bit confused.</p>
<p> Can the AUState registry key be used to check <strong>WSUS Status</strong>? Or this key is only used by <strong>SUS</strong>?</p>
<p> </p>
</p></div>
<p class="commenthead">From rpaz &#8211; 08/01/06 17.46</p>
<div class="commentbox">
<p> </p>
<p>For those that accidentally removed All The Clients, don&#8217;t worry to much they will get back on next cycle</p>
<p> I made the same mistake <img alt="Wink"  src="cid:part1.03040603.06080306@katamail.com" border="0"></p>
</p></div>
<p class="commenthead">From rpaz &#8211; 08/01/06 18.00</p>
<div class="commentbox">
<p> </p>
<p>For those that accidentally removed All The Clients, don&#8217;t worry to much they will get back on next cycle</p>
<p> I made the same mistake <img alt="Wink"  src="cid:part1.03040603.06080306@katamail.com" border="0"></p>
</p></div>
<p class="commenthead">From rpaz &#8211; 08/01/06 18.00</p>
<div class="commentbox">
<p> </p>
<p>For those that accidentally removed All The Clients, don&#8217;t worry to much they will get back on next cycle</p>
<p> I made the same mistake <img alt="Wink"  src="cid:part1.03040603.06080306@katamail.com" border="0"></p>
</p></div>
<p class="commenthead">From rpaz &#8211; 08/01/06 18.13</p>
<div class="commentbox">Sorry about the duplicated comments. Dam reload!</div>
<p class="commenthead">From giadzich &#8211; 22/02/06 12.16</p>
<div class="commentbox">
<p>It will take a while for client to report back to WSUS server after you delete it.<br /> I hate to see those little icons saying the computer not report in xx days.  I decided to delete them all.  No harm.</p>
</p></div>
<p class="commenthead">From weeble &#8211; 27/02/06 1.47</p>
<div class="commentbox">
<p>This may not apply to everybody but I&#8217;ve got around 40 Windows 2000 machines that are not checking into my WSUS Server.</p>
<p>So far, the solution that I&#8217;ve found to get them all to start checking in is as follows:</p>
<p>Download and install the following:</p>
<ul>
<li>Windows installer 3.1 (don&#8217;t restart, just install the next item)</li>
<li>BITS Update for Windows 2000 (KB842773) (don&#8217;t restart, just install the next item)</li>
<li>MDAC Update (if prompted to re-start, do the next step before clicking restart)</li>
<li>Once I&#8217;ve done that, I have to then copy over the latest WUAUENG.DLL file renaming the old one to WUAUENG.DLL.OLD (or whatever you choose).</li>
<li>Restart your computer (cross your fingers)</li>
</ul>
<p>Once I&#8217;ve restarted the computer, it will then check in with my WSUS server and start the updating process.</p>
<p>I&#8217;ve found that in some remote cases, I&#8217;ve also had to export the REGKEYS from a working machine and them import them into a machine that isn&#8217;t working after I&#8217;ve done all the updates.</p>
<p>If you&#8217;re having problems, and you&#8217;ve checked everything else, try this &#8230; it may work and you&#8217;ve obviously got nothing else to loose. So far, it&#8217;s worked without fail for me.</p>
</p></div>
<p class="commenthead">From laurin1 &#8211; 21/06/06 13.27</p>
<div class="commentbox">I had it working fine, but now it&#8217;s broke. None of my clients show up in the Console and all log Event ID 16. </div>
<p class="commenthead">From geraghty &#8211; 11/05/07 6.39</p>
<div class="commentbox">I spent days trying to work out why none of my clients were connecting to WSUS &#8211; finally realised the problem was that the IUSER account was disabled! I&#8217;d disabled it ages ago to increase the security of the server&#8230; </div>
<p> </p>
<hr size="1"> Last Modified 11/04/06 22.39</p>
