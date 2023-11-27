const questions = [
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        correctAnswer: "4",
    },
    {
        question: "What is 5 + 6",
        choices: ["11", "15", "6", "9"],
        correctAnswer: "11",
    },
    {
        question: "What is 15 - 8",
        choices: ["10", "12", "7", "4"],
        correctAnswer: "7",
    }, 
    {
        question: "What is 20 - 6",
        choices: ["18", "26", "14", "16"],
        correctAnswer: "11",
    },
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const choicesList = document.getElementById("choices-list");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("result-text");
const nextButton = document.getElementById("next-button");

function displayQuestion() {
    const question = questions[currentQuestion];
    questionText.textContent = question.question;

    choicesList.innerHTML = "";
    question.choices.forEach((choice, index) => {
        const choiceButton = document.createElement("button");
        choiceButton.className = "choice";
        choiceButton.textContent = choice;
        choiceButton.addEventListener("click", () => checkAnswer(choice));
        choicesList.appendChild(choiceButton);
    });
}

function checkAnswer(choice) {
    const question = questions[currentQuestion];
    if (choice === question.correctAnswer) {
        score++;
        resultText.textContent = "Correct!";
    } else {
        resultText.textContent = "Incorrect. The correct answer is: " + question.correctAnswer;
    }

    resultContainer.style.display = "block";
    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
        resultContainer.style.display = "none";
        nextButton.style.display = "none";
    } else {
        showFinalResult();
    }
}

function showFinalResult() {
    questionText.textContent = "Quiz completed! Your score is: " + score + " out of " + questions.length;
    choicesList.innerHTML = "";
    resultContainer.style.display = "none";
    nextButton.style.display = "none";
}

displayQuestion();
nextButton.addEventListener("click", nextQuestion);