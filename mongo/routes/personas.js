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
    .findById(req.params.id)
    .then(([response]) => res.json(response))
    .catch((e) => res.sendStatus(500));

const last = (req, res) =>
  model
    .last()
    .then((response) => res.json(response))
    .catch((e) => res.sendStatus(500));

const test = (req, res) =>
  model
    .findByDates(parseInt(req.query.start), parseInt(req.query.end))
    .then((response) => res.json(response))
    .catch((e) => res.sendStatus(500));
/*
const single = (req, res) =>
  model
    .get({
      conditions: { _id: `ObjectId(${req.params.id})` },
      fields: { nombre: true, apellido: true },
    })
    .then(([response]) => res.json(response))
    .catch((e) => res.sendStatus(500));
*/
const create = (req, res) => {
  model
    .create(req.body)
    .then(({ insertId }) => res.json(insertId))
    .catch((e) => res.sendStatus(500));
};
router.get("/test", test);

router.get("/last", last);
router.get("/all", all);
router.get("/single/:id", single);
router.post("/create", create);
module.exports = router;
