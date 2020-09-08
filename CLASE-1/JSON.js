const name = "franco";
const edad = 26;
const lenguajes = ["PHP", "JAVASCRIPT", "TYPESCRIPT", "PYTHON"];

// JSON Javascript Object notation (literal object) Intercambio de información

// francoDiLeo.lenguajes[0].nombre

const francoDiLeo = {
  nombre: "Franco",
  apellido: "Di Leo",
  edad: 26,
  lenguajes: [
    {
      nombre: "Javascript",
      experiencia: 5,
    },
    {
      nombre: "Python",
      experiencia: 3,
    },
  ],
  mascotas: [
    {
      nombre: "amazonas",
      tipo: "perro 🦮",
      edad: "11 meses",
    },
    {
      nombre: "Cruela🐕",
      edad: "19 años",
    },
  ],
  educacion: "Ing mecanico",
};

const francoCostaMagna = {
  nombre: "Franco",
  edad: 26,
  instrumentos: ["Guitarra"],
  generos: ["Rock", "Clasico"],
  deportes: [
    {
      deporte: "Futbol",
      posicion: "Defensor",
      rustico: false,
    },
    {
      deporte: "Tenis",
      favoritos: [
        { nombre: "Federer", caracteristica: "Elegancia" },
        { nombre: "Nadal", caracteristica: "Mentalidad", altura: 1.86 },
      ],
    },
  ],
};
// francoCostaMagna.deportes[1].favoritos[0].caracteristica

const ailenRoda = {
  nombre: "Ailen",
  emoji: "🤓",
  fechaNacimiento: "1994-08-05",
  signo: "Leo",
  lenguajes: [
    {
      nombre: "Javascript",
      temas: ["Variables", "Funciones", "No se me ocurre otro"],
    },
  ],
  estudios: ["Lic en turismo 🛳", "programación"],
};
