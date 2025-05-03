const express = require('express');
const router = express.Router();
const contactoController = require('../controllers/contactosController');

// Obtener todos los contactos
router.get('/', contactoController.obtenerContactos);

// Crear un nuevo contacto
router.post('/', contactoController.crearContacto);

// Eliminar un contacto por ID
router.delete('/:id', contactoController.eliminarContacto);

module.exports = router;
