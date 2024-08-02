// src/controllers/userController.js

const userService = require('../services/usuarioService');

// Obtener todos los usuarios
const getUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        console.log(users);
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo usuario
const createUser = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar un usuario
const updateUser = async (req, res) => {
    try {
        const updatedUser = await userService.updateUser(req.params.id, req.body);
        res.json(updatedUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Eliminar un usuario
const deleteUser = async (req, res) => {
    try {
        await userService.deleteUser(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


const getById = async (req, res) => {
    try{
       const user = await userService.getUserById(req.params.id);
        res.status(200).json(user);
    }catch (error) {
        res.status(401).json({ message: error.message});
    }
}

module.exports = {
    getUsers,
    getById,
    createUser,
    updateUser,
    deleteUser
    
};
