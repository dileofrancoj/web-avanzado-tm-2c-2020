const alumnos = [
  { id: 1, nombre: "Mauricio" },
  { id: 2, nombre: "Pablo" },
  { id: 3, nombre: "Francisco" },
];
/*
for (let i = 0; i < alumnos.length; i++) {
  console.log(alumnos[i].nombre);
}
*/

const listar = (alumnos) => {
  alumnos.forEach((alumno) => console.log(alumno.nombre));
};

listar(alumnos);
