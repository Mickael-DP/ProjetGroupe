USE ynov_ci;
CREATE TABLE utilisateur
(
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(100),
    lastName VARCHAR(100),
    email VARCHAR(255),
    birthday DATE,
    city VARCHAR(100),
    addressCode VARCHAR(255),
);