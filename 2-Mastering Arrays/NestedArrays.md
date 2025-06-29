🔷 1️⃣ What Are Nested Arrays?
A nested array is simply an array inside another array.

🔹 Example:
```js
let numbers = [
  [1, 2],
  [3, 4],
  [5, 6]
];
console.log(numbers[0][1]); // 2
```
🔷 2️⃣ Why Do We Use Them?
Nested arrays are useful when:

You need to group related data (e.g., rows & columns)

You’re working with grid-like structures (chessboards, tables)

You store items with sub-items (e.g., students and their scores)

🔷 3️⃣ How to Access Data
Use double indexing:

```js
let data = [["Ali", 90], ["Zahra", 85]];
console.log(data[1][0]); // "Zahra"
console.log(data[1][1]); // 85
```

🔷 4️⃣ Looping Over Nested Arrays
🔹 Using for...of inside another for...of:
```js
for (let row of numbers) {
  for (let num of row) {
    console.log(num);
  }
}
```

🔹 Using flat():
If you just want a simple one-level array:

```js
let flatList = numbers.flat();
console.log(flatList); // [1, 2, 3, 4, 5, 6]
```

🔷 5️⃣ Real-World Example: Students and Scores
```js
let studentScores = [
  ["Ali", [90, 85, 95]],
  ["Zahra", [80, 88, 82]]
];

console.log(studentScores[0][0]); // "Ali"
console.log(studentScores[0][1][2]); // 95

```

✅ Why Use Nested Arrays?
You use a nested array when your data has multiple levels — like a list inside a list.

💡 Think of real-world relationships:
A classroom with rows of students

A restaurant menu with categories (appetizers, main dishes, desserts)

A city with neighborhoods, and each neighborhood has streets

A product with multiple reviews from users

These are all situations where a single item (like a city or a product) has a list of other items (like streets or reviews).

✅ When Should I Use Nested Arrays?
You should make your array nested when:

Use case	What’s nested in what?	Example
A list of groups	Each group contains items	[[“Ali”, “Ahmed”], [“Sara”, “Layla”]]
Categories with items	Each category contains sub-items	[["Fruit", ["Apple", "Banana"]]]
Matrix or table	Each row contains columns	[[1, 2, 3], [4, 5, 6]]
User with multiple hobbies/friends	Each user has a list inside	[{ name: “Ali”, hobbies: [“Reading”, “Running”] }]

✅ You don't need nested arrays for:
Just a simple list of items (e.g., favoriteFoods = ["Pizza", "Sushi", "Burger"])

Simple key-value objects with one level

✅ Real-Life Trigger (How to Know You Need One):
Ask yourself:

“Does one item contain a list of things?”
If yes → it’s a good time to use a nested array.
✅ Summary
Use nested arrays when:

You have grouped data

One item contains another list

You want to model structure or hierarchy

Use flat arrays when you only have a single-level list.
```js
1️⃣ Classroom with Rows of Students
Each row (group of desks) has a few students.

let classroom = [
  ["Ali", "Ahmed"],       // Row 1
  ["Zahra", "Layla"],     // Row 2
  ["Omar", "Fatima"]      // Row 3
];

console.log(classroom[0]);        // ["Ali", "Ahmed"]
console.log(classroom[0][1]);     // "Ahmed"
🧠 Useful when designing classroom layout, attendance apps, seating charts.

2️⃣ Restaurant Menu with Categories
Each category (appetizers, mains, desserts) contains multiple dishes.

let menu = [
  ["Appetizers", ["Salad", "Soup"]],
  ["Main Dishes", ["Burger", "Steak", "Pasta"]],
  ["Desserts", ["Ice Cream", "Cake"]]
];

console.log(menu[1][1]);     // ["Burger", "Steak", "Pasta"]
console.log(menu[1][1][0]);  // "Burger"
🧠 Useful for building menu apps, ordering systems, or filtering by category.

3️⃣ City with Neighborhoods and Streets
A city object where each neighborhood has a list of streets.


let city = {
  name: "Mogadishu",
  neighborhoods: [
    { name: "Wadajir", streets: ["Street A", "Street B"] },
    { name: "Hodan", streets: ["Street C", "Street D"] }
  ]
};

console.log(city.neighborhoods[0].streets[1]); // "Street B"
🧠 Useful in mapping systems, real estate listings, or GPS apps.

4️⃣ Product with Multiple Reviews
Each product has a list of user reviews.


let product = {
  name: "Smartphone",
  reviews: [
    { user: "Ali", rating: 5, comment: "Excellent!" },
    { user: "Zahra", rating: 4, comment: "Good but expensive." }
  ]
};

console.log(product.reviews[0].user);   // "Ali"
console.log(product.reviews[1].comment); // "Good but expensive."
🧠 Useful for e-commerce apps, product feedback, and review systems.
```
✅ Summary Table
Scenario	Structure Type	Access Example
Classroom rows	Array of arrays	classroom[1][0] → "Zahra"
Menu categories	Nested arrays	menu[2][1][1] → "Cake"
City & streets	Object → array → array	city.neighborhoods[1].streets[0]
Product reviews	Object → array of objects	product.reviews[0].rating