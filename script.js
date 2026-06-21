const startBtn = document.getElementById("startBtn");

// QUESTIONS
const questions = [
{
question: " Zakaria be honest ... During a match, your heart rate is…",
answers: [
"Normal human level",
"Slightly nervous",
"Emergency medical level",
"Refuses to be measured"
]
},
{
question: "Your team won a match what will u do ?🤪",
answers: ["celebrate","scream","annoy doha","all above"]
},
{
question: "A friend says: Football is just 22 people chasing a ball. Your reaction?",
answers: ["Ignore him","Laugh politely","Start a 45-minute presentation","End the friendship immediately"]
},
{
question: "Raja scores… what dose Zakaria do first? 🤔",
answers: [
"Stay calm (impossible)",
"Jump like a kangaroo",
"Wake up the whole house",
"Start celebrating before VAR checks"
]
},
{
question: "How do you describe Raja on a historic night?",
answers: [
"Just a match",
"A great victory",
"A legendary performance",
"Football itself bows down" ]
}
];

let currentQuestion = 0;

// SCREENS
const welcomeScreen = document.querySelector(".container");
const questionScreen = document.getElementById("questionScreen");
const questionText = document.getElementById("questionText");
const questionNumber = document.getElementById("questionNumber");
const answers = document.getElementById("answers");
const progressBar = document.getElementById("progressBar");

const resultScreen = document.getElementById("resultScreen");
const analysisText = document.getElementById("analysisText");
const finalResult = document.getElementById("finalResult");

// FINAL UI
const finalQuestion = document.getElementById("finalQuestion");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");


const eagleRight = document.getElementById("eagleRight");
const eagleLeft = document.getElementById("eagleLeft");
const viveText = document.getElementById("viveText");

const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2");
const logoCircle = document.getElementById("logoCircle");
const eagleScene = document.getElementById("eagleScene");
const afterScene = document.getElementById("afterScene");
const waitText = document.getElementById("waitText");
const finalYes = document.getElementById("finalYes");
const moroccoScene = document.getElementById("moroccoScene");


// =====================
// START
// =====================
startBtn.addEventListener("click", () => {

    welcomeScreen.style.display = "none";
    questionScreen.style.display = "flex";

    currentQuestion = 0;
    showQuestion();
});


// =====================
// SHOW QUESTION (FIXED BUTTONS)
// =====================
function showQuestion() {

    const q = questions[currentQuestion];

    questionNumber.innerText = `Question ${currentQuestion + 1} / ${questions.length}`;
    questionText.innerText = q.question;

    answers.innerHTML = "";

    q.answers.forEach(ans => {

        const btn = document.createElement("button");
        btn.className = "answer-btn";
        btn.innerText = ans;

        btn.onclick = nextQuestion;

        answers.appendChild(btn);
    });

    progressBar.style.width =
        ((currentQuestion) / questions.length) * 100 + "%";
}


// =====================
// NEXT QUESTION
// =====================
function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        finishQuiz();
    }
}


// =====================
// FINISH
// =====================
function finishQuiz() {

    questionScreen.style.display = "none";
    resultScreen.style.display = "flex";

    startAnalysis();
}


// =====================
// ANALYSIS FLOW
// =====================
function startAnalysis() {

    typeText(analysisText, "Analyzing Subject...", 90, () => {

        let percent = 0;

        const load = setInterval(() => {

            percent += 5;

            if (percent > 100) percent = 100;

            analysisText.innerText = `Loading... ${percent}%`;

            if (percent === 100) {

                clearInterval(load);

                setTimeout(() => {

                    startScanMessages();

                }, 800);
            }

        }, 200);
    });
}


// =====================
// SCAN MESSAGES
// =====================
function startScanMessages() {

    const messages = [
        "Collecting football memories...",
        "Checking loyalty records...",
        "Scanning green energy..."
    ];

    let i = 0;

    function next() {

        if (i >= messages.length) {
            setTimeout(triggerSystemError, 1000);
            return;
        }

        typeText(analysisText, messages[i], 80, () => {
            i++;
            setTimeout(next, 1000);
        });
    }

    next();
}


// =====================
// ERROR
// =====================
function triggerSystemError() {

    analysisText.classList.add("error");

    typeText(analysisText, "⚠ SYSTEM ERROR", 90, () => {

        setTimeout(() => {

            typeText(analysisText, "Unable to calculate passion level.", 90, () => {

                setTimeout(() => {

                    typeText(analysisText, "Reason: Passion exceeds measurable limits.", 90, () => {

                        showFinalScene();
                    });

                }, 800);

            });

        }, 800);

    });
}


