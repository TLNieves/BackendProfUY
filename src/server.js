// backend/src/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Importar modelos
require('./models/base.user.model');  // Primero importamos el modelo base
require('./models/cliente.model');    // Luego los modelos que heredan
require('./models/profesional.model');

// Importar rutas
const authRoutes = require('./routes/auth.routes');
const profileRoutes = require('./routes/profile.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error de MongoDB:', err));

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.send('¡API Profesiones UY funcionando!');
});

// Rutas de la API
app.use('/api/auth', authRoutes);
app.use('/api/profiles', profileRoutes);

// Manejo de errores global
app.use((err, req, res, next) => {
    console.error('❌ Error:', err.stack);
    res.status(500).json({
        success: false,
        mensaje: 'Error interno del servidor',
        error: err.message
    });
});

// Puerto y arranque del servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server en puerto ${PORT}`));
