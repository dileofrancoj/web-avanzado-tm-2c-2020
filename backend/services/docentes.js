const { create, createImages } = require("./../models/docentes");
const { imgFile } = require("./../utils/fileHandler");
/* 
const createDocente = async (body,files) => {
  try {
    const [idDocente] = await create(body);
    // [Promise, Promise, Promise]
    const results = files.map(file => {
      const uid = imgFile(files);
      const obj = {
        idDocente,
        uid,
      };
      createImages(obj); // [10]
    })
    return await Promise.all(results)
    return returnImg
  } catch (e){

  }
}
*/

// while, for, do while, forEach
const createDocente = async (body, files) => {
  try {
    const [idDocente] = await create(body);
    const results = files.map((file) => {
      const uid = imgFile(files);
      const obj = {
        idDocente,
        uid,
      };
      const [idImagen] = createImages(obj); // [10]
    });
    return idImagen;
  } catch (e) {
    throw e;
  }
  // insertar en la tabla docente_imagenes el obj
};

module.exports = { createDocente };
