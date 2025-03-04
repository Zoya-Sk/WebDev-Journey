// Prototypal Inheritance in JavaScript

/*
  JavaScript uses prototypal inheritance instead of class-based inheritance.

  Key Topics:
  1. What is Prototypal Inheritance?
  2. Understanding the `prototype` object
  3. Creating objects with `Object.create()`
  4. Inheriting properties and methods
  5. Overriding properties in prototypes
*/

// Example 1: Understanding Prototypes
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the prototype
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

person1.greet(); // Hello, my name is Alice
person2.greet(); // Hello, my name is Bob

/*
  Explanation:
  - The `greet` method is shared among all instances of `Person` via the prototype.
  - Memory-efficient: Each instance does NOT get a separate copy of `greet()`.
*/

// Example 2: Creating an Object with `Object.create()`
const carPrototype = {
    start() {
        console.log("Car started");
    },
    stop() {
        console.log("Car stopped");
    }
};

const myCar = Object.create(carPrototype);
myCar.start(); // Car started
myCar.stop();  // Car stopped

/*
  Explanation:
  - `Object.create(prototypeObject)` creates an object that inherits from `prototypeObject`.
  - `myCar` does not have `start()` and `stop()` directly but inherits from `carPrototype`.
*/

// Example 3: Prototypal Inheritance Chain
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(`${this.name} makes a sound.`);
};

function Dog(name, breed) {
    Animal.call(this, name); // Inherit properties
    this.breed = breed;
}

// Inherit methods
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Adding a new method to Dog
Dog.prototype.bark = function () {
    console.log(`${this.name} barks!`);
};

const myDog = new Dog("Buddy", "Labrador");
myDog.speak(); // Buddy makes a sound.
myDog.bark();  // Buddy barks!

/*
  Explanation:
  - `Animal.call(this, name)` calls the parent constructor.
  - `Dog.prototype = Object.create(Animal.prototype)` sets up inheritance.
  - `Dog.prototype.constructor = Dog` ensures the correct constructor reference.
*/

// Example 4: Overriding Prototype Methods
Dog.prototype.speak = function () {
    console.log(`${this.name} says Woof Woof!`);
};

myDog.speak(); // Buddy says Woof Woof!

/*
  Explanation:
  - The `speak()` method is overridden in `Dog.prototype`.
  - Now, `myDog.speak()` calls the overridden version.
*/

// Example 5: Checking Prototype Chain
console.log(myDog instanceof Dog);   // true
console.log(myDog instanceof Animal); // true
console.log(myDog instanceof Object); // true

/*
  Explanation:
  - `instanceof` checks if an object is part of a prototype chain.
  - `myDog` inherits from `Dog`, which inherits from `Animal`, which inherits from `Object`.
*/

