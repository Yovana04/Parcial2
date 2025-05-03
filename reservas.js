const express = require('express');
const router = express.Router();
const controller = require('../controllers/reservasController');

router.get('/', controller.obtenerReservas);
router.post('/', controller.crearReserva);
router.put('/:id', controller.actualizarReserva);
router.delete('/:id', controller.eliminarReserva);

module.exports = router;
