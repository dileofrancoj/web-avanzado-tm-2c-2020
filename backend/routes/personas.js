const express = require("express");
const router = express.Router();
const service = require("./../models/personas");

const all = (req, res) =>
  service
    .getAll()
    .then((response) => res.json(response))
    .catch((e) => res.status(500).json(e));

const single = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await service.getSingle(id);
    res.json(result);
  } catch (e) {
    res.status(500).json(e);
  }
};

const create = (req, res) =>
  /* 
  const { nombre, apellido, mail, telefono } = req.body;
  const obj = { nombre, apellido, mail, telefono };


  const obj = ({ nombre, apellido, mail, telefono } = req.body);
  const result = await service.create(obj);
  */
  // {nombre,apellido,mail,telefono, cuit}
  service
    // req.body -> contiene un objeto con toda la información del form
    .create(req.body)
    .then((response) => res.json(response))
    .catch((e) => res.json(e));

const modify = (req, res) =>
  service
    .modify(req.params.id, req.body)
    .then((response) => res.json(response))
    .catch((error) => res.status(500).json(error));

router.get("/single/:id", single);
router.post("/create", create);
router.put("/modify/:id", modify);
router.get("/all", all);

module.exports = router;
