let balance = 120;
let anotherBalance = new Number(120);

console.log(balance);
console.log(anotherBalance.valueOf()); //valueOf -> 120 // [Number: 120]


console.log(typeof balance);  //number

//boolean
let isActive = true
let isReallyActive = new Boolean(true); //not recommended

// null & undefined
let firstName;
console.log(firstName); //undefined

let newName = null;
console.log(newName); //null

//string
let myString = "hello";
let myStringOne = 'Hola';

let greetMsg = `Hello ${myString} !`;
let demoOne =   `Value is ${2 * 2}`;

let sym1 = Symbol("hitesh");
let sym2 = Symbol();

console.log(sym1)

//Explore MDN docs on Symbol.