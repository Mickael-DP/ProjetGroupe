# Projet CI/CD avec Docker et Tests

Ce projet est une application web de gestion des utilisateurs, développée dans le cadre d'un cours de Développement Web. L'objectif est de créer deux architectures Docker distinctes pour le backend, une avec MongoDB / Node.js / React et une avec MySQL / Python / React. L'application React possède un formulaire qui permet de sauvegarder les données dans la base de données et d'afficher la liste des utilisateurs. De plus, elle doit permettre de supprimer un utilisateur, soit à l'aide d'un compte admin, soit avec un mot de passe connu par le serveur.

## Architecture du Projet

Le projet est divisé en plusieurs parties :

- **app/** : Contient les fichiers de l'application frontend React.
- **backend_nodejs_mongodb/** : Contient les fichiers du backend Node.js avec MongoDB.
- **backend_python_mysql/** : Contient les fichiers du backend Python avec MySQL.
- **README.md** : Fournit des instructions détaillées sur l'installation, l'utilisation, les tests, le déploiement et la contribution au projet.

## Installation

### Prérequis

- Docker Desktop installé sur votre machine.

### Étapes d'installation

1. Clonez ce dépôt sur votre machine :
   ```bash
   git clone <url-du-repo>

2. Accédez au répertoire du projet :
   ```bash
   cd <nom-du-repo>

3. Construisez les images Docker :
   ```bash
    docker-compose build

4. Lancez les conteneurs Docker :
    ```bash
     docker-compose up

5. Accédez à l'application dans votre navigateur :
    ```bash
    http://localhost:3000

## Tests

Les tests sont divisés en trois catégories : unitaires, d'intégration et end-to-end (e2e) avec Cypress.

### Tests Unitaires et d'Intégration
Les tests unitaires et d'intégration sont exécutés à chaque étape de la pipeline GitHub. Ils assurent le bon fonctionnement des différentes parties de l'application, y compris les fonctionnalités de sauvegarde et de suppression des utilisateurs.

### Tests End-to-End (e2e) avec Cypress
Les tests end-to-end sont exécutés avec Cypress et utilisent les deux architectures Docker pour tester l'ensemble de l'application, de l'interface utilisateur aux interactions avec la base de données.

## Déploiement
La pipeline GitHub est configurée pour déployer l'application après chaque validation des tests. Elle met en place l'environnement Docker nécessaire et lance les tests end-to-end avec Cypress pour assurer la qualité de l'application déployée.

## Contribuer
Les contributions à ce projet sont les bienvenues. Pour contribuer, veuillez ouvrir une demande d'extraction (pull request) et décrire les changements que vous proposez.

## Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.