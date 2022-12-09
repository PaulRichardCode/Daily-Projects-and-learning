const questions = document.querySelectorAll(".question-text");

questions.forEach((question) => {
  const btn = document.querySelectorAll(".question-btn");
  btn.addEventListener("click", () => {
    question.classList.remove("hidder");
  });
});
