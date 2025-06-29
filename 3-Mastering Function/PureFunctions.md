# 🎯 LESSON: Pure Functions
“A pure function is like a good friend — it never lies, never steals, and always gives the same answer.”

✅ What Is a Pure Function?
A pure function is a function that:

Always returns the same output for the same input

Does not change anything outside itself (no side effects)

✨ In Other Words:
If you call it with the same data, it will always give the same result — and won’t mess with the outside world.

✅ Formula for a Pure Function:
```js

function pureFunction(input) {
  // only use input
  // do not change global variables or random things
  return output;
}
//❌ Example of an Impure Function:
js

let total = 0;

function addToTotal(x) {
  total += x;  // ❌ changes a variable outside
}
````
Every time you run it, the result changes — and it affects global state.

✅ Pure Version:
js
Copy code
function add(x, y) {
  return x + y; // ✅ Same input → same output, no side effects
}
🔍 Real-Life Analogy:
Think of a pure function like a vending machine:

You insert $1 and select "Water"

You always get the same result

It doesn’t affect anything else in the store

Impure function? That’s like:

Inserting money and getting a random drink

Or it steals your money sometimes

Or it breaks another machine when you use it 😅

🧠 Why Pure Functions Matter
Benefit	Why it’s helpful
✅ Predictable	Easy to understand and debug
✅ Reusable	Can be safely used anywhere
✅ Testable	Always produces the same result
✅ No surprises	Doesn’t mess with global state or DOM

✅ Pure Function Checklist
✅ Uses only its own parameters
✅ Doesn’t modify any external variable
✅ Doesn’t use random numbers, Math.random(), or Date.now()
✅ Doesn’t read from or write to files, DOM, database, etc.
✅ Returns a value — doesn’t log or change things outside

💡 Common Examples of Pure Functions:
```js

function square(x) {
  return x * x;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function calculateDiscount(price, percent) {
  return price - (price * percent / 100);
}

//❌ Examples of Impure Functions:
js

let score = 0;
function updateScore(x) {
  score += x; // ❌ changes global value
}

function getCurrentTime() {
  return Date.now(); // ❌ depends on outside world (time)
}

function logMessage(msg) {
  console.log(msg); // ❌ output is not a return value
}
```