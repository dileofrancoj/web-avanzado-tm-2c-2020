const fs = require("fs");
const { v4: uuid } = require("uuid");
const allowImageExtension = ["png", "jpeg"];

const saveFile = ({ mimetype, path, size }, destFolder = "./public/images") => {
  try {
    const [type, extension] = mimetype.split("/");
    const uid = uuid();
    const fileName = `${uid}.${extension}`;
    const fileNameOut = `${destFolder}/${fileName}`;
    // Stream const data = await fs.createReadStream(path) -> read.on('data', chunk) => {}
    // Stream -> const fileOk = await fs.writeStream(path) -> write.on('data', chunk)
    fs.createReadStream(path).pipe(fs.createWriteStream(fileNameOut));
    // Una vez creada la imagen borramos el archivo temporal :D
    fs.unlink(path, (e) => {
      if (e) throw e;
    });
    return uid;
  } catch (e) {
    throw e;
  }
};

const imgFile = (file) => {
  //allowImageExtension.includes(file.mimetype.split('/')[1])
  saveFile(file);
};
const pdfFile = () => {};

module.exports = { imgFile, pdfFile };
