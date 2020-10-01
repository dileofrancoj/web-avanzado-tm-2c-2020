const express = require("express");
const router = express.Router();
const fs = require("fs"); //file system
const jwt = require("jsonwebtoken");
const sha1 = require("sha1");
const publicKey = fs.readFileSync("./../keys/public.pem");
const service = require("./../models/auth");
// npmjs.com
const signOptions = { algorithm: "RS256", expiresIn: "2h" };

const createToken = () => {};

const auth = async (req, res) => {
  try {
    const { usuario, password } = req.body;
    const user = await service.authenticate(usuario, password); // [], [{}]
    if (!user) res.sendStatus(401);
    // user.habilitado -> condición por omisión
    if (!user.habilitado)
      res.status(401).json({ message: "Confirmá tu cuenta par seguir :O 🎤" });
    if (user.habilitado) {
      // Creo el token :D :O -_- ;)
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

router.post("/", auth);

module.exports = router;
