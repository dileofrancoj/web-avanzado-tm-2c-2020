const bd = require("./../utils/bd");

// categorias (id, nombre)
// 1 Programador web
// cursos (id, idCategoria nombre)
// 2 , 1 , 'programador web avanzado'

// cursos/1
// SELECT * from cursos JOIN categorias on cursos.idCategoria = categorias.id where cursos.id = ? and cursos.habilitado = 1
const getSingle = (id) =>
  bd("cursos")
    .join("categorias", "cursos.idCategoria", "categorias.id")
    .where("cursos.id", id)
    .select("cursos.nombre", "categorias.nombre as nombreCategoria");

const getAll = () =>
  bd("cursos")
    .join("categorias", "cursos.idCategoria", "categorias.id")
    .select("cursos.nombre", "categorias.nombre as nombreCategoria");

// {
// "nombre" : "nombre curso",
// "nombreCategoria" : "nombre de la categoria"
//}
module.exports = { getSingle, getAll };
