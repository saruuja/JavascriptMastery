const card = document.getElementById("profileCard");
const highlightBtn = document.getElementById("highlightBtn");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");

//// 1. Apply one-time highlight using .style

highlightBtn.addEventListener("click", function(){
  card.style.backgroundColor = "yellow";
  card.style.border = "2px solid blue";
});

// 2. Toggle dark mode using classList
toggleThemeBtn.addEventListener("click", function(){
  card.classList.toggle("dark-mode");
});

const cardDanger = document.getElementById("cardDanger");

toggleBtn.addEventListener("click", function(){
  cardDanger.classList.toggle("danger-Mode")
})



//nav

const nav = document.getElementById("mainNav");
const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");

// Toggle dark mode
themeBtn.addEventListener("click", () => {
  nav.classList.toggle("dark");
});

// Toggle menu visibility
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("hide");
});
