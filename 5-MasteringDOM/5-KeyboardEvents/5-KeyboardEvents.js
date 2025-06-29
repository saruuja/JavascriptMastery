const input = document.getElementById("keyboardInput");
const result = document.getElementById("keyResult");

//Detect Key Press
input.addEventListener("keydown", function(event) {
  result.textContent = `you pressed: ${event.key}`;
})



//🔐 Detect Special Keys globally (to document)
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    result.textContent = "Escape was pressed – closing modal";
  }
  if(event.key === "F1") {
    result.textContent = "F1 was pressed – opening help menu";
  }
  if(event.key === "Enter"){
    result.textContent = "Enter was pressed – submitting form";
  }
  if( event.key === "Backspace"){
    result.textContent = "Backspace was pressed – deleting text";
  }
  if(event.key === "ArrowUp"){
    result.textContent = "ArrowUp was pressed – scrolling up";
  }
  if(event.key === "ArrowDown"){
    result.textContent = "ArrowDown was pressed – scrolling down";
  }
  if( event.key === "tab"){
    result.textContent = "Tab was pressed – moving focus";
    
  }
    
  });
