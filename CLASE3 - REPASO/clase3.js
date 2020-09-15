const peluqueros = [
  { id: 1, sueldo: 20000, nombre: "Pepo" },
  { id: 2, sueldo: 25000, nombre: "Juan" },
  { id: 3, sueldo: 20000, nombre: "Roberto" },
  { id: 4, sueldo: 40000, nombre: "Francisco" },
];

const getTotal = (movimientos) => {
  const total = movimientos
    .map((movimiento) => movimiento.sueldo)
    .reduce((a, b) => a + b, 0);

  console.log(total);
};

const del = (id, array) => {
  // tensorflow.js
  // buscar indice del elemento id
  const index = array.findIndex((a) => a.id === id); // retorna el indice que matchea con la condicion
  console.log(`El indice del vector es : ${index}`);
  // [0,1,3]
  array.splice(index, 1);
  console.log(array);
};

const del2 = (id, array) => array.filter((element) => element.id !== id);

// del(3, peluqueros);
const elemento = del2(3, peluqueros);
console.log(elemento);
//getTotal(peluqueros);
// console.log([1, 2, 3, 4].reduce((a, b) => a + b, 0));

/*

const nums = [1, 2, 3, 4, 5, 6];
const news = nums.map((num) => (num % 2 == 0 ? "par" : "impar 🤓"));
console.log(news);
*/
const obj1 = {
  name: "franco",
  lastname: "di leo",
  age: 26,
};

const obj2 = {
  pets: [{ name: "amazonas" }],
};
const obj3 = {
  country: "argentina",
  name: "Fran",
};
// ... spread -> propagar
Object.assign(obj2, { jobs: ["PROFE"] });
obj2["interes"] = ["Tecnologia"];
const objFinal = {
  ...obj2,
  ...obj3,
  ...obj1,
};
console.log(objFinal);

// Destructuring
const formulario = {
  name: "fran",
  lastname: "di leo",
  mail: "dileo.francoj@gmail.com",
};

// node

const { name, lastname, mail } = formulario;

const comidas = [
  "Rabas",
  "Asado",
  "Flan",
  "Lomito",
  "Salpicón",
  "Lemon Pie",
  "LPCC",
];
const [comida1, comida2, comida3, ...restantes] = comidas;
console.log(comida1);
console.log(comida2);
console.log(restantes);

const numeros = [1, 2, 3, 4, 5, 6, 67];
console.log(Math.max(...numeros));
