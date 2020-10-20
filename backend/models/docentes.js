const bd = require("./../utils/bd");

const create = (obj) => bd("docentes").insert(obj);

module.exports = { create };
