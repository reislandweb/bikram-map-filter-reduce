console.log("Bikrams");

console.log("** MAP **");
console.log("Ejercicio 1");

const number = [4,5,6,7,8,9,10];
function elevados () {
    let numberElevado = numberElevado => numberElevado ** numberElevado;
    let resultado1 = number.map(numberElevado);
    return resultado1;
}
console.log(elevados());

console.log("Ejercicio 2");

const foodList =  ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
const arr = ['Italia', 'Japón', 'Valencia', 'carne'];

let resultado2 = foodList.map((list, i) => {
    console.log(list);
    console.log(i);
    
    if(i === arr.length-1) {
        return `Aunque no como ${arr[i]}, el ${list} es sabroso`
    }
    else {
        return `Como soy de ${arr[i]}, amo comer ${list}`
    }
})
console.log(resultado2);

console.log("Ejercicio 3");

const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
];

// Resultado esperado
/*
  [
    'Pepe es The Boss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Ana es becaria y le gusta nadar y bailar',
    'Carlos es secretario y le gusta futbol y queso'
  ]
*/
let resultado3 = staff.map ((persona, i) => {
    //console.log(persona);
    //console.log(i);
    let frase = `${persona.name} es ${persona.role}, y le gusta ${persona.hobbies[0]} y ${persona.hobbies[1]}`;
    return frase;
})
console.log(resultado3);

console.log("** FILTER **");
console.log("Ejercicio 1");

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let resultado4 = numbers2.filter((numbers) => numbers % 2 === 1);
console.log(resultado4);

console.log("Ejercicio 2");

const foodList2 =[
{
  name: 'Tempeh',
  isVeggie: true
},
{
  name: 'Cheesbacon burguer',
  isVeggie: false
},
{
  name: 'Tofu burguer',
  isVeggie: true
},
{
  name: 'Entrecot',
  isVeggie: false
}];

let resultado5 = foodList2.filter((food) => food.isVeggie === true ).map ((foods) => {
    return  `Que rico ${foods.name}, me voy a comer!`;
})
console.log(resultado5);

console.log("Ejercicio 3");


const inventory = [
  { name: 'Mobile phone', price: 199 },
  { name: 'TV Samsung', price: 459 },
  { name: 'Viaje a Cancún', price: 600 },
  { name: 'Mascarilla', price: 1 }
];

/*['TV Samsung', 'Viaje a Cancún' ] */

let resultado6 = inventory.filter((inventor) => inventor.price > 300 ).map((inventor) => {
    return `${inventor.name}`;
})
console.log(resultado6);

console.log("** REDUCE **");
console.log("Ejercicio 1");

 let numeros = [39, 2, 4, 25, 62];

let resul7 = numeros.reduce((acc, current) => acc * current);
console.log(resul7);

console.log("Ejercicio 2");

const sentenceElements = [
  'Me',
  'llamo',
  'Lucas',
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'

let resul8 = sentenceElements.reduce((acc,current) =>`${acc} ${current}`);
console.log(resul8);

console.log("Ejercicio 3");

const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];
// Resultado --> 60

let result9 = books.filter (book => book.category === 'code')
.map(maps => maps.price)
.reduce((acc, current) => acc + current)
console.log(result9);