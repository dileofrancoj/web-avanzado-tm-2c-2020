const express = require("express");
const router = express.Router();
const multer = require("multer");
const config = { dest: "./public/tmp" };
const upload = multer(config);
const service = require("./../services/docentes");
// .tmp
// req -> body, params, query, files, session

// Insertar un docente en la tabla
// Tenemos que almacenar la imagen del docente
// Tenemos que subir la imagen del docente a aws
const create = (req, res) => {
  try {
    const result = service.createDocente(req.body, req.file);
    res.json({ result });
  } catch (e) {
    res.sendStatus(500);
  }
};

router.post("/create", upload.array("imagen"), create);

module.exports = router;
