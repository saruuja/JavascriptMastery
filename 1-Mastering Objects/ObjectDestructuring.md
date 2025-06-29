1️⃣ Object Destructuring: Extracting Data from Objects Easily
📌 What is Object Destructuring?
Object destructuring is a shortcut that allows you to extract values from an object into separate variables without manually accessing each property.

🔹 Real-World Example:
Imagine you are working with a user profile object containing a name, age, and country. Instead of writing user.name, user.age, user.country separately, destructuring allows you to extract them all at once.

🔹 Example Without Destructuring (Old Way)
```js
let user = {
  name: "Ali",
  age: 25,
  country: "Somalia",
};

// Accessing values manually
let userName = user.name;
let userAge = user.age;
let userCountry = user.country;

console.log(userName, userAge, userCountry); // Ali 25 Somalia
❌ Problem: Too much repetition.
✅ Solution? Use Destructuring!
```

```js
let user = {
  name: "Ali",
  age: 25,
  country: "Somalia",
};

// Destructure the object
let { name, age, country } = user;

console.log(`Name is ${name}, Age - ${age} years old, from ${country}.`); // Name is Ali, Age - 25 years old, from Somalia.

```
🔥 Why is this better?
✔ Shorter & cleaner
✔ Extract multiple properties at once
✔ No need to repeat user.name, user.age

🔹 Destructuring with Different Variable Names
Sometimes, we want to use different variable names instead of the original object keys.
```js
let user = {
  name: "Ali",
  age: 25,
  country: "Somalia",
};

// Rename variables while destructuring
let { name: userName, age: userAge } = user;

console.log(userName, userAge); // Ali 25
✅ Why use this?
✔ When you want custom variable names
✔ When working with APIs that return data with unclear property names
```
🔹 Destructuring with Default Values
Sometimes, an object may not have a certain property. We can set a default value during destructuring.

```js
let user = {
  name: "Ali",
  age: 25
};

// Extracting `country`, but it's missing in the object
let { name, age, country = "Unknown" } = user;

console.log(name, age, country); // Ali 25 Unknown
✅ Why use this?
✔ Prevents undefined values
✔ Useful when dealing with missing data
```

2️⃣ Spread Operator (...): Copying & Merging Objects
📌 What is the Spread Operator?
The ... (spread operator) is used to copy, merge, and manipulate objects without modifying the original object.

🔹 Real-World Use Cases
✔ Copying an object without affecting the original
✔ Merging multiple objects
✔ Updating an object without modifying the original data

🔹 Example 1: Copying an Object

```js
let person = { name: "Sara", age: 22 };

// Copy the object using the spread operator
let personCopy = { ...person };

console.log(personCopy); // { name: "Sara", age: 22 }
✅ Why use this?
✔ Ensures that changes to personCopy do not affect the original person object
```

🔹 Example 2: Merging Two Objects
```js
let userDetails = { name: "Ali", age: 25 };
let userLocation = { country: "Somalia", city: "Mogadishu" };

// Merge objects
let userProfile = { ...userDetails, ...userLocation };

console.log(userProfile); 
// { name: "Ali", age: 25, country: "Somalia", city: "Mogadishu" }
Why use this?
✔ When working with APIs that return data in multiple parts
✔ When combining user details from different sources
```

🔹 Example 3: Updating an Object Without Changing the Original

```js
let product = { name: "Phone", price: 500 };

// Create a new object with updated price
let updatedProduct = { ...product, price: 450 };

console.log(updatedProduct); // { name: "Phone", price: 450 }
console.log(product); // { name: "Phone", price: 500 } (Original remains unchanged)
✅ Why use this?
✔ Useful when updating state in frameworks like React
✔ Ensures immutability (not modifying the original object)
```