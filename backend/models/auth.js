const bd = require("./../utils/bd");

const authenticate = (usuario, password) =>
  bd("usuarios")
    .where({ usuario, password })
    .select("id", "usuario", "habilitado");
// return []
// return [{}]
module.exports = { authenticate };
