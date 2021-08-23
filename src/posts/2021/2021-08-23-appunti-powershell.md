---
title: "Appunti PowerShell"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2021-08-23"
permalink: "appunti_powershell/"
unsplash: powershell
faicon: "fab fa-windows"
icon:
  - code
  - windows
  - github

layout: "template_posts_md"

---

# Alcuni script powershell utili


```

Get-ADComputer -SearchBase "ou=computers,ou=hw, ou=provincia,dc=provincia,dc=prato,dc=local" -filter * | Sort-Object

Get-ADComputer -SearchBase "ou=computers,ou=hw, ou=provincia,dc=provincia,dc=prato,dc=local" -filter * | foreach {restart-computer $_.name -force}

Get-ADComputer -SearchBase "ou=computers,ou=hw, ou=provincia,dc=provincia,dc=prato,dc=local" -Filter {Name -like "p129*"} | foreach {restart-computer $_.name -force}


Get-ADComputer -SearchBase "ou=computers,ou=hw, ou=provincia,dc=provincia,dc=prato,dc=local" -Filter {Name -like "p130*"} | foreach {C:\script_admin\PSTools\psexec \\$($_.name) -s \\fs\sw_pkg\wsus\forza_aggiornamenti.bat}


Invoke-GPUpdate -Computer p115.provincia.prato.local -RandomDelayInMinutes 0



```
