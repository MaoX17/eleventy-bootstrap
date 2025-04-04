---
title: Crowdsec bouncer crowdsec-blocklist-mirror
tags:
  - post
htmlClass: html
bodyClass: body
date: 2025-03-13
layout: template_posts_md
---
## crowdsec-blocklist-mirror not work

Parto da una situazione con crowdsec-blocklist-mirror già installato e con relativa configurazione valida.


Mi sono accorto che crowdsec-blocklist-mirror non riusciva a ottenere le liste di ip bannati da crowdsec.

Sembra infatti, dopo vari tentativi, che la chiamata API che fa non invii dati.

```
GET http://127.0.0.1:8080/v1/decisions/stream?startup=true"

```

Il problema sta nel parametro "startup=true"

Se manualmente faccio una curl senza il parametro tutto sembra ok.

```
curl  -s -H "X-Api-Key: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"  http://localhost:8080/v1/decisions/stream\?startup\=false

```

Se chiamo:

```
curl  -s -H "X-Api-Key: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"  http://localhost:8080/v1/decisions/stream\?startup\=true

```

Non ottengo alcuna risposta

E anche interrogando le metriche:

http://172.17.1.65:41412/metrics

```
# TYPE active_decision_count gauge
active_decision_count 0

```


Per risolvere ho fatto come segue:

Scaricare e installare go versione > 1.22 

```
wget https://go.dev/dl/go1.24.2.linux-amd64.tar.gz
tar -zxvf go1.24.2.linux-amd64.tar.gz

mv go /usr/local/

export PATH=$PATH:/usr/local/go/bin

sudo vim /etc/profile.d/go.sh


# set PATH so it includes /usr/local/go/bin if it exists
if [ -d "/usr/local/go/bin" ] ; then
    PATH="/usr/local/go/bin:$PATH"
fi


```


Scaricare go-cs-bouncer

```
git clone https://github.com/crowdsecurity/go-cs-bouncer.git

mv ./go-cs-bouncer /usr/local/go/src/

cd /usr/local/go/src/

vim stream_bouncer.go

modifica alla riga 151:

//b.Opts.Startup = true
b.Opts.Startup = false

Salva ed esci

```


Scarico e ricompilo cs-blocklist-mirror

```
git clone https://github.com/crowdsecurity/cs-blocklist-mirror.git

apt install make

vim cmd/root.go

modifica alla riga 17 per usare il pacchetto modificato:

//csbouncer "github.com/crowdsecurity/go-cs-bouncer"
csbouncer "go-cs-bouncer"

make release

mv /usr/bin/crowdsec-blocklist-mirror /usr/bin/crowdsec-blocklist-mirror.ORIG

cp crowdsec-blocklist-mirror /usr/bin/crowdsec-blocklist-mirror

systemctl restart crowdsec-blocklist-mirror.service

systemctl status crowdsec-blocklist-mirror.service


```


Sembra ok