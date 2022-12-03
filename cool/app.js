const reviews = [
  {
    id: 1,
    name: "susan smith",
    img: "https://res.cloadinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rzsh1.jpg",
    text: " Modi praesentium temporibus, voluptates provident vitae accusamus blanditiis est? Sunt, iusto at, ad nesciunt alias nisi consequatur quia ratione ullam iure, minus aut? Labore error iste perferendis, odio facilis nemo!",
    job: "Fashion designer",
  },
  {
    id: 2,
    name: "ana johnson",
    img: "https://res.cloadinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rzsh1.jpg",
    text: " Modi praesentium temporibus, voluptates provident vitae accusamus blanditiis est? Sunt, iusto at, ad nesciunt alias nisi consequatur quia ratione ullam iure, minus aut? Labore error iste perferendis, odio facilis nemo!",
    job: "web designer",
  },
  {
    id: 3,
    name: "floki flourence",
    img: "https://res.cloadinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rzsh1.jpg",
    job: "doctor",
    text: " Modi praesentium temporibus, voluptates provident vitae accusamus blanditiis est? Sunt, iusto at, ad nesciunt alias nisi consequatur quia ratione ullam iure, minus aut? Labore error iste perferendis, odio facilis nemo!",
  },
  {
    id: 4,
    name: "Hood coal",
    job: "Machine Learner",
    img: "https://res.cloadinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rzsh1.jpg",
    text: " Modi praesentium temporibus, voluptates provident vitae accusamus blanditiis est? Sunt, iusto at, ad nesciunt alias nisi consequatur quia ratione ullam iure, minus aut? Labore error iste perferendis, odio facilis nemo!",
  },
];

const img = document.querySelector("#person-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 1;

window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[currentItem];
  img.src = item.img;
  author.innerText = item.name;
  info.innerText = item.text;
  job.innerText = item.job;
}

nextBtn.addEventListener("click", () => {
  currentItem++;
  showPerson(currentItem);
});

prevBtn.addEventListener("click", () => {
  currentItem--;
  showPerson(currentItem);
});
