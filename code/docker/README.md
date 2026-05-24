# Docker

Ce dossier sert à noter les bases Docker vues ou testées.

Pour le moment, Docker reste une compétence en cours d'apprentissage. Je ne le présente pas comme un gros projet.

## Ce que j'ai travaillé

- comprendre l'idée d'un conteneur ;
- lancer une image ;
- afficher les conteneurs ;
- afficher les images ;
- arrêter un conteneur ;
- supprimer un conteneur ;
- comprendre à quoi sert un `Dockerfile` ;
- comprendre à quoi sert `docker compose`.

## Commandes de base

```bash
docker --version
docker ps
docker ps -a
docker images
docker run hello-world
docker stop <container_id>
docker rm <container_id>
docker rmi <image_id>
```
