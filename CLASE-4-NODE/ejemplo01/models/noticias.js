const noticias = [
  {
    id: 1,
    titulo: "Nuevo cambio en GITHUB",
    descripcion: "Se reemplazará el nombre de master por main",
    autor: "franco di leo",
  },
  {
    id: 2,
    titulo: "Bootstrap sacará la versión 5",
    descripcion:
      "Nueva versión del framework con novedades de comunicación asincronica :O",
    autor: "Luciano",
  },
];

const getAll = () => noticias;
// select * from noticia where id = 1
const getSingle = (id) => noticias.find((noticia) => noticia.id === id);
module.exports = { getAll, getSingle };
