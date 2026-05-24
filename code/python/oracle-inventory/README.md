# Oracle Inventory

Projet d'apprentissage autour d'un inventaire informatique.

Le but : récupérer des informations d'une machine avec un script Bash, les envoyer à une API FastAPI, puis les stocker dans une base SQLite.

## Ce que le projet contient

- `APP/main.py` : routes FastAPI ;
- `APP/models.py` : modèles SQLModel ;
- `APP/templates/` : pages HTML avec Jinja2 ;
- `APP/static/style.css` : styles CSS ;
- `oracle.sh` : script Bash de collecte machine ;
- `README-source.md` : README du projet d'origine.

## Ce que j'ai travaillé

- création de routes FastAPI ;
- réception de JSON avec un endpoint ;
- création de formulaires ;
- affichage avec templates HTML ;
- modèles SQLModel ;
- base SQLite ;
- vérification d'unicité sur un badge utilisateur ;
- collecte système avec Bash ;
- envoi HTTP avec `curl`.

## Notes

Ce dossier est une copie rangée du projet Oracle depuis mon workspace. La version présente dans ce portfolio a été nettoyée pour rester lisible et importable.

Je n'ai pas copié :

- l'environnement virtuel ;
- la base `database.db` ;
- les fichiers `__pycache__` ;
- le dossier `.git` ;
- les outils lourds.

Le projet est encore un travail en cours. Il sert surtout à montrer les notions travaillées : Python, FastAPI, SQLModel, SQLite, templates et Bash.
