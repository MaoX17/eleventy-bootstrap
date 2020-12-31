---
title: "Come ti dockerizzo un WordPress esistente"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2020-12-17"
permalink: "come-ti-dockerizzo-un-wordpress-esistente/"
layout: "template_posts_md"
icon:
  - docker
  - wordpress
  - mysql

---

<p>Questa è una guida di massima&#8230; tutti gli aggiornamenti sono qui:</p>



<p><a href="https://github.com/MaoX17/wordpress-docker-compose">https://github.com/MaoX17/wordpress-docker-compose</a></p>



<p>Ho avuto qualche difficoltà ma poi ho trovato la via giusta.</p>



<p>Segui ESATTAMENTE i passaggi che riporto.</p>



<p>1.) Creo il mio docker-compose.yml</p>



<pre class="wp-block-code"><code>version: '3.1'

services:


  wordpress:
    image: wordpress
    restart: always
    container_name: wp_www.maurizio.proietti.name
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: user
      WORDPRESS_DB_PASSWORD: password123
      WORDPRESS_DB_NAME: db
      VIRTUAL_HOST: www.maurizio.proietti.name
      VIRTUAL_PORT: 80
      LETSENCRYPT_HOST: www.maurizio.proietti.name
      LETSENCRYPT_EMAIL: maurizio.proietti@gmail.com
    depends_on:
      - db
    restart: unless-stopped
    networks:
      - proxy
      - www.maurizio.proietti.name-net
    volumes:
      - ./data/html:/var/www/html

  db:
    container_name: mysql_www.maurizio.proietti.name
    image: mysql:5.7
    restart: always
    environment:
      MYSQL_DATABASE: db
      MYSQL_USER: user
      MYSQL_PASSWORD: password123
      MYSQL_ROOT_PASSWORD: secret123
    volumes:
      - ./data/mysql:/var/lib/mysql
    networks:
      - www.maurizio.proietti.name-net

networks:
  proxy:
    external:
      name: nginx-proxy
  www.maurizio.proietti.name-net:</code></pre>



<p>Lancio il docker-compose up -d</p>



<pre class="wp-block-code"><code>docker-compose up -d</code></pre>



<p>Entro nel sito e completo l&#8217;installazione con dati casuali</p>



<p>Poi faccio un rsync della SOLA directory wp-content:</p>



<pre class="wp-block-code"><code>rsync -uazv /var/www/maurizioproietti/wp/wp-content data/html/</code></pre>



<p>Poi eseguo il dump del vecchio DB:</p>



<pre class="wp-block-code"><code>mysqldump --opt maurizioproietti &gt; dump.sql</code></pre>



<p>E controllo che la prefix delle tabelle sia wp_</p>



<p>Se non lo fosse sostituisco la prefix che ha il dump con wp_</p>



<p>Poi importo il dump nel nuovo db sotto docker:</p>



<pre class="wp-block-code"><code>cat dump.sql | docker exec -i mysql_www.maurizio.proietti.name /usr/bin/mysql -u root --password=secret123 db</code></pre>



<p>Imposto i permessi sul filesystem per bene oppure (se ho fretta) </p>



<pre class="wp-block-code"><code>chmod -R 777 data

Aggiungi 

define('FS_METHOD', 'direct');

al wp-config.php</code></pre>



<p>Entro nella sezione wp-admin e inizio gli aggiornamenti suggeriti nel seguente ordine (che penso possa variare la per scaramanzia non vario 🙂 )</p>



<p>1.) Plugins</p>



<p>2.) Temi</p>



<p>3.) WordPress Core</p>
