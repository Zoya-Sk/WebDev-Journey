// ES6 Modules and CommonJS

/*
  This lecture covers:
  1. Understanding ES6 Modules
  2. Exporting and Importing in ES6
  3. CommonJS Modules (Node.js)
  4. Differences between ES6 and CommonJS
*/

// Example 1: ES6 Module Export (file: math.js)
export function add(a, b) {
    return a + b;
}

export const PI = 3.14159;

// Default Export
export default function multiply(a, b) {
    return a * b;
}

/*
  Explanation:
  - `export` allows functions, variables, and classes to be reused in another file.
  - Default export can be imported with any name.
*/

// Example 2: ES6 Module Import (file: main.js)
import multiply, { add, PI } from './math.js';

console.log(add(2, 3)); // 5
console.log(multiply(4, 5)); // 20
console.log(PI); // 3.14159

/*
  Explanation:
  - Named imports `{ add, PI }` must match exactly.
  - Default import (`multiply`) can have any name.
  - Always use the `.js` extension in modern module imports.
*/

// Example 3: CommonJS Export (file: mathCommon.js)
function addCommon(a, b) {
    return a + b;
}

const PI_COMMON = 3.14159;

module.exports = {
    addCommon,
    PI_COMMON
};

/*
  Explanation:
  - CommonJS uses `module.exports` instead of `export`.
  - Works in Node.js but not in browser environments.
*/

// Example 4: CommonJS Import (file: mainCommon.js)
const math = require('./mathCommon');

console.log(math.addCommon(2, 3)); // 5
console.log(math.PI_COMMON); // 3.14159

/*
  Explanation:
  - `require()` is used for CommonJS module loading.
  - CommonJS modules are synchronous, ES6 modules are asynchronous.
*/

// Example 5: Key Differences Between ES6 and CommonJS

/*
  ES6 Modules:
  - Uses `import` and `export`.
  - Works in browsers and Node.js (with `"type": "module"` in package.json).
  - Supports static loading (better optimization).

  CommonJS:
  - Uses `require()` and `module.exports`.
  - Works in Node.js by default.
  - Supports dynamic loading.

  When to use:
  - Use ES6 modules for frontend JavaScript.
  - Use CommonJS when working with Node.js applications.
*/

