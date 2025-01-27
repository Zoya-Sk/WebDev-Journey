/*
Task 1: Create a Functional Constructor

Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".
*/

/*
Task 2: Handle Errors

Modify the Person constructor to throw an error if the age is not a positive number.
*/


function Person(name, age) {
    if (age <= 0) {
      throw new Error('Age must be a positive number');
    }
   
    this.name = name;
    this.age = age;
   
    this.greet = function() {
      return `Hello, my name is ${this.name}`;
    };
  }
  



