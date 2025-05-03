document.addEventListener("DOMContentLoaded", () => {
    const questions = [
        {
            question: " Choose the correct synonym for 'happy':",
            options: ["Sad", "Joyful", "Angry", "Tired"],
            answer: "Joyful",
            explanation: "'Joyful' means the same as 'happy'."
        },
        {
            question: " What is the past tense of 'go'?",
            options: ["Goes", "Gone", "Went", "Go"],
            answer: "Went",
            explanation: "The past tense of 'go' is 'went'."
        },
        {
            question: " Which sentence is grammatically correct?",
            options: [
                "She don't like apples.",
                "She doesn't likes apples.",
                "She doesn't like apples.",
                "She not like apples."
            ],
            answer: "She doesn't like apples.",
            explanation: "Subject-verb agreement: 'She doesn't like apples' is correct."
        },
        {
            question: " Choose the antonym of 'strong':",
            options: ["Powerful", "Weak", "Tough", "Firm"],
            answer: "Weak",
            explanation: "'Weak' is the opposite of 'strong'."
        },
        {
            question: " Which word is a noun?",
            options: ["Quickly", "Beautiful", "Table", "Run"],
            answer: "Table",
            explanation: "'Table' is a noun, the name of an object."
        },
        {
            question: " What is the plural of 'child'?",
            options: ["Childs", "Children", "Childes", "Childer"],
            answer: "Children",
            explanation: "The correct plural of 'child' is 'children'."
        },
        {
            question: " Choose the correct article: ___ apple",
            options: ["A", "An", "The", "No article"],
            answer: "An",
            explanation: "We use 'an' before a vowel sound: 'an apple'."
        },
        {
            question: " Which one is an adjective?",
            options: ["Quickly", "Jump", "Happy", "Loudly"],
            answer: "Happy",
            explanation: "'Happy' is an adjective describing a noun."
        },
        {
            question: " Which of these is a question word?",
            options: ["Run", "Fast", "What", "He"],
            answer: "What",
            explanation: "'What' is a question word used to ask questions."
        },
        {
            question: " Identify the verb in the sentence: 'She writes a letter.'",
            options: ["She", "Writes", "A", "Letter"],
            answer: "Writes",
            explanation: "'Writes' is the action in the sentence."
        },
        {
            question: " What is the opposite of 'early'?",
            options: ["Soon", "Late", "Fast", "Quick"],
            answer: "Late",
            explanation: "'Late' is the opposite of 'early'."
        },
        {
            question: " Choose the correct sentence:",
            options: [
                "He have a book.",
                "He has a book.",
                "He having a book.",
                "He hads a book."
            ],
            answer: "He has a book.",
            explanation: "Correct subject-verb agreement: 'He has a book.'"
        },
        {
            question: " What is the superlative form of 'good'?",
            options: ["Goodest", "More good", "Better", "Best"],
            answer: "Best",
            explanation: "'Best' is the superlative form of 'good'."
        },
        {
            question: " Which word is a preposition?",
            options: ["Quick", "Over", "Blue", "Run"],
            answer: "Over",
            explanation: "'Over' is a preposition showing position or movement."
        },
        {
            question: " Which sentence uses the present continuous tense?",
            options: [
                "She eat dinner.",
                "She is eating dinner.",
                "She has eaten dinner.",
                "She eats dinner."
            ],
            answer: "She is eating dinner.",
            explanation: "Present continuous = 'is/are/am + verb-ing'"
        }
    ];

    const quizForm = document.getElementById("quizForm");

    questions.forEach((q, index) => {
        const div = document.createElement("div");
        div.className = "question";
        div.innerHTML = `<h3>${index + 1}. ${q.question}</h3>` +
            q.options.map(option =>
                `<label><input type="radio" name="q${index + 1}" value="${option}"> ${option}</label><br>`
            ).join("");
        quizForm.appendChild(div);
    });

    let tempsRestant = 3600;
    const timerEl = document.getElementById("timer");

    const countdown = setInterval(() => {
        tempsRestant--;
        const minutes = Math.floor(tempsRestant / 60);
        const secondes = tempsRestant % 60;
        timerEl.textContent = `${minutes}:${secondes < 10 ? '0' : ''}${secondes}`;

        if (tempsRestant <= 0) {
            clearInterval(countdown);
            corriger();
        }
    }, 1000);

    window.corriger = function () {
        clearInterval(countdown);
        let score = 0;
        let html = "<h2>Résultats :</h2>";

        questions.forEach((q, i) => {
            const name = `q${i + 1}`;
            const selected = document.querySelector(`input[name='${name}']:checked`);

            if (selected) {
                if (selected.value === q.answer) {
                    score++;
                    html += `<p><strong>Q${i + 1}</strong> ✅ Correct !<br>${q.explanation}</p>`;
                } else {
                    html += `<p><strong>Q${i + 1}</strong> ❌ Faux.<br>${q.explanation}</p>`;
                }
            } else {
                html += `<p><strong>Q${i + 1}</strong> ❌ Non répondu.<br>${q.explanation}</p>`;
            }
        });

        html += `<h3>Score final : ${score}/${questions.length}</h3>`;
        document.getElementById("resultat").innerHTML = html;
    }
});
