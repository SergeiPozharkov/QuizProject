const quizData = [
    {
        question: 'В какой из этих басен и сказок лисице не удалось достичь желаемого?',
        a: 'Ворона и лисица',
        b: 'Лиса и виноград',
        c: 'Колобок',
        d: 'Кот и лиса',
        correct: 'b'
    }, {
        question: 'Кем стал братец Иванушка, ослушавшись сестрицу Аленушку?',
        a: 'Ягненочком',
        b: 'Теленочком',
        c: 'Козленочком',
        d: 'Жеребеночком',
        correct: 'c'
    }, {
        question: 'Что дама не сдавала в багаж?',
        a: 'Корзину',
        b: 'Картонку',
        c: 'Гардину',
        d: 'Маленькую собачонку',
        correct: 'c'
    }, {
        question: 'Какого из этих животных не было среди Бременских музыкантов?',
        a: 'Осла',
        b: 'Козла',
        c: 'Петуха',
        d: 'Кота',
        correct: 'b'
    }, {
        question: 'Какой персонаж не вошел в знаменитую тройку Крылова?',
        a: 'Лебедь',
        b: 'Креветка',
        c: 'Щука',
        d: 'Рак',
        correct: 'b'
    }
];
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const question = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz.correct]) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>Вы ответили правильно на ${score}/${quizData.length} вопросов.</h2> <button onclick="location.reload()">Заново</button>`;
        }
    }
});
