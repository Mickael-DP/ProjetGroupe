USE ynov_ci;
CREATE TABLE utilisateur
(
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(100),
    lastname VARCHAR(100),
    email VARCHAR(255),
    birthday DATE,
    city VARCHAR(100),
    address_code VARCHAR(255)
);