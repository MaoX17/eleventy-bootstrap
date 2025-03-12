---
title: VRA - Errore unregister VM su Deploy
tags:
  - post
htmlClass: html
bodyClass: body
date: 2025-03-13
layout: template_posts_md
---
# VRA - Errore in fase di unregister di una VM - Deploy

Riferimenti:

[https://knowledge.broadcom.com/external/article/370719/unregister-operation-failed-for-onboarde.html](https://knowledge.broadcom.com/external/article/370719/unregister-operation-failed-for-onboarde.html "https://knowledge.broadcom.com/external/article/370719/unregister-operation-failed-for-onboarde.html")

[https://knowledge.broadcom.com/external/article/346005/generate-an-access-token-and-bearer-toke.html](https://knowledge.broadcom.com/external/article/346005/generate-an-access-token-and-bearer-toke.html "https://knowledge.broadcom.com/external/article/346005/generate-an-access-token-and-bearer-toke.html")

## Errore - Unregister Failed

Messaggio errore: Onboarded machine has one or more provisioned disks: AggDaVRA(nome del disco)

Quando provo unregister di una VM con un disco inserito da VRA mi da questo errore

E' un bug riconosciuto da vmware e documentato nei link qui sopra

Attenzione - La procedura per il recupero del token nel link di vmware non è corretta. 
Da errore nel dominio perchè manca un ':'


## Soluzione

Per eseguire il workaround occorre prelevare il Bearer Token (la procedura non è quella descritta nell'articolo qui sopra)

Ottenere il bearer token:

```

hostname='xxx.vra.csc.local'
username='adm_mproietti'
password='LaTuaPasswordDifficile'
domain='pippo.local'
  
api_token=$(curl -k -X POST "https://$hostname/csp/gateway/am/api/login?access_token" -H 'Content-Type: application/json' -H 'Accept: application/json' -d '{ "username": "'$username'", "password": "'$password'", "domain": "'$domain'" }' | jq -r .refresh_token)
  
echo "api_token: $api_token"
  
bearer_token=$(curl -k -X POST https://$hostname/iaas/api/login -H "Accept: application/json" -H 'Content-Type: application/json' --data '{"refreshToken":"'"$api_token"'"}' | jq -r .token )
  
echo "bearer_token: $bearer_token"


```

Ottenuto il token eseguo le modifiche riportate qui:

[https://knowledge.broadcom.com/external/article/370719/unregister-operation-failed-for-onboarde.html](https://knowledge.broadcom.com/external/article/370719/unregister-operation-failed-for-onboarde.html "https://knowledge.broadcom.com/external/article/370719/unregister-operation-failed-for-onboarde.html")

Con Postman faccio una GET qui:

https://xxx.vra.csc.local/provisioning/config/toggles

specificando il Body raw → JSON

specificando com auth il bearer token appena ottenuto (che vale 25 min)

Controllo nel Risultato che non sia presente una riga con la parola 'unregister'

Non è presente quindi procedo con la guida

Sempre da postman faccio un POST qui:

https://xxx.vra.csc.local/provisioning/config/toggles

specificando lo stesso bearer token di prima

mettendo il body in raw → JSON e scrivendo nel body:

```json

{
"key": "enable.unregister.provisioned.machine",
"value": true
}


```   
