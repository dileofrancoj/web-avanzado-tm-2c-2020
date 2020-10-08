const express = require("express");
const router = express.Router();
const service = require("./../models/users");
const getProfile = (req, res) =>
  service
    .get(req.id)
    .then((response) => res.json(response))
    .catch((e) => res.status(500).json(e));

router.get("/", getProfile);

module.exports = router;
