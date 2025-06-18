const express = require('express');
const router = express.Router();

// Rutas para gestión de citas
router.post('/agendar', /* TODO: createAppointment */);
router.get('/cliente/:id', /* TODO: getClientAppointments */);
router.get('/profesional/:id', /* TODO: getProfessionalAppointments */);
router.put('/actualizar/:id', /* TODO: updateAppointment */);
router.delete('/cancelar/:id', /* TODO: cancelAppointment */);
router.get('/disponibilidad/:profesionalId', /* TODO: checkAvailability */);
router.put('/confirmar/:id', /* TODO: confirmAppointment */);

module.exports = router; 