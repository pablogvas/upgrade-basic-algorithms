// Iteración 1 //

var myFavoriteHero = "Hulk";
var x = 50;
var h = 5;
var y = 10;
var z = h + y;

// Iteración 2 //

const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;

var firstName = 'Jon'; 
var lastName = 'Snow'; 
var age = 24; 
console.log("Soy " + firstName + " " + lastName + " tengo  " + age + " años y me gustan los lobos.")

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log(toy1.price + toy2.price + " Es el precio de ambos juguetes");

let globalBasePrice = 25000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
car1.finalPrice = globalBasePrice + car1.basePrice;
car2.finalPrice = globalBasePrice + car2.basePrice;
console.log(car1.finalPrice + " Es el precio final de car1");
console.log(car2.finalPrice + " Es el precio de car2");


// Iteración 3 // 

let a = 10;
let b = 5;
let c = 2;
let d = 15;
let e = 9;

var y = 10;
var z = 5;

console.log("El resultado de 10 por 5 es iagual a " + a * b);
console.log("El resultado de 10 entre 2 es igual a " + a / c);
console.log("El resto de dividir 15 por 9 es igual a " + d % e);

console.log(y + z);
console.log(y * z);

// Iteración 5 //

const number1 = 10;
const number2 = 20;
const number3 = 2;

if (number2/number1 == 2) {
    console.log("number2 dividido entre number1 es igual a 2");
}

if (number1!=number2) {
    console.log("number1 es estrictamente distinto a number2");
}

if (number3!=number1) {
    console.log("number3 es distinto number1");
}

if (number3*5 == number1) {
    console.log("number3 por 5 es igual a number1");
}

if (number3*5 == number1 && number1*2 == number2) {
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2/2 == number1 || number1/5 == number3) {
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}
