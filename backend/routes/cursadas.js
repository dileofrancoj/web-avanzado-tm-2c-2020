const express = require("express");
const router = express.Router();
const service = require("./../models/cursadas");
const { validateCreate } = require("./../middlewares/cursadas");
const create = (req, res) =>
  service
    .create(req.body)
    .then((r) => res.json(r))
    .catch((e) => res.status(500).json(e));

const all = (req, res) =>
  service
    .all()
    .then((r) => res.json(r))
    .catch((e) => res.status(500).json(e));
const single = (req, res) =>
  service
    .single(req.params.id)
    .then(([r]) => res.json(r))
    .catch((e) => res.status(500).json(e));
// GET localhost:3000/cursadas
// GET localhost:3000/cursadas/1
// POST localhost:3000/cursadsa
router.get("/all", all);
router.get("/single/:id", single);
router.post("/create", validateCreate, create);

module.exports = router;
