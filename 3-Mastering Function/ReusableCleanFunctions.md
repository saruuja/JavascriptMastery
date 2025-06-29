# 🎯 LESSON: Reusable & Clean Functions

"Write it once. Use it anywhere. Read it forever."

This lesson is all about writing functions that are:

✅ Easy to read

✅ Easy to reuse

✅ Easy to test and improve later

✅ What Is a Reusable Function?
A reusable function is a function that:

Can be used in multiple parts of your program

Doesn’t depend on hardcoded data

Takes input through parameters

Returns output cleanly — without side effects

❌ Example of a Non-Reusable Function:
```js
Copy code
function greetSara() {
  console.log("Hello, Sara!");
}
```
You can only use this for Sara. It's locked to one thing.

✅ Reusable Version:
```js
Copy code
function greetUser(name) {
  console.log(`Hello, ${name}!`);
};

greetUser("John");
greetUser("Jane");
🎯 Same logic, reused across the app.
```

✅ Clean Functions — What Makes a Function “Clean”?
Clean functions are:

Rule	Example/Tip
💡 Do one thing	Avoid functions that handle too many tasks
💬 Clear name	calculateTotal() is better than doStuff()
🎯 Use parameters	Never hardcode values inside
🚫 No global changes	Avoid changing outside variables
📤 Return result clearly	Prefer return over console.log() in logic

❌ Example of a Non-Reusable Function:
```js
 code
function greetSara() {
  console.log("Hello, Sara!");
}
You can only use this for Sara. It's locked to one thing.

✅ Reusable Version:
js
 code
function greetUser(name) {
  console.log(`Hello, ${name}!`);
}
Now you can do:

greetUser("Sara");
greetUser("Layla");
greetUser("Amina");
```
🎯 Same logic, reused across the app.

✅ Clean Functions — What Makes a Function “Clean”?
Clean functions are:

Rule	Example/Tip
💡 Do one thing	Avoid functions that handle too many tasks
💬 Clear name	calculateTotal() is better than doStuff()
🎯 Use parameters	Never hardcode values inside
🚫 No global changes	Avoid changing outside variables
📤 Return result clearly	Prefer return over console.log() in logic

📦 Real-World Example
❌ Bad:
```js
code
function sendDiscountMessage() {
  let user = "Sara";
  let discount = 15;
  console.log(`Hey ${user}, your discount is ${discount}%`);
}
//✅ Good (Reusable + Clean):
js
Copy code
function createDiscountMessage(user, discount) {
  return `Hey ${user}, your discount is ${discount}%`;
}
`Now you can use it:`

console.log(createDiscountMessage("Sara", 15));
console.log(createDiscountMessage("Ali", 25));
```
✅ Bonus Tip: Reusable = Testable
When a function uses only parameters and returns a result, you can easily:

Test it

Move it into another file

Reuse it in other apps or UI components

🧠 Summary Cheat Sheet
Rule	Meaning
✅ Use parameters	Accept values from outside
✅ Use return	Don't hardcode or log directly
✅ Do one thing	Keep the function focused
✅ Be generic	Avoid personal names/data
✅ Use clean naming	Describe what the function does