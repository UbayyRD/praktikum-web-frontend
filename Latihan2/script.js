const questions = [
    { question: "Siapakah wali kelas 10 RPL??", options: ["Pak Hasan", "Pak Dadan", "Pak Toto", "Pak Dwi"], correct: 2 },
    { question: "Siapa kepala program RPL SMKN 8?", options: ["Pak Toto", "Pak Hasan", "Pak Dadan", "Pak Dwi"], correct: 1 },
    { question: "Siapa kepala sekolah SMKN 8?", options: ["Pak Hasan", "Pak Toto", "Pak Dwi", "Pak Dadan"], correct: 3 }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const q = questions[currentQuestionIndex];
    document.getElementById("question").innerText = q.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    document.getElementById("feedback").innerText = "";
    document.getElementById("feedback").style.opacity = "0";
    document.getElementById("nextBtn").disabled = true;

    q.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("btn", "btn-outline-primary");
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const q = questions[currentQuestionIndex];
    const feedback = document.getElementById("feedback");
    if (selectedIndex === q.correct) {
        feedback.innerText = "Jawaban Benar!";
        feedback.classList.add("text-success");
    } else {
        feedback.innerText = "Jawaban Salah!";
        feedback.classList.add("text-danger");
    }
    feedback.style.opacity = "1";
    document.getElementById("nextBtn").disabled = false;
}

document.getElementById("nextBtn").addEventListener("click", () => {
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    loadQuestion();
});

loadQuestion();