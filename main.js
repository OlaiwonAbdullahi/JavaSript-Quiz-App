const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const myH1 = document.getElementById("myH1");
let username = window.prompt("please what's your name");
const timeCount = quiz_box.querySelector(".timer .timer_sec");
const timeLine = quiz_box.querySelector("header .time_line");
const timeOff = quiz_box.querySelector("header .time_text");

const option_list = document.querySelector(".option_list");

myH1.textContent = `👋Hey ${username}`;
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
  queCounter(1);
  starttimer(10);
  startTimerLine(0);
};

let que_count = 0;
let que_numb = 1;
let couter;
let counterLine;
let timeValue = 10;
let widthValue = 0;
let userScore = 0;

//next btn clicked
const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");
const quit_btn = quiz_box.querySelector("footer .quit_btn");

quit_quiz.onclick = () => {
  window.location.reload();
};
quit_btn.onclick = () => {
  window.location.reload();
};

restart_quiz.onclick = () => {
  quiz_box.classList.add("activeQuiz");
  result_box.classList.remove("activeResult");

  let que_count = 0;
  let que_numb = 1;
  let timeValue = 10;
  let widthValue = 0;
  let userScore = 0;
  showQuestion(que_count);
  queCounter(que_numb);
  clearInterval(counter);
  starttimer(timeValue);
  clearInterval(counterLine);
  startTimerLine(widthValue);
};
next_btn.onclick = () => {
  if (que_count < questions.length - 1) {
    que_count++;
    que_numb++;
    showQuestion(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    starttimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    //next_btn.style.display = "none";
  } else {
    console.log("question completed");
    showResultBox();
  }
};

//getting question from array
function showQuestion(index) {
  const que_text = document.querySelector(".que_text");

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

  const option = option_list.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

let tickIcon = '<i class="bi bi-check2-all"></i>';
let crossIcon = '<i class="bi bi-x-lg"></i>';

function optionSelected(answer) {
  clearInterval(counter);
  clearInterval(counterLine);
  let userAns = answer.textContent;
  let correctAns = questions[que_count].answer;
  let allOptions = option_list.children.length;
  // userScore += 1;
  if (userAns == correctAns) {
    userScore += 1;
    console.log(userScore);
    answer.classList.add("correct");
    console.log("Answer is correct");
    answer.insertAdjacentHTML("beforeend", tickIcon);
  } else {
    answer.classList.add("incorrect");
    console.log("answer is wrong");
    answer.insertAdjacentHTML("beforeend", crossIcon);

    //if answer is incorrect then select the correct answer

    for (let i = 0; i < allOptions; i++) {
      if (option_list.children[i].textContent == correctAns) {
        option_list.children[i].setAttribute("class", "option correct");
        option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
      }
    }
  }

  //once user selected disable all option

  for (let i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled");
  }
}

function showResultBox() {
  info_box.classList.add("activeInfo");
  quit_quiz.classList.remove("activeQuiz");
  result_box.classList.add("activeResult");
  const scoreText = result_box.querySelector(".score_text");

  scoreText.textContent =
    "<span> congrat You got  <p>" +
    userScore +
    "</p> out of <p>" +
    question.length +
    "</p></span>";
  /*if (userScore > 30) {
    let scoreTag =
      "<span> congrat You got  <p>" +
      userScore +
      "</p> out of <p>" +
      question.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  } else if (userScore > 10) {
    let scoreTag =
      "<span>You got <p>" +
      userScore +
      "</p> out of <p>" +
      question.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  } else {
    let scoreTag =
      "<span>You got <p>" +
      userScore +
      "</p> out of <p>" +
      question.length +
      "</p></span>";
    scoreText.innerHTML = scoreTag;
  }*/
}

function starttimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time;
    time--;
    if (time < 9) {
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero;
      timeOff.textContent = "Time Left";
    }
    if (time < 0) {
      clearInterval(counter);
      timeOff.textContent = "Time Off";
      timeCount.textContent = "00";

      let correctAns = questions[que_count].answer;
      let allOptions = option_list.children.length;

      for (let i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correctAns) {
          option_list.children[i].setAttribute("class", "option correct");
          option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
        }
      }

      for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
      }
    }
  }
}

function startTimerLine(time) {
  counterLine = setInterval(timer, 29);
  function timer() {
    time += 1;
    timeLine.style.width = time + "px";
    if (time > 549) {
      clearInterval(counterLine);
    }
  }
}

function queCounter(index) {
  const bottom_ques_counter = quiz_box.querySelector(".total_que");
  let totalQuesCountTag =
    "<span><p>" +
    index +
    "</p> of <p>" +
    questions.length +
    "</p> questions</span>";

  bottom_ques_counter.innerHTML = totalQuesCountTag;
}
