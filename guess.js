const secretNumber = Math.floor(Math.random() * 10) + 1;

const roasts = [
  "💀 Bhai rehne de… bilkul galat",
  "😂 Confidence OP, answer flop",
  "🤡 Aankh band karke guess?",
  "😬 Ye toh door door tak nahi",
  "🔥 Skill issue detected",
  "🧠 Brain.exe not responding"
  "😂 Itna confidence galat answer ke liye?",  
  "🔥 Skill issue bro", 
  "🧠 CPU lagao thoda" 
  "🤧 Tumse Na Ho Payega", 
  "🤣 Lag nahi tha, skill hi missing thi", 
];

const button = document.getElementById("guessBtn");
const input = document.getElementById("guessInput");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  const guess = input.value;

  if (guess === "") {
    result.innerText = "😐 Number daal pehle";
    result.style.color = "orange";
    return;
  }

  if (Number(guess) === secretNumber) {
    result.innerText = "🎉 Aree OP! Sahi pakda 🔥";
    result.style.color = "#22c55e";
  } else {
    const roast = roasts[Math.floor(Math.random() * roasts.length)];
    result.innerText = roast;
    result.style.color = "#ef4444";
  }
});
