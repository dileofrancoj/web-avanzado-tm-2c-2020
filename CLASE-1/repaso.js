const resultado = verificarEdad(26);
console.log(resultado); // error undefined

/*
function verificarEdad(edad) {
    let resultado = false;
    if(edad >= 18) {
        resultado = true;
    } else {
        resultado = false
    }
}
*/

const verificarEdad = (edad = 0) => (resultado = true ? edad >= 18: false   edad === 0: "falta completar edad"); 

const verificarEdad = (edad) => {
  // retroan true si (?) edad >= 18 y si no (:) retorn  false
  return (resultado = true ? edad >= 18 : false);
};

const verificarEdad = (edad = 0) => (resultado = true ? edad >= 18 : false);
verificarEdad() // false

