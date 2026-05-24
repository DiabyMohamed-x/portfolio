# C - TP CNAM

Ce dossier regroupe les exercices et mini-projets en langage C faits au CNAM.

Formation :

- CNAM
- DSP Informatique - Réseau de la Réussite Vincent Merle
- Algo / C

## Ce que j'ai travaillé

- compiler un programme avec `gcc` ;
- utiliser des fichiers `.c` et `.h` ;
- écrire des procédures ;
- écrire des fonctions avec retour ;
- passer des paramètres ;
- utiliser `if`, `else`, `while`, `for` ;
- manipuler des tableaux ;
- manipuler des chaînes de caractères ;
- structurer un programme en plusieurs fonctions ;
- tester les fonctions avec plusieurs cas.

##  TP

| Dossier | Sujet |
| --- | --- |
| `tp1-introduction/` | Introduction au C, compilation, procédures simples |
| `tp2-fonctions-conditionnelles/` | Conditions, fonctions, tests booléens |
| `tp3-boucles-tableaux/` | Boucles, tableaux 1D et tableaux 2D |
| `tp4-parametres-chaines/` | Passage de paramètres, chaînes, fichiers, boucle while |
| `mini-projet-morpion/` | Jeu du morpion dans le terminal |

## Comment compiler un fichier C

Les TP du CNAM utilisent une petite bibliothèque d'entrée/sortie appelée `inout`.
J'ai ajouté une version locale dans `code/c/lib/` pour pouvoir compiler les exemples hors de la distribution du CNAM.

Exemple :

```bash
gcc ../../lib/inout.c tp1.c -o tp1
./tp1
```

Chaque TP garde ensuite sa propre commande dans son README.

##  À faire ensuite

- quelques captures terminal ;
- une note rapide quand un exercice est terminé.
- remplacer ou compléter les exemples par mes versions exactes si besoin.
