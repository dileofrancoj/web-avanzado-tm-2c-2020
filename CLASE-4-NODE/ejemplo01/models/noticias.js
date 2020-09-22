const noticias = [
  {
    id: 1,
    titulo: "Nuevo cambio en GITHUB",
    descripcion: "Se reemplazará el nombre de master por main",
    autor: "franco di leo",
    habilitado: 1,
  },
  {
    id: 2,
    titulo: "Bootstrap sacará la versión 5",
    descripcion:
      "Nueva versión del framework con novedades de comunicación asincronica :O",
    autor: "Luciano",
    habilitado: 1,
  },
];

const create = (obj) => noticias.push(obj);

const getAll = () => noticias;
// select * from noticia where id = 1
const getSingle = (id) =>
  noticias.find((noticia) => noticia.id == id) || { message: " Not found" };

const del = (id, habilitado = 0) => {
  const index = noticias.findIndex((noticia) => noticia.id == id); // 1
  noticias[index]["habilitado"] = habilitado; // noticias[1][]
};

module.exports = { getAll, getSingle, create, del };
