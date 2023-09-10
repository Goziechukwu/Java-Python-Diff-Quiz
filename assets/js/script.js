// Declare the constants
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const questions = [
    {
        choices: ["JavaScript", "Python"],
        correctChoice: "Python",
        question: "Which is known for its use of indentation to define code blocks?",
        questionIndex: "Question One"        
    },
    {
        choices: ["JavaScript", "Python"],
        correctChoice: "Python",
        question: "In which is Global Interpreter Lock (GIL) a potential limitation for multithreaded tasks?",
        questionIndex: "Question Two"
    },
    {
        choices: ["JavaScript", "Python"],
        correctChoice: "JavaScript",
        question: "Which is commonly used for building interactive web applications in browsers?",
        questionIndex: "Question Three"        
    },
    {
        choices: ["JavaScript", "Python"],
        correctChoice: "JavaScript",
        question: "Which is more prone to type coercion?",
        questionIndex: "Question Four"                
    },
    {
        choices: ["JavaScript", "Python"],
        correctChoice: "Python",
        question: "Which has a stronger standard library with modules for various tasks?",
        questionIndex: "Question Five"        
    },
    {
        choices: ["JavaScript", "Python"],
        correctChoice: "JavaScript",
        question: "Which relies on semicolons to terminate statements?",
        questionIndex: "Question Six"        
    },
    {
        choices: ["JavaScript", "Python"],
        correctChoice: "Python",
        question: "Which is dynamically typed but strongly typed?",
        questionIndex: "Question Seven"
    },
    {
        choices: ["JavaScript", "Python"],
        correctChoice: "Python",
        question: "Which language is widely used in scientific computing and machine learning?",
        questionIndex: "Question Eight"        
    },
    {
        choices: ["JavaScript", "Python"],
        correctChoice: "JavaScript",
        question: "Which language typically uses curly braces {} for defining code blocks?",        
        questionIndex: "Question Nine"
    },
    {
        choices: ["JavaScript", "Python"],
        correctChoice: "JavaScript",
        question: "Which language uses async/await for handling asynchronous operations efficiently?",
        questionIndex: "Question Ten"        
    },
    {
        choices: ["JavaScript", "Python"],
        correctChoice: "Python",
        question: "Which language is known for its simplicity and readability?",
        questionIndex: "Question Eleven"        
    },
    {
        choices: ["JavaScript", "Python"],
        correctChoice: "JavaScript",
        question: "Which language is more suitable for CPU-bound multithreaded tasks?",
        questionIndex: "Question Twelve"        
    },
    {
        choices: ["JavaScript", "Python"],
        correctChoice: "JavaScript",
        question: "Which language has a large community and ecosystem for both front-end and back-end development?",
        questionIndex: "Question Thirteen"        
    },
    {
        choices: ["JavaScript", "Python"],
        correctChoice: "Python",
        question: "Which language is commonly used with libraries like NumPy and SciPy for scientific computing?",
        questionIndex: "Question Fourteen"        
    },
    {
        choices: ["JavaScript", "Python"],
        correctChoice: "JavaScript",
        question: "Which language has a standard library well-suited for web-related tasks like DOM manipulation?",
        questionIndex: "Question Fifteen"        
    },
    {
        choices: ["JavaScript", "Python"],
        correctChoice: "Python",
        question: "Which language is frequently used for building RESTful APIs and server-side applications?",
        questionIndex: "Question Sixteen"        
    },
    {
        choices: ["JavaScript", "Python"],
        correctChoice: "JavaScript",
        question: "Which language has a strong emphasis on callback functions for handling asynchronous operations?",
        questionIndex: "Question Seventeen"        
    },
    {
        choices: ["JavaScript", "Python"],
        correctChoice: "JavaScript",
        question: "Which language has better performance optimization for web browsers?",
        questionIndex: "Question Eighteen"        
    },
    {
        choices: ["JavaScript", "Python"],
        correctChoice: "Python",
        question: "Which language is preferred for machine learning and deep learning projects with libraries like TensorFlow?",
        questionIndex: "Question Nineteen"        
    },
    {
        choices: ["JavaScript", "Python"],
        correctChoice: "Python",
        question: "Which language is often used for building web applications with frameworks like Django and Flask?",
        questionIndex: "Question Twenty"        
    },
    {
        choices: ["JavaScript", "Python"],
        correctChoice: "Python",
        question: "Which language's community is known for its rich ecosystem of packages and libraries available for various tasks?",
        questionIndex: "Question Twenty-One"        
    },
    {
        choices: ["JavaScript", "Python"],
        correctChoice: "Python",
        question: "Which language is commonly used for data analysis and manipulation with libraries like Pandas?",
        questionIndex: "Question Twenty-Two"        
    },
    {
        choices: ["JavaScript", "Python"],
        correctChoice: "JavaScript",
        question: "Which language has a feature known as \"hoisting,\" where variable and function declarations are moved to the top of their containing scope during compilation?",
        questionIndex: "Question Twenty-three"        
    },
    {
        choices: ["JavaScript", "Python"],
        correctChoice: "Python",
        question: "Which language is often associated with the use of decorators for modifying functions and methods at runtime?",
        questionIndex: "Question Twenty-four"        
    },
    {
        choices: ["JavaScript", "Python"],
        correctChoice: "JavaScript",
        question: "Which language uses the \"await\" keyword to pause the execution of a function until a promise is resolved?",
        questionIndex: "Question Twenty-five"        
    }
];

