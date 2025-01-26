/*
Task:
Perform the following mathematical operations
on the provided variables a and b

Add
Subtract
Multiply
Divide
Increment
Decrement
Reminder 
*/
let a = 18;
let b = 24;
 
function add() {
    const result = a + b;
    return result;
}
 
function subtract() {
    const result = b - a;
    return result;
}
 
function multiply() {
    const result = a * b;
    return result;    
}
 
function divide() {
    const result = b / a;
    return result;
}
 
function increment() {
    let result = a;
    result += 1;
    return result;
}

function decrement() {
    let result = b;
    result -= 1;
    return result;
}
 
function reminder() {
    const result = b % a;
    return result;
}