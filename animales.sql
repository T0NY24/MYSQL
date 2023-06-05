CREATE DATABASE Animales;

USE Animales;

CREATE TABLE Animal (
  id INT PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(255) NOT NULL,
  director VARCHAR(255) NOT NULL
);

CREATE TABLE alimentacion (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  animal_id INT,
  FOREIGN KEY (animal_id) REFERENCES animal(id)
);
