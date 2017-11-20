# pe-promo2-ng-component

## Pré-requis
- Avoir nodejs installé sur votre OS
- Avoir grunt-cli installé en global :
```shell
npm install -g grunt-cli
```
- Puis dans le dossier de ce projet, avoir installé les dépendances nodejs :
```shell
npm install
```

## Démarrer le serveur web
Lancer la commande :
```shell
npm start
```

Normalement, votre ligne de commande affichera quelque chose de similaire à ceci :

```shell
   ┌───────────────────────────────────────────────────┐
   │                                                   │
   │   Serving!                                        │
   │                                                   │
   │   - Local:            http://localhost:5000       │
   │   - On Your Network:  http://172.17.22.118:5000   │
   │                                                   │
   │   Copied local address to clipboard!              │
   │                                                   │
   └───────────────────────────────────────────────────┘
```

Votre projet est disponible à l'adresse indiquée.

## Contenu du projet

### Grunt

- Vérification de la syntaxe de code (eslint) ;
- Concaténation de tous les fichiers JS indépendants (concat) ;
- Minification du code (uglify) ;

### Package.json

La commande ```npm start``` permet d'exécuter le script situé dans package.json indiqué dans la propriété scripts.start.

Ceci lance la tâche grunt puis le serveur local.

### index.html

J'utilise 3 scripts pour vous montrer 2 choses différentes :
1. AngularJs et angularjs-ui-router chargés depuis une ressource extérieure
2. assets/front.min.js, chargé à partir du fichier généré par le processus grunt.
