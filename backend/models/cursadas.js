const bd = require("./../utils/bd");
const T = require("./../utils/schemas");
// req.body
const create = (obj) => bd("cursadas").insert(obj);

// FRONT -> ANGULAR / REACT -> S3
// BACK ->

// ALL {cursadas.habilitado : true}
// SINGLE {cursadas.habilitado : true} && {cursadas.id : 1}

const get = (conditions = true) =>
  bd(`${T.CURSADAS} as C`)
    .join(`${T.CURSOS} as CUR`, "C.cursoId", "CUR.id")
    .join("modalidades", "C.modalidadId", "modalidades.id")
    .join("docentes", "C.docenteId", "docentes.id")
    .join("categorias", "CUR.idCategoria", "categorias.id")
    .where({ "C.habilitado": true, ...conditions })
    .select(
      "C.fecha_inicio",
      "C.fecha_fin",
      "C.horario",
      "categorias.nombre as nombreCategoria",
      "modalidades.nombre as nombreModalidad",
      "docentes.nombre as nombreDocente",
      "docentes.apellido as apellidoDocente",
      "CUR.nombre as nombreCurso"
    );

const single = (id) => get({ "C.id": id });
const all = () => get();
module.exports = { create, all, single };
