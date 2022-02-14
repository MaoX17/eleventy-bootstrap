---
title: "Librenms docker and check_nrpe"
tags: "post"
htmlClass: "html"
bodyClass: "body"
date: "2022-02-14"
permalink: "librenms_docker_check_nrpe/"
unsplash: librenms
faicon: "fas fa-network-wired"
icon:
  - code
  - network-wired

layout: "template_posts_md"

---

# Installare check_nrpe su librenms 

```

docker exec -it librenms sh

cd /tmp
git clone https://github.com/NagiosEnterprises/nrpe
apk add build-base
apk add openssl-dev
./configure
make all
cp src/check_nrpe /usr/lib/monitoring-plugins/


```
