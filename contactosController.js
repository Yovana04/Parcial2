const Contacto = require('../models/Contacto');

exports.obtenerContactos = async (req, res) => {
  const contactos = await Contacto.find();
  res.json(contactos);
};

exports.crearContacto = async (req, res) => {
  const contacto = new Contacto(req.body);
  await contacto.save();
  res.json(contacto);
};

exports.eliminarContacto = async (req, res) => {
  await Contacto.findByIdAndDelete(req.params.id);
  res.json({ mensaje: 'Contacto eliminado' });
};
