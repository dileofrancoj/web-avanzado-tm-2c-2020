const bd = require("./../utils/bd");
const bdService = require("../utils/dbService");
const getAll = () => bd("personas").select("*");
const getSingle = (id) =>
  bd("personas")
    .where({ id, habilitado: true })
    .select("id", "nombre", "apellido", "mail", "telefono");

// {nombre : 'franco',apellido,mail,telefono}
// insert return PK del elemento creado
const modify = (id, obj) => bd("personas").where({ id }).update(obj);
// Row data
module.exports = { getAll, getSingle, modify };
