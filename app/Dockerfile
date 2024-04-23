# Utilisation d'une image de base contenant Node.js
FROM node:latest

# Définition du répertoire de travail dans le conteneur
WORKDIR /app

# Copie des fichiers de l'application
COPY ./package.json ./
COPY ./package-lock.json ./
COPY ./public ./public
COPY ./src ./src

# Installation des dépendances
RUN npm install

# Commande par défaut pour démarrer l'application
CMD ["npm", "start"]
