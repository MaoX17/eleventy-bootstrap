---
title: Home Assistent - Errore 2FA - Alexa Media Player
tags:
  - post
htmlClass: html
bodyClass: body
date: 2025-03-12
permalink: home-assistant-alexa-media-player-error/
layout: template_posts_md
---

## Errore di Alexa Media Player su Home Assistant

Da qualche giorno, su HA, Alexa Media Player continua a richiesdere la riconfigurazione e nonostante la riconfigurazione vada a buon fine, al primo tentativo di uso del dispositivo, si genera nuovamente l'errore.


## Soluzione

Per risolvere ho seguito due guide:

https://github.com/alandtse/alexa_media_player/issues/2418#issuecomment-2295208409


Ho iniziato eliminando l'integrazione da HA

Ho poi fatto 

```bash

rm -rf config/.storage/alexa*

```

Ho ripulito la cache del browser

Riavviato HA

Verificate le credenziali di Amazon (facendo un login)

Reinstallato l'integrazione tramite HACS seguendo la seguente guida:

https://indomus.it/guide/integrare-amazon-alexa-come-media-player-su-home-assistant/

Ed in particolare, sono andato su questo indirizzo:

https://www.amazon.it/a/settings/approval

Fatto login

Cliccato su "**Aggiungi nuovo telefono o un’app di autenticazione**"

Poi "**Non riesci ad acquisire il codice a barre?**"

Ho copiato il codice che mi compariva e terminato la procedura inerendo l'OTP

Sono poi andato a configurare l'integrazione e ho inserito:

* **amazon.it** nella prima riga
* email di amazon
* password di amazon
* url di HA (precompilato)
* Nella voce "**2FA Code**" ho inserito il codice copiato prima 
* avanti
* Effettuato il login sul portale alexa (scegliere "esegui login" altrimenti vai a creare un account)
* Et voila - FUNZIONA!!!!

