const Cliente = require('../models/cliente.model');
const Profesional = require('../models/profesional.model');

const registroCliente = async (req, res) => {
    try {
        const { email, password, nombre, apellido, telefono, ubicacion, metodoPago } = req.body;

        // Verificar si el usuario ya existe
        const usuarioExistente = await Cliente.findOne({ email });
        if (usuarioExistente) {
            return res.status(400).json({
                success: false,
                mensaje: 'El email ya está registrado'
            });
        }

        // Crear el nuevo cliente
        const cliente = await Cliente.create({
            email,
            password,
            nombre,
            apellido,
            telefono,
            ubicacion,
            metodoPago
        });

        res.status(201).json({
            success: true,
            mensaje: 'Cliente registrado exitosamente',
            data: cliente
        });

    } catch (error) {
        console.error('Error en registro de cliente:', error);
        res.status(500).json({
            success: false,
            mensaje: 'Error al crear el cliente',
            error: error.message
        });
    }
};

const registroProfesional = async (req, res) => {
    try {
        const {
            email, password, nombre, apellido, telefono, ubicacion,
            profesion, especialidades, experiencia, servicios, radio_cobertura
        } = req.body;

        // Verificar si el usuario ya existe
        const usuarioExistente = await Profesional.findOne({ email });
        if (usuarioExistente) {
            return res.status(400).json({
                success: false,
                mensaje: 'El email ya está registrado'
            });
        }

        // Crear el nuevo profesional
        const profesional = await Profesional.create({
            email,
            password,
            nombre,
            apellido,
            telefono,
            ubicacion,
            profesion,
            especialidades,
            experiencia,
            servicios,
            radio_cobertura,
            documentosVerificados: {
                dni: { verificado: false },
                matricula: { verificado: false },
                antecedentes: { verificado: false }
            }
        });

        res.status(201).json({
            success: true,
            mensaje: 'Profesional registrado exitosamente',
            data: profesional
        });

    } catch (error) {
        console.error('Error en registro de profesional:', error);
        res.status(500).json({
            success: false,
            mensaje: 'Error al crear el profesional',
            error: error.message
        });
    }
};

module.exports = {
    registroCliente,
    registroProfesional
}; 