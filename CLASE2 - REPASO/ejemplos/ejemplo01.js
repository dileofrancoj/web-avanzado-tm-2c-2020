const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";
const get = (url) => {
  let resultado = [];
  const data = axios
    .get(url)
    .then((res) => (resultado = res.data.results))
    .catch((e) => console.log(e));
};

const getAsync = async (url) => {
  const data = await axios.get(url);
  return data;
};

const getCharacters = async () => {
  try {
    const info = await getAsync(URL);
    const personajes = info.data.results;

    /*
    personajes.forEach((personaje) => {
        nombresPersonajes.push(personaje.name)
    });
     */
    const nombresPersonajes = personajes.map((personaje) => personaje.name);
    console.log(nombresPersonajes);
  } catch (e) {
    console.log(e);
  }
};

const filterByGender = async (gender = "Female") => {
  const info = await getAsync(URL);
  const personajes = info.data.results;
  const characters = personajes.find(
    (personaje) => personaje.gender === gender
  );
  console.log(characters);
};

const getSingle = async (id) => {
  // Template string -> `${variable}/${variable}`
  //const character = await getAsync(URL,"/",id);
  const character = await getAsync(`${URL}/${id}`);
  const single = character.data;
  //console.log(single);
  // Destructuring
  /*
  const nombre = single.name;
  const status = single.status;
  const species = single.species;
   */
  const { name = "Valor x default", status, species } = single;
  const objetoNuevo = { name, status, species };
  console.log(single);
  console.log(`Nombre : ${name}, Estado : ${status}, Especies : ${species}`);
  console.log(objetoNuevo);
};
//getCharacters();
// filterByGender();
// spread, destruc, Object.assign, concat, GIT
getSingle(2);
