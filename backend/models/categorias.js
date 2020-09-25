const bd = require("./../utils/bd");

const getAll = () =>
  bd("categorias").where({ habilitado: 1 }).select("id", "nombre");

// post, update
module.exports = { getAll };
