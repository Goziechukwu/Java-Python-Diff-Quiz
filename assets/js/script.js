// Declare the constants
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const questions = [
    {
        questionIndex: "Question One",
        question: "Which is known for its use of indentation to define code blocks?",
        choices: ["JavaScript", "Python"],
        correctChoice: "Python"
    },
    {
        questionIndex: "Question Two",
        question: "In which is Global Interpreter Lock (GIL) a potential limitation for multithreaded tasks?",
        choices: ["JavaScript", "Python"],
        correctChoice: "Python"
    },
    {
        questionIndex: "Question Three",
        question: "Which is commonly used for building interactive web applications in browsers?",
        choices: ["JavaScript", "Python"],
        correctChoice: "JavaScript"
    },
    {
        questionIndex: "Question Four",
        question: "Which is more prone to type coercion?",
        choices: ["JavaScript", "Python"],
        correctChoice: "JavaScript"
    },
    {
        questionIndex: "Question Five",
        question: "Which has a stronger standard library with modules for various tasks?",
        choices: ["JavaScript", "Python"],
        correctChoice: "Python"
    },
    {
        questionIndex: "Question Six",
        question: "Which relies on semicolons to terminate statements?",
        choices: ["JavaScript", "Python"],
        correctChoice: "JavaScript"
    },
    {
        questionIndex: "Question Seven",
        question: "Which is dynamically typed but strongly typed?",
        choices: ["JavaScript", "Python"],
        correctChoice: "Python"
    },
    {
        questionIndex: "Question Eight",
        question: "Which language is widely used in scientific computing and machine learning?",
        choices: ["JavaScript", "Python"],
        correctChoice: "Python"
    },
    {
        questionIndex: "Question Nine",
        question: "Which language typically uses curly braces {} for defining code blocks?",
        choices: ["JavaScript", "Python"],
        correctChoice: "JavaScript"
    },
    {
        questionIndex: "Question Ten",
        question: "Which language uses async/await for handling asynchronous operations efficiently?",
        choices: ["JavaScript", "Python"],
        correctChoice: "JavaScript"
    },
    {
        questionIndex: "Question Eleven",
        question: "Which language is known for its simplicity and readability?",
        choices: ["JavaScript", "Python"],
        correctChoice: "Python"
    },
    {
        questionIndex: "Question Twelve",
        question: "Which language is more suitable for CPU-bound multithreaded tasks?",
        choices: ["JavaScript", "Python"],
        correctChoice: "JavaScript"
    },
    {
        questionIndex: "Question Thirteen",
        question: "Which language has a large community and ecosystem for both front-end and back-end development?",
        choices: ["JavaScript", "Python"],
        correctChoice: "JavaScript"
    },
    {
        questionIndex: "Question Fourteen",
        question: "Which language is commonly used with libraries like NumPy and SciPy for scientific computing?",
        choices: ["JavaScript", "Python"],
        correctChoice: "Python"
    },
    {
        questionIndex: "Question Fifteen",
        question: "Which language has a standard library well-suited for web-related tasks like DOM manipulation?",
        choices: ["JavaScript", "Python"],
        correctChoice: "JavaScript"
    },
    {
        questionIndex: "Question Sixteen",
        question: "Which language is frequently used for building RESTful APIs and server-side applications?",
        choices: ["JavaScript", "Python"],
        correctChoice: "Python"
    },
    {
        questionIndex: "Question Seventeen",
        question: "Which language has a strong emphasis on callback functions for handling asynchronous operations?",
        choices: ["JavaScript", "Python"],
        correctChoice: "JavaScript"
    },
    {
        questionIndex: "Question Eighteen",
        question: "Which language has better performance optimization for web browsers?",
        choices: ["JavaScript", "Python"],
        correctChoice: "JavaScript"
    },
    {
        questionIndex: "Question Nineteen",
        question: "Which language is preferred for machine learning and deep learning projects with libraries like TensorFlow?",
        choices: ["JavaScript", "Python"],
        correctChoice: "Python"
    },
    {
        questionIndex: "Question Twenty",
        question: "Which language is often used for building web applications with frameworks like Django and Flask?",
        choices: ["JavaScript", "Python"],
        correctChoice: "Python"
    },
    {
        questionIndex: "Question Twenty-One",
        question: "Which language's community is known for its rich ecosystem of packages and libraries available for various tasks?",
        choices: ["JavaScript", "Python"],
        correctChoice: "Python"
    },
    {
        questionIndex: "Question Twenty-Two",
        question: "Which language is commonly used for data analysis and manipulation with libraries like Pandas?",
        choices: ["JavaScript", "Python"],
        correctChoice: "Python"
    },
    {
        questionIndex: "Question Twenty-three",
        question: "Which language has a feature known as \"hoisting,\" where variable and function declarations are moved to the top of their containing scope during compilation?",
        choices: ["JavaScript", "Python"],
        correctChoice: "JavaScript"
    },
    {
        questionIndex: "Question Twenty-four",
        question: "Which language is often associated with the use of decorators for modifying functions and methods at runtime?",
        choices: ["JavaScript", "Python"],
        correctChoice: "Python"
    },
    {
        questionIndex: "Question Twenty-five",
        question: "Which language uses the \"await\" keyword to pause the execution of a function until a promise is resolved?",
        choices: ["JavaScript", "Python"],
        correctChoice: "JavaScript"
    }
];

// Declare other variables
let questionNumberElement = document.getElementById("question-number");
let currentQuestionIndex = 0;
let score = 0;


// Set Function to Get the User's Filled-Out Form Details
function getUserFormDetails(event) {
    event.preventDefault();
    let username = document.getElementById('username');

    document.getElementById("username-value").innerHTML = username.value;
}

let quizRegistrationForm = document.getElementById("quiz-registration");
quizRegistrationForm.addEventListener('submit', getUserFormDetails);


// Set Functions to Render the Questions and to Set the Choices in Clickable Buttons
//create the function to render the question: 
function renderQuestion() {
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
        choiceElement.addEventListener("click", choiceClickHandler(currentQuestion.choices[i]));

        choicesElement.appendChild(choiceElement);
    }
}

// Set Function to Check the Rightness or Wrongness of the Selected Choice and Alert the User
function checkChoice(selectedChoice) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedChoice === currentQuestion.correctChoice) {
        score++;
        alert(`Correct! Yes, it is ${selectedChoice}!`);
    } else {
        alert(`Ouch... ${selectedChoice} is the wrong choice !`);
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        renderQuestion();
    } else {
        endQuiz();
    }
}

// Set Function to End the Quiz and Display the User's Final Score
function endQuiz() {
    questionElement.textContent = `You scored: ${score} out of ${questions.length}`;
    choicesElement.innerHTML = "";
    questionNumberElement.innerHTML = "";
    document.getElementById("username-prompt").innerHTML = "";
    document.getElementById('quiz-registration').innerHTML = "";
}

renderQuestion();