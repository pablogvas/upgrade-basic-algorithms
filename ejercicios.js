// Iteración 1 //

var myFavoriteHero = "Hulk";
var x = 50;
var h = 5;
var y = 10;
var z = h + y;

// Iteración 2 //

const character = {name: 'Jack Sparrow', age: 10};

age = 25;
firstName = 'Jon'; 
lastName = 'Snow'; 
age = 24;
console.log("Soy" + " " + firstName + " " + lastName + ", tengo " + age + " años y me gustan los lobos.");

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
const precioToy1 = 19;
const precioToy2 = 29;
const precioTotal = precioToy1 + precioToy2;
console.log("El precio de ambos juguetes es de" + " " + precioTotal)

let globalBasePrice = 25000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;

console.log(car1.finalPrice);
console.log(car2.finalPrice);
