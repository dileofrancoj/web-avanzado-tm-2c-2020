const bd = require("./../utils/bd");
const T = require("./../utils/schemas");
const get = (id) =>
  bd(`${T.PERSONAS}`)
    .join(`${T.USUARIOS}`, "personas.id", "usuarios.idPersona")
    .where("usuarios.id", id)
    .andWhere("usuarios.habilitado", true)
    .select("usuario", "nombre", "apellido", "mail", "telefono");

module.exports = { get };
