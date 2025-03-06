---
title: "Crowdsec guida passo passo"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2025-03-02"
permalink: "Crowdsec-guida-passo-passo/"
layout: "template_posts_md"
---

## CrowdSec

Sul server srv-security  - 192.168.1.65 ho installato il servizio LAPI crowdsec.
installo la componente "centrale" cioè il LAPI server:

```
	
	curl -s https:/packagecloud.io/install/repositories/crowdsec/crowdsec/script.deb.sh | sudo bash
	sudo apt install crowdsec
	
	apt install mariadb-server
	mysql_secure_installation
	mysql
	
	CREATE DATABASE crowdsec;
	CREATE USER 'crowdsec'@'%' IDENTIFIED BY 'password123.';
	GRANT ALL PRIVILEGES ON crowdsec.* TO 'crowdsec'@'%';
	FLUSH PRIVILEGES;
	
	
	
	vim /etc/crowdsec/config.yaml
	
	db_config:
	  log_level: info
	  type: mysql
	  db_path: /run/mysqld/mysqld.sock
	  user:     "crowdsec"
	  password: "password123."
	  db_name:  "crowdsec"
	
	
	api:
	  client:
	    insecure_skip_verify: false
	    credentials_path: /etc/crowdsec/local_api_credentials.yaml
	  server:
	    log_level: info
	#    listen_uri: 127.0.0.1:8080
	    listen_uri: 0.0.0.0:8080
	    profiles_path: /etc/crowdsec/profiles.yaml
	    console_path: /etc/crowdsec/console.yaml
	    online_client: # Central API credentials (to push signals and receive bad IPs)
	      credentials_path: /etc/crowdsec/online_api_credentials.yaml
	    trusted_ips: # IP ranges, or IPs which can have admin API access
	      - 127.0.0.1
	      - ::1
	
	
	prometheus:
	  enabled: true
	  level: full
	#  listen_addr: 127.0.0.1
	  listen_addr: 192.168.1.65
	  listen_port: 6060
	
	
	systemctl restart crowdsec
	
```

Aggiungo se stesso:
```

	cscli machines add -a –force --machine srv-security
	
	systemctl restart crowdsec
```
	


Possiamo a questo punto installare tutti gli agent che vogliamo seguendo i seguenti passi:

Passo al server "client"

Esempio su srv-openvpn

Installo la componente security engine:
```

	
	curl -s https:/packagecloud.io/install/repositories/crowdsec/crowdsec/script.deb.sh | sudo bash
	sudo apt install crowdsec
	
	
	vim /etc/crowdsec/config.yaml
	
	api:
	  server:
	    enable: false

	
	sudo apt install crowdsec
	
	cscli lapi register -u http://192.168.1.65:8080 --machine srv-openvpn
```



vado su srv-security:
```
	
	cscli machines validate srv-openvpn
	systemctl restart crowdsec
	#abilito le api per il bouncer
	cscli bouncers add firewall_srv-openvpn
	systemctl restart crowdsec
	
```

torno su srv-openvpn

Installo la/le remediation

```
	
	apt install crowdsec-firewall-bouncer-iptables
	vim /etc/crowdsec/bouncers/crowdsec-firewall-bouncer.yaml
	
	api_url: http://192.168.1.65:8080/
	api_key: xzxzxxxxxxxxxxxxxxxxxxxxxxxxx
	
	
	systemctl restart crowdsec-firewall-bouncer
```



verifico che nel file

/etc/crowdsec/acquis.yaml

ci siano tutti i log da analizzare

Installo le collection utili per il server in questione:

```

	cscli collections install crowdsecurity/iptables
```u

verifico che la collection sia ok:
```
	
	cat /etc/crowdsec/collections/iptables.yaml
```

verifico le collection caricate:
```
	
	cscli collections list
```

Verifico come il parser agisce:
```
	
	cscli explain -f /var/log/syslog -t syslog
```

Verifico gli errori del parser:
```
	
	cscli explain -f /var/log/syslog -t syslog --failures
```

riavvio

```
	
	systemctl restart crowdsec

 ```

Fine delle operazioni sul "client"


## CrowdSec Generazione lista privata su honeypot

Ho pubblicato su internet la porta ssh di un honeypot (opencanary)

Ho scritto un parser e uno scenario per crowdsec: [Pubblicato su GitLab](https///gitlab.consiagservizicomuni.it/7491/csc_pub/crowdsec)

Ho installato su srv-security il componente [BlockList Mirror](https///docs.crowdsec.net/u/bouncers/blocklist-mirror/)

Ed ho configurato il tutto come segue:
```
	
	
	/etc/crowdsec/bouncers/crowdsec-blocklist-mirror.yaml
	
	
	config_version: v1.0
	crowdsec_config:
	  lapi_key: zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
	  lapi_url: http://127.0.0.1:8080
	  update_frequency: 10s
	  include_scenarios_containing: [ 'maox17/opencanary-ssh'  ]
	  exclude_scenarios_containing: []
	  only_include_decisions_from: []
	  insecure_skip_verify: true
	
	blocklists:
	  - format: plain_text # Supported formats are either "plain_text" or "mikrotik"
	    endpoint: /security/blocklist
	    authentication:
	      type: ip_based # Supported types are either "none", "ip_based" or "basic"
	      user:
	      password:
	      trusted_ips: # IP ranges, or IPs that don't require auth to access this blocklist
	        - 127.0.0.1
	        - 192.168.1.65
	        - 192.168.0.1
	        - ::1
	
	listen_uri: 0.0.0.0:41412
	tls:
	  cert_file:
	  key_file:
	
	metrics:
	  enabled: true
	  endpoint: /metrics
	
	# logging configuration
	log_media: file
	log_dir: /var/log/
	log_level: info
	log_max_size: 40
	log_max_age: 30
	log_max_backups: 3
	compress_logs: true
	# enable access log of the HTTP server
	enable_access_logs: true

```



In questo modo ho una lista di ip malevoli auto-aggiornata da honeypot che viene poi sfruttata anche dal firewall 


### Debug:

```
	
	Da srv-security:
	
	root@srv-security:~# cscli decisions list| grep 91.80
	ERRO error while performing request: dial tcp 127.0.0.1:8080: connect: connection refused; 4 retries left
	INFO retrying in 24 seconds (attempt 2 of 5)
	
	Il servizio va riavviato:
	
	systemctl restart crowdsec
	systemctl restart crowdsec-blocklist-mirror.service
	
	A questo punto occorre riavviare il traefik di srv-docker-cloud e di srv-docker-wan
	
```

