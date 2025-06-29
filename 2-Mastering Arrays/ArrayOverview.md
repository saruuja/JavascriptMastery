✅ 1️⃣ What Is an Array (And Why You NEED It)
🔹 What is an array?
An array is a special variable that can hold multiple values in a single variable name. Each value in the array is called an element, and each element has a position (index) that starts from 0.

🧠 Why arrays are useful in real projects:
Store lists of data (names, products, users, tasks, etc.)

Process bulk data (e.g., loop through a list of students or products)

Organize data structures like tables, form fields, or API responses

✅ 2️⃣ How to Create Arrays

🔹 Method 1: Using []
```js
let fruits = ["Apple", "Banana", "Mango"];
```
🔹 Method 2: Using the Array constructor
```js
let fruits = new Array("Apple", "Banana", "Mango");
🧠 Use [] – it's cleaner and more common!
```
✅ 3️⃣ Accessing Values in Arrays
```js
let colors = ["Red", "Green", "Blue", "Yellow"];

console.log(colors[0]); // Red
console.log(colors[2]); // Blue

```
- ✅ Indexing starts at 0

- ✅ Access a value with [index]

- ✅ .length gives total number of elements
```js
console.log(colors.length); // 4
console.log(colors[colors.length - 1]);// Yellow
```
✅ 4️⃣ When Do We Use Arrays in Real Life?
Scenario	         Why Array?
Shopping cart	     Store list of items,
Quiz app	         Store list of questions/answers
API fetching users	Response is an array of users
Movie app	          Store titles, ratings, genres
Grades system	Hold  test scores, attendance, etc.
