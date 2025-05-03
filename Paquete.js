const mongoose = require('mongoose');

const paqueteSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  destino: String,
  duracionDias: Number,
  precio: Number,
  incluyeHospedaje: Boolean
});

module.exports = mongoose.model('Paquete', paqueteSchema);
