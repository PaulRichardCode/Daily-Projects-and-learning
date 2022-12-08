const btn = document.querySelector(".modal-btn");
const banner = document.querySelector(".banner");
const cover = document.querySelector(".hero");

const modalCont = document.querySelector(".modal-container");
const closeBtn = document.querySelector(".close-btn");
const modalOver = document.querySelector(".modal-overlay");

const openModal = document.querySelector(".open-modal");

btn.addEventListener("click", () => {
  modalOver.classList.add("open-modal");
});
//with classlist you add the class('') not variable you want to add or remove
closeBtn.addEventListener("click", () => {
  modalOver.classList.remove("open-modal");
});
