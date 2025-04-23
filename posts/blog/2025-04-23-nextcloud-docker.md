---
title: NextCloud docker traefik
tags:
  - post
htmlClass: html
bodyClass: body
date: 2025-03-13
layout: template_posts_md
---
## Installation

docker-compose.yaml

```


services:
  db:
    image: mariadb
    command: --transaction-isolation=READ-COMMITTED --binlog-format=ROW --log-bin=ROW --innodb-read-only-compressed=OFF
    restart: always
    volumes:
      - ./data/nextcloud_data/db:/var/lib/mysql
    environment:
      - MYSQL_ROOT_PASSWORD=toortoor
    env_file:
      - db.env
    networks:
      - nextcloud-net


  redis:
    image: redis:alpine
    restart: always
    command: redis-server --requirepass 123
    networks:
      - nextcloud-net

#  redis:
#    image: redis
#    restart: always
#    command: redis-server --requirepass 123
#    networks:
#      - nextcloud-net

#  collabora:
#    image: collabora/code
#    container_name: nextcloud-collab
#    networks:
#      - proxy
#    cap_add:
#     - MKNOD
#    expose:
#      - 9980
##    ports:
##      - 9980:9980
#    environment:
#      - domain=dropbox\.provincia\.prato\.it
#      - VIRTUAL_HOST=collabora.provincia.prato.it
#      - VIRTUAL_PORT=9980
#      - DONT_GEN_SSL_CERT=true
#      - extra_params=--o:ssl.enable=false --o:ssl.termination=true --o:net.proto=IPv4
#      - dictionaries='it'
#      - LETSENCRYPT_HOST=
#    volumes:
#      - /etc/timezone:/etc/timezone:ro
#      - /etc/localtime:/etc/localtime:ro
#    restart: unless-stopped
#



  app:
#    image: nextcloud:23-apache
#    image: nextcloud:29.0-apache
#    image: nextcloud:29-apache
#    image: nextcloud:30.0-apache
    image: nextcloud:31-apache
    restart: always
#    hostname: nc
    volumes:
      - ./data/nextcloud_data/nextcloud:/var/www/html
      - ./data/nextcloud-apache.conf:/etc/apache2/conf-enabled/nextcloud-apache.conf:ro
    environment:
#      - VIRTUAL_HOST=nc.proietti.net
#      - VIRTUAL_PORT=80
#      - LETSENCRYPT_HOST=nc.proietti.net
#      - LETSENCRYPT_EMAIL=maurizio.proietti@gmail.com
      - MYSQL_HOST=db
      - REDIS_HOST=redis
      - REDIS_HOST_PASSWORD=123
      - OVERWRITEPROTOCOL=https
      - TRUSTED_PROXIES=172.19.0.7 127.0.0.1 172.19.0.1


#    labels:
#      - traefik.http.routers.${TRAEFIK_ROUTE_NAME}.rule=Host(`${LETSENCRYPT_HOST}`)
#      - traefik.http.routers.${TRAEFIK_ROUTE_NAME}.tls=true
#      - traefik.http.routers.${TRAEFIK_ROUTE_NAME}.tls.certresolver=lets-encrypt
#      - traefik.http.routers.${TRAEFIK_ROUTE_NAME}.middlewares=nextcloud-middlewares-secure-headers@file
#      - traefik.http.services.traefik-https.loadbalancer.server.port=${VIRTUAL_PORT}
##      - traefik.port=${VIRTUAL_PORT}
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.nc_proietti_net-http.entrypoints=web"
      - "traefik.http.routers.nc_proietti_net-http.rule=Host(`nc.proietti.net`)"

      - "traefik.http.routers.nc_proietti_net-http.middlewares=https-redirect@file"

      - "traefik.http.routers.nc_proietti_net-https.entrypoints=websecure"
      - "traefik.http.routers.nc_proietti_net-https.rule=Host(`nc.proietti.net`)"
        #- "traefik.http.routers.nc_proietti_net-https.middlewares=basic-auth@file"

        #      - "traefik.http.routers.nc_proietti_net-https.tls=true"
      - "traefik.http.routers.nc_proietti_net-https.tls.certresolver=lets-encr"
#      - "traefik.http.routers.nc_proietti_net-https.middlewares=nextcloud-middlewares-secure-headers@file"


      - "traefik.http.services.nc_proietti_net.loadbalancer.server.port=80"
      - "traefik.docker.network=proxy"


    env_file:
      - db.env
    depends_on:
      - db
      - redis
    networks:
      - proxy
      - nextcloud-net

  cron:
#    image: nextcloud:apache
#    image: nextcloud:22.1-apache
#    image: nextcloud:22-apache
#    image: nextcloud:23.0-apache
#    image: nextcloud:23-apache
#    image: nextcloud:24.0-apache
#    image: nextcloud:apache
#    image: nextcloud:29.0-apache
#    image: nextcloud:29-apache
#    image: nextcloud:30.0-apache
    image: nextcloud:31-apache
    restart: always
    environment:
      - MYSQL_HOST=db
    volumes:
      - ./data/nextcloud_data/nextcloud:/var/www/html
    entrypoint: /cron.sh
    depends_on:
      - db
      - redis
    networks:
      - proxy
      - nextcloud-net



networks:
  proxy:
    external: true
  nextcloud-net:
    external: false


```


## Upgrade



## Manteniance and solutions


```
docker exec --user www-data nextcloud-app-1 php occ db:add-missing-indices

docker exec --user www-data nextcloud-app-1 php occ maintenance:repair --include-expensive

docker exec --user www-data nextcloud-app-1 php occ config:system:set maintenance_window_start --type=integer --value=1

```