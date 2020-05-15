// ===========================Timer================================//
const timeEl = document.getElementById("time");

//created timer variable and setting the timer
let secondsLeft = 60;

function setTimer() {
  const timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

const startQuizBtn = document.getElementById("start-btn");
const questionElement = document.getElementById("question");
const introTextElement = document.getElementById("intro-text");
const answerBtnDiv = document.getElementById("answerBtnDiv");
const scoreElement = document.getElementById("score");
//==================Start Quiz=================//
let score = 0;
scoreElement.innerHTML = score;
startQuizBtn.addEventListener("click", startQuiz);

function startQuiz() {
  startQuizBtn.setAttribute("class", "hide");
  introTextElement.setAttribute("class", "hide");
  setQuestion();
  setTimer();
}

function setQuestion() {
  for (var i = 0; i < myQuestions.length; i++) {
    let question = myQuestions[i].question;
    questionElement.innerText = question;

    myQuestions[i].answers.forEach(function (answer, j) {
      const answerBtn = document.createElement("button");
      answerBtn.setAttribute("class", "btn");
      answerBtn.setAttribute("id", "" + j);
      answerBtn.innerText = answer.text;
      answerBtnDiv.appendChild(answerBtn);
      answerBtn.addEventListener("click", checkAnswer);
    });

    return;
  }
}
//==================Check Answers======================//
function checkAnswer() {
  document.getElementById("0").onclick = function () {
    let status = myQuestions[0].answers[0].correct;
    if (status === true) {
      score += 10;
      scoreElement.innerHTML = score;
      alert("Correct!");
      console.log(score);
    } else {
      secondsLeft -= 10;
      timeEl.textContent = secondsLeft;
      alert("incorrect");
    }
  };
  document.getElementById("1").onclick = function () {
    let status = myQuestions[0].answers[1].correct;
    if (status === true) {
      score += 10;
      scoreElement.innerHTML = score;
      alert("Correct!");
      console.log(score);
    } else {
      secondsLeft -= 10;
      timeEl.textContent = secondsLeft;
      alert("incorrect");
    }
  };
  document.getElementById("2").onclick = function () {
    let status = myQuestions[0].answers[2].correct;
    if (status === true) {
      score += 10;
      scoreElement.innerHTML = score;
      alert("Correct!");
      console.log(score);
    } else {
      secondsLeft -= 10;
      timeEl.textContent = secondsLeft;
      alert("incorrect");
    }
  };
  document.getElementById("3").onclick = function () {
    let status = myQuestions[0].answers[3].correct;
    if (status === true) {
      score += 10;
      scoreElement.innerHTML = score;
      alert("Correct!");
      console.log(score);
    } else {
      secondsLeft -= 10;
      timeEl.textContent = secondsLeft;
      alert("incorrect");
    }
  };
}

function setScoreBoard() {}

//=============== questions ================//
const myQuestions = [
  {
    question: "commonly used data types DO NOT include:",
    answers: [
      { text: "string", correct: false },
      { text: "booleans", correct: false },
      { text: "alerts", correct: true },
      { text: "numbers", correct: false },
    ],
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    answers: [
      { text: "commas", correct: false },
      { text: "curly brackets", correct: true },
      { text: "quotes", correct: false },
      { text: "parentheses", correct: false },
    ],
  },
  {
    question:
      "A very useful tool during development and debuggin for printing content to the debugger is:",
    answers: [
      { text: "Javascript", correct: false },
      { text: "Terminal / Bash", correct: false },
      { text: "For loops", correct: false },
      { text: "console.log", correct: true },
    ],
  },
  {
    question: "Arrays is javaScript can be used to store",
    answers: [
      { text: "numbers and strings", correct: true },
      { text: "other arrays", correct: true },
      { text: "booleans", correct: false },
      { text: "all of the above", correct: false },
    ],
  },
  {
    question: "the condition in a if/else statement is enclosed within ____.",
    answers: [
      { text: "quotes", correct: false },
      { text: "squarebrackets", correct: false },
      { text: "parentheses", correct: true },
      { text: "curly brackets", correct: false },
    ],
  },
];
