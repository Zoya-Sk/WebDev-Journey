//CHALLENGES:
//Checking if a number is greater than another number
let num1 = 5
let num2 = 8
console.log("Iam regular upper code")

if(num1 > num2){
    console.log(num1 + " is Greater.")
} else{
    console.log(num2 + " is Greater")
}

console.log("Regular bottom code.")

// Checking if a string is equal to another string:
let username = "chai";
let anotherName = "chai";

if (username != anotherName) {
    console.log("Pick another username");
} else {
    console.log("You can pick thid userName.");
}

// Checking if a variable is a number or not:

let score = 44

if (typeof score === 'number') {
    console.log("Yep, this is a number")
} else {
    console.log("No that is not a number")
}

//Checking if a boolean value is true or false:
let isTeaReady = false
if (isTeaReady) {
    console.log("Tea is ready")
} else {
    console.log("Tea is NOT ready")
}

//Checking if an Array is empty or not:
let items = ["item1"];

console.log(items.length);

if (items.length === 0) {
    console.log("Array is empty");
} else {
    console.log("Array is NOT empty");
}