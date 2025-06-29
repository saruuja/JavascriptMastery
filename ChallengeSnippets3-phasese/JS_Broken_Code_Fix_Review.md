
# 🔧 JavaScript Review - Step 2: Fix Broken Code Examples

Each phase contains 5 broken code examples:
- 🟢 2 Easy
- 🟡 2 Medium
- 🔴 1 Hard

---

## 📘 Phase 1: Objects

### 🟢 Easy 1
```js
let student = {
  name = 'Ali',
  age: 20
};
console.log(student.name);
```
> ❌ Fix the object syntax error.
> **Fixed code**
```js
let student = {
  name: 'Ali', // not name =
}
```
---

### 🟢 Easy 2
```js
let student = {
  name: 'Amina',
  city: 'Mogadishu'
};


console.log(student.cityName);
```
> ❌ The property being accessed doesn’t exist.
> **Fixed code**
```js
let student = {
  name: 'Amina',
  city: 'Mogadishu'
  };
  console.log(student.city); // not cityName
  //or 
  let cityName = student.city;
  console.log(cityName);
```
---

### 🟡 Medium 1
**Fixed code**
```js
let teacher = {
  name: 'Mr. Hassan',
  subject: 'Math',
  introduce: () => {
    console.log(`Hello, I teach ${this.subject}`);
  }
};

teacher.introduce();
```
> ❌ Arrow function is breaking `this`. Fix it.
> **Fixed code**
```js
let teacher = {
  name: 'Mr. Hassan',
  subject: 'Math',
  introduce: function() {
    console.log(`Hello, I teach ${this.subject}`);// or use arrow function with bind 
  }
  };
  teacher.introduce(); // 
```
---

### 🟡 Medium 2
```js
let user = {
  name: 'Sara',
  greet() {
    return "Hello, " + name;
  }
};

console.log(user.greet());
```
> ❌ `name` is not defined. Fix it using the correct reference.
> **Fixed code**
```js
let user = {
  name: 'Sara',
  greet() {
    return "Hello, " + this.name;
  }
};
console.log(user.greet());
```
---

### 🔴 Hard
```js
function Student(name, id) {
  name = name;
  id = id;
}

let s1 = new Student('Layla', 'S101');
console.log(s1.name);
```
> ❌ Constructor doesn’t store the values correctly.
**Fixed code**
```js
function Student(name, id) {
  this.name = name;
  this.id = id;
}
let s1 = new Student('Layla', 'S101');
console.log(s1.name);
```
---

## 📗 Phase 2: Arrays

### 🟢 Easy 1
```js
let names = ['Ali', 'Layla', 'Ahmed'];
//names.push = 'Sara';
//**Fixed code:**
names.push('Sara');

console.log(names);
```
> ❌ Push is used incorrectly.

---

### 🟢 Easy 2
```js
let scores = [90, 85, 70];

//console.log(scores[3]);
// becouse the array is 0-indexed and the array has 3 elements
// so the last element is at index 2
//**Fixed code:**
console.log(scores[2]);
```
> ❌ This returns undefined. What’s wrong?

---

### 🟡 Medium 1
```js
let numbers = [1, 2, 3, 4];
let double = numbers.map(num => {
  num * 2;// this is not returning anything becuase map returns a new array and num is not being returned 
});
console.log(double);

```
> ❌ This returns an array of undefined. Fix it.
```js
//** Fixed code:**
let numbers = [1, 2, 3, 4];
let double = numbers.map(num => num * 2);
console.log(double);
```
---

### 🟡 Medium 2
```js
let items = ['pen', 'book', 'eraser'];
//items.pop('pen');// this will not remove the 'pen' because pop removes the last element 
//**Fixed code:**
//items.shift('pen');
//or
/* items.splice(0, 1); */

//more safe and clean
items.splice(items.indexOf('pen'), 1);
console.log(items);// ['book', 'eraser']
```
> ❌ `pop()` doesn't take an argument.

---

### 🔴 Hard
```js
let students = [
  { name: 'Ali', score: 90 },
  { name: 'Amina', score: 80 },
  { name: 'Zahra', score: 100 }
];

students.sort((a, b) => {
  return a > b;
});
console.log(students);
```
> ❌ This doesn't sort by score correctly. Fix the compare logic.
 **Fixed code:**
```js
   let students = [
  { name: 'Ali', score: 90 },
  { name: 'Amina', score: 80 },
  { name: 'Zahra', score: 100 }
];
// sort  by score in ascending order.
students.sort((a, b) => {
  return a.score - b.score;
});
// display  only for fun this way
for( let student of students){
for( let key in student){
  console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${student[key]}`);
}
}
```

---

## 📙 Phase 3: Functions

### 🟢 Easy 1
```js
function sayHi(name) {
  //console.log("Hi" name);// use comma to separate argument and string or use template literals `` or mybe use string concatenation + .
  console.log(`Hi ${name}`);
}
sayHi('Zahuur');
```
> ❌ Syntax error. Fix it.

---

### 🟢 Easy 2
```js
let greet = function(name) {
  return `Hello, ${name}`;
}

//greet("Ali");// use console.log to display the result
//console.log(name);// this will throw an error because name is not defined 
/* fixed code */
console.log(greet("Ali")); 
```
> ❌ `name` is not defined globally. What’s wrong?

---

### 🟡 Medium 1
```js
function processStudent(name, callback) {
 // return callback;// you need to call the callback function. like this.
return callback(name);
}
function greet(name) {
  return `Hello, ${name}`;
}

console.log(processStudent("Sara", greet));
console.log( processStudent("samara", greet) );
```
> ❌ `callback` isn’t being called. Fix it.

---

### 🟡 Medium 2
```js
function createCounter() {
  let count = 0;
  return function increase() {
    count++;// add a return statement to return the new count
    return count;
  }
}

let counter = createCounter();
console.log(counter());
console.log(counter());
```
> ❌ Function returns undefined. Fix it to return the updated count.

---

### 🔴 Hard
```js
let student = {
  name: "Khalid",
  showName: function() {
    console.log(`Name: ${this.name}`);
  }
};

let show = student.showName;
show();
```
> ❌ `this` is lost. Fix it using `.bind()`.

**Solution**

```js
let show = student.showName.bind(student);
show();
```
