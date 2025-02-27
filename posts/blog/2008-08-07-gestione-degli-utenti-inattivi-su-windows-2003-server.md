---
title: "Gestione degli utenti inattivi su Windows 2003 Server"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2008-08-07"
permalink: "gestione-degli-utenti-inattivi-su-windows-2003-server.html"
layout: "template_posts_md"
---
<p>Oggi ho deciso di ripulire un po&#8217; il dominio.<br />
Ho scritto uno script che permette di<br />
creare un report e/o di spostare gli account e/o di disattivare gli account<br />
che non eseguono l&#8217;accesso al dominio (owa compresa) da un tempo<br />
superiore a un numero di giorni<br />
settabili a piacere.<br />
Se può esservi utile, lo allego di seguito.<br />
E&#8217; uno script VBS<br />
Saluti a tutti<br />
Maurizio Proietti</p>
<p>&nbsp;</p>
<p>&nbsp;<br />
<code><br />
'Option Explicit<br />
'On Error Resume Next</p>
<p>'—— SCRIPT CONFIGURATION ——<br />
'Creo un report? (si/no)<br />
CreaReport = "si"<br />
'Dove creo il report?<br />
ReportFolder = "\\fs3\SW_PKG\ScriptGestione\Report\"<br />
'ReportFileName = year(now())&"_"&month(now())&"_"&day(now())&".txt"<br />
ReportFileName = year(now())&"_"&month(now())&"_"&day(now())&".csv"</p>
<p>'Sposto gli account UTENTE nella OU definita + sotto? (si/no)<br />
MoveUsersAccount = "si"<br />
'Sposto gli account COMPUTER nella OU definita + sotto? (si/no)<br />
MoveComputersAccount = "no"</p>
<p>'Dove sposto gli account utente inattivi<br />
MoveUsersToOU = "OU=Users,OU=z_InactiveAccount,DC=prvprato1,DC=local"<br />
'Dove sposto gli account macchina inattivi<br />
MoveComputersToOU = "OU=Computers,OU=z_InactiveAccount,DC=prvprato1,DC=local"</p>
<p>'Disabilito gli account? (si/no)<br />
DisableUsersAccount = "si"<br />
DisableComputersAccount = "no"</p>
<p>'Quanti giorni di inattività occorrono per spostare gli account e di conseguenza cancellargli la posta? (deve essere >= 15)<br />
InactiveDaysToMoveAccounts = 90</p>
<p>'Quanti giorni di inattività occorrono per disabilitare gli account? (deve essere >= 15)<br />
InactiveDaysToDisableAccounts = 45</p>
<p>'Dove ricerco<br />
strDomainDN = "CN=Users,DC=prvprato1,DC=local"</p>
<p>'strDomainDN = "DC=prvprato1,DC=local<br />
'strDomainDN = "CN=test3,CN=Users,DC=prvprato1,DC=local"<br />
'strDomainDN = "OU=Users,OU=z_InactiveAccount,DC=prvprato1,DC=local"<br />
'strDomainDN = "DC=prvprato1, DC=local"</p>
<p>' —— END CONFIGURATION ———</p>
<p>'Option Explicit</p>
<p>'——–   Cerco e scrivo il lastLogonTimeStamp x utenti ———————</p>
<p>Const OPEN_FILE_FOR_APPENDING = 8</p>
<p>Dim objRootDSE, adoConnection, adoCommand, strQuery<br />
Dim adoRecordset, strDNSDomain, objShell, lngBiasKey<br />
Dim lngBias, k, strDN, dtmDate, objDate<br />
Dim strBase, strFilter, strAttributes, lngHigh, lngLow</p>
<p>' Obtain local Time Zone bias from machine registry.<br />
Set objShell = CreateObject("Wscript.Shell")<br />
lngBiasKey = objShell.RegRead("HKLM\System\CurrentControlSet\Control\" _<br />
& "TimeZoneInformation\ActiveTimeBias")<br />
If (UCase(TypeName(lngBiasKey)) = "LONG") Then<br />
lngBias = lngBiasKey<br />
ElseIf (UCase(TypeName(lngBiasKey)) = "VARIANT()") Then<br />
lngBias = 0<br />
For k = 0 To UBound(lngBiasKey)<br />
lngBias = lngBias + (lngBiasKey(k) * 256^k)<br />
Next<br />
End If<br />
Set objShell = Nothing</p>
<p>' Determine DNS domain from RootDSE object.<br />
Set objRootDSE = GetObject("LDAP://RootDSE")<br />
strDNSDomain = objRootDSE.Get("defaultNamingContext")<br />
Set objRootDSE = Nothing</p>
<p>' Use ADO to search Active Directory.<br />
Set adoCommand = CreateObject("ADODB.Command")<br />
Set adoConnection = CreateObject("ADODB.Connection")<br />
adoConnection.Provider = "ADsDSOObject"<br />
adoConnection.Open "Active Directory Provider"<br />
adoCommand.ActiveConnection = adoConnection</p>
<p>' Search entire domain.<br />
'Nella ver originale c’era questo, ma a me interessa solo la CN=USERS<br />
'strBase = "<LDAP://" &#038; strDNSDomain &#038; ">"<br />
strBase = "<LDAP://" &#038; strDomainDN &#038; ">"</p>
<p>' Filter on all user objects.<br />
'strFilter = "(&(objectCategory=person)(objectClass=user))"<br />
strFilter = "(&(objectCategory=person)(objectClass=user)(!(userAccountControl:1.2.840.113556.1.4.803:=2)))"</p>
<p>' Comma delimited list of attribute values to retrieve.<br />
strAttributes = "cn,distinguishedName,lastLogonTimeStamp"</p>
<p>' Construct the LDAP syntax query.<br />
strQuery = strBase & ";" & strFilter & ";" & strAttributes & ";subtree"</p>
<p>' Run the query.<br />
adoCommand.CommandText = strQuery<br />
adoCommand.Properties("Page Size") = 100<br />
adoCommand.Properties("Timeout") = 60<br />
adoCommand.Properties("Cache Results") = False<br />
Set adoRecordset = adoCommand.Execute</p>
<p>'Creo il report VUOTO<br />
If (CreaReport = "si") Then<br />
Dim objFileSystem, objOutputFile<br />
Dim strOutputFile<br />
strOutputFile = ReportFolder & ReportFileName<br />
Set objFileSystem = CreateObject("Scripting.fileSystemObject")<br />
Set objOutputFile = objFileSystem.CreateTextFile(strOutputFile, TRUE)<br />
objOutputFile.WriteLine("distinguishedName;" & "CN;" & "lastLogonTimeStamp;" & "InactiveDays;" & "Action;" & "operazioni eseguite")<br />
objOutputFile.Close<br />
Set objFileSystem = Nothing<br />
End If</p>
<p>' Enumerate resulting recordset.<br />
Do Until adoRecordset.EOF<br />
LogAction = "0?<br />
Action = "0?<br />
' Retrieve attribute values for the user.<br />
strDN = adoRecordset.Fields("distinguishedName").Value<br />
strCN = adoRecordset.Fields("cn").Value<br />
' Convert Integer8 value to date/time in current time zone.<br />
On Error Resume Next<br />
Set objDate = adoRecordset.Fields("lastLogonTimeStamp").Value<br />
If (Err.Number <> 0) Then<br />
On Error GoTo 0<br />
dtmDate = #1/1/1601#<br />
Else<br />
On Error GoTo 0<br />
lngHigh = objDate.HighPart<br />
lngLow = objDate.LowPart<br />
If (lngLow < 0) Then
lngHigh = lngHigh + 1
End If
If (lngHigh = 0) And (lngLow = 0 ) Then
dtmDate = #1/1/1601#
Else
dtmDate = #1/1/1601# + (((lngHigh * (2 ^ 32)) _
+ lngLow)/600000000 – lngBias)/1440
End If
End If
' Display values for the user.
InactiveDays = DateDiff("d", dtmDate, now)
'———————– Sez disabilita utente ————————————————
If (DisableUsersAccount = "si") Then
If (InactiveDays >= InactiveDaysToDisableAccounts) Then<br />
'DISABILITO UTENTE<br />
set objUser = GetObject("LDAP://" & strDN)<br />
if (objUser.AccountDisabled = FALSE) then<br />
LogAction = "Account disabled by script"<br />
objUser.AccountDisabled = TRUE<br />
objUser.SetInfo<br />
else<br />
LogAction = "Account già disabilitato"<br />
end if<br />
End If<br />
set objUser = Nothing<br />
End If<br />
'—————— FINE DISABILITA UTENTE ———————–</p>
<p>'———————– Sez sposta utente ————————————————<br />
If (MoveUsersAccount = "si") Then<br />
If (InactiveDays >= InactiveDaysToMoveAccounts) Then<br />
strObjectDN    = "LDAP://" & strDN<br />
strObjectRDN   = "cn=" & strCN<br />
'SPOSTO UTENTE<br />
set objMoveUsersToOU = GetObject("LDAP://" & MoveUsersToOU)<br />
objMoveUsersToOU.MoveHere strObjectDN, strObjectRDN<br />
LogAction = LogAction & " – Account spostato dallo script"<br />
End If<br />
set objMoveUsersToOU = Nothing<br />
End If<br />
'—————— FINE SPOSTA UTENTE ———————–</p>
<p>'———————– Sez REPORT ————————————————<br />
If (CreaReport = "si") Then<br />
If (dtmDate = #1/1/1601#) Then<br />
dtLastLogon= "Never"<br />
Else<br />
dtLastLogon = dtmDate<br />
End If<br />
If (InactiveDays >= InactiveDaysToDisableAccounts) Then<br />
Action = "To Disable"<br />
End If<br />
If (InactiveDays >= InactiveDaysToMoveAccounts) Then<br />
Action = "To Move and Delete emails"<br />
End If<br />
'Dim objFileSystem, objOutputFile<br />
'Dim strOutputFile</p>
<p>' generate a filename base on the script name<br />
strOutputFile = ReportFolder & ReportFileName</p>
<p>Set objFileSystem = CreateObject("Scripting.fileSystemObject")<br />
Set objOutputFile = objFileSystem.OpenTextFile(strOutputFile, OPEN_FILE_FOR_APPENDING)<br />
objOutputFile.WriteLine(strDN & ";" & strCN & ";" & dtmDate & ";" & InactiveDays & ";" & Action & ";" & LogAction)<br />
objOutputFile.Close</p>
<p>Set objFileSystem = Nothing<br />
End if<br />
' ————————– FINE REPORT ———————————<br />
adoRecordset.MoveNext</p>
<p>Loop</p>
<p>' Clean up.<br />
adoRecordset.Close<br />
adoConnection.Close<br />
Set adoConnection = Nothing<br />
Set adoCommand = Nothing<br />
Set adoRecordset = Nothing<br />
Set objDate = Nothing<br />
</code></p>
