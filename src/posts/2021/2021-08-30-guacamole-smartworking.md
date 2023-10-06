---
title: "Guacamole e smartworking"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2021-08-30"
permalink: "guacamole_smartworking/"
unsplash: guacamole
faicon: "fas fa-network-wired"
icon:
  - code
  - windows
  - network-wired

layout: "template_posts_md"

---

# Guacamole e smartworking con OTP


docker-compose-con-init.yml :

```

#
# Apache Guacamole with NGIXN reverse proxy and Let's Encrypt.
# For more details see: https://github.com/8gears/containerized-guacamole
#
version: '3'

services:

  init-guac-db:
    image: guacamole/guacamole:latest
    command: ["/bin/sh", "-c", "test -e /init/initdb.sql && echo 'init file already exists' || /opt/guacamole/bin/initdb.sh --mysql > /init/initdb.sql" ]
    volumes:
      - ./data/dbinit:/init
    networks:
      - backend

  mysql:
    image: mysql
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD:-supersecret}
      MYSQL_DATABASE: ${MYSQL_DATABASE:-guacamole}
      MYSQL_USER: ${MYSQL_USER:-guacamole}
      MYSQL_PASSWORD: ${MYSQL_PASSWORD:-secret}
    volumes:
      - ./data/dbdata:/var/lib/mysql
      - ./data/dbinit:/docker-entrypoint-initdb.d
    depends_on:
      - init-guac-db
    networks:
      - backend

  guacd:
    image: guacamole/guacd:latest
    restart: unless-stopped
    networks:
      - backend
      - proxy



  guac:
    image: guacamole/guacamole:latest
    restart: unless-stopped
    environment:
      GUACD_HOSTNAME: guacd
      MYSQL_HOSTNAME: mysql
      MYSQL_DATABASE: ${MYSQL_DATABASE:-guacamole}
      MYSQL_USER: ${MYSQL_USER:-guacamole}
      MYSQL_PASSWORD: ${MYSQL_PASSWORD:-secret}
      VIRTUAL_HOST: ${VIRTUAL_HOST}
      LDAP_HOSTNAME: ${LDAP_HOSTNAME}
      LDAP_USER_BASE_DN: ${LDAP_USER_BASE_DN}
      LDAP_PORT: ${LDAP_PORT}
      LDAP_ENCRYPTION_METHOD: ${LDAP_ENCRYPTION_METHOD}
      LDAP_GROUP_BASE_DN: ${LDAP_GROUP_BASE_DN}
      LDAP_SEARCH_BIND_DN: ${LDAP_SEARCH_BIND_DN}
      LDAP_SEARCH_BIND_PASSWORD: ${LDAP_SEARCH_BIND_PASSWORD}
      LDAP_USERNAME_ATTRIBUTE: ${LDAP_USERNAME_ATTRIBUTE}
      LDAP_MAX_SEARCH_RESULTS: ${LDAP_MAX_SEARCH_RESULTS}
      LDAP_USER_SEARCH_FILTER: ${LDAP_USER_SEARCH_FILTER}

      TOTP_ENABLED: ${TOTP_ENABLED}

      GUACAMOLE_HOME: /guacamole_home

    volumes:
      - ./data/guacamole_home:/guacamole_home

    depends_on:
      - mysql
      - guacd
    networks:
      - backend
      - proxy

networks:
  proxy:
    external: true
    name: nginx-proxy

  backend:
    external: false


```

Per inizializzare il DB esegui:


```

docker-compose -f docker-compose-con-init.yml up init-guac-db

```

Poi modifica il docker-compose.yaml come segue:


