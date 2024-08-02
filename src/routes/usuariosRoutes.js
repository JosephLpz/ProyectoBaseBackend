const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuariosController.js'); 

router.get('/', usuarioController.getUsers);
router.get('/:id', usuarioController.getById);
router.post('/', usuarioController.createUser);
router.put('/:id', usuarioController.updateUser);
router.delete('/:id', usuarioController.deleteUser);

module.exports = router;
