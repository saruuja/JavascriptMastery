
# 🎓 Final Consolidated JavaScript Challenge
**Challenge Title:** 

This is your final Phase Review challenge that combines everything you've mastered so far:
- ✅ Objects
- ✅ Arrays
- ✅ Functions (including closures, HOFs, callbacks)

The theme is based on **Companies / Employees / Tools**, and tests your ability to structure, access, and manipulate data like a real developer.

---

## 💼 Scenario:
You're building a simple company **resource manager**. It tracks a list of employees and the tools assigned to them. You’ll organize the data using objects and arrays, and you’ll build functions that manage, analyze, and display the information.

---

## ✅ Challenge Steps

### 1. Create a Factory Function for Employees (Closures)
- Function: `createEmployee(name, role, salary)`
- Return an object with:
  - Private `salary` (use closure)
  - Methods: `getName()`, `getRole()`, `getSalary()`

---

### 2. Store Employees in an Array
- Create at least 5 employees using `createEmployee()` and store them in an array called `employees`.

---

### 3. Add a Tool Management System (Objects in Array)
- Create a new array `tools`.
- Each tool object should contain:
  - `toolName`
  - `assignedTo` (a name string that matches one of your employees)

---

### 4. Build a Pure Function to Calculate Average Salary
- Function: `calculateAverageSalary(employees)`
- Accepts employee array, uses `getSalary()` method, returns average salary

---

### 5. Display Info for Each Employee (Loop)
- Loop through employees and log a line like:
  `"Employee: [Name] - Role: [Role] - Salary: $___"`

---

### 6. Filter Tools by Employee
- Create a function `getToolsByEmployee(name, tools)`
- It should return a list of tools assigned to that employee

---

### 7. Add a Method and Bind It
- Add a method `introduce()` to one employee like:
  `"Hi, I'm [Name] and I work as a [Role]"`
- Detach the method and fix it using `.bind()`

---

### ✅ Bonus (Optional)
Use an IIFE to immediately display:  
`"🔧 Company System Loaded – Employee Tools Ready"`

---

## 📌 Rules:
- No DOM, no HTML — just JavaScript (console only)
- Use what you've learned: closures, HOFs, filter, map, reduce, objects, arrays, etc.

---

🎯 This is your real-world exam and review checkpoint.
Good luck, and make it clean, modular, and readable like a real dev! 🚀
