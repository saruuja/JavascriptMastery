✅ Great! Let’s start Phase 1: Mastering Objects. 🚀🔥
🔥 Step 1: What Are Objects & Why Are They Important?
📌 Objects are used to store and organize data.
✔ In real life, everything around you is an object: a car, a book, a phone.
✔ In JavaScript, objects help us group related data and behaviors together.

💡 Real-World Example: A Car
Imagine you want to describe a car. Instead of using separate variables:
```javaScript
let brand = "Toyota";
let model = "Corolla";
let year = 2020;

``You can group them into an object``

let car = {
  brand: "Toyota",
  model: "Corolla",
  year:   2020
}
console.log (car.brand); // Output: Toyota
```

✅ Objects make code more organized and easy to manage!

🔥 Step 2: Creating and Accessing Objects
📌 There are two ways to access object properties:
1️⃣ Dot Notation (.)
2️⃣ Bracket Notation ([])

💡 Example:
```javaScript
let person = {
  name: 'Maxamed',
  age: 53,
  occupation: 'Teacher',
}
//Dot Notation
console.log(person.name)// Output: Maxamed
//Bracket Notation
console.log(person['name'])// Output: Maxamed
```
✔ Use dot notation when the property name is known.
✔ Use bracket notation when the property name is dynamic means it can change.

🔥 Step 3: Adding, Updating & Deleting Properties
📌 Objects can be changed even after they are created!

💡 Example:
```javaScript
let person = {
  name: 'Maxamed',
  age: 53,
  occupation: 'Teacher',
}
//Add a new property
person.country = 'Somalia';
// Update an existing property
person.age = 54;
// Delete a property
delete person.occupation;
console.log(book); // Output: { name: 'Maxamed', age: 54 }

🔥 Objects are dynamic! You can modify them anytime.
```
#  Object Methods
🔥  What Are Object Methods?
📌 A method is just a **function** inside an object.
✔ It allows objects to have behavior (not just data).
✔ The method can use the object’s properties using ``this.``
🔥 Why Do We Need Object Methods?
📌 Objects store data, but methods allow objects to perform actions!
✔ Without methods, objects are just data holders.
✔ With methods, objects can interact with their data and do useful things.

🔥 Why Do We Need this?
📌 The this keyword refers to the object that calls the method.
✔ If we don’t use this, we can't access object properties inside methods.

```js
let cart = {
  items: [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 50 }
  ],
  getTotal: function () {
     let total = 0; // ✅ Start with total
  // ✅ Loop through each item in the array
  for (let i = 0; i < this.items.length; i++) {
    let item = this.items[i]; // ✅ Get the current item
    total = total + item.price; // ✅ Add the item price to total
  }

  return total; // ✅ Return the final total
  /*   return this.items.reduce((total, item) => total + item.price, 0); */
  }
};
```