const express = require('express');
const router = express.Router();
const { registroCliente, registroProfesional } = require('../controllers/auth.controller');

// Rutas para registro
router.post('/registro/cliente', registroCliente);
router.post('/registro/profesional', registroProfesional);

module.exports = router; 