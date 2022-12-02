let count = 0;

const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const style = e.currentTarget.classList;

    if (style.contains("decrease")) {
      count--;
    } else if (style.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    value.innerText = count;
  });
});
