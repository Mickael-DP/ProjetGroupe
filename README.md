# Projet Groupe

Réalisé par Mickaël DALLE PASQUALINE et Nicolas BERNARD.
Ce projet est une application web full-stack qui permet de basculer entre deux configurations de backend : Node.js avec MongoDB et Python avec MySQL.

## Prérequis

Pour utiliser ce projet, vous devez avoir Docker et Docker Compose installés sur votre machine.

## Mise en route

Pour démarrer tous les services avec Docker Compose, exécutez la commande suivante :

docker-compose up -d


## Services

L'application est composée de plusieurs services, qui sont configurés dans le fichier `docker-compose.yml` :

- `db` : Base de données MySQL.
- `adminer` : Outil d'administration de base de données, accessible à l'adresse `http://localhost:8080`.
- `app` : Application front-end React, accessible à l'adresse `http://localhost:3000`.
- `backend_node_mongo` : API backend utilisant Node.js et MongoDB, accessible à l'adresse `http://localhost:8000`.
- `backend_python_mysql` : API backend utilisant Python et MySQL, accessible à l'adresse `http://localhost:8001`.
- `mongodb` : Base de données MongoDB.

## Basculer entre les backends

Pour passer de Node.js avec MongoDB à Python avec MySQL, suivez les étapes suivantes :

1. Allez dans le fichier `src/components/Forms/Forms.js`.
2. Commentez ou décommentez les sections appropriées pour utiliser l'API correspondante :

    - Pour Node.js avec MongoDB :

    ```javascript
    // Envoi des données du formulaire au backend Node.js avec MongoDB
    await axios.post('http://localhost:8000/api/users', formData);
    ```

    - Pour Python avec MySQL :

    ```javascript
    // Envoi des données du formulaire au backend Python avec MySQL
    await axios.post('http://localhost:8001/users', formDataWithFormattedDate);
    ```

3. Dans le fichier `src/App.js`, modifiez les requêtes API pour correspondre au backend sélectionné :

    - Pour Node.js avec MongoDB :

    ```javascript
    // const response = await axios.get('http://localhost:8000/users');
    // setUsers(response.data.utilisateurs || []);
    ```

    - Pour Python avec MySQL :

    ```javascript
    const response = await axios.get("http://localhost:8001/users");
    setUsers(response.data.utilisateurs || []);
    ```

## Tests avec Cypress

Les tests E2E avec Cypress peuvent être exécutés en mode headless à l'aide de Docker. Pour cela, assurez-vous que votre application est en cours d'exécution, puis lancez les tests avec la commande suivante :

cd app npm run cypress