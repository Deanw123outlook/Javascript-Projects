"use strict";
//Declare variables holding html classes (DRY & Clean code)
const modal = document.querySelector(".MODAL");
const overlay = document.querySelector(".OVERLAY");
const btnCloseModal = document.querySelector(".CLOSE-MODAL");
const btnsOpenModal = document.querySelectorAll(".show-modal");

//Declare functions (Cleaner Code)
const m_Func_Add = function () {
  modal.classList.add("HIDDEN");
  overlay.classList.add("HIDDEN");
};
const m_Func_Remove = function () {
  modal.classList.remove("HIDDEN");
  overlay.classList.remove("HIDDEN");
};

//                                Click Event & EVent Handler (Operating-Modal-web-page)

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", m_Func_Remove);
  btnCloseModal.addEventListener("click", m_Func_Add);
  overlay.addEventListener("click", m_Func_Add);
}

/*
NOTE - If we compare modal_script.js with refactoring_code.js we can clearly see the code has been cleaned & 
tidied whilst still carrying out the same functions on the Modal web-page
*/
