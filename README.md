# Projet de Groupe CI/CD

Ce projet est une application web de gestion des utilisateurs, développée dans le cadre d'un cours de Développement Web. L'application permet aux utilisateurs de s'inscrire, de se connecter, de gérer leur profil et d'accéder à des fonctionnalités avancées telles que la suppression de compte.

## Table des matières

1. [Introduction](#introduction)
2. [Architecture du Projet](#architecture-du-projet)
3. [Installation](#installation)
4. [Utilisation](#utilisation)
5. [Tests](#tests)
6. [Déploiement](#deploiement)
7. [Contribuer](#contribuer)
8. [Licence](#licence)

## Introduction

Ce projet vise à fournir une solution complète pour la gestion des utilisateurs, en utilisant des technologies modernes telles que Node.js, Express, MongoDB, Python, Flask, MySQL et React.

## Architecture du Projet

Le projet est divisé en plusieurs parties :

- **app/** : Contient les fichiers de l'application frontend React.
- **backend_nodejs_mongodb/** : Contient les fichiers du backend Node.js avec MongoDB.
- **backend_python_mysql/** : Contient les fichiers du backend Python avec MySQL.
- **README.md** : Fournit des instructions détaillées sur l'installation, l'utilisation, les tests, le déploiement et la contribution au projet.

## Installation

### Prérequis

- Node.js et npm installés sur votre machine.
- Python et pip installés sur votre machine.
- Docker Desktop installé sur votre machine (pour exécuter les conteneurs Docker).

### Étapes d'installation

1. Clonez ce dépôt sur votre machine :
git clone <url-du-repo>
2. Accédez au dossier du projet :
cd ProjetGroupe

3. Installez les dépendances pour le frontend et le backend Node.js avec MongoDB :
cd app
npm install
cd ../backend_nodejs_mongodb
npm install

4. Installez les dépendances pour le backend Python avec MySQL :
cd ../backend_python_mysql
pip install -r requirements.txt

5. Lancez les conteneurs Docker pour MongoDB et MySQL :
docker-compose up -d

6. Créez la base de données MySQL et les tables nécessaires :
python create_db.py


8. Lancez les serveurs frontend et backend :
cd ../app
npm start
cd ../backend_nodejs_mongodb
npm start
cd ../backend_python_mysql
python app.py

9. Accédez à l'application dans votre navigateur à l'adresse http://localhost:3000.

## Utilisation

L'application permet aux utilisateurs de s'inscrire, de se connecter, de gérer leur profil et d'accéder à des fonctionnalités avancées telles que la suppression de compte.


