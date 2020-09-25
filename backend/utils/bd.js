const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "pastelito1",
    database: "inscripciones",
    pool: { min: 1, max: 10 },
  },
});
// referencia de la conexión
module.exports = knex;
