/* document.querySelector("button").addEventListener("click", (evt) => {
  console.log(evt);
});

const input = document.querySelector("input");
input.addEventListener("keydown", (e) => {
  console.log(e.key);
  console.log(e.code);
});
 */

/* window.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      console.log("UP!");
  }
});*/
/* 
const form = document.querySelector("#shelterForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("SUMMITED THE FORM");
}); */

//PRACTICE

/* const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");
form.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(input.value);
  const catName = input.value;
  const newLi = document.createElement("li");
  newLi.innerText = catName;
  list.append(newLi);
});
 */

/* const form = document.querySelector("form");
const product = document.querySelector("#product");
const quantity = document.querySelector("#qty");
const list = document.querySelector("#list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const prod = product.value;
  const qty = quantity.value;
  if (prod === "" || qty === "") {
    alert("Characters cant be empty");
  } else {
    const li = document.createElement("li");
    li.innerText = `${qty} ${prod}`;

    list.append(li);
  }
});*/

/* const input = document.querySelector("input");
const h1s = document.querySelector("h1");

input.addEventListener("input", (e) => {
  h1s.innerText = `Welcome, ${input.value}`;
  if (input.value === "") {
    h1s.innerText = "Enter Your Username";
  }
}); */

//CHANGE EVENT WORKS WHEN YOU CLICK OUTSIDE THE INPUT BOX
//INPUT EVENT Adds everytime you type or input a character on keyboard

//************************
//************************
//************************

const form = document.querySelector("form");
const prod = document.querySelector("#product");
const qty = document.querySelector("#qty");
const lis = document.querySelectorAll("li");
const list = document.querySelector("#list");

for (let li of lis) {
  li.addEventListener("click", () => {
    li.remove();
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (prod === "" || qty === "") {
    alert("Characters cant be empty");
  } else {
    const li = document.createElement("li");
    li.innerText = `${qty.value} ${prod.value}`;

    list.append(li);
  }
});

list.addEventListener("click", (e) => {
  e.target.remove();
});
