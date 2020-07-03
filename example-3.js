import {cleanConsole, createAll} from './data';
// import example1 from './example-1';

const companies = createAll();

cleanConsole(3, companies);
console.log('---- EXAMPLE 3 --- ', 'Put here your function');
// const comp = example1(companies);
let r = true;
const example3 = (c)=>{
  let booleaToReturn = false;
  c.forEach((element) => {
    const name = element.name.substr(0, 1);
    if (name === name.toUpperCase()) {
      element.users.forEach((e)=>{
        if (e.firstName !== e.firstName.toUpperCase() && e.lastName !== e.lastName.toUpperCase()) {
          booleaToReturn = false;
          return;
        }
        booleaToReturn = true;
      });
      booleaToReturn = true;
    } else {
      booleaToReturn = false;
      return;
    };
  });

  return booleaToReturn;
};

r = example3(companies);

console.log('this is the result of example 3', r);

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un booleano que valida que todos los nombres de las empresas y los atributos
// "firstName" y "lastName" de "users" están en mayúsculas.
// Debes probar la operación de esta función importando la función creada
// en el "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a boolean validating that all the names of the companies and the attributes "firstName"
// and "lastName" of "users" are capitalized. You must test the operation
// of this function by importing the function created for "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et renvoyant
// un booléen validant que tous les noms des "company" et les attributs "firstName"
// et "lastName" des "users" sont en majuscules. Vous devez tester le fonctionnement
// de cette fonction en important la fonction créée pour "example-1.js".
