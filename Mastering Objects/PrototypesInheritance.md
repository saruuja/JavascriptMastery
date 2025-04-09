# 🚀 Let's start Prototypes & Inheritance step by step.

🔥 Why Do We Need Prototypes & Inheritance?
Before diving deep into code, let’s clearly understand why prototypes exist, why we use them, and when we need them in real-world applications.

🔹 Problem Without Prototypes: Code Duplication & Memory Waste
Let’s say you’re building an application that manages users. You create multiple users as objects:
```javascript
let user1 = {
  name: "Alice",
  age: 25,
  greet: function () {
    return `Hello, my name is ${this.name}`;
  }
};

let user2 = {
  name: "Bob",
  age: 30,
  greet: function () {
    return `Hello, my name is ${this.name}`;
  }
};

```

❌ What’s the Problem Here?
✔ The greet function is duplicated inside every user object.
✔ If you create 100 users, there will be 100 copies of the same function, which wastes memory.
✔ If you need to update the function, you have to change it in every object manually.

✅ How Do Prototypes Solve This?
With prototypes, we store the greet function in a shared place (the prototype), so all objects can access it without copying it:
```javascript
const userPrototype = {
  greet: function () {
    return `Hello, my name is ${this.name}`;
  }
};

let user1 = Object.create(userPrototype);
user1.name = "Alice";
user1.age = 25;

let user2 = Object.create(userPrototype);
user2.name = "Bob";
user2.age = 30;

console.log(user1.greet()); // Hello, my name is Alice
console.log(user2.greet()); // Hello, my name is Bob

```
✅ Why Is This Better?
✔ The greet function is not duplicated inside every object—it exists only once in userPrototype.
✔ All users inherit the function from userPrototype, saving memory.
✔ If we need to update greet(), we only update it in one place.

🔹 When Should You Use Prototypes?
✅ When you have multiple objects that share the same behavior
✔ If all users, cars, or employees in your app need common methods, use prototypes instead of duplicating code.

✅ When you want efficient memory usage
✔ If you’re creating thousands of objects (e.g., game characters, users, or items in an e-commerce store), prototypes help save memory.

✅ When you want to follow DRY (Don’t Repeat Yourself) principles
✔ Instead of writing the same method multiple times, store it in a prototype and let all objects inherit from it.
=============================================

🔹 What About Inheritance? Why Do We Need It?
🚀Inheritance is a mechanism that allows one object to get properties and methods from another object.

Think of it like this:
📌 A parent object has shared behaviors (like logging in).
📌 A child object gets these behaviors but can also have additional features.

This way, we reuse the parent’s functionality instead of writing the same code multiple times.
🔹 Why Do We Need Inheritance?
❌ Without Inheritance: Code Duplication
Imagine you're creating a website with regular users and admins.
Both users and admins need to log in, but only admins can delete users.

Without inheritance, you would write separate objects like this:
```javascript
let user = {
  name: "Alice",
  login: function () {
    return `${this.name} logged in`;
  }
};

let admin = {
  name: "SuperAdmin",
  login: function () {
    return `${this.name} logged in`;
  },
  deleteUser: function () {
    return `${this.name} deleted a user`;
  }
};


```
❌ Problem:
✔ login() is duplicated in both objects.
✔ If you need to update the login() function, you have to do it in multiple places.
✔ This is inefficient and hard to maintain.
✅ With Inheritance: No Code Duplication
Instead, we can inherit the login() method from user using Object.create():
```javascript
let user = {
  name: "Default",
  login: function () {
    return `${this.name} logged in`;
  }
};

let admin = Object.create(user);
admin.name = "SuperAdmin";
admin.deleteUser = function () {
  return `${this.name} deleted a user`;
};

console.log(admin.login()); // ✅ Inherited: "SuperAdmin logged in"
console.log(admin.deleteUser()); // "SuperAdmin deleted a user"

```

✅ Why Is This Better?
admin automatically gets the login() function from user.
✔ No duplication of methods.
✔ If we update user.login(), all admins automatically get the new version.
🔹 When Should You Use Inheritance?
1️⃣ When objects have common behaviors but different roles

Example: Users & Admins → Both need login(), but only admins have deleteUser().

2️⃣ When you want to avoid duplicate methods

Instead of writing the same function in multiple places, inherit it from a common object.

3️⃣ When you need a clear structure for objects

Example: In a game, you might have a Character object with attack() and defend().

Warrior and Mage inherit from Character but add their own abilities.


==========================================
🔹 Real-World Use Cases of Prototypes & Inheritance
✅ Web Applications

Regular users and admins share login(), but only admins can deleteUser().

Instead of writing the login() function twice, admins inherit it.

✅ Game Development

A Character has methods like walk() and jump().

A Warrior and Mage inherit these but have extra attacks like swingSword() or castSpell().

✅ E-commerce Websites

A Product has price and calculateDiscount().

A PremiumProduct inherits this but has a VIP discount.


## 🔥 3 Main Ways to Use Prototypes & Inheritance
1️⃣ Using Object.create() (Prototype-Based Inheritance)
This is the simplest way to create an object that inherits from another object.

```js
let user = {
  login: function () {
    return `${this.name} logged in`;
  }
};

// Create an admin that inherits from user
let admin = Object.create(user);
admin.name = "SuperAdmin";
admin.deleteUser = function () {
  return `${this.name} deleted a user`;
};

console.log(admin.login()); // ✅ "SuperAdmin logged in" (inherited)
console.log(admin.deleteUser()); // "SuperAdmin deleted a user"

```
✔ Best for: Simple prototype inheritance without classes.
✔ Why? It creates a new object linked to an existing object’s prototype.

2️⃣ Using Constructor Functions (Traditional Way Before ES6)
Before ES6 (before class was introduced), we used constructor functions for object creation and inheritance.
```js
function User(name) {
  this.name = name;
}

User.prototype.login = function () {
  return `${this.name} logged in`;
};

let admin = new User("SuperAdmin");
console.log(admin.login()); // ✅ "SuperAdmin logged in"

```
✔ Best for: Older JavaScript projects or when working with traditional function-based prototypes.
✔ Why? It uses functions but still allows method inheritance via prototype.
3️⃣ Using ES6 Classes (Modern Way - Recommended)
The class syntax makes inheritance more readable and structured.
```js
class User {
  constructor(name) {
    this.name = name;
  }

  login() {
    return `${this.name} logged in`;
  }
}

// Admin inherits from User
class Admin extends User {
  deleteUser() {
    return `${this.name} deleted a user`;
  }
}

let admin = new Admin("SuperAdmin");
console.log(admin.login()); // ✅ "SuperAdmin logged in" (inherited)
console.log(admin.deleteUser()); // "SuperAdmin deleted a user"

```
✔ Best for: Modern JavaScript development (React, Vue, Node.js, etc.).
✔ Why? It’s easier to read and understand, similar to OOP in other languages.

🔹 Which One Should You Use?
Method	         Best For	    Why?
Object.create()	Simple inheritance without classes	Directly links objects, no need for class or function
Constructor Function	Legacy JavaScript projects	Uses function-based prototypes, but harder to read
class (ES6)	Modern JavaScript	Clean, structured, and easy to understand