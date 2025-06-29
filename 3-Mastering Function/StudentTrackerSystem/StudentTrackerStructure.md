# 🧪 Final Challenge: “Student Tracker System” Structure.

## 🎯 Scenario:
1. You're building a student dashboard system. You need to handle:

2. Adding new students

3. Sending different kinds of messages using callbacks

4. Calculating average scores with a pure function

5. Protecting a student’s private data using closure

6. Binding a method to keep this working

7. Creating quick helper functions using arrow functions

## 📌 What To Build (step by step):
Function Declaration vs Expression

Create one function using declaration, one using expression

Higher-Order Function

Create a function `sendMessage(name, messageFn)` that accepts a callback like reminder() or congrats()

Closure

Create a createStudent(name, id) function that hides the ID in a closure, and only exposes getName() and getId()

this and bind()

Create an object with a method like showStudent()

Detach the method and fix it using bind()

Reusable Pure Function

Create calculateAverage(scoresArray) that returns the average — no global variables

Arrow Function Practice

Use an arrow function to quickly format a name (capitalize = name => name.charAt(0).toUpperCase() + name.slice(1))

(Optional) Use an IIFE to auto-init the dashboard

📋 Example Starter:
```js
code
// 1. Function Declaration
function greet(name) {
  return `Welcome, ${name}!`;
}

// 2. Function Expression
const sayBye = function(name) {
  return `Goodbye, ${name}!`;
};

// 3. Callback
function sendMessage(name, fn) {
  return fn(name);
}

function reminder(name) {
  return `Don't forget to do your homework, ${name}.`;
}

```


## 💡 Why it's not only allowed — but encouraged:
Structure	Use it for
Object	A single student's info (like name, id, showDashboard)
Array	A group of students, scores, messages, etc.
Object inside Array	Example: an array of student objects
Function in Object	Methods like greet() or getAverage()
Closure inside Function	To protect private data (like student ID)

📌 Example (Totally Valid):
```js
 code
const students = [
  { name: "Ali", scores: [80, 85, 90] },
  { name: "Sara", scores: [95, 92, 98] }
];

function calculateAverage(scores) {
  return scores.reduce((sum, s) => sum + s, 0) / scores.length;
}
```


### You’ll only use:

- Functions

- Arrays

- Objects

- Parameters

console.log() to test your results