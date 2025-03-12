---
title: Ubuntu - Tunnel ssh da riga di comando
tags:
  - post
htmlClass: html
bodyClass: body
date: 2025-03-12
permalink: Ubuntu-ssh-tunnel/
layout: template_posts_md
---
# Ubuntu - Tunnel ssh da riga di comando

```

ssh -L 1234:localhost:19999 utente@server.casa.local -p 11122

```


Poi mi collego con il browser al:

http://localhost:1234
