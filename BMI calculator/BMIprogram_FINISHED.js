//                                          Cleaning Code (DRY)
//                                     Code Refactoring & Bug Fixing

//Program Variable Declaration
let bmi = 0; //let keyword enables variable to be reassigned value later (& called outside of function)
//Initiate Variable holding strings - Program Output | self explanatory (see below) !
const underweight = "Underweight | Risk : High Risk - Malnutrition";
const normal = `Normal | Risk : Low Risk`;
const overweight = `Overweight | Risk : Enahanced Risk`;
const obesse = `Obese | Risk : Medium Risk`;

//NOTE: document.querySelector() - method returns the first element within the document that matches the specified slector or group of selectors. If no matches are found, null is returned
document.querySelector(".calculation").addEventListener("click", function () {
  //
  x = document.querySelector(".Weight").value; ////input field we use the value property to get the actual value
  y = document.querySelector(".Height").value;
  //console.log(x, y);
  bmi = x / (y * y);
  console.log(`BMI-caluculated ${bmi}`);
  document.querySelector(".weight-score").textContent = `${x}`; //textContent property sets or returns the text content of the specified node, and all its descendants
  document.querySelector(".height-score").textContent = `${y}`;
  document.querySelector(".bmi-score").textContent = `${bmi}`;
});
console.log(bmi); //bmi can be called outside the function (useful later in program)
//

//
//UPDATE CLASS.textContent IF == 'MALE' or == 'Female'
//NOTE - Use comparison operator (two options | -1. = or -2. ==) & remember = is an assignment operator in javascript
document.querySelector(`.Health-Status`).addEventListener(`click`, function () {
  if (document.querySelector(".GENDER").value == "MALE") {
    //comparison operator (==) | DO not USE = (assignment)
    document.querySelector(".gender-index").textContent = "M-A-L-E";
  }
});
document.querySelector(`.Health-Status`).addEventListener(`click`, function () {
  if (document.querySelector(".GENDER").value == "FEMALE") {
    //comparison operator (==) | DO not USE = (assignment)
    document.querySelector(".gender-index").textContent = "F-E-M-A-L-E";
  }
});
//

//
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

//
//HEALTH-STATUS | if-else statements|s
document.querySelector(`.Health-Status`).addEventListener(`click`, function () {
  if (bmi < 18.4) {
    console.log(underweight);
    document.querySelector(".health-indicator").textContent = underweight;
  } else if (bmi >= 18.5 && bmi < 24.9) {
    console.log(normal);
    document.querySelector(".health-indicator").textContent = normal;
  } else if (bmi >= 25 && bmi < 29.9) {
    console.log(overweight);
    document.querySelector(".health-indicator").textContent = overweight;
  } else if (bmi >= 30) {
    console.log(obesse);
    document.querySelector(".health-indicator").textContent = obesse;
  }
});
//

//
//Reset-Button
document.querySelector(`.Reset`).addEventListener("click", function () {
  document.querySelector(".weight-score").textContent = 0;
  document.querySelector(".height-score").textContent = 0;
  document.querySelector(".bmi-score").textContent = 0;
  document.querySelector(".gender-index").textContent = undefined;
  document.querySelector(".age-index").textContent = undefined;
  document.querySelector(".health-indicator").textContent = undefined;
});
//
