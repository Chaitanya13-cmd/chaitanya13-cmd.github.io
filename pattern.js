if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

function init() {
  // 👇 existing code yahin rahega
}

document.addEventListener("DOMContentLoaded", () => {

  let pattern = [];

  const patterns = [
    ["🔴", "🔴", "🔵", "🔴", "🔴", "🔵"],
    ["😀", "😐", "😀", "😐", "😀", "😐"],
    ["🔥", "💀", "🔥", "💀", "🔥", "💀"],
    ["🟢", "🟢", "🟡", "🟢", "🟢", "🟡"]
  ];

  const text = document.getElementById("patternText");
  const input = document.getElementById("patternInput");
  const result = document.getElementById("patternResult");
  const startBtn = document.getElementById("startPattern");
  const checkBtn = document.getElementById("checkPattern");

  // SAFETY CHECK
  if (!startBtn || !checkBtn) {
    console.error("Pattern game elements missing");
    return;
  }

  startBtn.addEventListener("click", () => {
    pattern = patterns[Math.floor(Math.random() * patterns.length)];
    text.innerText = pattern.slice(0, -1).join(" ") + " ❓";
    input.value = "";
    result.innerText = "";
  });

  checkBtn.addEventListener("click", () => {
    if (!input.value) {
      result.innerText = "😐 Emoji likh bro";
      return;
    }

    if (input.value === pattern[pattern.length - 1]) {
      result.innerText = "🧠 Correct! Brain OP 🔥";
      result.style.color = "lime";
    } else {
      result.innerText = "💀 Wrong! Pattern miss ho gaya";
      result.style.color = "red";
    }
  });

});

