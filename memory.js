document.addEventListener("DOMContentLoaded", () => {

  const emojis = ["😀", "🔥", "💀", "😈", "👀", "⚡", "🎯", "🚀"];

  let level = 1;
  let sequence = [];

  const levelText = document.getElementById("level");
  const display = document.getElementById("memoryDisplay");
  const startBtn = document.getElementById("startMemory");
  const input = document.getElementById("memoryInput");
  const checkBtn = document.getElementById("checkMemory");
  const result = document.getElementById("memoryResult");

  // SAFETY CHECK
  if (!startBtn || !checkBtn) {
    console.error("Memory game elements missing");
    return;
  }

 function generateSequence() {
  sequence = [];

  // 👇 ek-ek karke emoji increase
  let emojiCount = level + 2; 
  // Level 1 = 3 emojis, Level 2 = 4, etc.

  for (let i = 0; i < emojiCount; i++) {
    sequence.push(
      emojis[Math.floor(Math.random() * emojis.length)]
    );
  }
}

  startBtn.addEventListener("click", () => {
    generateSequence();
    display.innerText = sequence.join(" ");
    input.value = "";
    result.innerText = "";

  let showTime = Math.max(400, 1200 - level * 100);


    setTimeout(() => {
      display.innerText = "❓ ❓ ❓";
    }, showTime);
  });

  checkBtn.addEventListener("click", () => {
    if (!input.value) {
      result.innerText = "😐 Kuch likh toh sahi";
      return;
    }

    if (input.value === sequence.join("")) {
      result.innerText = "🎉 LEVEL UP! 🔥";
      result.style.color = "lime";
      level++;
      levelText.innerText = level;
    } else {
      result.innerText = "💀 Galat! Level reset 😈";
      result.style.color = "red";
      level = 1;
      levelText.innerText = level;
    }
  });

});

document.getElementById("bar").style.width =
  Math.min(level * 10, 100) + "%";


