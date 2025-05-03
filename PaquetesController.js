const Paquete = require('../models/Paquete');

exports.obtenerPaquetes = async (req, res) => {
  const paquetes = await Paquete.find();
  res.json(paquetes);
};

exports.crearPaquete = async (req, res) => {
  const paquete = new Paquete(req.body);
  await paquete.save();
  res.json(paquete);
};

exports.actualizarPaquete = async (req, res) => {
  const paquete = await Paquete.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(paquete);
};

exports.eliminarPaquete = async (req, res) => {
  await Paquete.findByIdAndDelete(req.params.id);
  res.json({ mensaje: 'Paquete eliminado' });
};
