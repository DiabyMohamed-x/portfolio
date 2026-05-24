# Mini-projet - Jeu du morpion en C

Objectif : programmer un jeu du morpion à deux joueurs dans le terminal.

## Ce que le programme doit faire

- afficher une grille de 3 lignes et 3 colonnes ;
- utiliser `_` pour une case vide ;
- utiliser `x` pour le joueur 1 ;
- utiliser `o` pour le joueur 2 ;
- lire un coup au clavier entre 1 et 9 ;
- refuser un coup invalide ;
- empêcher de jouer sur une case déjà prise ;
- changer de joueur après un coup valide ;
- détecter une victoire ;
- afficher le joueur gagnant.

##  Notions utilisées

- tableau de `char` pour représenter la grille ;
- fonctions de test ;
- conditions ;
- boucle principale de jeu ;
- passage du tableau en paramètre ;
- lecture clavier ;
- affichage terminal.

##  Fonctions importantes

- `afficheGrille`
- `ligneIdentique`
- `colonneIdentique`
- `diag1Identique`
- `diag2Identique`
- `testGagne`
- `lireCoupMorpion`

##  Fichiers à mettre ici

```txt
mini-projet-morpion/
├── README.md
└── src/
    └── morpion.c
```

## Commandes utiles

```bash
cd src
gcc ../../lib/inout.c morpion.c -o morpion
./morpion
```

##  Améliorations possibles

- gérer les matchs nuls ;
- rendre la taille de la grille configurable ;
- améliorer les messages dans le terminal ;
- ajouter quelques tests sur les fonctions de victoire.
