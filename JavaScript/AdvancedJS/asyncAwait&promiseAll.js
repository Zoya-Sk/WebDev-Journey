// Async-Await and Promise.all in JavaScript

/*
  This lecture covers:
  1. Understanding asynchronous programming
  2. Using `async` and `await` for better readability
  3. Handling multiple promises with `Promise.all()`
*/

// Example 1: Understanding Async Functions
async function fetchData() {
    return "Data fetched successfully!";
}
fetchData().then(console.log); // Output: Data fetched successfully!

/*
  Explanation:
  - `async` makes a function return a promise.
  - The function automatically wraps its return value inside a promise.
*/

// Example 2: Using `await` with Promises
function getUserData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("User data received");
        }, 2000);
    });
}

async function displayUserData() {
    console.log("Fetching data...");
    const data = await getUserData(); // Waits for the promise to resolve
    console.log(data);
}

displayUserData();
/*
  Output:
  Fetching data...
  (After 2 seconds) User data received
*/

/*
  Explanation:
  - `await` pauses the execution of `displayUserData()` until `getUserData()` resolves.
  - This makes the asynchronous code look more like synchronous code.
*/

// Example 3: Handling Errors with Try-Catch
async function fetchWithError() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/invalid-url");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchWithError(); // Output: Error fetching data: (error details)

/*
  Explanation:
  - If an error occurs, it is caught inside the `catch` block instead of crashing the program.
*/

// Example 4: Using `Promise.all()` to Handle Multiple Promises
function task1() {
    return new Promise(resolve => setTimeout(() => resolve("Task 1 completed"), 2000));
}

function task2() {
    return new Promise(resolve => setTimeout(() => resolve("Task 2 completed"), 1000));
}

function task3() {
    return new Promise(resolve => setTimeout(() => resolve("Task 3 completed"), 1500));
}

async function executeAllTasks() {
    console.log("Starting all tasks...");
    const results = await Promise.all([task1(), task2(), task3()]);
    console.log(results);
}

executeAllTasks();
/*
  Output:
  Starting all tasks...
  (After 2 seconds) ["Task 1 completed", "Task 2 completed", "Task 3 completed"]
*/

/*
  Explanation:
  - `Promise.all()` runs all promises in parallel and waits for all of them to finish.
  - The function resolves when all tasks are complete.
  - If any promise fails, `Promise.all()` rejects the entire execution.
*/

