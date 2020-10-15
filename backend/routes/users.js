var express = require("express");
var router = express.Router();
const service = require("./../models/users");
const confirm = (req, res) =>
  service
    .update({ obj: { habilitado: true }, confirmacionCorreo: req.params.uuid })
    .then((response) => res.json(response))
    .catch((e) => res.status(500).json(e));

router.get("/confirm/:uuid", confirm);
module.exports = router;
