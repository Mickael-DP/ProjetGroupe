# Utilisation d'une image de base contenant Node.js
FROM node:latest

# Définition du répertoire de travail dans le conteneur
WORKDIR /app

# Copie des fichiers du backend Node.js
COPY ./package.json ./
COPY ./server.js ./
COPY ./models ./models
COPY ./routes ./routes

# Installation des dépendances
RUN npm install

# Commande par défaut pour démarrer le backend Node.js
CMD ["node", "server.js"]
