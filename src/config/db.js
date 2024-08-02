// src/config/db.js

const { Sequelize , DataTypes } = require('sequelize') ;

const sequelize = new Sequelize('test-db', 'myuser', 'mypassword', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432, // Asegúrate de que el puerto coincida con el mapeo en Docker
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos exitosa.');
    })
    .catch(err => {
        console.error('Error al conectar a la base de datos:', err);
    });

module.exports = sequelize;

