// VARIABLES
//=========================================================================================================================================
// Countdown timer
let countdownTimer = 20;

// Index to track question we are on
let questionIndex = 0;

// Variables that track number of correct answers and incorrect answers
let answeredCorrectly = 0;
let answeredIncorrectly = 0;

// HTML tie-ins
const $startQuizBtn = document.getElementById("startQuiz");
const $countdownTimerEl = document.getElementById("countdownTimer");
const $questionP = document.getElementById("question");
const $answerChoice1 = document.getElementById("answerChoice1");
const $answerChoice2 = document.getElementById("answerChoice2");
const $answerChoice3 = document.getElementById("answerChoice3");
const $answerChoice4 = document.getElementById("answerChoice4");
const $listGroupEl = document.querySelector(".list-group");
const $clearDivForGif = document.getElementById("clearForGif");
const $clearStatsContainer = document.getElementById("clearForStats");

// Var = Quiz Array of Objects that includes questions, corresponding answer choices, and the correct answer
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
            correctAnswer: "a",
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
            correctAnswer: "b",
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
            correctAnswer: "c",
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
            correctAnswer: "d",
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
            correctAnswer: "a",
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
            countdownTimer = 0;
            $countdownTimerEl.textContent = 0;
            clearInterval(timerInterval);
            // possibly show a gif
            // run displayQuizStats function
            displayQuizStats();
        }
    }, 1000);
};

// Render questions and answers function using the index variable (questionIndex)
function renderTrivia(whatQuestionAreWeOn) {

    // console.log(whatQuestionAreWeOn);
    // console.log(quiz[whatQuestionAreWeOn]);

    // TODO: if timer is <=0, stop and run displayQuizStats function
    //displayQuizStats();


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
function checkAnswer(userSelection) {
    // console.log(userSelection);
    
        if (userSelection === quiz[questionIndex].correctAnswer) {
            console.log("correct");
            answeredCorrectly++;
            questionIndex++;
            renderTrivia(questionIndex);
        }
        else {
            console.log("wrong. we were looking for ", quiz[questionIndex].correctAnswer)

            // if (countdownTimer > 11) {
                countdownTimer -= 9;
            // }
            // else {
            //     countdownTimer = 0;
            // }
            answeredIncorrectly++;
            questionIndex++;
            renderTrivia(questionIndex);
        }
}

// Display quiz stats function
function displayQuizStats() {
    $clearDivForGif.innerHTML = "";
    $clearStatsContainer.innerHTML = "";

    // create dynamic HTML <img>, set attribute to equal a gif url
    let $imageEl = document.createElement("img");
    $imageEl.setAttribute("src", "https://i.pinimg.com/originals/c6/8d/e9/c68de9853547c385dddd3a0d929d4d42.gif");
    $imageEl.setAttribute("alt", "game over animated image");
    $imageEl.setAttribute("class", "img-fluid");
    $clearDivForGif.append($imageEl);
    
    // create dynamic HTML <p> to hold correct
    let $correctPEl = document.createElement("p");
    $correctPEl.textContent = answeredCorrectly + ": Correct";
    $clearStatsContainer.append($correctPEl)

    // create dynamic HTML <p> to hold incorrect
    let $incorrectPEl = document.createElement("p");
    $incorrectPEl.textContent = answeredIncorrectly + ": Incorrect";

    $clearStatsContainer.append($incorrectPEl);

    // create dynamic HTML <p> to hold unanswered
    let unanswered = (quiz.length - answeredCorrectly - answeredIncorrectly);

    console.log(unanswered);

    if (unanswered > 0) {
        let $unansweredPEl = document.createElement("p");
        $unansweredPEl.textContent = unanswered + ": Unaswered";
        $clearStatsContainer.append($unansweredPEl);
    }

    // create dynamic text area/input to capture username
    // let $usernameInputEl = document.createElement
    let $formEl = document.createElement("form");
    $formEl.setAttribute("class", "mt-5");
    let $formGroupDivEl = document.createElement("div");
    $formGroupDivEl.setAttribute("class", "form-group");
    $formEl.append($formGroupDivEl);

    let $formLabelEl = document.createElement("label");
    $formLabelEl.textContent = "Username";
    $formGroupDivEl.append($formLabelEl);

    let $formInputEl = document.createElement("input");
    $formInputEl.setAttribute("type", "username");
    $formInputEl.setAttribute("class", "form-contol ml-3");
    $formGroupDivEl.append($formInputEl);

    let $formButtonEl = document.createElement("button");
    $formButtonEl.setAttribute("type", "submit");
    $formButtonEl.setAttribute("class", "btn btn-primary");
    $formButtonEl.setAttribute("id", "usernameSubmitBtn");
    $formButtonEl.textContent = "Submit";
    $formEl.append($formButtonEl);

    $clearStatsContainer.append($formEl);

    // Button click listener for the submit username button
    let $usernameSubmit = document.getElementById("usernameSubmitBtn");

    $usernameSubmit.addEventListener("click", function(event) {
        event.preventDefault();

        let username = document.querySelector("input").value;

        console.log(username);

        // put username into local storage along with their score (most correct only)
        localStorage.setItem("username", username);
    })

    // pull scoreboard data from local storage

    // create dynamic HTML <list> 
    // loop thru scoreboard and place data into dynamic <li> tags to be inserted into <list>

    // dynamically create HTML <button>PLAY AGAIN</button> which when triggered will clear stats screen and start game over (this might need to be it's own function)
};

















// LOGIC
//=========================================================================================================================================
// Button click listener that starts the quiz
$startQuizBtn.addEventListener("click", function(event) {
    event.preventDefault();
    // start quiz function call
    startQuizGame();
});

// Button click listeners to grab the value of the answer button using data attribute
$listGroupEl.addEventListener("click", function(event) {
    let element = event.target;

    if (element.matches("button")) {
        let userChoice = element.getAttribute("data-choice");
        // pass userCjoice to checkAnswer function
        checkAnswer(userChoice);
    }
})



