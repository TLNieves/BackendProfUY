const mongoose = require('mongoose');
const { BaseUser, baseSchema } = require('./base.user.model');

const profesionalSchema = new mongoose.Schema({
    // Campos específicos de profesionales
    profesion: {
        type: String,
        required: [true, 'La profesión es obligatoria']
    },
    especialidades: [{
        type: String,
        required: true
    }],
    experiencia: {
        type: Number, // años de experiencia
        required: true
    },
    calificacion: {
        promedio: {
            type: Number,
            default: 0,
            min: 0,
            max: 5
        },
        totalReseñas: {
            type: Number,
            default: 0
        }
    },
    disponibilidad: {
        horarios: [{
            dia: {
                type: String,
                enum: ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
            },
            horaInicio: String,
            horaFin: String
        }],
        estado: {
            type: String,
            enum: ['disponible', 'ocupado', 'no_disponible'],
            default: 'disponible'
        }
    },
    servicios: [{
        nombre: String,
        descripcion: String,
        precio: Number,
        duracionEstimada: Number // en minutos
    }],
    documentosVerificados: {
        dni: {
            numero: String,
            verificado: Boolean
        },
        matricula: {
            numero: String,
            verificado: Boolean
        },
        antecedentes: {
            verificado: Boolean,
            fechaVerificacion: Date
        }
    },
    radio_cobertura: {
        type: Number, // Radio en kilómetros
        default: 5
    }
});

// Índice para búsqueda por calificación
profesionalSchema.index({ 'calificacion.promedio': -1 });

const Profesional = BaseUser.discriminator('Profesional', profesionalSchema);

module.exports = Profesional; 