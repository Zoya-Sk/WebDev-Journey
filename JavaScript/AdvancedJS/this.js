// THIS and Binding Context in JavaScript

/*
  `this` refers to the object that is currently executing the function.

  Key Topics:
  1. `this` in the global context
  2. `this` inside functions
  3. `this` in objects and methods
  4. `this` in arrow functions
  5. Explicit binding with `call()`, `apply()`, and `bind()`
*/

// Example 1: `this` in Global Scope
console.log(this); // In browsers, `this` refers to the `window` object

// Example 2: `this` inside a function (non-strict mode)
function showThis() {
    console.log(this);
}
showThis(); // In browsers, this logs the `window` object

// Example 3: `this` inside an Object Method
const user = {
    name: "Alice",
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

user.greet(); // Hello, my name is Alice

/*
  Explanation:
  - Inside `greet()`, `this` refers to the object `user`, so `this.name` is "Alice".
*/

// Example 4: `this` in Arrow Functions
const arrowFunctionExample = {
    name: "Bob",
    greet: () => {
        console.log(`Hello, my name is ${this.name}`);
    }
};

arrowFunctionExample.greet(); // Output: Hello, my name is undefined

/*
  Explanation:
  - Arrow functions do NOT bind their own `this`. They inherit `this` from the surrounding scope.
  - Since `this` is from the global scope, `this.name` is `undefined`.
*/

// Example 5: `this` with Event Listeners
document.getElementById("myButton").addEventListener("click", function () {
    console.log(this); // `this` refers to the clicked button element
});

// Example 6: Explicit Binding with `call()`, `apply()`, and `bind()`
const person = {
    name: "Charlie"
};

function introduce(age) {
    console.log(`My name is ${this.name} and I am ${age} years old.`);
}

// Using `call()`
introduce.call(person, 25); // My name is Charlie and I am 25 years old.

// Using `apply()`
introduce.apply(person, [25]); // My name is Charlie and I am 25 years old.

// Using `bind()`
const boundFunction = introduce.bind(person);
boundFunction(25); // My name is Charlie and I am 25 years old.

/*
  Explanation:
  - `call()` invokes the function immediately and sets `this` to `person`.
  - `apply()` is similar but takes an array of arguments.
  - `bind()` returns a new function with `this` permanently set to `person`.
*/

