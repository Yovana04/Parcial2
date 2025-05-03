const Producto = require('../models/Producto');

exports.obtenerProductos = async (req, res) => {
  const productos = await Producto.find();
  res.json(productos);
};

exports.crearProducto = async (req, res) => {
  const producto = new Producto(req.body);
  await producto.save();
  res.json(producto);
};

exports.actualizarProducto = async (req, res) => {
  const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(producto);
};

exports.eliminarProducto = async (req, res) => {
  await Producto.findByIdAndDelete(req.params.id);
  res.json({ mensaje: 'Producto eliminado' });
};
