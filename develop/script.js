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
const textAreaElement = document.getElementById("quiz-text-wrapper");
const answerBtnDiv = document.getElementById("answerBtnDiv");
const scoreElement = document.getElementById("score");
//==================Start Quiz=================//
let score = 0;
scoreElement.innerHTML = score;
startQuizBtn.addEventListener("click", startQuiz);

let currentQuestionIndex;

function startQuiz() {
  startQuizBtn.setAttribute("class", "hide");
  introTextElement.setAttribute("class", "hide");
  currentQuestionIndex = 0;
  setQuestion(currentQuestionIndex);
  setTimer();
}

function setQuestion() {
  let question = myQuestions[currentQuestionIndex];
  questionElement.innerText = question.question;

  myQuestions[currentQuestionIndex].answers.forEach(function (answer, j) {
    const answerBtn = document.createElement("button");
    answerBtn.setAttribute("class", "btn");
    answerBtn.setAttribute("id", "" + j);
    answerBtn.innerText = answer.text;
    answerBtnDiv.appendChild(answerBtn);
    answerBtn.addEventListener("click", checkAnswer);
  });

  return;
}
//==================Check Answers======================//
function checkAnswer() {
  document.getElementById("0").onclick = function () {
    let status = myQuestions[currentQuestionIndex].answers[0].correct;
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
    setNextQuestion();
  };
  document.getElementById("1").onclick = function () {
    let status = myQuestions[currentQuestionIndex].answers[1].correct;
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
    setNextQuestion();
  };
  document.getElementById("2").onclick = function () {
    let status = myQuestions[currentQuestionIndex].answers[2].correct;
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
    setNextQuestion();
  };
  document.getElementById("3").onclick = function () {
    let status = myQuestions[currentQuestionIndex].answers[3].correct;
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
    setNextQuestion();
  };
}

function setNextQuestion() {
  resetState();
  currentQuestionIndex++;
  console.log(currentQuestionIndex);
  if (currentQuestionIndex === 5) {
    setScoreBoard();
  } else {
    setQuestion(myQuestions[currentQuestionIndex]);
  }
}

function resetState() {
  questionElement.innerHTML = "";
  while (answerBtnDiv.firstChild) {
    answerBtnDiv.removeChild(answerBtnDiv.firstChild);
  }
}

function setScoreBoard() {
  resetState();
  questionElement.innerHTML = "SCOREBOARD:";
  let inputElement = document.createElement("input");
  let submitBtn = document.createElement("button");

  submitBtn.setAttribute("class", "submit-btn");
  submitBtn.addEventListener("click", addUser);
  submitBtn.innerText = "Submit";

  inputElement.setAttribute("class", "quiz-text-wrapper");
  inputElement.setAttribute("id", "inputElement");
  introTextElement.setAttribute("class", "");
  introTextElement.innerText = "";

  answerBtnDiv.appendChild(inputElement);
  answerBtnDiv.appendChild(submitBtn);
}

function addUser() {
  const userName = document.getElementById("inputElement").value;
  document.getElementById("intro-text").innerText = userName;
}

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
      { text: "curly brackets", correct: false },
      { text: "quotes", correct: true },
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
      { text: "numbers and strings", correct: false },
      { text: "other arrays", correct: false },
      { text: "booleans", correct: false },
      { text: "all of the above", correct: true },
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
