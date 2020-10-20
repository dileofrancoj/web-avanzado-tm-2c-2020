const express = require("express");
const router = express.Router();
const multer = require("multer");
const config = { dest: "./public/tmp" };
const upload = multer(config);
// .tmp
// req -> body, params, query, files, session

// Insertar un docente en la tabla
// Tenemos que almacenar la imagen del docente
// Tenemos que subir la imagen del docente a aws
const create = (req, res) => {
  console.log(req); // REQ.BODY, req.file
};

router.post("/create", upload.single("imagen"), create);

module.exports = router;
