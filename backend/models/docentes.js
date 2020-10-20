const bd = require("./../utils/bd");

const create = (obj) => bd("docentes").insert(obj);
const createImages = (obj) => bd("docente_imagenes").insert(obj);

module.exports = { create, createImages };
