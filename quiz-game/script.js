//dom elements 
const startScreen = document.getElementById("start-screen")
const quizScreen = document.getElementById("quiz-screen")
const resultScreen = document.getElementById("result-screen")
const startButton = document.getElementById("start-btn")
const questionText = document.getElementById("question-text")
const answersContainer = document.getElementById("answers-container")
const currentQuestionSpan = document.getElementById("current-question")
const totalQuestionsSpan = document.getElementById("total-questions")
const scoreSpan = document.getElementById("score")
const finalScoreSpan = document.getElementById("final-score")
const maxScroeSpan = document.getElementById("max-score")
const resultMessage = document.getElementById("result-message")
const restartButton = document.getElementById("restart-btn")
const progressBar = document.getElementById("progress")

const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "london", correct: false } ,
      { text: "paris", correct: true },
      { text: "berlin", correct: false },
      { text:"Madrid" , correct: false } ,
    ]
  },
  {
    question: "which palnet is known as the Red Planet?",
    answers: [
      { text: "venus", correct: false },
      { text: "mars", correct: true },
      { text: "jupiter", correct: false },
      { text: "saturn", correct: false },
    ]
  },
  {
    question: "what is the largest ocean on earth?",
    answers: [
      { text: "Pacific Ocean", correct: true },
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
    ]
  },
  {
    question: "which is not a programming language?",
    answers: [
      {text: "java", correct: false },
      {text: "python", correct: false },
      {text: "banana", correct: true },
      {text: "javascript", correct: false },
    ]
  },
  {
    question: "what is the chemical symbol for gold?",
    answers: [
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
      { text: "Fe", correct: false },
      { text: "Hg", correct: false },
    ]
  },
];

//Quiz state variables
let currentQuestionIndex = 0
let score = 0
let answersDisabled = false

totalQuestionsSpan.textContent = quizQuestions.length;
maxScroeSpan.textContent = quizQuestions.length

//eventListeners
startButton.addEventListener("click", startQuiz)
restartButton.addEventListener("click", restartQuiz)


function startQuiz(){
 currentQuestionIndex = 0;
 scoreSpan.textContent = 0;

 startScreen.classList.remove("active")
 quizScreen.classList.add("active")

 showQuestion()
}

function showQuestion(){

answersDisabled = false

const currentQuestion = quizQuestions[currentQuestionIndex]
currentQuestionSpan.textContent = currentQuestionIndex + 1

const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
progressBar.style.width = progressPercent + "%"

questionText.textContent = currentQuestion.question

//todo:explain this in a second
answersContainer.innerHTML = "";
currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button")
    button.textContent = answer.text
    button.classList.add("answer-btn")

    // what is dataset? =  aloow to store custom data
    button.dataset.correct = answer.correct 
    
    button.addEventListener("click",selectAnswer)
    
    answersContainer.appendChild(button);

  });
}

function selectAnswer(event){
 if(answersDisabled) return
 answersDisabled = true

 constselectedButton = event.target
 const isCorrect = selectedButton.dataset.correct === "true"
  
 Array.from(answersContainer.children).forEach(button => {
  if(button.dataset.correct === "true"){
 };  