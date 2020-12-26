---
title: "WordPress con docker-compose e traefik"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2020-12-24"
permalink: "wordpress-con-docker-compose-e-traefik/"
layout: "template_posts_md"
---
<div class="markdown-body"><h1>
<a id="user-content-wordpress-docker-compose" class="anchor" href="#wordpress-docker-compose" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>wordpress-docker-compose</h1>
<p>Eseguire wordpress su docker o migrare un Wordpress esistente su Docker</p>
<p>Se alcuni link non dovessero funzionare prova qui
<a href="https://github.com/MaoX17/wordpress-docker-compose/">https://github.com/MaoX17/wordpress-docker-compose/</a>
o
<a href="https://github.com/MaoX17/wordpress-docker-compose/">qui</a></p>
<p><a href="https://camo.githubusercontent.com/e9699d62753b9644e7c19c10894358e37d2d2687af45d8e9ee4788f139952f1a/68747470733a2f2f7777772e6d617572697a696f2e70726f69657474692e6e616d652f77702d636f6e74656e742f75706c6f6164732f323032302f31322f63726f707065642d6772656d6170726f5f736d616c6c2e6769663f733d313530" target="_blank" rel="nofollow"><img src="https://camo.githubusercontent.com/e9699d62753b9644e7c19c10894358e37d2d2687af45d8e9ee4788f139952f1a/68747470733a2f2f7777772e6d617572697a696f2e70726f69657474692e6e616d652f77702d636f6e74656e742f75706c6f6164732f323032302f31322f63726f707065642d6772656d6170726f5f736d616c6c2e6769663f733d313530" alt="GreMaPro" data-canonical-src="https://www.maurizio.proietti.name/wp-content/uploads/2020/12/cropped-gremapro_small.gif?s=150" style="max-width:100%;"></a></p>
<h2>
<a id="user-content-dockerizzare-un-wordpress-esistente" class="anchor" href="#dockerizzare-un-wordpress-esistente" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Dockerizzare un wordpress esistente</h2>
<p>Questa versione è valida sia con traefik che con nginx di jwilder come reverse proxy</p>
<p>Adesso iniziamo</p>
<p>Di seguito ci sono i passaggi per ralizzare il tutto da zero...</p>
<p>Altrimenti ... <a href="quick-install.md">quick install</a></p>
<p>Partiamo dal traefik</p>
<h2>
<a id="user-content-traefik" class="anchor" href="#traefik" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Traefik</h2>
<h1>
<a id="user-content-traefik-1" class="anchor" href="#traefik-1" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Traefik</h1>
<p>Primo comando:</p>
<pre><code>docker network create proxy

</code></pre>
<p>Genero la stringa di auth:</p>
<pre><code>htpasswd -n username
</code></pre>
<p>ottengo:</p>
<pre><code>username:$apr1$VDSty0Wy$5nrZ7nthjusltZXM0eE2s/
</code></pre>
<p>Creo il file acme.json</p>
<pre><code>touch conf/acme.json
chmod 600 conf/acme.json
</code></pre>
<p>Creo il file ./conf/traefik.toml</p>
<pre><code>
[entryPoints]
  [entryPoints.web]
    address = ":80"
    [entryPoints.web.http.redirections.entryPoint]
      to = "websecure"
      scheme = "https"

  [entryPoints.websecure]
    address = ":443"

[api]
  dashboard = true

[certificatesResolvers.lets-encrypt.acme]
  email = "maurizio.proietti(AT)EMAIL.com"
  storage = "acme.json"
  [certificatesResolvers.lets-encrypt.acme.tlsChallenge]

[providers.docker]
  watch = true
  network = "proxy"


[providers.file]
  filename = "traefik_dynamic.toml"
  

</code></pre>
<p>Creo il file ./conf/traefik_dynamic.toml</p>
<pre><code>[http.middlewares.simpleAuth.basicAuth]
  users = [
    "username:$apr1$VDSty0Wy$5nrZ7nthjusltZXM0XXeE2s/"
  ]

[http.routers.api]
  rule = "Host(`traefik.proietti.net`)"
  entrypoints = ["websecure"]
  middlewares = ["simpleAuth"]
  service = "api@internal"
  [http.routers.api.tls]
    certResolver = "lets-encrypt"


</code></pre>
<p>Creo il ./docker-compose.yaml:</p>
<pre><code>version: "3.3"

services:

  traefik:
    image: "traefik:v2.2"
    container_name: "traefik"

    ports:
      - "80:80"
      - "443:443"

    networks:
      - "proxy"
    volumes:
      - "./data/letsencrypt:/letsencrypt"
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
      - "./conf/traefik.toml:/traefik.toml"
      - "./conf/traefik_dynamic.toml:/traefik_dynamic.toml"
      - "./conf/acme.json:/acme.json"
      


networks:
  proxy:
    external: true


</code></pre>
<p>Lancio il docker-compose up -d</p>
<pre><code>docker-compose up -d

</code></pre>
<p>Et voilà!!!</p>
<p>Per vedere il risultato mi collego a</p>
<p>traefik.proietti.net</p>
<p>e faccio login</p>
<h2>
<a id="user-content-wordpress" class="anchor" href="#wordpress" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>WordPress</h2>
<p>Per usare il docker-compose occorre creare prima di tutto un file .env esempio <a href="wp05/env.example">env.example</a></p>
<p>Di seguito un esempio:</p>
<pre><code>## WP ENV
WORDPRESS_DB_HOST=db
WORDPRESS_DB_USER=userdb
WORDPRESS_DB_PASSWORD=passworddb
WORDPRESS_DB_NAME=database
VIRTUAL_HOST=www.maurizio.proietti.name,blog.proietti.net
VIRTUAL_PORT=80
LETSENCRYPT_HOST=www.maurizio.proietti.name
LETSENCRYPT_EMAIL=maurizio.proietti(AT))EMAIL.com

