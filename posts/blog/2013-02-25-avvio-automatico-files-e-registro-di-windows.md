---
title: "Avvio automatico - files e registro di windows"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2013-02-25"
permalink: "avvio-automatico-files-e-registro-di-windows/"
layout: "template_posts_md"
icon:
  - win
---
<p>Automatic Startup<br />
<code><br />
HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services<br />
HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services<br />
HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\RunServicesOnce<br />
HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\RunServicesOnce<br />
HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\RunServices<br />
HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\RunServices<br />
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\Notify<br />
HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon\Userinit =C:\windows\system32\userinit.exe,c:\windows\badprogram.exe.<br />
HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\Winlogon\Userinit<br />
HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion\Winlogon\\Shell<br />
HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\Winlogon\\Shell<br />
HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\RunOnce<br />
HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\RunOnceEx<br />
HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run<br />
HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run</p>
<p>HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\RunOnce<br />
HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer\Run<br />
HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer\Run<br />
HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion\Windows\load<br />
HKEY_LOCAL_MACHINE\Software\Microsoft\Windows NT\CurrentVersion\Windows<br />
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\ShellServiceObjectDelayLoad<br />
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\SharedTaskScheduler</p>
<p>Windows XP 	C:\Documents and Settings\All Users\Start Menu\Programs\Startup<br />
Windows NT 	C:\wont\Profiles\All Users\Start Menu\Programs\Startup<br />
Windows 2000 	C:\Documents and Settings\All Users\Start Menu\Programs\Startup</p>
<p>Win 9X, ME 	c:\windows\start menu\programs\startup<br />
Windows XP 	C:\Documents and Settings\LoginName\Start Menu\Programs\Startup</p>
<p></code></p>
<p>The following are files that programs can autostart from on bootup:</p>
<p>1. c:\autoexec.bat<br />
2. c:\config.sys<br />
3 . windir\wininit.ini - Usually used by setup programs to have a file run once and then get deleted.<br />
4. windir\winstart.bat<br />
5. windir\win.ini - [windows] &#8220;load&#8221;<br />
6. windir\win.ini - [windows] &#8220;run&#8221;<br />
7. windir\system.ini - [boot] &#8220;shell&#8221;<br />
8 . windir\system.ini - [boot] &#8220;scrnsave.exe&#8221;<br />
9. windir\dosstart.bat - Used in Win95 or 98 when you select the &#8220;Restart in MS-DOS mode&#8221; in the shutdown menu.<br />
10. windir\system\autoexec.nt<br />
11. windir\system\config.nt</p>
<p>Utility per controllare startup</p>
<p><a href="http://technet.microsoft.com/en-us/sysinternals/bb963902">http://technet.microsoft.com/en-us/sysinternals/bb963902</a></p>
