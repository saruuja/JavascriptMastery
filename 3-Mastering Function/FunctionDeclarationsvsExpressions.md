✅ Lesson 1: Function Declarations vs. Function Expressions
🧠 What is a Function?
Think of a function as a coffee machine.
You give it something (like coffee beans + water), and it gives you something back (coffee ☕️).

In JavaScript, a function is a piece of reusable code that:

Takes input (arguments) ✅

Does something with it ✅

Returns output ✅

💡 There Are Two Ways to Build This "Machine"
1. Function Declaration — Like a named machine at the start of the workshop
```js
 code
function makeCoffee(water, beans) {
  return `Coffee with ${water}ml water and ${beans}g beans`;
}
```
📍It’s named (makeCoffee)

🛠️ You can use it anywhere in the file, even before it’s defined (this is called hoisting)

```js
 code
console.log(makeCoffee(200, 20)); // Works, even if defined later!
```
🧠 Real-World Example:
Imagine walking into your kitchen and pressing a coffee machine's button. It's already set up at the counter, ready whenever you need it.

2. Function Expression — Like a custom machine that you set up in a corner
```js
code
const makeCoffee = function(water, beans) {
  return `Coffee with ${water}ml water and ${beans}g beans`;
};
```
It’s stored in a variable

❌ It can’t be used before it’s defined

```js
 code
console.log(makeCoffee(200, 20)); // ❌ Error if you call it before this line
```
🧠 Real-World Example:
Think of this as a coffee machine you build on demand. You can carry it around, but you must build it first before you use it.

🧪 What’s the Main Difference?
Feature	Function Declaration	Function Expression
Hoisting	✅ Can use before defined	❌ Can’t use before defined
Name	Required	Optional (can be anonymous)
Stored in variable	❌ No	✅ Yes
Use case	Utilities, common tools	Dynamic behavior, closures

📌 Why Should You Care?
Imagine building a calculator:

Use function declarations for always-available tools like add() or subtract()

Use function expressions for temporary or flexible logic like calculateTax(amount, function)

✍️ Your Practice

Try to write these in both declaration and expression form:

A function that adds two numbers

A function that returns "even" or "odd" based on a number

A function that says Hello, [name]