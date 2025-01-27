/*
Task 1: Encapsulation Using Getters and Setters

Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.
*/
/*
Task 2: Polymorphism with Method Overriding

Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.
*/

class BankAccount {
    #balance;

    constructor(initialBalance) {
        if (initialBalance < 0) {
            throw new Error("Balance cannot be negative.");
        }
        this.#balance = initialBalance;
    }

    get balance() {
        return this.#balance;
    }

    set balance(amount) {
        if (amount < 0) {
            throw new Error("Balance cannot be negative.");
        }
        this.#balance = amount;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive.");
        }
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdraw amount must be positive.");
        }
        if (amount > this.#balance) {
            throw new Error("Insufficient funds.");
        }
        this.#balance -= amount;
    }
}

// Example usage:
try {
    const account = new BankAccount(100);
    account.deposit(50);
    console.log(account.balance); // 150
    account.withdraw(30);
    console.log(account.balance); // 120
    account.balance = -50; // Throws an error
} catch (error) {
    console.error(error.message);
}


class Shape {
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

// Example usage:
const shapes = [
    new Circle(5),
    new Rectangle(4, 6)
];

shapes.forEach(shape => {
    console.log(`Area: ${shape.area()}`);
});