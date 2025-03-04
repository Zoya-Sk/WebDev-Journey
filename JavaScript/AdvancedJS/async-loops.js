// Asynchronous JavaScript and Event Loop

/*
  This explains how JavaScript handles asynchronous operations
  using the Event Loop and callback queue.

  Key Topics:
  1. Synchronous vs Asynchronous Code Execution
  2. Understanding the Event Loop
  3. Call Stack, Web APIs, Callback Queue, and Microtask Queue
  4. setTimeout and setInterval
  5. Handling Async Operations with Callbacks
*/

// Example 1: Synchronous vs Asynchronous Code
console.log("Start"); 

setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

/*
  Output:
  Start
  End
  This runs after 2 seconds

  Explanation:
  - "Start" is printed first.
  - setTimeout() is pushed to the Web API and waits for 2 seconds.
  - "End" is printed while setTimeout() is still waiting.
  - After 2 seconds, the callback from setTimeout() moves to the Callback Queue and then the Call Stack via the Event Loop.
*/

// Example 2: Understanding the Event Loop
console.log("First");

setTimeout(() => console.log("Second"), 0);

console.log("Third");

/*
  Output:
  First
  Third
  Second

  Explanation:
  - Even though setTimeout() is set to 0ms, it is pushed to the Web API.
  - The event loop ensures synchronous code runs first.
  - "First" and "Third" execute before "Second" because setTimeout() is handled asynchronously.
*/

// Example 3: Handling Async Operations with Callbacks
function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched successfully!");
    }, 3000);
}

console.log("Fetching data...");
fetchData((data) => console.log(data));

/*
  Output:
  Fetching data...
  (After 3 seconds)
  Data fetched successfully!
  
  Explanation:
  - fetchData() uses setTimeout() to simulate an API call.
  - The callback function is executed after 3 seconds.
  - This demonstrates how callbacks are used for async operations.
*/

