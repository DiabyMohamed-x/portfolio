# TP création utilisateur

- Créer une nouvelle branche du dépôt oracle nommée `tp`
- Créer un README.md contenant le sujet du TP
- Creer un model Utilisateur dans models.py avec ces trois attributs:
    - nom
    - prenom
    - numero_badge - PK

- Créer les fonction @app.get() pour afficher le formulaire de saisie d'un nouvel utilisateur et @app.post() pour enregistrer celui-ci après vérification de l'unicité de l'enregistrement (champs unique: numero_badge)
- Implémenter une vérification d'unicité avant d'ajouter un nouvel utilisateur
- Créer le template nouvel_utilisateur.html permettant de saisir le nouvel utilisateur
- Créer le template utilisateurs.html affichant tout les utilisateurs contenus dans la base de données

## Livrable

- main.py (fonctions affichage et validation formulaire)
- models.py (classe Utilisateur)
- templates/nouvel_utilisateur.html
- templates/utilisateurs.html

## Documentation utile

* [Documentation FastAPI](https://fastapi.tiangolo.com)
* [Documentation FastAPI Form data](https://fastapi.tiangolo.com/fr/tutorial/request-forms/)
* [Documentation FastAPI Databases](https://fastapi.tiangolo.com/fr/tutorial/sql-databases/)
* [Documentation SQLmodel](https://sqlmodel.tiangolo.com/tutorial/)
* [Documentation FastAPI Templates (Jinja2)](https://sqlmodel.tiangolo.com/tutorial/)



