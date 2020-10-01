const express = require("express");
const router = express.Router();

const getProfile = (req, res) => {
  console.log("EYYYYYY entre al perfil");
  console.log("El id del usuario autenticado es ", req.id);
  // traer todas las cursadas activas que pertenecen al usuario con id req.id
  res.json({ message: "Welcome to the jungle :O" });
};

router.get("/", getProfile);

module.exports = router;
