const header = document.getElementById('header');
const changeBtn = document.getElementById('changeBtn');

// change header title 

changeBtn.addEventListener("click", () => {
  header.textContent = "Title Changed!";
});

// Task 

const greeting = document.getElementById('greeting');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

//write the code 
btn1.addEventListener("click", function(){
  greeting.textContent = "Hi, Sara!";
});

//hide the greeting
btn2.addEventListener("click", ()=>{
  greeting.style.display = "none";
 
});


// 🧠 JS: Pure Logic 
//Show/hide an element
const panel = document.getElementById("panel");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", ()=>{
  if(panel.style.display === "none"){
    panel.style.display = "block";
    toggleBtn.textContent = "Hide";

  }
  else{
    panel.style.display = "none";
    toggleBtn.textContent = "Show";
  }
})