// =====================
// FINAL SCENE (FIXED)
// =====================
function showFinalScene() {

    analysisText.classList.remove("error");

    typeText(analysisText, "SYSTEM COMPLETE ...", 80, () => {

        setTimeout(() => {

            showVerified();

        }, 800);

    });
}
// =====================
// NO BUTTON ESCAPE
// =====================
noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});


function showVerified() {

    const verified = document.getElementById("verifiedMessage");

    // مهم جدًا reset
    verified.style.display = "flex";
    verified.style.opacity = "1";
    verified.classList.remove("hidden");
typeText(
    verified.querySelector("h1"),
    " VERIFIED Rajaoui ✔",
    80
);
    setTimeout(() => {

        verified.style.opacity = "0";

        setTimeout(() => {

            verified.style.display = "none";

            showReadyQuestion();

        }, 500);

    }, 3000);
}

function showReadyQuestion() {

    finalQuestion.innerHTML = `
        <h2>Are you ready?</h2>
        <button id="yesBtn">YES</button>
        <button id="noBtn">NO</button>
    `;

    finalQuestion.style.display = "block";

    const yes = document.getElementById("yesBtn");
    const no = document.getElementById("noBtn");

    yes.onclick = startCinematic;

    no.addEventListener("mouseover", moveNoButton);
}
function moveNoButton(e) {

    const btn = e.target;

    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;

    btn.style.position = "relative";
    btn.style.transform = `translate(${x}px, ${y}px)`;
}

// =====================
// YES SCENE (FIXED + SAFE)
// =====================
yesBtn.addEventListener("click", () => {

    finalQuestion.style.display = "none";

    const verified = document.getElementById("verifiedMessage");

    verified.classList.remove("hidden");
    verified.style.display = "flex";

    setTimeout(() => {

        verified.style.opacity = "0";

        setTimeout(() => {

            verified.style.display = "none";

            // 👉 هنا يبدأ الفيلم الحقيقي
            startCinematic();

        }, 800);

    }, 2000);

});

function startCinematic() {

    finalQuestion.style.display = "none";
    analysisText.style.display = "none";

    eagleScene.style.display = "block";
    eagleScene.classList.remove("hidden");

    song1.currentTime = 0;
    song1.play().catch(() => {});

    eagleRight.classList.add("flyRight");
    eagleLeft.classList.add("flyLeft");

    setTimeout(() => {
        logoCircle.classList.add("showLogo");
        viveText.classList.add("showVive");
    }, 1800);

    song1.onended = startAfterScene;
}

function startAfterScene() {

    eagleScene.style.display = "none";

    afterScene.style.display = "flex";
    afterScene.classList.remove("hidden");

    typeText(waitText, "WAIT...", 100, () => {

        setTimeout(() => {

            waitText.innerText = "WE STILL DIDN'T FINISH";

            setTimeout(() => {

                document.getElementById("endQuestion").style.display = "block";

            }, 2000);

        }, 1500);

    });
}

finalYes.onclick = () => {

    afterScene.style.display = "none";

    moroccoScene.classList.remove("hidden");
    moroccoScene.style.display = "flex";

song2.currentTime = 0;
song2.play().catch(() => {});

loopTextUntilEnd(song2, document.getElementById("moroccoText"), "DIMA MAGHRIB 🇲🇦");};


// =====================
// TYPE TEXT
// =====================
function typeText(element, text, speed, callback) {

    let i = 0;
    element.innerHTML = "";

    const typing = setInterval(() => {

        element.innerHTML += text.charAt(i);
        i++;

        if (i >= text.length) {
            clearInterval(typing);
            setTimeout(() => callback && callback(), 500);
        }

    }, speed);
}

function loopTextUntilEnd(audio, element, text) {

    let running = true;

    function loop() {

        if (!running) return;

        element.innerHTML = "";
        element.style.opacity = "1";

        let i = 0;

        const typing = setInterval(() => {

            element.innerHTML += text.charAt(i);
            i++;

            if (i >= text.length) {
                clearInterval(typing);

                setTimeout(() => {

                    element.innerHTML = ""; // delete

                    setTimeout(loop, 500); // repeat

                }, 1200);
            }

        }, 120);
    }

    loop();

    audio.onended = () => {
        running = false;
        element.innerHTML = "";
    };
}