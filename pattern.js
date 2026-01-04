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

document.getElementById("startPattern").addEventListener("click", () => {
  pattern = patterns[Math.floor(Math.random() * patterns.length)];
  text.innerText = pattern.slice(0, -1).join(" ") + " ❓";
  input.value = "";
  result.innerText = "";
});

document.getElementById("checkPattern").addEventListener("click", () => {
  if (!input.value) {
    result.innerText = "😐 Emoji toh likh bro";
    return;
  }

  if (input.value === pattern[pattern.length - 1]) {
    result.innerText = "🧠 Correct! Brain OP 🔥";
    result.style.color = "lime";
  } else {
    result.innerText = "💀 Wrong! Pattern nahi samjha";
    result.style.color = "red";
  }
});
