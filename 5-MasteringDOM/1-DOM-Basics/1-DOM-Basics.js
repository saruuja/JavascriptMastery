/* select all */
const title = document.getElementById("dashboardTitle");
const tagline = document.querySelector(".userTagline");
const allTasks = document.querySelectorAll(".task");
const input = document.getElementById("taskInput");

/* console.log("TITLE:", title.textContent);
console.log("TAGLINE:", tagline.textContent);

//read one by one 
console.log("TASK 2:", allTasks[1].textContent);

//or loop  
allTasks.forEach((task) => {
  console.log("TASK:", task.textContent);
});
 */

//2. Reading & Updating DOM Content

let mainTitle = document.getElementById("mainTitle");
let decription = document.querySelector(".description");
let notes = document.querySelectorAll(".note");
let noteInput = document.getElementById("noteInput");

// select the header
mainTitle.textContent = "Welcome to my notes app";

//update a formate message
decription.innerHTML = "You have <strong> 3 notes</strong> saved.";

//// Fill in each note (simulate loaded data)
/* notes.forEach((note, index) => {
  note.textContent = `Note ${index + 1}: This is a note`;
}) */

// or Use saved data
const savedNotes = ["Finish Dom lesson", "Review SASS project", "Deploy final challenge"];
notes.forEach((note, index) => {
  note.textContent = savedNotes[index];
})

// update the input field
noteInput.value = "Write a new note ...";