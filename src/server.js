// src/server.js

const express = require('express');
const sequelize = require('./config/db.js'); // Cambia a ES Modules
const usuarioRoutes = require ('./routes/usuariosRoutes'); // Cambia a ES Modules

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware para analizar cuerpos JSON
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);


// Importar y usar las rutas de usuarios
const userRoutes = require('./routes/usuariosRoutes');
app.use('/api/usuario/', usuarioRoutes);

// Ruta principal de prueba
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, async () => {
    try {
      await sequelize.authenticate();
      console.log('Conexión establecida con la base de datos.');
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    } catch (error) {
      console.error('No se pudo conectar a la base de datos:', error);
    }
  });
// Exportar la aplicación para pruebas
module.exports = app;
