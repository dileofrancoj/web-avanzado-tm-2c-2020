const express = require("express");
const router = express.Router();
const model = require("./../models/personas");

const all = async (req, res) =>
  model
    .get({ conditions: {}, fields: {} })
    .then((response) => res.json(response))
    .catch((e) => res.sendStatus(500));

const single = (req, res) =>
  model
    .get({
      conditions: { _id: `ObjectId(${req.params.id})` },
      fields: { nombre: true, apellido: true },
    })
    .then(([response]) => res.json(response))
    .catch((e) => res.sendStatus(500));

const create = (req, res) => {
  model
    .create(req.body)
    .then(({ insertId }) => res.json(insertId))
    .catch((e) => res.sendStatus(500));
};

router.get("/all", all);
router.get("/single/:id", single);
router.post("/create", create);

module.exports = router;
