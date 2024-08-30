// script.js
function submitQuiz() {
    const correctAnswers = {
        q1: 'b',
        q2: 'b',
        q3: 'a',
        q4: 'b',
        q5: 'a',
        q6: 'a',
        q7: 'a',
        q8: 'c',
        q9: 'a',
        q10: 'a',
        q11: 'a',
        q12: 'a',
        q13: 'a',
        q14: 'a',
        q15: 'a'
    };

    let score = 0;
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    let resultHTML = '';

    for (let [question, answer] of formData.entries()) {
        if (correctAnswers[question] === answer) {
            score++;
        } else {
            resultHTML += `<p>문제 ${question.slice(1)}: 틀렸습니다. 정답은 ${correctAnswers[question]}입니다.</p>`;
        }
    }

    resultHTML += `<p>정답: ${score} / 15</p>`;
    document.getElementById('result').innerHTML = resultHTML;
}
