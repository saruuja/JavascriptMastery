This was The four steps we talket
📌 How do you want to do it?

Step 1: Mini quizzes or questions on each phase

Step 2: Fix broken code examples from each phase

Step 3: Write short challenge snippets (real-world style)

Step 4: I give you a consolidated challenge that mixes all three (Object + Array + Function)
and I done first Step (
Step 1: Mini quizzes or questions on each phase)

# Covers: Objects, Arrays, Functions
# Level: 🟢 Easy → 🟡 Medium → 🔴 Hard.

## 🧠 Phase 1: Mastering Objects
### 🟢 Easy
**Question:** Create a simple object for a student with name and age properties.
**Code:**
```javascript  
let student = {name: "Khalid", age: 20};  
```
**Qusetion:** Access the 'city' property of the object student = { name: 'Ali', city: 'Hargeisa' } using both dot and bracket notation.
**Code:**
```javascript
let student = { 
  name: 'Ali', 
  city: 'Hargeisa' 
  };

  // use dot notation
  console.log(student.name); // Output: Ali
  // use bracket notation
  console.log(student['city']); // Output: Hargeisa .
```
### 🟡 Medium
**Question:** What is the purpose of object destructuring in JavaScript? Show a simple example.
**Answer:**  Extracting Data from Objects Easily  without manually accessing each property.
**Code:**
```javascript example:
let student = { 
  name: 'Ali', 
  city: 'Hargeisa' 
  };
  //use object destructuring
  let { name: stdName, city: stdCity } = student;
  console.log(stdName); // Output: Ali
  console.log(stdCity); // Output: Hargeisa
  //Or
  console.log(`StdName: ${stdName}, From: ${stdCity} city.`); 
  // Output: StdName: Ali, From: Hargeisa city
```
**Question:** Add a method to a student object that returns a formatted string of the student’s details.
**code:** 
```javascript
let student = {
  name: 'Zahuur',
  age: 20,
  city: 'Baladweyne',
  scores : [90, 80, 70],
  status : 'passed',
  details: function(){
    console.log(`Student Name is: ${this.name}, Age: ${this.age} years old, From ${this.city} city, Scores: ${this.scores.join(' - ')} , his/her status: ${this.status}.`);
  }
};
student.details();// Output: Student Name is: Zahuur, Age: 20 years old, From Baladweyne city, Scores: 90 - 80 - 70 , his/her status: passed.
```

**Question:** Create a factory function that returns student objects with name and getName() method.
**code:**
```js
function createStudent(name) {
  return {
    name,
    getName() {
      return `Name: ${this.name}`;
    }
  };
}
 let student = createStudent('Ali');
 console.log(student.getName());// Output: Name: Ali

```

**Question:** How would you merge two objects using the spread operator?
**code:**

```javascript
let userDetails = { name: "Ali", age: 25 };
let userLocation = { country: "Somalia", city: "Mogadishu" };

// Merge objects
let userProfile = { ...userDetails, ...userLocation };
```

**Question:** What is the difference between referencing and copying an object?
**Answer:** The copies are basically new items, with new IDs but with identical content. These items are completely separate from the original items, meaning that any changes in the original items will not be carried out in the new items. On the other hand, a reference is simply a link to the original exercise.


🔴 Hard.

**Question:** Explain the role of the this keyword inside an object method with an example.
**Answer:** The this keyword in JavaScript refers to the object that is currently executing the code. Inside an object method, this refers to the object itself. This allows the method to access and manipulate the object's properties and other methods.
**code**
```javascript
let student = {
  name: 'Zahuur',
  age: 20,
  details: function(){
    console.log(`Student Name is: ${this.name}, Age: ${this.age} years old .`);
    // this refers to the student object 
  }
}
```
**Question:** Create a constructor function for Student that takes name and id, and includes a displayInfo() method.
**code:**
```javascript
function Student(name, id) {
  this.name = name;
  this.id = id;
  //method
  this.displayInfo = function() {
    console.log(`Name: ${this.name}, ID: ${this.id}`);
  }
};
let student1 = new Student('Ali', 123);
student1.displayInfo(); // Output: Name: Ali, ID: 123 
```

