const bd = require("../utils/bd");
const { v4: uuid } = require("uuid");
const sha1 = require("sha1");
const create = async (obj) => {
  try {
    const { nombre, apellido, mail, telefono } = obj;
    const { usuario, password } = obj;

    const persona = { nombre, apellido, mail, telefono };
    const [idPersona] = await bd("personas").insert(persona); // [4]
    const user = {
      usuario,
      password: sha1(password),
      idPersona,
      confirmacionCorreo: uuid(),
    };

    const [idUsuario] = await bd("usuarios").insert(user);
    // envie un mail
    return idUsuario; // [[2]]
  } catch (e) {
    console.log(e);
  }
};
module.exports = { create };
