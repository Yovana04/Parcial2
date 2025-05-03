const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: String,
  precio: { type: Number, required: true },
  disponibilidad: { type: Boolean, default: true }
});

module.exports = mongoose.model('Producto', productoSchema);
