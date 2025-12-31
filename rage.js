let count = 0;

const toxicTexts = [
  "😏 Bola tha mat dabana",
  "😒 Bhai control nahi hai kya?",
  "😤 Aree bas kar yaar",
  "🤡 Tu button se haar gaya",
  "🔥 Skill issue detected",
  "💀 Button bhi tujhe judge kar raha",
  "🧠 Brain.exe not responding",
  "😈 Ab toh jaan ke dabaa raha hai na?",
  "☣️ Toxic Mode: 100%"
];

const btn = document.getElementById("rageBtn");
const text = document.getElementById("rageText");
const level = document.getElementById("rageLevel");

btn.addEventListener("click", () => {
  count++;

  text.innerText = toxicTexts[count % toxicTexts.length];

  if (count < 3) {
    level.innerText = "Toxic Level: 🟢 Low";
  } else if (count < 6) {
    level.innerText = "Toxic Level: 🟡 Medium";
  } else {
    level.innerText = "Toxic Level: 🔴 HIGH ☣️";
  }
});
