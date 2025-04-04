---
title: Fineco OFX per GNUCash
tags:
  - post
htmlClass: html
bodyClass: body
date: 2025-03-13
layout: template_posts_md
---
## Fineco OFX per GNUCash - Come ottenerlo

Partendo da:
https://github.com/frankIT/ofxstatement-fineco

Su ubuntu:

```
sudo apt install ofxstatement ofxstatement-plugins

```

- Da Fineco scaricare l'elenco dei movimenti in formato XLSX
- Convertire il file in XLS con un qualsiasi editor (io ho usato libreoffice)
- Trasforma i numeri nella colonna uscite in numeri positivi (per farlo ho creato una nuova colonna con la formula (-1 * cella) )
- Salva il file come full.xls

Adesso devo modificare il file:
/usr/lib/python3/dist-packages/ofxstatement/plugins/fineco.py

```
Eseguo una copia

sudo cp /usr/lib/python3/dist-packages/ofxstatement/plugins/fineco.py /usr/lib/python3/dist-packages/ofxstatement/plugins/fineco.py.ORIG

edito:

sudo vim /usr/lib/python3/dist-packages/ofxstatement/plugins/fineco.py 

sostituire a riga 30:
u"Descrizione Completa",
con
u"Descrizione_Completa",

sostituire riga 33:
'account_id_pos' : [1, 0],
con
'account_id_pos' : [0, 0],




diff /usr/lib/python3/dist-packages/ofxstatement/plugins/fineco.py /usr/lib/python3/dist-packages/ofxstatement/plugins/fineco.py.ORIG 
30c30
<                 u"Descrizione_Completa",
---
>                 u"Descrizione Completa",
33c33
<             'account_id_pos' : [0, 0],
---
>             'account_id_pos' : [1, 0],


```


Adeso posso lanciare:
```
ofxstatement convert -t fineco full.xls full.ofx

```


et voila
