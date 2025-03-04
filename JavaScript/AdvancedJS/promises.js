// Promises and Promise Chaining

/*
  Lecture 59: Promises and Promise Chaining
  ----------------------------------------
  A Promise in JavaScript is an object that represents the eventual completion
  or failure of an asynchronous operation.

  Key Topics:
  1. What are Promises?
  2. Creating a Promise
  3. Handling Promises with `.then()` and `.catch()`
  4. Promise Chaining
  5. Error Handling in Promises
  6. Using `Promise.all()` and `Promise.race()`
*/

// Example 1: Creating a Simple Promise
const myPromise = new Promise((resolve, reject) => {
    let success = true; // Change to false to simulate failure

    setTimeout(() => {
        if (success) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected!");
        }
    }, 2000);
});

// Handling the Promise
myPromise
    .then((message) => {
        console.log("Success:", message);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

/*
  Explanation:
  - `resolve()` marks the Promise as successful.
  - `reject()` marks the Promise as failed.
  - `.then()` handles success, `.catch()` handles failure.
*/

// Example 2: Promise Chaining
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data fetched"), 1000);
    });
}

function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${data} → Processed`), 1000);
    });
}

function saveData(data) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${data} → Saved`), 1000);
    });
}

// Chaining the Promises
fetchData()
    .then((data) => {
        console.log(data);
        return processData(data);
    })
    .then((processedData) => {
        console.log(processedData);
        return saveData(processedData);
    })
    .then((savedData) => {
        console.log(savedData);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

/*
  Explanation:
  - Each function returns a Promise.
  - `.then()` is used to chain the next function.
  - This avoids callback hell and makes the flow readable.
*/

// Example 3: Handling Multiple Promises with `Promise.all()`
const promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2"), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3"), 1500));

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log("All Promises Resolved:", results);
    })
    .catch((error) => {
        console.log("One of the promises failed:", error);
    });

/*
  Explanation:
  - `Promise.all()` waits for all Promises to resolve.
  - If any Promise fails, the entire `.catch()` block runs.
*/

// Example 4: `Promise.race()`
Promise.race([promise1, promise2, promise3])
    .then((fastest) => {
        console.log("Fastest resolved promise:", fastest);
    });

/*
  Explanation:
  - `Promise.race()` returns the first resolved or rejected promise.
*/

// Example 5: Async/Await Alternative (Covered in Lecture 62)
async function handlePromises() {
    try {
        let data = await fetchData();
        console.log(data);
        let processed = await processData(data);
        console.log(processed);
        let saved = await saveData(processed);
        console.log(saved);
    } catch (error) {
        console.log("Error:", error);
    }
}

handlePromises();

/*
  Explanation:
  - `async/await` provides a cleaner way to handle promises.
  - `await` pauses execution until the Promise resolves.
  - This makes asynchronous code look synchronous.
*/
