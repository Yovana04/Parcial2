const express = require('express');
const router = express.Router();
const controller = require('../controllers/paquetesController');

router.get('/', controller.obtenerPaquetes);
router.post('/', controller.crearPaquete);
router.put('/:id', controller.actualizarPaquete);
router.delete('/:id', controller.eliminarPaquete);

module.exports = router;
