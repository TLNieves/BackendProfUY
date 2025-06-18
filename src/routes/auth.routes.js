const express = require('express');
const router = express.Router();
const { 
    registroCliente, 
    registroProfesional,
    login,
    forgotPassword,
    resetPassword
} = require('../controllers/auth.controller');

// Rutas para registro
router.post('/registro/cliente', registroCliente);
router.post('/registro/profesional', registroProfesional);

// Rutas de autenticación
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

module.exports = router; 