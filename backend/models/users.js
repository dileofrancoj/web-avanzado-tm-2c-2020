const bd = require("./../utils/bd");
const T = require("./../utils/schemas");
const get = (id) =>
  bd(`${T.PERSONAS}`)
    .join(`${T.USUARIOS}`, "personas.id", "usuarios.idPersona")
    .where("usuarios.id", id)
    .andWhere("usuarios.habilitado", true)
    .select("usuario", "nombre", "apellido", "mail", "telefono");

// update usuarios set {obj} where id = id or confirmacionCorreo = {}

const update = ({ id = false, obj, confirmacionCorreo = {} }) =>
  bd("usuarios").where(id).orWhere({ confirmacionCorreo }).update(obj);

// update({obj : {habilitado : true}, confirmacionCorreo : req.params})

// update({id :1, obj : {usuario : 'franco2'}})
module.exports = { get, update };
