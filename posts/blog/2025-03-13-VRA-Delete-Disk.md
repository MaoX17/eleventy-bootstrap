---
title: VRA - Eliminare un disco di una VM da VRA - VMware
tags:
  - post
htmlClass: html
bodyClass: body
date: 2025-03-13
layout: template_posts_md
---

## Come fare casino o porcaio

Ho provato ad eliminare un disco direttamente da VCenter e ho fatto un casino

Su VRA è rimasto il disco in “missing”… orfano e non riesco a toglierlo

La procedura corretta è la seguente:

- Apri VRA
- Assembler   
- Resources    
- Deployments    
- Clicca sul deployment e aprilo    
- Clicca sulla VM nel disegno    
- Sul menu a DX si apre un pannello con il pulsante “ACTIONS v”    
- Clicca su ACTIONS    
- Remove Disk    
- Seleziona il disco corretto    
- Clicca su elimina
    
- IN QUESTO MODO ELIMINA IL DISCO E TUTTO IL SUO CONTENUTO!!! ATTENZIONE!!!
    


## Soluzione al porcaio

Per provare a risolvere ho simulato una situazione silile su una vm di test “TEST-WINSERVER”

Ho provato anche ad aggiungere un disco da vcenter per vedere come si comportava e sembra tutto ok.

Di seguito i passaggi eseguiti.

Simulazione:

- Fatto onboarding su VRA della vm
- Assegnati i TAG corretti    
- Eliminato il secondo disco da vcenter    
- Il disco risulta poi “missing” su VRA    
- Provato ad aggiungere un disco da VRA    
- Aggiunto un ulteriore disco da vcenter
    
Poi ho provato a risolvere:

- Da VRA Elimnati i TAG con “Update TAG” → tutto ok    
- Provato a fare “UNREGISTER” del deployment (da VRA → Deployment → Sulla DX accanto al nome della VM → Actions → Unregister )    
- Mi è fallito perchè rileva un disco che avevo aggiunto da VRA … v. Altro articolo → [[2025-03-13-VRA-Error-Unregister-VM]] = [https://www.gremapro.it/posts/blog/2025-03-13-VRA-Error-Unregister-VM/](https://www.gremapro.it/posts/blog/2025-03-13-VRA-Error-Unregister-VM/)
- Effettuo un nuovo “UNREGISTER” → FUNZIONA!!
- Non viene eliminata la VM ma il deploy rimane solo con il disco orfano (missing)
- A questo punto elimina l'intero deploy
- La VM non viene eliminata
- Posso fare nuovo onboarding e rileva correttamente tutti i dischi presenti (cioè quello aggiunto da vcenter che prima non era presente)
