"use strict";
//Declare variables holding classes
const modal = document.querySelector(".MODAL");
const overlay = document.querySelector(".OVERLAY");
const btnCloseModal = document.querySelector(".CLOSE-MODAL");
const btnsOpenModal = document.querySelectorAll(".show-modal");

//                                            Testing & Analysis
console.log(btnsOpenModal);
for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent);
}

//Click Event & EVent Handler
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", function () {
    console.log(
      `Open Modal Button - ${btnsOpenModal[i].textContent} - clicked !`
    );
    modal.classList.remove("HIDDEN");
    overlay.classList.remove("HIDDEN");
  });
  btnCloseModal.addEventListener("click", function () {
    console.log(`Close Modal Button Clicked`);
    modal.classList.add("HIDDEN");
    overlay.classList.add("HIDDEN");
  });
  overlay.addEventListener("click", function () {
    console.log(`Close Modal Button Clicked`);
    modal.classList.add("HIDDEN");
    overlay.classList.add("HIDDEN");
  });
}
