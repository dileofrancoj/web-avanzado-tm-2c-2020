const fs = require("fs");
const { v4: uuid } = require("uuid");
const allowImageExtension = ["png", "jpeg"];
const allowPDFExtension = ["pdf"];

/*
const saveFile = ({ mimetype, path, size }, destFolder = "./public/images") => {  
  try {    
    const  extension = mimetype.split("/") [1];    
    if(allowImageExtension.includes(extension)){        
      const uid = uuid();        
      const fileName = `${uid}.${extension}`;
      const fileNameOut = `${destFolder}/${fileName}`;
      fs.createReadStream(path).pipe(fs.createWriteStream(fileNameOut));        
      fs.unlink(path, (e) => {          
        if (e) throw e;        });        
      return uid;    
    }   
   } catch (e) {     
      throw e;    
    }};
*/

const saveFile = (
  { mimetype, path, size },
  allowExtension,
  destFolder = "./public/images"
) => {
  try {
    const [type, extension] = mimetype.split("/"); // [image, png]
    if (!allowExtension.includes(extension)) throw "Formato no permitido";
    const uid = uuid();
    const fileName = `${uid}.${extension}`;
    const fileNameOut = `${destFolder}/${fileName}`;
    fs.createReadStream(path).pipe(fs.createWriteStream(fileNameOut));
    fs.unlink(path, (e) => {
      if (e) throw "No se pudo borrar el archivo temporal";
    });
    return uid;
  } catch (e) {
    throw e;
  }
};

const imgFile = (file) => {
  return saveFile(file, allowImageExtension);
};
const pdfFile = () => {
  saveFile(file, allowPDFExtension);
};

module.exports = { imgFile, pdfFile };
