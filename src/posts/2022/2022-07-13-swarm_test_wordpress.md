---
title: "Test con swarm e wordpress"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2022-07-13"
faicon: "fas fa-network-wired"
icon:
  - code
  - network-wired

layout: "template_posts_md"
templateEngineOverride: md

---

# Inizio

Guide: <https://dockerswarm.rocks/swarmpit/>

Abilito swarm:

```bash

docker swarm init

```

Creo la network:

```bash

docker network create --driver=overlay traefik-public

```

Installo traefik:

```bash
docker node update --label-add traefik-public.traefik-public-certificates=true $NODE_ID
export DOMAIN=traefik.pippo.prato.it
export USERNAME=admin
export PASSWORD=PaSSwOrD
export HASHED_PASSWORD=$(openssl passwd -apr1 $PASSWORD)

curl -L dockerswarm.rocks/traefik.yml -o traefik.yml

docker stack deploy -c traefik.yml traefik


```

Verifica la configurazione:

```yaml

version: '3.3'
services:
  traefik:
    image: traefik:v2.2
    command:
     - --providers.docker=true
     - --providers.docker.constraints=Label(`traefik.constraint-label`, `traefik-public`)
     - --providers.docker.exposedbydefault=false
     - --providers.docker.swarmmode
     - --entrypoints.http.address=:80
     - --entrypoints.https.address=:443
     - --certificatesresolvers.le.acme.email=m.proietti@comune.prato.it
     - --certificatesresolvers.le.acme.storage=/certificates/acme.json
     - --certificatesresolvers.le.acme.tlschallenge=true
     - --accesslog
     - --log
     - --api
    ports:
     - 80:80
     - 443:443
    volumes:
     - /var/run/docker.sock:/var/run/docker.sock:ro
     - traefik-public-certificates:/certificates
    networks:
     - traefik-public
    logging:
      driver: json-file
    deploy:
      labels:
        traefik.http.middlewares.https-redirect.redirectscheme.scheme: https
        traefik.http.middlewares.admin-auth.basicauth.users: admin:$$apr1$$mH7uKBsy$$pebM.3K1zAl7fK3I86Sb6/
        traefik.http.routers.traefik-public-https.rule: Host(`traefik.provincia.prato.it`)
        traefik.http.routers.traefik-public-https.tls: 'true'
        traefik.http.services.traefik-public.loadbalancer.server.port: '8080'
        traefik.http.routers.traefik-public-https.service: api@internal
        traefik.http.routers.traefik-public-http.middlewares: https-redirect
        traefik.http.routers.traefik-public-http.entrypoints: http
        traefik.http.routers.traefik-public-https.entrypoints: https
        traefik.http.middlewares.https-redirect.redirectscheme.permanent: 'true'
        traefik.constraint-label: traefik-public
        traefik.http.routers.traefik-public-http.rule: Host(`traefik.provincia.prato.it`)
        traefik.http.routers.traefik-public-https.middlewares: admin-auth
        traefik.docker.network: traefik-public
        traefik.enable: 'true'
        traefik.http.routers.traefik-public-https.tls.certresolver: le
      placement:
        constraints:
         - node.labels.traefik-public.traefik-public-certificates == true
networks:
  traefik-public:
    external: true
volumes:
  traefik-public-certificates:
    driver: local

```

Installo swarmpit

```bash

export DOMAIN=swarmpit.sys.example.com
export NODE_ID=$(docker info -f '{{.Swarm.NodeID}}')
docker node update --label-add swarmpit.db-data=true $NODE_ID
docker node update --label-add swarmpit.influx-data=true $NODE_ID

curl -L dockerswarm.rocks/swarmpit.yml -o swarmpit.yml

docker stack deploy -c swarmpit.yml swarmpit



```


Installo portainer

```bash

export DOMAIN=portainer.sys.example.com
export NODE_ID=$(docker info -f '{{.Swarm.NodeID}}')

docker node update --label-add portainer.portainer-data=true $NODE_ID

curl -L dockerswarm.rocks/portainer.yml -o portainer.yml

docker stack deploy -c portainer.yml portainer


```


Installo WordPress tramite portainer o swarmpit - Edito lo stack in yaml:

```yaml

version: '3.3'
services:
  db:
    image: mysql:5.7
    environment:
      MYSQL_DATABASE: wordpress
      MYSQL_PASSWORD: wordpress
      MYSQL_ROOT_PASSWORD: password
      MYSQL_USER: wordpress
    volumes:
     - db_data:/var/lib/mysql
    networks:
     - default
    logging:
      driver: json-file
    deploy:
      labels:
        traefik.enable: 'false'
      placement:
        constraints:
         - node.role == manager
  wordpress:
    image: wordpress:latest
    environment:
      LETSENCRYPT_EMAIL: m.proietti@pippo.prato.it
      LETSENCRYPT_HOST: wp01.pippo.prato.it
      VIRTUAL_HOST: wp01.pippo.prato.it
      VIRTUAL_PORT: '80'
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_PASSWORD: wordpress
      WORDPRESS_DB_USER: wordpress
    networks:
     - traefik-public
     - default
    logging:
      driver: json-file
    deploy:
      replicas: 2
      labels:
        traefik.http.routers.wp_2022-https.rule: Host(`wp01.pippo.prato.it`)
        traefik.http.routers.wp_2022-https.entrypoints: https
        traefik.http.routers.wp_2022-http.rule: Host(`wp01.pippo.prato.it`)
        traefik.http.routers.wp_2022-https.tls.certresolver: le
        traefik.http.routers.wp_2022-https.tls: 'true'
        traefik.http.routers.wp_2022-http.middlewares: https-redirect
        traefik.constraint-label: traefik-public
        traefik.http.routers.wp_2022-http.entrypoints: http
        traefik.docker.network: traefik-public
        traefik.enable: 'true'
        traefik.http.services.wp_2022.loadbalancer.server.port: '80'
      placement:
        constraints:
         - node.role == manager
networks:
  default:
    driver: overlay
  traefik-public:
    external: true
volumes:
  db_data:
    driver: local



```


Tutto ok finchè non si vuole entrare in modifica con più di 1 replica attiva

Anche inserendo contenuti sul filesystem (es caricando immagini o contenuti) si hanno problemi quando si creano più repliche

Temo occorra un FS condiviso

