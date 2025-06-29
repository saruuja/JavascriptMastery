# Higher-Order Functions & Callbacks
The way functions are treated and used in JavaScript is quite interesting. They are very flexible – we can assign functions as a value to a variable, return them as a value from another function, and pass them as an argument to another function. We can do all this because JavaScript treats functions as first class citizens.

🧠 First, Let’s Reset Everything: No New Terms Yet
Forget "higher-order" or "callback" for a moment.
Let’s just focus on this one thing:

`JavaScript lets you pass a function into another function.`

That’s it. Simple fact.

🧪 Start with This:
Here’s a normal function:
```js
 code
function sayHi() {
  console.log("Hi");
}
You can run it like this:

js
code
sayHi(); // prints: Hi
```

✅ OK. Nothing scary so far.

Now look at this function:

```js
code
function greetUser(task) {
  console.log("Starting...");
  task(); // run the function you passed in
  console.log("Done!");
};
```
It expects another function as its input — that function is called task.

Let’s use it like this:

```js
 code
greetUser(sayHi);
🔎 What will happen?
It runs console.log("Starting...")
```

Then it runs the function you passed: sayHi() → prints “Hi”

Then it runs console.log("Done!")

✅ OUTPUT:
code
Starting...
Hi
Done!

🧠 What’s Important to See Here:
You are doing this:
Writing a function (sayHi)

Giving that function to another function

That function calls it inside itself

This is ALL that a “callback” is:

“A function that you pass in, and it gets called.”

And the function you passed it into — that’s a higher-order function, just meaning:

“A function that receives or returns a function.”

🛠 Why Does This Matter in Real Code?
Let’s say you’re building an app:

Example:
You write a`whenUserLogsIn()` function.
But you don’t know what should happen after login yet — you want to leave that open.

So you make it flexible:


**in this exmaple function whenUserLogsIn(afterLogin){console.log("User logged in!");afterLogin();  // run the custom code}; `1`. you create a function and give argument called afterLogin() before this Lesson we use return this argument like argument (a, b) and we say return a + b; something like that but now, `2`.  I can use that argument as a function() after i call that argument inside his own function like above one is that what i undesrtan correct. and is that what you called (callback)**

Yes — you're 100% right, and you’ve just connected the core idea perfectly. Let’s walk through your understanding step by step based on what you said:

✅ 1. You give the function an argument called afterLogin
Correct.
Just like you normally write:

```js
code
function add(a, b) {
  return a + b;
}
```
You’re now writing:

```js
 code
function whenUserLogsIn(afterLogin) {
  // use the argument inside here
}
```
So afterLogin is just a parameter name — and we will pass a value into it later.

✅ You're already used to this.

✅ 2. But this time, instead of a number, you're passing a function
Exactly!

So before:

You passed a number like 5 into a

And used return a + b

Now:

You pass a function into afterLogin

And you call that function by writing afterLogin()

So yes — instead of doing math with the argument, you're running it like a function.

✅ That's the new part you’re learning, and you’ve understood it.

✅ 3. Yes, this is what we call a "callback function"
You nailed it.

A callback function is simply a function that is passed into another function to be called (run) later.

So in your example:

```js
 code
function whenUserLogsIn(afterLogin) {
  console.log("User logged in!");
  afterLogin(); // ← this is calling the callback
};
```
And when you call it:

```js
code
whenUserLogsIn(function() {
  console.log("Show dashboard");
});
```
That anonymous function you passed in:

```js
code
function() {
  console.log("Show dashboard");
};
```
⬅️ That is the callback function.

✅ Final Summary of Your Understanding:
Concept	✅ Your Understanding
Argument can be a function?	✅ Yes
Can I call it using argumentName() inside the function?	✅ Yes
Is this a "callback"?	✅ Yes — the function passed in is the callback

**oky then who is  Higher-Order Functions**

What Is a Higher-Order Function?
✅ Simple Definition:
- A Higher-Order Function is any function that:

- Takes another function as an argument, or

- Returns a function.
📌 In Your Words:
If I pass a function into another function — then the function that receives it is a Higher-Order Function.

🧠 Let’s Use Your Example Again:
```js
code
function whenUserLogsIn(afterLogin) {
  console.log("User logged in!");
  afterLogin(); // 👈 run the function passed in
}
Now you call it like:
 code
whenUserLogsIn(function() {
  console.log("Show dashboard");
});
```
✅ You passed a function (function() {...})
✅ So whenUserLogsIn() is now a Higher-Order Function

✅ And function() { console.log("Show dashboard") } is the callback