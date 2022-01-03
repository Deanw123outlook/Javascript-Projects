//                                             PROGRAM
//Event-Listener & Event-Handler -->> BMI button
document.querySelector(".calculation").addEventListener("click", function () {
  x = document.querySelector(".Weight").value;
  y = document.querySelector(".Height").value;
  //console.log(x, y);
  bMI = x / (y * y);
  console.log(`BMI-caluculated ${bMI}`);
  document.querySelector(".weight-score").textContent = `${x}`;
  document.querySelector(".height-score").textContent = `${y}`;
  document.querySelector(".bmi-score").value = `${bMI}`;
  //UPDATE CLASS.textContent IF string 'Female'
  document
    .querySelector(`.Health-Status`)
    .addEventListener(`click`, function () {
      if ((document.querySelector(".GENDER").textContent = "female")) {
        console.log("Female");
        document.querySelector(".gender-index").textContent = "Female";
      }
    });
  //UPDATE CLASS.textContent IF string 'Male'
  document
    .querySelector(`.Health-Status`)
    .addEventListener(`click`, function () {
      if ((document.querySelector(".GENDER").textContent = "male")) {
        console.log("male");
        document.querySelector(".gender-index").textContent = "Male";
      }
    });

  //UPDATE AGE INDEX - CHILD
  document
    .querySelector(`.Health-Status`)
    .addEventListener("click", function () {
      if (document.querySelector(".AGE").value <= 17) {
        document.querySelector(".age-index").textContent = "Child";
      }
    });
  //UPDATE AGE INDEX - ADULT
  document
    .querySelector(`.Health-Status`)
    .addEventListener("click", function () {
      if (document.querySelector(".AGE").value >= 18) {
        document.querySelector(".age-index").textContent = "Adult";
      }
    });
  //Initiate Variable holding strings - self explanatory (see below) !
  const underweight = "Underweight | Risk : High Risk - Malnutrition";
  const normal = `Normal | Risk : Low Risk`;
  const overweight = `Overweight | Risk : Enahanced Risk`;
  const obesse = `Obese | Risk : Medium Risk`;
  //HEALTH-STATUS | if-else statements|s
  document
    .querySelector(`.Health-Status`)
    .addEventListener(`click`, function () {
      if (bMI < 18.4) {
        console.log(underweight);
        document.querySelector(".health-indicator").textContent = underweight;
      } else if (bMI >= 18.5 && bMI < 24.9) {
        console.log(normal);
        document.querySelector(".health-indicator").textContent = normal;
      } else if (bMI >= 25 && bMI < 29.9) {
        console.log(overweight);
        document.querySelector(".health-indicator").textContent = overweight;
      } else if (bMI >= 30) {
        console.log(obesse);
        document.querySelector(".health-indicator").textContent = obesse;
      }
    });
});
//Reset-Button
document.querySelector(`.Reset`).addEventListener("click", function () {
  document.querySelector(".weight-score").textContent = 0;
  document.querySelector(".height-score").textContent = 0;
  document.querySelector(".bmi-score").textContent = 0;
  document.querySelector(".gender-index").textContent = undefined;
  document.querySelector(".age-index").textContent = undefined;
  document.querySelector(".health-indicator").textContent = undefined;
});
