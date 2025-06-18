const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointment.controller');

// Rutas de citas
router.post('/', appointmentController.createAppointment);
router.get('/', appointmentController.getAllAppointments);
router.get('/:id', appointmentController.getAppointmentById);
router.put('/:id', appointmentController.updateAppointment);
router.delete('/:id', appointmentController.deleteAppointment);

// Rutas específicas para clientes y profesionales
router.get('/client/:clientId', appointmentController.getAppointmentsByClient);
router.get('/professional/:professionalId', appointmentController.getAppointmentsByProfessional);

// Ruta para obtener horarios disponibles
router.get('/available-slots/:professionalId/:date', appointmentController.getAvailableSlots);

module.exports = router; 