```

#
# Apache Guacamole with NGIXN reverse proxy and Let's Encrypt.
# For more details see: https://github.com/8gears/containerized-guacamole
#
version: '3'

services:


  mysql:
    image: mysql
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD:-supersecret}
      MYSQL_DATABASE: ${MYSQL_DATABASE:-guacamole}
      MYSQL_USER: ${MYSQL_USER:-guacamole}
      MYSQL_PASSWORD: ${MYSQL_PASSWORD:-secret}
    volumes:
      - ./data/dbdata:/var/lib/mysql
      - ./data/dbinit:/docker-entrypoint-initdb.d
    networks:
      - backend

  guacd:
    image: guacamole/guacd:latest
    restart: unless-stopped
    networks:
      - backend
      - proxy



  guac:
    image: guacamole/guacamole:latest
    restart: unless-stopped
    environment:
      GUACD_HOSTNAME: guacd
      MYSQL_HOSTNAME: mysql
      MYSQL_DATABASE: ${MYSQL_DATABASE:-guacamole}
      MYSQL_USER: ${MYSQL_USER:-guacamole}
      MYSQL_PASSWORD: ${MYSQL_PASSWORD:-secret}
      MYSQL_AUTO_CREATE_ACCOUNTS: ${MYSQL_AUTO_CREATE_ACCOUNTS}
      VIRTUAL_HOST: ${VIRTUAL_HOST}
      LDAP_HOSTNAME: ${LDAP_HOSTNAME}
      LDAP_USER_BASE_DN: ${LDAP_USER_BASE_DN}
      LDAP_PORT: ${LDAP_PORT}
      LDAP_ENCRYPTION_METHOD: ${LDAP_ENCRYPTION_METHOD}
      LDAP_GROUP_BASE_DN: ${LDAP_GROUP_BASE_DN}
      LDAP_SEARCH_BIND_DN: ${LDAP_SEARCH_BIND_DN}
      LDAP_SEARCH_BIND_PASSWORD: ${LDAP_SEARCH_BIND_PASSWORD}
      LDAP_USERNAME_ATTRIBUTE: ${LDAP_USERNAME_ATTRIBUTE}
      LDAP_MAX_SEARCH_RESULTS: ${LDAP_MAX_SEARCH_RESULTS}
      LDAP_USER_SEARCH_FILTER: ${LDAP_USER_SEARCH_FILTER}

      TOTP_ENABLED: ${TOTP_ENABLED}

      GUACAMOLE_HOME: /guacamole_home

    volumes:
      - ./data/guacamole_home:/guacamole_home

    depends_on:
      - mysql
      - guacd
    networks:
      - backend
      - proxy

networks:
  proxy:
    external: true
    name: nginx-proxy

  backend:
    external: false


```

E crea un file .env (esempio):


```

# Example Configuration
#
POSTGRES_USER=guacadb
POSTGRES_PASSWORD=P4ssw0rd

MYSQL_ROOT_PASSWORD=P4ssw0rd
MYSQL_DATABASE=guacamole_db
MYSQL_USER=guacadb
MYSQL_PASSWORD=P4ssw0rd

MYSQL_AUTO_CREATE_ACCOUNTS=true

# Uncomment if you want to test with dummy certificates
# LETSENCRYPT_TEST=false
VIRTUAL_HOST=guacamole.example.net
#LETSENCRYPT_HOST=workshop.8gears.com
#LETSENCRYPT_EMAIL=no-reply@8gears.com

LDAP_HOSTNAME=example.net
LDAP_USER_BASE_DN=dc=example,dc=net
LDAP_PORT=389
LDAP_ENCRYPTION_METHOD=none
LDAP_GROUP_BASE_DN=
LDAP_SEARCH_BIND_DN=CN=bind,DC=example,dc=net
LDAP_SEARCH_BIND_PASSWORD=P4ssw0rd
LDAP_USERNAME_ATTRIBUTE=sAMAccountName
LDAP_MAX_SEARCH_RESULTS=1000
LDAP_USER_SEARCH_FILTER=(&(objectCategory=Person)(sAMAccountName=*)(memberOf:1.2.840.113556.1.4.1941:=CN=GuocamoleEnabledUsers,OU=service_groups,OU=groups,DC=example,dc=net))

TOTP_ENABLED=true


```

Adesso il sistema dovrebbe essere funzionante.




```


```
