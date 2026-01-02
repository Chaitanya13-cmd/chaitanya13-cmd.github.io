const emojis = ["😀", "🔥", "💀", "😈", "👀", "⚡", "🎯", "🚀"];

let level = 1;
let sequence = [];

const levelText = document.getElementById("level");
const display = document.getElementById("memoryDisplay");
const startBtn = document.getElementById("startMemory");
const input = document.getElementById("memoryInput");
const checkBtn = document.getElementById("checkMemory");
const result = document.getElementById("memoryResult");

function generateSequence() {
  sequence = [];
  for (let i = 0; i < level + 2; i++) {
    sequence.push(emojis[Math.floor(Math.random() * emojis.length)]);
  }
}

startBtn.addEventListener("click", () => {
  generateSequence();
  display.innerText = sequence.join(" ");
  result.innerText = "";
  input.value = "";

  // show time decreases as level increases
  const showTime = Math.max(400, 1200 - level * 150);

  setTimeout(() => {
    display.innerText = "❓ ❓ ❓";
  }, showTime);
});

checkBtn.addEventListener("click", () => {
  if (!input.value) {
    result.innerText = "😐 Type the emojis bro";
    return;
  }

  if (input.value === sequence.join("")) {
    result.innerText = "🎉 LEVEL UP! GG 🔥";
    result.style.color = "lime";
    level++;
    levelText.innerText = level;
  } else {
    result.innerText = "💀 Wrong! Back to Level 1 😈";
    result.style.color = "red";
    level = 1;
    levelText.innerText = level;
  }
});
