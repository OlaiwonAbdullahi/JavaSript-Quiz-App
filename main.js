const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const myH1 = document.getElementById("myH1");
let username = window.prompt("please what's your name");

myH1.textContent = `Hey ${username}`;
start_btn.onclick = () => {
  info_box.classList.add("activeInfo");
};

exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
};

continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
  quiz_box.classList.add("activeQuiz");
  showQuestion(0);
};

let que_count = 0;

//next btn clicked
const next_btn = quiz_box.querySelector(".next_btn");
next_btn.onclick = () => {
  if (que_count < questions.length - 1) {
    que_count++;
    showQuestion(que_count);
  } else {
    console.log("question completed");
  }
};

//getting question from array
function showQuestion(index) {
  const que_text = document.querySelector(".que_text");
  const option_list = document.querySelector(".option_list");

  let que_tag =
    "<span>" +
    questions[index].numb +
    "." +
    questions[index].question +
    "</span>";

  let option_tag =
    '<div class="option"><span>' +
    questions[index].options[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[3] +
    "</span></div>";

  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;
}
