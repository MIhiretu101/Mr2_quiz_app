const quizData = 
[
{
    question: 'Who invented the world wide web(WWW)?',
    a: 'Richard Feynyman',
    b: 'Tim Berners-Lee',
    c: 'James Gosling',
    d: 'Steve Jobs',
    correct: 'b',
},
{
    question: 'What is the misson of Mircosoft?',
    a: 'to empower every person and every organization on the planet to achieve more.',
    b: 'to organize the world information and make it universally accessible and useful.',
    c: 'to be Earth most customer-centric company.',
    d: 'to accelerate the world transition to sustainable energy.',
    correct: 'a',
},
{
    question: 'Which of these are not a type of computer?',
    a: 'Apple',
    b: 'Lenevo',
    c:  'Hp',
    d: 'Lada',
    correct: 'd',
},
{
    question: 'What is the name for a computer pointing device?',
    a: 'moniter',
    b: 'a mouse',
    c: 'a sound card',
    d: 'a graphic card',
    correct: 'b',
},
{
    question: 'What operating system did Microsoft develop?',
    a: 'iOS',
    b: 'Android',
    c: 'Windows',
    d: 'Blackberry iOS',
    correct: 'c',
},
{
    question: 'Who coined the term artificial intelligence?',
    a: 'Donald Ervin Knuth',
    b: 'John McCarthy',
    c: 'Charles Bachman',
    d: 'Herbert A. Simon',
    correct: 'b',
},
{
    question: 'In what year was Google founded?',
    a: '1998',
    b: '1995',
    c: '2001',
    d: '1985',
    correct: 'c',
},
{
    question: ' Who is known as the first computer programmer?',
    a: 'Steve Jobs',
    b: 'Charles Babbage',
    c: 'Ada Lovelace',
    d: 'Jelani Nelson',
    correct: 'c',
},
{
    question: 'Who is credited with inventing the term "software engineer"?',
    a: 'Grace Hopper',
    b: 'Margaret Hamilton',
    c: 'Evelyn Granville',
    d: 'Tommy Flowers',
    correct: 'b',
},
{
    question: 'What type of electromagnetic waves does Wi-Fi use?',
    a: 'microwaves',
    b: 'gamma rays',
    c: 'infrared waves',
    d: 'radio waves',
    correct: 'd',
}
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswer()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswer() 
{
    answerEls.forEach(answerEl => answerEl.checked = false)
    //array1.forEach(element => console.log(element));
}


function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz <quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = 
              '<h2>You answered correctly at ${score}/${quizData.length}question./</h2><button onclick="location.reload()">Reload</button>';
        }
    }
})