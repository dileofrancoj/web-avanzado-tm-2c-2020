const express = require("express");
const router = express.Router();
const service = require("./../models/categorias");

const all = (req, res) =>
  service
    .getAll()
    .then((response) => res.json(response))
    .catch((e) => res.status(500).json(e));

router.get("/all", all);
module.exports = router;