**Question:** What are prototypes in JavaScript and how do they allow inheritance?
**Answer:** Prototypes are objects that are used to create a new object. They are used to inherit properties and methods from another object. Prototypes allow inheritance by creating a new object that is a copy of th prototype object. This new object can then be modified without affecting the original object. This is useful for creating a hierarchy of objects where a child object can inherit properties and methods from a parent object. 
**code:**
```js
Student.prototype.sayHello = function () {
  console.log(`Hello, I'm ${this.name}`);
};

```
## 🧠 Phase 2: Mastering Arrays
### 🟢 Easy
**Q:** Create an array of 5 student names.
**Answer:** We can create an array of 5 student names using the following **code:**
```js
let studentNames = ['Ali', 'Zahuur', 'Ahmed', 'Mohammed', ' Abdullah'];
```

**Q**Add a new student to the end of the array using push().
**Code:**
```js
 studentNames.push('Sara');
```

**Q**Remove the first element of an array using shift().
**code:**
```js
studentNames.shift();// Ali
```

### 🟡 Medium
**Q:** Use map() to return an array of name lengths from an array of names.
**Code**
```js
let nameLengths = studentNames.map(name =>{
  return name.length; 
})
console.log(`Name Lengths: ${nameLengths}`); // Output: Name Lengths: 3,4,6,9,9
```

**Q:** Use filter() to get all scores above 80 from a scores array.
**Code:** 
```js
let scores = [90, 70, 85, 95, 60];
let highScores = scores.filter(scoresRate => scoresRate > 80);
console.log(`Scores Above 80: ${highScores}`);// Output: Scores Above 80: 90, 85, 95
```

**Q** Use reduce() to calculate the total of all scores in an array.
**Code:**
```js
let calTotal = scores.reduce((total, score) => {
  return total + score;
}, 0);
console.log(`Total Score: ${calTotal}`);// Output: Total Score: 240
```

**Q:** What is the difference between forEach() and map()?
**Answer:**  `Use forEach()` when you need to perform an action on each element of an array without creating a new array or transforming the existing one.
`Use map()` when you need to create a new array by applying a transformation to each element of the original array.

###  🔴 Hard.
**Q:** Write a function to flatten a nested array of student scores.
**Code:**
```js

function flattenScores(scores) {
  return scores.flat(10);
}
let scores = [[90, [70, 85]], [95, 60], [80 , 90, 70, 85, 95, 60, 80, 90, [70, 85, 95, 60]]];
console.log(flattenScores(scores));
```

**Q:** Use sort() to arrange an array of student objects by their score property in descending order.
**Code:** 
```js
let students = [ { name: 'John', score: 90}, {name: 'Jane', score: 70 }, {name: 'Alice', score: 85}, {name: 'Zahra', score: 100}];

function sortStudents(students) {
  return students.sort((a, b) => b.score - a.score);
  }
  sortStudents(students).forEach(student => console.log(`Name: ${student.name}, score - ${student.score}`)); 

```

**Q:** Explain what a shallow copy is in arrays and how it differs from a deep copy.
**Answer:** A shallow copy of an array is a new array that contains references to the same elements as the original array. This means that if you modify an element in the new array, you ar modifying the original element. A deep copy, on the other hand, creates a new array with new elements that are copies of the original elements. This means that modifying an element in the new array does not affect the original element.

`here's a simple code example for each:`

```js
// Shallow copy (same object references)
let original = [{score: 90}];
let shallow = [...original];
shallow[0].score = 100;
console.log(original[0].score); // 100 (changed!)


// Deep copy (completely new objects)
let deep = JSON.parse(JSON.stringify(original));
deep[0].score = 70;
console.log(original[0].score); // still 100
```


## 🧠 Phase 3: Mastering Functions
### 🟢 Easy.
**Q:** Write a function declaration that greets a user by name.
**Code:**
```js
function greet(name){
  console.log(`Hello, ${name}!`)
};
greet('Cusmaan'); // Output: Hello, Cusmaan!
```

**Q:** What is the difference between function declaration and function expression?
**Answer:**Use function declarations for named functions that can be called before they are defined, and function expressions for anonymous functions that can be called immediately. Function declarations are hoisted to the top of their scope, while function expressions are not 

**Q:** Create an arrow function that returns the square of a number.
**Code:**
```js
//
let squareNumbers = [2, 5, 6, 19]
squareNumbers.map(num =>{
  console.log(` Square of "${num}" is - ${num * num}`)
})
// Or
let square = (x) => x * x; 
console.log(square(9)); // Output: 81
```

