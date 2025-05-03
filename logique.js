// Pour le test logique 


const questions = [
    {
        question: "1. Quelle est la prochaine lettre dans cette suite ? A - C - F - J - O - ?",
        options: ["a) U", "b) S", "c) V", "d) T"],
        answer: "a",
        explanation: "Suite : +1, +2, +3, +4, +5 → A(1), C(3), F(6), J(10), O(15), U(21)"
    },
    {
        question: "2. Si 2 enfants mangent 2 gâteaux en 2 minutes, combien de gâteaux 6 enfants mangent-ils en 6 minutes ?",
        options: ["a) 6", "b) 12", "c) 18", "d) 9"],
        answer: "c",
        explanation: "Chaque enfant mange 1 gâteau en 2 minutes, donc 3 gâteaux en 6 minutes. 6×3 = 18."
    },
    {
        question: "3. Complète la série : 2 - 4 - 8 - 16 - ? - 64",
        options: ["a) 24", "b) 32", "c) 30", "d) 48"],
        answer: "b",
        explanation: "Suite ×2 : 2×2=4, 4×2=8, 8×2=16, 16×2=32"
    },
    {
        question: "4. Trouvez l'intrus : 3, 5, 7, 11, 14, 17",
        options: ["a) 5", "b) 14", "c) 11", "d) 7"],
        answer: "b",
        explanation: "Tous les nombres sauf 14 sont premiers."
    },
    {
        question: "5. Quel nombre complète cette suite ? 1, 4, 9, 16, ?",
        options: ["a) 25", "b) 20", "c) 36", "d) 30"],
        answer: "a",
        explanation: "Carrés parfaits : 1², 2², 3², 4², 5² = 25"
    },
    {
        question: "6. Dans un groupe de 5 personnes, chacun serre la main de tous les autres. Combien de poignées de main ont lieu ?",
        options: ["a) 10", "b) 5", "c) 20", "d) 15"],
        answer: "a",
        explanation: "Formule : n(n-1)/2 = 5×4/2 = 10"
    },
    {
        question: "7. Quel est le mot qui ne correspond pas aux autres ? Chien, Chat, Souris, Voiture",
        options: ["a) Chien", "b) Souris", "c) Chat", "d) Voiture"],
        answer: "d",
        explanation: "Chien, chat, souris = animaux. Voiture = objet, donc l'intrus."
    },
    {
        question: "8. Si 3 machines fabriquent 3 objets en 3 minutes, combien de temps pour 100 machines à produire 100 objets ?",
        options: ["a) 3 min", "b) 100 min", "c) 1 min", "d) 33 min"],
        answer: "a",
        explanation: "Chaque machine fabrique 1 objet en 3 min. 100 machines = 100 objets en 3 min."
    },
    {
        question: "9. Quel nombre complète la suite ? 1, 1, 2, 3, 5, 8, ?",
        options: ["a) 11", "b) 13", "c) 10", "d) 14"],
        answer: "b",
        explanation: "Suite de Fibonacci : 5+8 = 13."
    },
    {
        question: "10. Un train met 2 secondes à passer devant un piéton. Combien de temps met-il à traverser un pont 2 fois plus long ?",
        options: ["a) 2 sec", "b) 4 sec", "c) 6 sec", "d) 8 sec"],
        answer: "b",
        explanation: "Si la longueur double, le temps double : 2 × 2 = 4 sec."
    },
    {
        question: "11. Lequel n’est pas un multiple de 3 : 3, 6, 9, 14, 15 ?",
        options: ["a) 14", "b) 9", "c) 15", "d) 6"],
        answer: "a",
        explanation: "14 n’est pas un multiple de 3."
    },
    {
        question: "12. Quel mot est l'intrus ? Pomme, Banane, Kiwi, Carotte",
        options: ["a) Kiwi", "b) Carotte", "c) Pomme", "d) Banane"],
        answer: "b",
        explanation: "Carotte = légume, les autres = fruits."
    },
    {
        question: "13. Trouvez le mot qui complète : jour, semaine, mois, ?",
        options: ["a) an", "b) minute", "c) heure", "d) matin"],
        answer: "a",
        explanation: "Suite croissante des unités de temps."
    },
    {
        question: "14. Quel chiffre complète cette série ? 2, 6, 12, 20, ?",
        options: ["a) 30", "b) 28", "c) 24", "d) 26"],
        answer: "b",
        explanation: "+4, +6, +8, +10 → suite croissante des écarts."
    },
    {
        question: "15. Le mot intrus : table, chaise, canapé, crayon",
        options: ["a) chaise", "b) crayon", "c) table", "d) canapé"],
        answer: "b",
        explanation: "Tous sont meubles sauf crayon."
    }
];

let tempsRestant = 1200;
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

const form = document.getElementById("quizForm");

questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question";

    div.innerHTML = `<h3>${q.question}</h3>` +
        q.options.map(opt => `<label><input type="radio" name="q${index + 1}" value="${opt[0]}"> ${opt}</label><br>`).join("");

    form.appendChild(div);
});

function corriger() {
    clearInterval(countdown);
    let score = 0;
    let html = "<h2>Résultats :</h2>";

    questions.forEach((q, index) => {
        const qName = `q${index + 1}`;
        const reponse = document.querySelector(`input[name=${qName}]:checked`);

        if (reponse) {
            if (reponse.value === q.answer) {
                score++;
                html += `<p><strong>Q${index + 1}</strong> ✅ Correct !<br>${q.explanation}</p>`;
            } else {
                html += `<p><strong>Q${index + 1}</strong> ❌ Faux.<br>${q.explanation}</p>`;
            }
        } else {
            html += `<p><strong>Q${index + 1}</strong> ❌ Non répondu.<br>${q.explanation}</p>`;
        }
    });

    html += `<h3>Score final : ${score}/${questions.length}</h3>`;
    document.getElementById("resultat").innerHTML = html;
}


