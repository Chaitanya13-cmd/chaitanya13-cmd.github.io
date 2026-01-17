if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

function init() {
  // 👇 existing code yahin rahega
}

document.addEventListener("DOMContentLoaded", () => {

  const roasts = [
    { line: "Skill issue ___", answer: "detected" },
    { line: "Bro thought he ___", answer: "cooked" },
    { line: "Confidence high, skill ___", answer: "low" },
    { line: "Game strong, brain ___", answer: "weak" },
    { line: "Lagging in real ___", answer: "life" }
  ];

  const text = document.getElementById("roastText");
  const input = document.getElementById("roastInput");
  const startBtn = document.getElementById("startRoast");
  const checkBtn = document.getElementById("checkRoast");
  const result = document.getElementById("roastResult");

  if (!startBtn || !checkBtn) return;

  let current = null;

  startBtn.addEventListener("click", () => {
    current = roasts[Math.floor(Math.random() * roasts.length)];
    text.innerText = current.line;
    input.value = "";
    result.innerText = "";
    input.focus();
  });

  checkBtn.addEventListener("click", () => {
    if (!input.value) {
      result.innerText = "😐 Type something bro";
      return;
    }

    if (input.value.trim().toLowerCase() === current.answer) {
      result.innerText = "🔥 CORRECT! Roast survived 😎";
      result.style.color = "lime";
    } else {
      result.innerText = `💀 WRONG! Answer was "${current.answer}"`;
      result.style.color = "red";
    }
  });

});


