const model = require("./../models/docentes");
const { imgFile } = require("./../utils/fileHandler");
const createDocente = async (bodyObj, fileObj) => {
  const [idDocente] = await model.create(bodyObj);
  // imgFile
  const uuidImage = imgFile(fileObj);
  // INsertar la imagen del docente
};

module.exports = { createDocente };
