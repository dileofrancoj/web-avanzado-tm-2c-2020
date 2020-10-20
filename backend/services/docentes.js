const { create, createImages } = require("./../models/docentes");
const { imgFile } = require("./../utils/fileHandler");

const createDocente = async (body, file) => {
  try {
    const [idDocente] = await create(body);
    const uid = imgFile(file);
    const obj = {
      idDocente,
      uid,
    };
    const [idImagen] = await createImages(obj); // [10]
    return idImagen;
  } catch (e) {
    throw e;
  }
  // insertar en la tabla docente_imagenes el obj
};

module.exports = { createDocente };
