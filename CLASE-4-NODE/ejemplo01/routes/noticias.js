const express = require("express");
const router = express.Router(); // PUT, POST, GET, DELETE
const { getAll, getSingle, create, del } = require("./../models/noticias");
// /noticias/all

router.get("/single/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  const data = getSingle(id);
  res.json(data);
});

router.get("/all", (req, res) => {
  const data = getAll();
  res.json(data);
  res.send();
});

router.post("/new", (req, res) => {
  const { body } = req;
  const data = create(body); // 4
  res.json({ id: data });
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  del(id);
});

module.exports = router;
