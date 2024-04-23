# Utilisation d'une image de base contenant Python
FROM python:latest

# Définition du répertoire de travail dans le conteneur
WORKDIR /app

# Copie des fichiers du backend Python
COPY ./requirements.txt ./
COPY ./app.py ./
COPY ./models ./models
COPY ./routes ./routes

# Installation des dépendances Python
RUN pip install --no-cache-dir -r requirements.txt

# Commande par défaut pour démarrer le backend Python
CMD ["python", "app.py"]
