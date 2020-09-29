const Joi = require("@hapi/joi");
const messageNombre = {
  "any.required": "El campo nombre es obligatorio",
  "string.min": "El campo debe tener al menos 2 caracteres",
  "string.max": "El campo nombre no debe superar 30 caracteres",
};

const schemas = {
  create: Joi.object().keys({
    nombre: Joi.string().min(2).max(30).required().messages(messageNombre),
    apellido: Joi.string().optional(),
    mail: Joi.string().email().required(),
    telefono: Joi.string().required(),
  }),

  modify: Joi.object().keys({
    id: Joi.number().integer().positive().required(),
    nombre: Joi.string().min(2).max(30).optional(),
    apellido: Joi.string().optional(),
    mail: Joi.string().email().optional(),
    telefono: Joi.string().optional(),
  }),
};

module.exports = { schemas };
