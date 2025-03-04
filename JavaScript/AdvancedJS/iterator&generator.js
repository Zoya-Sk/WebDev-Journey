// Iterators and Generators in JavaScript

/*
  This lecture covers:
  1. Understanding Iterators
  2. Custom Iterators
  3. Using Generators for better control
*/

// Example 1: Understanding Iterators
const myArray = [10, 20, 30];
const iterator = myArray[Symbol.iterator]();

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

/*
  Explanation:
  - `Symbol.iterator` provides an iterator object.
  - The `.next()` method moves through the elements until `done: true`.
*/

// Example 2: Creating a Custom Iterator
function createCounter(start, end) {
    let count = start;
    return {
        next: function () {
            if (count <= end) {
                return { value: count++, done: false };
            } else {
                return { done: true };
            }
        }
    };
}

const counter = createCounter(1, 5);
console.log(counter.next()); // { value: 1, done: false }
console.log(counter.next()); // { value: 2, done: false }
// ... keeps going until done: true

/*
  Explanation:
  - Custom iterators allow us to define how iteration happens.
  - Each call to `.next()` moves to the next value.
*/

// Example 3: Using a Generator Function
function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = simpleGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

/*
  Explanation:
  - The `yield` keyword pauses function execution and returns a value.
  - The function resumes from the last `yield` when `.next()` is called again.
*/

// Example 4: Infinite Generator
function* infiniteCounter() {
    let num = 1;
    while (true) {
        yield num++;
    }
}

const infiniteGen = infiniteCounter();
console.log(infiniteGen.next().value); // 1
console.log(infiniteGen.next().value); // 2
console.log(infiniteGen.next().value); // 3
// Keeps going forever unless stopped

/*
  Explanation:
  - Generators are useful for infinite sequences because they pause execution.
*/

// Example 5: Generator with Parameters
function* rangeGenerator(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

const range = rangeGenerator(5, 10);
console.log([...range]); // [5, 6, 7, 8, 9, 10]

/*
  Explanation:
  - `yield` allows generators to produce multiple values dynamically.
  - The spread operator `[...range]` collects all yielded values.
*/

