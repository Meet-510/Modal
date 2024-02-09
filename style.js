"use strict";

const btnOpen = document.querySelectorAll(".show-modal");
const btnClose = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

for (let i = 0; i < btnOpen.length; i++) {
  btnOpen[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
