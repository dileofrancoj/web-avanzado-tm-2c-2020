const express = require("express");
const router = express.Router(); // PUT, POST, GET, DELETE
const { getAll, getSingle } = require("./../models/noticias");
// /noticias/all
router.get("/all", (req, res) => {
  // req -> cabeceras, formulario, params, querystring,sesiones
  // res -> json, send, render, end
  const noticias = getAll();
  res.json(noticias);
});

module.exports = router;
