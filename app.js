// VARIABLES
//=========================================================================================================================================
// Countdown timer
let countdownTimer = 60;

// Index to track question we are on
let questionIndex = 0;

// HTML tie-ins
const $startQuizBtn = document.getElementById("startQuiz");
const $countdownTimerEl = document.getElementById("countdownTimer");
const $questionP = document.getElementById("question");
const $answerChoice1 = document.getElementById("answerChoice1");
const $answerChoice2 = document.getElementById("answerChoice2");
const $answerChoice3 = document.getElementById("answerChoice3");
const $answerChoice4 = document.getElementById("answerChoice4");

// Var = Quiz Object that includes questions, corresponding answer choices, and the correct answer
const quiz = [
    {
        // question1: {
            question: "question 1",
            answerChoices: [
                "question 1, answer choice 1", 
                "question 1, answer choice 2", 
                "question 1, answer choice 3", 
                "question 1, answer choice 4"
            ],
            correctAnswer: "",
        // },
    },
    {
        // question2: {
            question: "question 2",
            answerChoices: [
                "question 2, answer choice 1", 
                "question 2, answer choice 2", 
                "question 2, answer choice 3", 
                "question 2, answer choice 4"
            ],
            correctAnswer: "",
        // },
    },
    {
        // question3: {
            question: "question 3",
            answerChoices: [
                "question 3, answer choice 1", 
                "question 3, answer choice 2", 
                "question 3, answer choice 3", 
                "question 3, answer choice 4"
            ],
            correctAnswer: "",
        // },
    },
    {
        // question4: {
            question: "question 4",
            answerChoices: [
                "question 4, answer choice 1", 
                "question 4, answer choice 2", 
                "question 4, answer choice 3", 
                "question 4, answer choice 4"
            ],
            correctAnswer: "",
        // },
    },
    {
        // question5: {
            question: "question 5",
            answerChoices: [
                "question 5, answer choice 1", 
                "question 5, answer choice 2", 
                "question 5, answer choice 3", 
                "question 5, answer choice 4"
            ],
            correctAnswer: "",
        // },
    },
];
















// FUNCTIONS
//=========================================================================================================================================
// Start quiz function
function startQuizGame() {
    // Timer starts
    runCountdownTimer();

    // render trivia function call
    renderTrivia(questionIndex);
};

// Countdown Timer function
function runCountdownTimer() {
    var timerInterval = setInterval(function() {
        countdownTimer--;
        $countdownTimerEl.textContent = countdownTimer;

        if (countdownTimer <= 0) {
            clearInterval(timerInterval);

            // possibly show a gif
            // run displayQuizStats function
            displayQuizStats();
        }
    }, 1000);
};

// Render questions and answer function
// TODO: change to accept an arg that will cycle through quiz object
function renderTrivia(whatQuestionAreWeOn) {

    console.log(whatQuestionAreWeOn);
    console.log(quiz[whatQuestionAreWeOn]);


    $questionP.textContent = "";
    $questionP.textContent = quiz[whatQuestionAreWeOn].question;

    $answerChoice1.textContent = "";
    $answerChoice1.textContent = quiz[whatQuestionAreWeOn].answerChoices[0];

    $answerChoice2.textContent = "";
    $answerChoice2.textContent = quiz[whatQuestionAreWeOn].answerChoices[1];

    $answerChoice3.textContent = "";
    $answerChoice3.textContent = quiz[whatQuestionAreWeOn].answerChoices[2];

    $answerChoice4.textContent = "";
    $answerChoice4.textContent = quiz[whatQuestionAreWeOn].answerChoices[3];
};

// Check answer function

// Display quiz stats function
function displayQuizStats() {

};

















// LOGIC
//=========================================================================================================================================
// Button click listener that starts the quiz
$startQuizBtn.addEventListener("click", function(event) {
    event.preventDefault();
    // start quiz function call
    startQuizGame();

    // render trivia function call
    // renderTrivia();
});

// Button click listeners to grab the value of the answer button using data attribute
