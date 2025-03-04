// !! -> Closures are a powerful concept in JavaScript and often asked in interviews!

// Closures in JavaScript

/*
  A closure is a function that remembers the variables from its outer scope
  even after the outer function has finished execution.

  Key Topics:
  1. What are Closures?
  2. Lexical Scope and Nested Functions
  3. Practical Uses of Closures
  4. Common Interview Questions on Closures
*/

// Example 1: Basic Closure
function outerFunction() {
    let outerVariable = "I'm from outer function";

    function innerFunction() {
        console.log(outerVariable); // Accessing outer variable
    }

    return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Output: "I'm from outer function"

/*
  Explanation:
  - `innerFunction` is returned from `outerFunction`.
  - Even after `outerFunction` has finished execution, `innerFunction`
    remembers the `outerVariable` due to closure.
*/

// Example 2: Closure with Counter
function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(`Count: ${count}`);
    };
}

const counter = createCounter();
counter(); // Count: 1
counter(); // Count: 2
counter(); // Count: 3

/*
  Explanation:
  - `createCounter` returns a function that increments `count`.
  - `count` is remembered even after `createCounter` finishes.
  - Each call to `counter()` updates the same `count` variable.
*/

// Example 3: Private Variables Using Closures
function BankAccount(initialBalance) {
    let balance = initialBalance; // Private variable

    return {
        deposit(amount) {
            balance += amount;
            console.log(`Deposited: ${amount}, New Balance: ${balance}`);
        },
        withdraw(amount) {
            if (amount > balance) {
                console.log("Insufficient funds");
            } else {
                balance -= amount;
                console.log(`Withdrawn: ${amount}, Remaining Balance: ${balance}`);
            }
        },
        checkBalance() {
            console.log(`Current Balance: ${balance}`);
        }
    };
}

const myAccount = BankAccount(1000);
myAccount.deposit(500);   // Deposited: 500, New Balance: 1500
myAccount.withdraw(200);  // Withdrawn: 200, Remaining Balance: 1300
myAccount.checkBalance(); // Current Balance: 1300

/*
  Explanation:
  - `balance` is a private variable, not directly accessible from outside.
  - The returned object provides methods to manipulate `balance`.
  - This is useful for creating private states in JavaScript.
*/

// Example 4: Closures in Loops (Using `let` vs `var`)
for (var i = 1; i <= 3; i++) {
    setTimeout(() => console.log(`Var Loop: ${i}`), 1000);
}

for (let j = 1; j <= 3; j++) {
    setTimeout(() => console.log(`Let Loop: ${j}`), 1000);
}

/*
  Output after 1 second:
  Var Loop: 4
  Var Loop: 4
  Var Loop: 4

  Let Loop: 1
  Let Loop: 2
  Let Loop: 3

  Explanation:
  - `var` is function-scoped, so all timeouts share the same `i` (which becomes 4).
  - `let` is block-scoped, so each timeout gets its own copy of `j`.
*/

