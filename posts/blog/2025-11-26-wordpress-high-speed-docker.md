---
title: WordPress High Speed - Docker compose OpenLiteSpeed and traefik
tags:
  - post
htmlClass: html
bodyClass: body
date: 2025-11-26
layout: template_posts_md
---
## Thank to
https://github.com/litespeedtech/ols-docker-env

## step by step 


```

git clone https://github.com/litespeedtech/ols-docker-env.git
cd ols-docker-env/
vim docker-compose.yml
cat ../intranet_wp/docker-compose.yaml
vim docker-compose.yml
cat ../intranet_wp/docker-compose.yaml
vim docker-compose.yml
vim docker-compose.yml




```


```

services:
  mysql:
    image: mariadb:11.4
    logging:
      driver: none
    command: ["--max-allowed-packet=512M"]
    volumes:
      - "./data/db:/var/lib/mysql:delegated"
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      MYSQL_DATABASE: ${MYSQL_DATABASE}
      MYSQL_USER: ${MYSQL_USER}
      MYSQL_PASSWORD: ${MYSQL_PASSWORD}
    restart: always
    networks:
      - intranet2-net

  litespeed:
    image: litespeedtech/openlitespeed:${OLS_VERSION}-${PHP_VERSION}
    container_name: litespeed
    env_file:
      - .env
    volumes:
      - ./lsws/conf:/usr/local/lsws/conf
      - ./lsws/admin-conf:/usr/local/lsws/admin/conf
      - ./bin/container:/usr/local/bin
      - ./sites:/var/www/vhosts/
      - ./acme:/root/.acme.sh/
      - ./logs:/usr/local/lsws/logs/
#    ports:
#      - 80:80
#      - 443:443
#      - 443:443/udp
#      - 7080:7080
    restart: always
    environment:
      TZ: ${TimeZone}

    labels:
      - traefik.enable=true
      - traefik.http.routers.intranet2-http.entrypoints=web
      - traefik.http.routers.intranet2-http.rule=Host(`intranet2.proietti.net`)
      - traefik.http.routers.intranet2-http.middlewares=https-redirect@file

      - traefik.http.routers.intranet2-https.entrypoints=websecure
      - traefik.http.routers.intranet2-https.rule=Host(`intranet2.proietti.net`)
      - traefik.http.routers.intranet2-https.tls=true
#      - traefik.http.routers.intranet2-https.tls.certresolver=lets-encr

      - traefik.http.services.intranet2.loadbalancer.server.port=80
      - traefik.docker.network=nginx-proxy


    networks:
      - intranet2-net
      - proxy

#  phpmyadmin:
#    image: phpmyadmin/phpmyadmin:${PHPMYADMIN_VERSION}
#    env_file:
#      - .env
#    ports:
#      - 8080:80
#    environment:
#      PMA_HOST: mysql
#    restart: always
#    networks:
#      - default
  redis:
    image: "redis:alpine"
    logging:
      driver: none
    # command: redis-server --requirepass 8b405f60665e48f795752e534d93b722
    volumes:
      - ./redis/data:/data
      - ./redis/redis.conf:/usr/local/etc/redis/redis.conf
    environment:
      - REDIS_REPLICATION_MODE=master
    restart: always
    networks:
      - intranet2-net

networks:
  proxy:
    external: true
    name: nginx-proxy
  intranet2-net:


```


```

docker compose up
docker compose down
docker compose up -d
bash bin/demosite.sh

```


Poi mi collego alla url e "installo" wordpress

Poi verifico le impostazioni di # LiteSpeed Cache

Il benchmark ha dato risultati davvero ottimi:

```

mp@proietti-nb666:~$ h2load -n 100000 -c 100 -t 1 -T 5 -m 10 -H 'Accept-Encoding: gzip,deflate' https://intranet.proietti.net
starting benchmark...
spawning thread #0: 100 total client(s). 100000 total requests
TLS Protocol: TLSv1.3
Cipher: TLS_AES_128_GCM_SHA256
Server Temp Key: X25519 253 bits
Application protocol: h2
progress: 10% done
progress: 20% done
progress: 30% done
progress: 40% done
progress: 50% done
progress: 60% done
progress: 70% done
progress: 80% done
progress: 90% done

finished in 1747.66s, 56.93 req/s, 619.99KB/s
requests: 100000 total, 100000 started, 99493 done, 98588 succeeded, 1412 failed, 507 errored, 507 timeout
status codes: 98588 2xx, 0 3xx, 0 4xx, 905 5xx
traffic: 1.03GB (1109538488) total, 2.62MB (2751783) headers (space savings 90.39%), 1.03GB (1104096967) data
                     min         max         mean         sd        +/- sd
time for request:    85.41ms     920.27s      14.38s      66.98s    97.39%
time for connect:    20.17ms    222.46ms    116.07ms     72.59ms    61.54%
time to 1st byte:   346.87ms     546.62s     234.04s     202.95s    53.85%
req/s           :       0.57        0.58        0.57        0.00    84.62%
mp@proietti-nb666:~$ h2load -n 100000 -c 100 -t 1 -T 5 -m 10 -H 'Accept-Encoding: gzip,deflate' https://intranet2.proietti.net
starting benchmark...
spawning thread #0: 100 total client(s). 100000 total requests
TLS Protocol: TLSv1.3
Cipher: TLS_AES_128_GCM_SHA256
Server Temp Key: X25519 253 bits
Application protocol: h2
progress: 10% done
progress: 20% done
progress: 30% done
progress: 40% done
progress: 50% done
progress: 60% done
progress: 70% done
progress: 80% done
progress: 90% done

finished in 125.26s, 798.11 req/s, 9.39MB/s
requests: 100000 total, 100000 started, 99974 done, 99974 succeeded, 26 failed, 26 errored, 26 timeout
status codes: 99974 2xx, 0 3xx, 0 4xx, 0 5xx
traffic: 1.15GB (1233066741) total, 1.15MB (1204505) headers (space savings 96.00%), 1.14GB (1229155569) data
                     min         max         mean         sd        +/- sd
time for request:     1.01ms     119.77s    261.63ms    838.14ms    99.64%
time for connect:    18.78ms    357.05ms     83.20ms     71.40ms    85.26%
time to 1st byte:   217.14ms       9.89s       1.28s       2.16s    86.32%
req/s           :      35.75       39.43       37.50        1.22    49.47%


```

