import {createAll, cleanConsole} from './data';
const companies = createAll();


cleanConsole(1, companies);
console.log('---- EXAMPLE 1 --- ', 'Put here your function');
console.log('this is my companies', companies);

const example1 = (comp) => {
  comp.forEach((element) => {
    element.name = element.name.charAt(0).toUpperCase() + element.name.slice(1);
    element.users.forEach((e)=>{
      if (e.firstName === undefined) e.firstName ='';
      if (e.lastName === undefined) e.lastName ='';
      e.firstName = e.firstName.charAt(0).toUpperCase() + e.firstName.slice(1);
      e.lastName = e.lastName.charAt(0).toUpperCase() + e.lastName.slice(1);
    });

    element.users=element.users.sort((a, b)=>{
      if (a.firstName > b.firstName) {
        return 1;
      }
      if (a.firstName < b.firstName) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  });

  comp=comp.sort((b, a)=>{
    if (a.usersLength > b.usersLength) {
      return 1;
    }
    if (a.usersLength < b.usersLength) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  return comp;
};
export default example1;

example1(companies);
console.log('this is my companies refactor', companies);
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et remplaçant
// toutes les valeurs "undefined" dans les "users" par un string vide.
// Le nom de chaque "company" doit avoir une majuscule au début ainsi que
// le nom et le prénom de chaque "user".
// Les "companies" doivent être triées par leur nombre de "user" (ordre décroissant)
// et les "users" de chaque "company" doivent être classés par ordre alphabétique.