// Declare other variables
let questionNumberElement = document.getElementById("question-number");
let currentQuestionIndex = 0;
let score = 0;
let username = null;

// Set Function to Get the User's Filled-Out Form Details
function getUserFormDetails(event) {
    event.preventDefault();
    username = document.getElementById("username").value;

    if (username) {
        document.getElementById("username-msg").classList.add("hidden");
        document.getElementById("quiz-registration").classList.add("hidden");
        document.getElementById("username-value").innerHTML = username;
        renderQuestion();
    }
}

let userNameButton = document.querySelector("#quiz-registration > button");
userNameButton.addEventListener("click", getUserFormDetails);


// Set Function to Ensure the User Fills in Username Details before Accessing Quiz Questions
function closeDialog(dialogId) {
    document.getElementById(dialogId).classList.add("hidden");

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        renderQuestion();
    } else {
        endQuiz();
    }
}


// Set Functions to Render the Questions and to Set the Choices in Clickable Buttons
//create the function to render the question: 
function renderQuestion() {
    if (!username) {
        // document.getElementById("username-msg").classList.remove("hidden");
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    questionNumberElement.innerHTML = currentQuestion.questionIndex;

    choicesElement.innerHTML = "";

    // create buttons for the choices(options):
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        const choiceElement = document.createElement("button");
        choiceElement.textContent = currentQuestion.choices[i];

        // set a click-handler function to select the choices by clicking:
        function choiceClickHandler(choice) {
            return function () {
                checkChoice(choice);
            };
        }
        choiceElement.addEventListener(
            "click",
            choiceClickHandler(currentQuestion.choices[i])
        );

        choicesElement.appendChild(choiceElement);
    }
}

// Set Function to Check the Rightness or Wrongness of the Selected Choice and Alert the User
function checkChoice(selectedChoice) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedChoice === currentQuestion.correctChoice) {
        score++;        
        document.getElementById("correct-choice").classList.remove("hidden");
    } else {        
        document.getElementById("incorrect-choice").classList.remove("hidden");
    }
}

// Set Function to End the Quiz and Display the User's Final Score
function endQuiz() {
    questionElement.textContent = `You scored: ${score} out of ${questions.length}`;
    choicesElement.innerHTML = "";
    questionNumberElement.innerHTML = "";
    document.getElementById("username-prompt").innerHTML = "";
    document.getElementById("quiz-registration").innerHTML = "";
}
