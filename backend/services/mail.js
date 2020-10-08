// npm i nodemailer
const nodemailer = require("nodemailer");

const send = async () => {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.CORREO_SERVICE,
      auth: {
        user: process.env.CORREO_USER,
        pass: process.env.CORREO_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  } catch (e) {
    console.log(e);
  }
};
