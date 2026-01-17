if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

function init() {
  // 👇 existing code yahin rahega
}

document.addEventListener("DOMContentLoaded", () => {

  const q = document.getElementById("mathQ");
  const input = document.getElementById("mathInput");
  const result = document.getElementById("mathResult");
  const timerText = document.getElementById("mathTimer");
  const startBtn = document.getElementById("startMath");
  const checkBtn = document.getElementById("checkMath");

  if (!startBtn || !checkBtn) return;

  let answer = 0;
  let time = 5;
  let timer = null;

  function newQuestion() {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const ops = ["+", "-", "×"];
    const op = ops[Math.floor(Math.random() * ops.length)];

    if (op === "+") answer = a + b;
    if (op === "-") answer = a - b;
    if (op === "×") answer = a * b;

    q.innerText = `${a} ${op} ${b} = ?`;
  }

  startBtn.addEventListener("click", () => {
    input.value = "";
    result.innerText = "";
    time = 5;
    timerText.innerText = `Time: ${time}s`;

    newQuestion();

    clearInterval(timer);
    timer = setInterval(() => {
      time--;
      timerText.innerText = `Time: ${time}s`;
      if (time <= 0) {
        clearInterval(timer);
        result.innerText = "⏰ Time up! Brain lag 😈";
        result.style.color = "red";
      }
    }, 1000);
  });

  checkBtn.addEventListener("click", () => {
    if (!input.value) {
      result.innerText = "😐 Answer toh daal bro";
      return;
    }

    clearInterval(timer);

    if (Number(input.value) === answer) {
      result.innerText = "🔥 Correct! Quick maths!";
      result.style.color = "lime";
    } else {
      result.innerText = "💀 Wrong! Calculator bulao";
      result.style.color = "red";
    }
  });

});

