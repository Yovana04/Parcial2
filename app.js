const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());

const productosRoutes = require('./routes/productos');
const paquetesRoutes = require('./routes/paquetes');
const reservasRoutes = require('./routes/reservas');
const contactosRoutes = require('./routes/contactos');

app.use('/api/productos', productosRoutes);
app.use('/api/paquetes', paquetesRoutes);
app.use('/api/reservas', reservasRoutes);
app.use('/api/contactos', contactosRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(3000, () => {
      console.log('Servidor en puerto 3000');
    });
  })
  .catch(err => console.error(err));
