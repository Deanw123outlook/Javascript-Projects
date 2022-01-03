//BMI calculator : Java-script file that will interact with HTML file

//Initiate Variable holding strings - self explanatory below !
const underweight = "Underweight | Risk : High Risk - Malnutrition";
const normal = `Normal | Risk : Low Risk`;
const overweight = `Overweight | Risk : Enahanced Risk`;
const obesse = `Obese | Risk : Medium Risk`;

//input > value property to get the actual property
document.querySelector(".Height").value = 0;
document.querySelector(".Weight").value = 0;
//console.log(document.querySelector(".Height").value);

//Event-Listener & Event-Handler -->> BMI button
document.querySelector(".calculation").addEventListener("click", function () {
  x = document.querySelector(".Weight").value;
  y = document.querySelector(".Height").value;
  //console.log(x, y);
  bodyMassIndex = x / (y * y);
  console.log(`CHECK ${bodyMassIndex}`);
  document.querySelector(".weight-score").textContent = `${x}`;
  document.querySelector(".height-score").textContent = `${y}`;
  document.querySelector(".bmi-score").textContent = `${bodyMassIndex}`; //
  return bodyMassIndex;
});

console.log(`.bmi-score`.textContent); // FUNCTION - scope testing

/*
NOTE
Function Scope
JavaScript has function scope: Each function creates a new scope.
Variables defined inside a function are not accessible (visible) from outside the function.

Local scope
Global scope
JavaScript has function scope: Each function creates a new scope. Scope determines the accessibility 
(visibility) of these variables. Variables defined inside a function are not accessible (visible) from 
outside the function.

Local JavaScript Variables
Variables declared within a JavaScript function, become LOCAL to the function. Local variables have Function 
scope: They can only be accessed from within the function.  Since local variables are only recognized inside 
their functions, variables with the same name can be used in different functions. Local variables are created 
when a function starts, and deleted when the function is completed.

Global JavaScript Variables
A variable declared outside a function, becomes GLOBAL. A global variable has global scope: All scripts 
and functions on a web page can access it.

if (bodyMassIndex < 18.4) {
  console.log(underweight);
} else if (bodyMassIndex >= 18.5 && bodyMassIndex < 24.9) {
  console.log(normal);
} else if (bodyMassIndex >= 25 && bodyMassIndex < 29.9) {
  console.log(overweight);
} else if (bodyMassIndex >= 30) {
  console.log(obesse);
}


//UPDATE CLASS IF MALE
document.querySelector(`.Health-Status`).addEventListener(`click`, function () {
  genderX = document.querySelector(".GENDER").textContent = "male";
  //console.log(genderX);
  if ((genderX.textContent = "male")) {
    console.log("Male");
    document.querySelector(".gender-index").textContent = "Male";
  }
});
//UPDATE CLASS IF FEMALE
document.querySelector(`.Health-Status`).addEventListener(`click`, function () {
  genderY = document.querySelector(".GENDER").textContent = "female";
  //console.log(genderY);
  if ((genderY.textContent = "female")) {
    console.log("Female");
    document.querySelector(".gender-index").textContent = "female";
  }
});
//UPDATE AGE INDEX - CHILD
document.querySelector(`.Health-Status`).addEventListener("click", function () {
  if (document.querySelector(".AGE").value <= 17) {
    document.querySelector(".age-index").textContent = "Child";
  }
});
//UPDATE AGE INDEX - ADULT
document.querySelector(`.Health-Status`).addEventListener("click", function () {
  if (document.querySelector(".AGE").value >= 18) {
    document.querySelector(".age-index").textContent = "Adult";
  }
});
//
//                                          Program Output (Medical-Risk)
*/