### 🟡 Medium.
**Q:** Write a higher-order function that receives a student's name and a callback function.
**Code:**
```js
function studentInfo(name, callback){
  return callback(name);

}
// greet
function greet(name){
  console.log( `Hello, ${name}!`);
};
// goodby
function goodby(name){
  console.log( `Goodby, ${name}!`);
};

studentInfo("Sara", greet);
studentInfo("Zahuur", goodby);
```

**Q:** Create a closure to protect a student’s ID and return only the name.
**Code:**
```js
function protectId(name , id) {
  return{
    getName: () => name,
  }
}
let user = protectId("Sara", "123Ac");
console.log(user.getName()); // Sara
console.log(user.id); // undefined

//Or more than id and name
function studentInfo(studentDeatils) {
  const { id, ...otherInfo } = studentDeatils;
  return {
    getOtherInfo: () => otherInfo,
  }
};
let student = studentInfo({ name: "Sara", id: "123Ac", scores: [89, 100, 85], status: "passed", grade: "A" });
console.log(student.getOtherInfo());
console.log( student.id);


Object.entries(student.getOtherInfo()).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
```

**Q:** What is a pure function? Write an example that calculates an average.
**An:** A pure function is a function that Always returns the same output for the same input.
**code:**
```js
function  add( a, b ){
  return a + b;// pure function
}
//use
console.log(add(2, 3)); // 5 
// avrage
function average(scores) {
  return scores.reduce((a, b) => a + b, 0) / scores.length;
}
console.log(average([90, 80, 100])); // Output: 90

```

**Q:** Use an IIFE to log a welcome message immediately.
**Code:**
```js
(() => {
  console.log("Loading the app...");
})();

```

### 🔴 Hard.
**Q:** Explain how bind() works with this and provide an example.
**Answer:** You have a function that works fine `when called by its object`, but you want to use it somewhere else later — in a different place, in a different time, maybe in a button click, or a delayed function — but still want it to behave as if it’s called by the original object . That’s where `bind()` comes in. It allows you to set the `this` keyword to a specific value, so that a function always behaves as if it were called with a particular this value. It returns a new function that behaves the same way as the original function.

**Code:**
```js
    let userCusman = {
      name: 'Cusmaan'
    };

    let obj = {
      name: 'John',
      sayHello: function () {
        console.log(`Hello, my name is ${this.name}`)
      }
    };
    //this works fine
    obj.sayHello(); // Output: Hello, my name is John

    // but if we call it somewhere else like this
    let helloUser = userCusman.sayHello;
    //helloUser(); // Output: Hello, my name is undefined

    //so to fix this we use bind()
    let greetLater = obj.sayHello.bind(userCusman);
    greetLater();
// Output: Hello, my name is Cusmaan

```

**Q:** Create a reusable function using call() or apply() to send a message to different students.
**code:**
```js
// 1. send message using call()

function sendMessage(name) {
  console.log(`Hello, ${name}! ${this.message}`);
};
const congrateMessage ={ message: "Congratulation You passed the test"};
const reminderMessage = { message: "Don't forget to do your homework"};

// use call()
sendMessage.call(congrateMessage, "Warsame");
sendMessage.call(reminderMessage, "Abdi-Raxmaan");

// 2. send message using apply()
function  studentMessage(message) {
  console.log(`Hello, ${this.name}! ${message}`);
};

let students = [
  { name: "Sara", age: 22 },
  { name: "Zahuur", age: 24 },
  { name: "Khalid", age: 21 },
];

studentMessage.apply(students[0], ["Welcome to our school."]);
studentMessage.apply(students[1], ["Congrats you get an A."]);
studentMessage.apply(students[2], ["Don't forget to do your homework."]);

```


**Q:** What is lexical scope, and how does it relate to closures in JavaScript?
**A:** Lexical scope refers to the scope of a variable based on its location within the codе. In JavaScript, a closure is a function that has access to its own scope, as well as the scope of its outer functions, even when the outer functions have returned. This allows the inner function to "remember" the variables of the outer function, even when the outer function is no longer in scope.
`Lexical scoping establishes the rules of the playground, while closures allow functions to take a piece of that playground with them wherever they`