## MYSQL ENV
MYSQL_DATABASE=database
MYSQL_USER=userdb
MYSQL_PASSWORD=passworddb
MYSQL_ROOT_PASSWORD=segretissima

##TRAEFIK
TRAEFIK_ROUTE_NAME=wp_mp


</code></pre>
<p>Nella dir dockerfile/wp trovo:</p>
<ul>
<li>il Dockerfile di WP</li>
<li>la conf di apache (mpm) con alto o scarso traffico</li>
<li>le impostazioni personalizzate del php.ini</li>
</ul>
<p>Ho personalizzato un po' l'immagine di WordPress per avere un po' di performance in più e per distinguere un sito con meggior traffico da uno con meno traffico.
Per cambiare impostazione vedi (dockerfile/wp/Dockerfile) e in particolare le righe:</p>
<pre><code>## APACHE
#COPY ./mpm_prefork_low_trafic.conf /etc/apache2/mods-available/mpm_prefork.conf
COPY ./mpm_prefork_low_trafic.conf /etc/apache2/mods-available/mpm_prefork.conf
</code></pre>
<p>Anche il php.ini è modificato per gestire le dimensioni di upload
v. dockerfile/wp/php-wp.ini</p>
<p>Creo il mio docker-compose.yml</p>
<pre><code>version: '3.1'

services:


  wordpress:
#    image: wordpress
    build:
      # call the Dockerfile in ./wordpress
      context: ./dockerfile/wp
    restart: always
    container_name: wp_www.maurizio.proietti.name
    environment:
      WORDPRESS_DB_HOST: ${WORDPRESS_DB_HOST}
      WORDPRESS_DB_USER: ${WORDPRESS_DB_USER}
      WORDPRESS_DB_PASSWORD: ${WORDPRESS_DB_PASSWORD}
      WORDPRESS_DB_NAME: ${WORDPRESS_DB_NAME}
      VIRTUAL_HOST: ${VIRTUAL_HOST}
      VIRTUAL_PORT: ${VIRTUAL_PORT}
      LETSENCRYPT_HOST: ${LETSENCRYPT_HOST}
      LETSENCRYPT_EMAIL: ${LETSENCRYPT_EMAIL}
    labels:
      - traefik.http.routers.${TRAEFIK_ROUTE_NAME}.rule=Host(`${LETSENCRYPT_HOST}`)
      - traefik.http.routers.${TRAEFIK_ROUTE_NAME}.tls=true
      - traefik.http.routers.${TRAEFIK_ROUTE_NAME}.tls.certresolver=lets-encrypt
      - traefik.port=${VIRTUAL_PORT}
    depends_on:
      - db
      - redis
    restart: unless-stopped
    networks:
      - proxy
      - backend
    volumes:
      - ./data/html:/var/www/html

  db:
    container_name: mysql_www.maurizio.proietti.name
    image: mysql:5.7
    restart: always
    environment:
      MYSQL_DATABASE: ${MYSQL_DATABASE}
      MYSQL_USER: ${MYSQL_USER}
      MYSQL_PASSWORD: ${MYSQL_PASSWORD}
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
    labels:
      - traefik.enable=false
    volumes:
      - ./data/mysql:/var/lib/mysql
    networks:
      - backend


  redis:
    image: redis:6
    container_name: redis_www.maurizio.proietti.name
    restart: always
    sysctls:
      - net.core.somaxconn=1024
    labels:
      - traefik.enable=false
    volumes:
      - ./data/redis:/data
    networks:
      - backend
    # launch Redis in cache mode with :
    #     #  - max memory up to 50% of your RAM if needed (--maxmemory 512mb)
    #         #  - deleting oldest data when max memory is reached (--maxmemory-policy allkeys-lru)
#    entrypoint: redis-server --maxmemory 512mb -maxmemory-policy allkeys-lru
    entrypoint: redis-server /data/redis.conf




networks:
  proxy:
    external: true
  backend:
    external: false






</code></pre>
<p>Lancio:</p>
<pre><code>docker-compose build
docker-compose up -d
</code></pre>
<p>Entro nel sito e completo l’installazione con dati casuali</p>
<p>Poi faccio un rsync della SOLA directory wp-content:</p>
<pre><code>rsync -uazv /var/www/maurizioproietti/wp/wp-content data/html/
</code></pre>
<p>Poi eseguo il dump del vecchio DB:</p>
<pre><code>mysqldump --opt maurizioproietti &gt; dump.sql
</code></pre>
<p>E controllo che la prefix delle tabelle sia wp_</p>
<p>Se non lo fosse sostituisco la prefix che ha il dump con wp_</p>
<p>Poi importo il dump nel nuovo db sotto docker:</p>
<pre><code>cat dump.sql | docker exec -i mysql_www.maurizio.proietti.name /usr/bin/mysql -u root --password=secret123 db
</code></pre>
<p>Imposto i permessi sul filesystem per bene oppure (se ho fretta)</p>
<pre><code>chmod -R 777 data
</code></pre>
<p>Entro nella sezione wp-admin e inizio gli aggiornamenti suggeriti nel seguente ordine (che penso possa variare la per scaramanzia non vario <g-emoji class="g-emoji" alias="slightly_smiling_face" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f642.png">🙂</g-emoji> )</p>
<p>1.) Plugins</p>
<p>2.) Temi</p>
<p>3.) WordPress Core</p>
<p>Posso poi installare w3 total cache.</p>
<p>Attenzione!!!</p>
<p>Occorre settare correttamente l'indirizzo di redis:</p>
<pre><code>redis:6379
</code></pre>
</div>
