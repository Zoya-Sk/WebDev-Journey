//OPERATORS:

let score = 102;
let bonus = 25;
let totalScore = score + bonus;

// BINARY OPERATORS:

let addition = 2 + 4;
let subtract = 9 - 3;
let multiple = 4 * 5;
let division = 8 / 2;
let remainder = 9 % 2;
let exponent = 4 ** 2;

//UNARY OPERATORS:
let myScore = 110;
myScore++;
//++myScore;

let credits = 56;
credits--;
//--credits;

//COMPARISION OPERATORS:
let num1 = 3;
let num2 = 3;
let num3 = 6;

console.log(num1 == num2); //true
console.log(num1 != num3); //true
console.log(num1 > num3); //false
console.log(num1 <= num3); //true
console.log(num1 >= num3); //false

//LOGICAL OPERATORS:
/*
&& -> and
|| -> or
! -> reverse
*/

let isLoggedIn = true;
let isPaid = false;

console.log(isLoggedIn && isPaid);  //false

let isEmailUser = true;
let googleUser = false;

console.log(isEmailUser || googleUser);  //true

