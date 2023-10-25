const quizData = [
    {
        question: 'What is the capital of India?',
        options: ['Mumbai', 'Chennai', 'Delhi', 'Pune'],
        correctAnswer: 'Delhi'
    },
    // Add more quiz questions here
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
        correctAnswer: 'Paris'
    },
     // Add more quiz questions here
     {
        question: 'Which is the longest ocean in the world?',
        options: ['The Pacific Ocean', 'The Atlantic Ocean', 'The Indian Ocean', 'The Arctic Ocean'],
        correctAnswer: 'The Pacific Ocean'
    },
      // Add more quiz questions here
      {
        question: 'Which is the largest river of the world?',
        options: ['Amazon River', 'Yangtze River', 'The Nile', 'Congo River'],
        correctAnswer: 'The Nile'
    },
];

const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    showQuestion(quizData[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    optionsContainer.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('btn');
        button.addEventListener('click', selectAnswer);
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.innerText === quizData[currentQuestionIndex].correctAnswer;
    if (correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion(quizData[currentQuestionIndex]);
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreElement.innerText = `You scored ${score} out of ${quizData.length}!`;
}

startQuiz();
