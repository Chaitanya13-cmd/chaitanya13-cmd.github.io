const emojis = ["😀", "🔥", "💀", "😈", "👀", "⚡"];
let sequence = [];

const display = document.getElementById("memoryDisplay");
const startBtn = document.getElementById("startMemory");
const input = document.getElementById("memoryInput");
const checkBtn = document.getElementById("checkMemory");
const result = document.getElementById("memoryResult");

startBtn.addEventListener("click", () => {
  sequence = [];

  for (let i = 0; i < 3; i++) {
    sequence.push(emojis[Math.floor(Math.random() * emojis.length)]);
  }

  display.innerText = sequence.join(" ");
  result.innerText = "";
  input.value = "";

  // hide after 1 second
  setTimeout(() => {
    display.innerText = "❓ ❓ ❓";
  }, 1000);
});

checkBtn.addEventListener("click", () => {
  const user = input.value.trim();

  if (!user) {
    result.innerText = "😐 Kuch toh likh bro";
    return;
  }

  if (user === sequence.join("")) {
    result.innerText = "🎉 OP MEMORY! GG 🔥";
    result.style.color = "lime";
  } else {
    result.innerText = "💀 Galat! Brain lagao 😈";
    result.style.color = "red";
  }
});
