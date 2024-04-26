# Utilisation d'une image de base Python
FROM python:3.9

# Définition du répertoire de travail à l'intérieur du conteneur
WORKDIR /app

# Copie des fichiers nécessaires dans le conteneur
COPY . /app

# Installation des dépendances
RUN pip install -r requirements.txt

# Commande pour lancer le serveur Python
CMD ["python", "server.py"]
