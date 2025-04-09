📌JavaScript Object Constructors.
💡 Now, instead of manually creating multiple objects,
We will learn how to create multiple objects dynamically using a constructor function!

✔ What You'll Learn Today:
✔ 1️⃣ What is an Object Constructor?
✔ 2️⃣ How to Create Objects Using a Constructor Function
✔ 3️⃣ The new Keyword → How it creates new objects
✔ 4️⃣ Adding Methods Inside a Constructor

📌 Step 1: What is an Object Constructor?

💡 A constructor function is a special function used to create multiple objects with the same properties and methods dynamically.
✔ Instead of writing separate objects manually, we use a constructor to generate objects automatically.

❌ Problem: Creating Objects Manually (NOT Efficient)
Imagine we are building a bank system where users have accounts.

Without a constructor, we must manually create objects one by one like this:

```js
 let account1 = { owner: "Sara", balance: 10000 };
let account2 = { owner: "Ali", balance: 5000 };
let account3 = { owner: "Fatima", balance: 2000 };

```
🔴 What's wrong with this approach?
If we need 100 accounts, we have to write 100 objects manually.
Every object has the same structure (owner & balance), so it's repetitive.
If we want to update how accounts work (e.g., add interest), we must update each object manually.
❌ This is BAD practice.


💡 Instead of manually creating objects, we should use a constructor function to generate them dynamically!


📌 Step 2: Creating an Object Constructor
-How Does a Constructor Function Work?
💡 A constructor function creates objects dynamically.

A constructor function acts as a blueprint for creating objects.
✔ It is a regular JavaScript function, but by convention, its name starts with a capital letter.

```js
function BankAccount(owner, balance) {
  this.owner = owner;  // Assign the owner's name
  this.balance = balance; // Assign the account balance
}

```

# 📌 Breaking it Down:

1. function BankAccount(owner, balance) { ... }
  - This function is our blueprint for creating bank accounts.
2. Inside the function, we use this keyword:
  - this.owner = owner; → Assigns the owner value to the object.
  - this.balance = balance; → Assigns the balance value to the object.
3. The function doesn’t return anything directly!
  - Instead, it prepares the structure for future objects.

📌 Step 3: Creating Multiple Objects Using new.
We use the new keyword to create objects from the constructor.
💡 Think of new as a machine that "builds" new objects using the constructor blueprint.

```javascript
let account1 = new BankAccount("Sara", 10000);
let account2 = new BankAccount("Ali", 5000);

console.log(account1.owner); // Sara
 console.log(account2.balance); // 5000

 ✔ The new keyword creates a new object each time we call the constructor.
✔ Now, we can create as many bank accounts as we want!
```

📌 Why is new Important?
💡 The new keyword does 3 important things:
✔ 1️⃣ Creates a brand-new empty object ({})
✔ 2️⃣ Calls the constructor function (BankAccount) and assigns values to this
✔ 3️⃣ Returns the new object automatically

🔴 Problem:

Without new, the function is called like a regular function, so this doesn't refer to the new object.
The function doesn't return anything, so account1 is undefined.

📌 Checking the Objects
Once we create objects, we can access their properties normally:
```js
console.log(account1.owner);   // Output: "Sara"
console.log(account1.balance); // Output: 10000
console.log(account2.owner);   // Output: "Ali"
console.log(account2.balance); // Output: 5000

```
✔ Each object is separate from the others!
✔ Each one has its own owner and balance values.

📌 Full Example (With Console Testing)
```js
// ✅ Constructor Function for Creating Bank Accounts
function BankAccount(owner, balance) {
  this.owner = owner;   // Assign the owner's name
  this.balance = balance; // Assign the account balance
}

// ✅ Creating multiple objects using the constructor
let account1 = new BankAccount("Sara", 10000);
let account2 = new BankAccount("Ali", 5000);
let account3 = new BankAccount("Fatima", 2000);

// ✅ Checking the objects
console.log(account1.owner);   // Output: "Sara"
console.log(account1.balance); // Output: 10000
console.log(account2.owner);   // Output: "Ali"
console.log(account2.balance); // Output: 5000
console.log(account3.owner);   // Output: "Fatima"
console.log(account3.balance); // Output: 2000

```

📌 Final Summary
✅ 1️⃣ What is a Constructor Function?

A function that creates objects dynamically instead of manually writing them.
✅ 2️⃣ How Does this Work?

this.owner = owner; → Sets the owner property of the new object.
this.balance = balance; → Sets the balance property of the new object.
✅ 3️⃣ Why Do We Use new?

new creates a new object and automatically assigns values.
Without new, this doesn’t work properly.
✅ 4️⃣ What’s the Benefit?

We can now create unlimited objects with a single function.

**i don't understand what is the diffrence if i use new like this let account1 = new BankAccount("Sara", 10000); or  let account1 = { owner: "Sara", balance: 10000 }; i use both let to create a new variable and i make   assign and initializing so what is the point**

✅ This is an excellent question! 🚀🔥
Let’s go step by step to understand why new is important and how it differs from manually creating objects.

📌 The Key Difference: Manual Object vs. Object Constructor
At first glance, these two ways look similar, but they have a huge difference in how they work internally.

  **Feature**
1. Code Reusability
2. Adding Methods
3. Creating Multiple  Objects
4. Scalability
5. Using this Keyword
      ## Manually Created Object
  ❌ Not reusable (must rewrite for every new object)
  ❌ Not reusable (must rewrite for every new object)
  ❌ Not reusable (must rewrite for every new object)
  ❌ Hard for large applications
  ❌ Not used
    ## Constructor Function (new)
   ✅ Reusable (create multiple objects with a single function)
   ✅ Just modify the constructor, and all objects update automatically
   ✅ Fast & dynamic
   ✅ Works well for large projects
   ✅ Uses this keyword to refer to the specific object being created


   📌 Step 4: Adding Methods Inside a Constructor
💡 Instead of just storing owner and balance, we can also add methods like deposit() and withdraw().
📌 Step 5: Creating Multiple Accounts & Using Methods
Now, we can store multiple bank accounts inside an array (customers), and each account can use the methods! 
