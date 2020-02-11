// VARIABLES
//=========================================================================================================================================
// Countdown timer
let countdownTimer = 100;

// HTML tie-ins
const $startQuizBtn = document.getElementById("startQuiz");
const $questionP = document.getElementById("question");
const $answerChoice1 = document.getElementById("answerChoice1");
const $answerChoice2 = document.getElementById("answerChoice2");
const $answerChoice3 = document.getElementById("answerChoice3");
const $answerChoice4 = document.getElementById("answerChoice4");

// Var = Quiz Object that includes questions, corresponding answer choices, and the correct answer
const quiz = {
    question1: {
        question: "question 1",
        answerChoices: [
            "question 1, answer choice 1", 
            "question 1, answer choice 2", 
            "question 1, answer choice 3", 
            "question 1, answer choice 4"
        ],
        correctAnswer: "",
    },
    question2: {
        question: "question 2",
        answerChoices: [
            "question 2, answer choice 1", 
            "question 2, answer choice 2", 
            "question 2, answer choice 3", 
            "question 2, answer choice 4"
        ],
        correctAnswer: "",
    },
    question3: {
        question: "question 3",
        answerChoices: [
            "question 3, answer choice 1", 
            "question 3, answer choice 2", 
            "question 3, answer choice 3", 
            "question 3, answer choice 4"
        ],
        correctAnswer: "",
    },
    question4: {
        question: "question 4",
        answerChoices: [
            "question 4, answer choice 1", 
            "question 4, answer choice 2", 
            "question 4, answer choice 3", 
            "question 4, answer choice 4"
        ],
        correctAnswer: "",
    },
    question5: {
        question: "question 5",
        answerChoices: [
            "question 5, answer choice 1", 
            "question 5, answer choice 2", 
            "question 5, answer choice 3", 
            "question 5, answer choice 4"
        ],
        correctAnswer: "",
    }
};
















// FUNCTIONS
//=========================================================================================================================================
// Start quiz function
function startQuizGame() {

};

// Render questions and answer function
function renderTrivia() {
    $questionP.textContent = "";
    $questionP.textContent = quiz.question1.question;

    $answerChoice1.textContent = "";
    $answerChoice1.textContent = quiz.question1.answerChoices[0];

    $answerChoice2.textContent = "";
    $answerChoice2.textContent = quiz.question1.answerChoices[1];

    $answerChoice3.textContent = "";
    $answerChoice3.textContent = quiz.question1.answerChoices[2];

    $answerChoice4.textContent = "";
    $answerChoice4.textContent = quiz.question1.answerChoices[3];
};

// Check answer function
// Display quiz stats function

















// LOGIC
//=========================================================================================================================================
// Button click listener that starts the quiz
$startQuizBtn.addEventListener("click", function(event) {
    event.preventDefault();
    // start quiz function call

    // render trivia function call
    renderTrivia();
});
