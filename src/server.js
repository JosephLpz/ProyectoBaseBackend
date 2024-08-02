// src/server.js

const express = require('express');
const sequelize = require('./config/db.js'); // Cambia a ES Modules
const usuarioRoutes = require ('./routes/usuariosRoutes.js'); // Cambia a ES Modules

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware para analizar cuerpos JSON
app.use(express.json());

// Importar y usar las rutas de usuarios
const userRoutes = require('./routes/usuariosRoutes.js');
app.use('/api/usuario/', usuarioRoutes);

// Ruta principal de prueba
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Iniciar el servidor
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Exportar la aplicación para pruebas
module.exports = app;
