/* Selet all id's and classes from the html file */
const form = document.getElementById("newsletterForm");
const nameInput = document.getElementById("nameInput");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();//stop default reload of the page


  //read the value of the input field
  const userName = nameInput.value;

  // check if the input field is not empty
  if (userName === "") {
    result.textContent = "Please enter your name";
  } else {
    result.textContent = `Thanks for subscribing, ${userName}!`;

  }

  //clear the input field
  nameInput.value = "";
});

/* challenge here */
// .value alway returns a string, even if the input field is a number
const newForm = document.getElementById("form");
const nameField = document.getElementById("nameField");
const ageField = document.getElementById("ageField");
const emailField = document.getElementById("mailField");
const textArea = document.getElementById("txtFeedback");
const termsCheckbox = document.getElementById("termCheck");
let cong = document.getElementById("congrates");

newForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Now all values are read at the right time
  const name = nameField.value;
  const age = parseInt(ageField.value); // parse inside the function
  const email = emailField.value;
  const feedback = textArea.value;
  const termsAccepted = termsCheckbox.checked;

  // Output to check your values
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Email:", email);
  console.log("Feedback:", feedback);
  console.log("Subscribed to Newsletter:", termsAccepted);
/*   if (
    name === "" ||
    age === 0 ||
    email === "" ||
    feedback === "" ||
    !termsAccepted
  ) {
    cong.textContent = "Please fill out the form completely";
      //cong.classList.add("error");
   // cong.classList.remove("success");
    cong.classList.toggle("error");

  } else {
    cong.textContent = `Thanks for subscribing!, ${name}`;
   // cong.classList.remove("error");
  //  cong.classList.add("success"); 
    cong.classList.toggle("success");
  } */

 // Best practice:
 const formIsValid =
  name !== "" &&
  age > 0 &&
  email !== "" &&
  feedback !== "" &&
  termsAccepted;

cong.classList.toggle("success", formIsValid);
cong.classList.toggle("error", !formIsValid);

cong.textContent = formIsValid
  ? `Thanks for subscribing, ${name}!`
  : "Please fill out the form completely.";

});
 