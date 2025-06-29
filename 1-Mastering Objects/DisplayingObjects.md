✅ Great! Let's dive deep into "Displaying Objects" in JavaScript! 🚀🔥

When working with objects, sometimes we need to display, extract, or loop through the properties and values. JavaScript provides multiple ways to do this.

📌 1️⃣ Using console.log() (Basic Method)
The simplest way to display an object is to log it to the console.
✔ Problem: This works but doesn’t give us much control over the output.

📌 2️⃣ Object.keys() → Get All Property Names (Keys)
✔ This returns an array of all the keys (property names) in an object.

✔ Useful when looping over objects dynamically!

📌 3️⃣ Object.values() → Get All Property Values
✔ This returns an array of all the values in an object.

✔ Useful when we need only the values (e.g., sending data to a server).

📌 4️⃣ Object.entries() → Get Key-Value Pairs
✔ This returns an array of arrays, where each inner array contains a key-value pair.

✔ Useful when looping through objects!

📌 5️⃣ for...in Loop → Loop Through Object Properties
✔ ``Best way to iterate through all keys and values in an object``.

✔ Best when you need to display each property dynamically!

**is js object iterate part of displaying objects?**
✅ Yes! Iterating through objects is part of "Displaying Objects" in JavaScript.

When we want to display object data dynamically, we often need to iterate over the properties. This is useful when:
✔ We don’t know the property names beforehand.
✔ We want to extract and display all values dynamically.
✔ We need to modify or analyze object data efficiently.

📌 Ways to Iterate Through Objects
1️⃣ for...in Loop → Best for Iterating Over Objects

✔ Loops through each key-value pair in the object.
✔ Best for displaying properties dynamically.
Example:
```js
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

```
2️⃣ Object.keys() → Get All Property Names (Keys)
✔ Returns an array of all keys.
✔ Can be used with .forEach() to loop through them.

✔ Example

```js
Object.keys(user).forEach(key => {
  console.log(`${key}: ${user[key]}`);
});
📌 Output: (Same as for...in)
```

3️⃣ Object.values() → Get All Property Values
✔ Returns an array of all values in the object.


4️⃣ Object.entries() → Get Key-Value Pairs
✔ Returns an array of arrays, where each inner array contains [key, value].
✔ Best for displaying structured data.

✔ Example
```js
Object.entries(user).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
📌 Output: (Same as for...in)

name: Ali
age: 25
country: Somalia
✔ Useful when working with tables, lists, or structured data.
```

📌 Summary
Method	         Use Case	                        Returns
for...in	       Best for iterating over objects	Each key-value pair
Object.keys(obj)	Get all property names	        Array of keys
Object.values(obj)	Get all values	              Array of values
Object.entries(obj)	Get all key-value pairs	      Array of [key, value] pairs

**oky pls i need to explain me very expand way everything related OBJECT DISPLAYING FROM beginner to pro developer i mean how real world developers display objects every useful steps.**

✅ Deep Dive: How Developers Display Objects in JavaScript (From Beginner to Pro) 🚀🔥

📌 Why Is Object Displaying Important?
In real-world applications, objects are used to store and manage data. But how do we display them efficiently?
✔ Frontend apps (React, Vue, Angular) → Need to display user data dynamically.
✔ Backend apps (Node.js, Express) → Format data for APIs & databases.
✔ Debugging & Development → Displaying objects helps test functionality.

📌  Displaying Objects in Real-World Applications
✅ In real-world development, objects are often displayed in the browser, APIs, or databases.

✔ 4.1 Displaying Objects in HTML
💡 Scenario: You want to show user info on a webpage.
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Display User Info</title>
</head>
<body>
  <h1 id="userInfo"></h1>

  <script>
    let user = { name: "Ali", age: 25, country: "Somalia" };
    document.getElementById("userInfo").innerText = `User: ${user.name}, Age: ${user.age}, Country: ${user.country}`;
  </script>
</body>
</html>
```
✔ 4.2 Displaying Objects in a Table (For Reports, Dashboards)
```html
<table border="1">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody id="userTable">
  </tbody>
</table>

<script>
  let user = { name: "Ali", age: 25, country: "Somalia" };

  let row = `<tr>
              <td>${user.name}</td>
              <td>${user.age}</td>
              <td>${user.country}</td>
            </tr>`;

  document.getElementById("userTable").innerHTML = row;
</script>

```
📌 Scenario: Displaying an Array Inside an Object
Objects can contain arrays as properties. We need to display each item in different ways.

📌 1️⃣ Displaying an Array Inside an Object
🔹 We can access the array directly and use .join(), .forEach(), or for...of.

📌 2️⃣ Displaying an Object Inside an Object
🔹 When an object has another object inside (nested object), we use dot notation or Object.entries().
✔ Method 1: Using dot notation (Direct Access)
```js
   console.log(`country: ${student.address.country}`)
  console.log(`country: ${student.address.city}`)
  ```
 ✔ Method 2: Using Object.entries() (Looping Through Nested Objects)
 ```javascript
   console.log('address:')
  Object.entries(student.address).forEach(([key, value])=>{
    console.log(`${key}: ${value}`);})
```

📌 3️⃣ Displaying Everything (Object + Nested Object + Array).

We can use a combination of methods to display everything. We can use Object.entries() to loop through 
the nested object and then use .join() or .forEach() to display the array. Here is an example: 

```js
let student = { 
  name: "John",
  age: 20,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
  hobbies: ["reading", "swimming", "coding"],
  };

console.log('student:')
Object.entries(student).forEach(([key, value]) => {
  if (typeof value === 'object') { // Check if value is an object 
  console.log(`${key}:`)
  Object.entries(value).forEach(([nestedKey, nestedValue]) => { // Loop through nested object 
  console.log(`  ${nestedKey}: ${nestedValue}`); // Display nested object properties
  })
  } else if (Array.isArray(value)) { // Check if value is an array
  console.log(`${key}: ${value.join(', ')}`); // Display array items 
  } else { // If value is not an object or array, display it as is 
  console.log(`${key}: ${value}`); // Display value as is 
  }

});