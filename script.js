// ===========================Timer================================//
var timeEl = document.getElementById("time");

//created timer variable and setting the timer
var secondsLeft = 60;

function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            
        }
    }, 1000);
}
setTimer();
//================Intro page to code quiz======================//
var startButton = document.getElementById("start-btn");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");

var shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame);

function startGame() {
    console.log("started");
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0
    questionContainerEl.classList.remove("hide");
    setNextQuestion()    
};

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
};

function showQuestion(question) {
    questionEl.innerText = question.question
}

function selectAnswer() {

};

var questions = [
    {
        question: "commonly used data types DO NOT include:",
        answers: [
            {text: "string", correct: false},
            {text: "booleans", correct: false},
            {text: "alerts", correct: true},
            {text: "numbers", correct: false},
        ]
    }
]