const mongoose = require('mongoose');
const { BaseUser, baseSchema } = require('./base.user.model');

const clienteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    telefono: {
        type: String
    },
    direccion: {
        calle: String,
        numero: String,
        ciudad: String,
        codigoPostal: String
    },
    historialCitas: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cita'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    historialServicios: [{
        servicio: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Servicio'
        },
        fecha: Date,
        estado: {
            type: String,
            enum: ['pendiente', 'en_proceso', 'completado', 'cancelado']
        }
    }],
    direccionesFavoritas: [{
        nombre: String,
        ubicacion: {
            type: {
                type: String,
                default: 'Point'
            },
            coordinates: [Number]
        }
    }],
    metodoPago: [{
        tipo: {
            type: String,
            enum: ['tarjeta', 'efectivo']
        },
        detalles: mongoose.Schema.Types.Mixed
    }]
});

const Cliente = BaseUser.discriminator('Cliente', clienteSchema);

module.exports = Cliente; 