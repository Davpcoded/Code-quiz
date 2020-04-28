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
//================ Quiz ======================//
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const introText = document.getElementById("intro-text");
const answerButtonEl = document.querySelector(".answer-btn");
const questionEl = document.getElementById("question");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  nextButton.classList.remove("hide");
  introText.classList.add("hide");
  answerButtonEl.classList.remove("hide");
  shuffledQuestions = questions.sort(function () {
    return Math.random() - 0.5;
  });
  currentQuestionIndex = 0;
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionEl.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonEl.appendChild(button);
  });
}

function resetState() {
  while (answerButtonEl.firstChild) {
    answerButtonEl.removeChild(answerButtonEl.firstChild);
  }
}

function selectAnswer(e) {
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
  }
}

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
  {
    question: "hello hello",
    answers: [
      { text: "sss", correct: false },
      { text: "sssleans", correct: false },
      { text: "sssrts", correct: true },
      { text: "sssbers", correct: false },
    ],
  },
  {
    question: "hello hello",
    answers: [
      { text: "sss", correct: false },
      { text: "sssleans", correct: false },
      { text: "sssrts", correct: true },
      { text: "sssbers", correct: false },
    ],
  },
  {
    question: "hello hello",
    answers: [
      { text: "sss", correct: false },
      { text: "sssleans", correct: false },
      { text: "sssrts", correct: true },
      { text: "sssbers", correct: false },
    ],
  },
  {
    question: "hello hello",
    answers: [
      { text: "sss", correct: false },
      { text: "sssleans", correct: false },
      { text: "sssrts", correct: true },
      { text: "sssbers", correct: false },
    ],
  },
];
