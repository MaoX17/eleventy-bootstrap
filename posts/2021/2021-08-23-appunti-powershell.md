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



$computers = Get-Content -Path C:\Users\mpadmin\Desktop\lista_pc.txt
foreach ($comp in $computers) {
	C:\script_admin\PSTools\psexec \\$comp -s \\fs\sw_pkg\wsus\forza_aiornamenti.bat
}



$computers = Get-Content -Path C:\Users\mpadmin\Desktop\lista_pc.txt
foreach ($comp in $computers) {
	$OnlineTest = Test-Connection $comp -Count 1 -Quiet
	if ($OnlineTest) {
        "Exec on $comp"
		& C:\script_admin\PSTools\psexec \\$comp -s \\fs\sw_pkg\wsus\forza_aiornamenti.bat
	}
	else {
		"$comp spento"
	}
}






```


#########################################################

```

Function Get-PendingRebootStatus {
<#
.Synopsis
    This will check to see if a server or computer has a reboot pending.
    For updated help and examples refer to -Online version.
  
.NOTES
    Name: Get-PendingRebootStatus
    Author: theSysadminChannel
    Version: 1.2
    DateCreated: 2018-Jun-6
  
.LINK
    https://thesysadminchannel.com/remotely-check-pending-reboot-status-powershell -
  
  
.PARAMETER ComputerName
    By default it will check the local computer.
  
.EXAMPLE
    Get-PendingRebootStatus -ComputerName PAC-DC01, PAC-WIN1001
  
    Description:
    Check the computers PAC-DC01 and PAC-WIN1001 if there are any pending reboots.
#>
  
    [CmdletBinding()]
    Param (
        [Parameter(
            Mandatory = $false,
            ValueFromPipeline = $true,
            ValueFromPipelineByPropertyName = $true,
            Position=0
        )]
  
    [string[]]  $ComputerName = $env:COMPUTERNAME
    )
  
  
    BEGIN {}
  
    PROCESS {
        Foreach ($Computer in $ComputerName) {
            Try {
                $PendingReboot = $false
  
                $HKLM = [UInt32] "0x80000002"
                $WMI_Reg = [WMIClass] "\\$Computer\root\default:StdRegProv"
  
                if ($WMI_Reg) {
                    if (($WMI_Reg.EnumKey($HKLM,"SOFTWARE\Microsoft\Windows\CurrentVersion\Component Based Servicing\")).sNames -contains 'RebootPending') {$PendingReboot = $true}
                    if (($WMI_Reg.EnumKey($HKLM,"SOFTWARE\Microsoft\Windows\CurrentVersion\WindowsUpdate\Auto Update\")).sNames -contains 'RebootRequired') {$PendingReboot = $true}
  
                    #Checking for SCCM namespace
                    $SCCM_Namespace = Get-WmiObject -Namespace ROOT\CCM\ClientSDK -List -ComputerName $Computer -ErrorAction Ignore
                    if ($SCCM_Namespace) {
                        if (([WmiClass]"\\$Computer\ROOT\CCM\ClientSDK:CCM_ClientUtilities").DetermineIfRebootPending().RebootPending -eq $true) {$PendingReboot = $true}
                    }
  
                    [PSCustomObject]@{
                        ComputerName  = $Computer.ToUpper()
                        PendingReboot = $PendingReboot
                    }
                }
            } catch {
                Write-Error $_.Exception.Message
  
            } finally {
                #Clearing Variables
                $null = $WMI_Reg
                $null = $SCCM_Namespace
            }
        }
    }
  
    END {}
}



```


```

$computers = Get-Content -Path C:\Users\mpadmin\Desktop\lista_pc.txt
. .\getPendingReboot.ps1

foreach ($comp in $computers) {
	$OnlineTest = Test-Connection $comp.provincia.prato.local -Count 1 -Quiet
	if ($OnlineTest) {
        "Exec on $comp"
		& Get-PendingRebootStatus -ComputerName $comp
	}
	else {
		"$comp spento"
	}
}

```


```

. .\getPendingReboot.ps1
Get-ADComputer -SearchBase "ou=computers,ou=hw, ou=provincia,dc=provincia,dc=prato,dc=local" -filter * | foreach {
 	$OnlineTest = Test-Connection $($_.name) -Count 1 -Quiet
	if ($OnlineTest) {
    "Exec on $($_.name)"
		  & Get-PendingRebootStatus -ComputerName $($_.name)
	}
	else {
		"$($_.name) spento"
	}

}

```
