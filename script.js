// ===========================Timer================================//
var timeEl = document.getElementById("time");

//created timer variable and setting the timer
var secondsLeft = 60;

function setTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
setTimer();
//================Intro page to code quiz======================//
const startButton = document.getElementById("start-btn");
const introText = document.getElementById("intro-text");
const answerButtonEl = document.querySelector(".answer-btn");
const questionEl = document.getElementById("question");
// const answerButtonsEl = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);

function startGame() {
  startButton.classList.add("hide");
  introText.classList.add("hide");
  answerButtonEl.classList.remove("hide");
  shuffledQuestions = questions.sort(function () {
    return Math.random() - 0.5;
  });
  currentQuestionIndex = 0;
  setNextQuestion();
}

function setNextQuestion() {}

function selectAnswer() {}

var questions = [
  {
    question: "commonly used data types DO NOT include:",
    answers: [
      { text: "string", correct: false },
      { text: "booleans", correct: false },
      { text: "alerts", correct: true },
      { text: "numbers", correct: false },
    ],
  },
];
