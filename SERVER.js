const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Rutas y lógica de tu aplicación

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
const mysql = require('mysql');

// Configuración de la conexión con la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ZooDB'
});

// Conexión con la base de datos
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar con la base de datos:', error);
  } else {
    console.log('Conexión exitosa con la base de datos');
  }
});
// Obtener todas las películas
app.get('/Animales', (req, res) => {
  const query = 'SELECT * FROM Animales';

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener las películas:', error);
      res.status(500).json({ error: 'Ocurrió un error al obtener las películas' });
    } else {
      res.json(results);
    }
  });
});

// Obtener todos los actores
app.get('/alimentacion', (req, res) => {
  const query = 'SELECT * FROM alimentacion';

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener los actores:', error);
      res.status(500).json({ error: 'Ocurrió un error al obtener los actores' });
    } else {
      res.json(results);
    }
  });
});
