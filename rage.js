let count = 0;

const toxicTexts = [
  "😏 Bola tha mat dabana",
  "😒 Bhai control nahi hai?",
  "🤡 Button bhi judge kar raha",
  "🔥 Skill issue detected",
  "💀 Phone thak gaya bro",
  "☣️ Toxic Mode MAX"
];

const btn = document.getElementById("rageBtn");
const text = document.getElementById("rageText");
const level = document.getElementById("rageLevel");
const sound = document.getElementById("clickSound");

btn.addEventListener("click", () => {
  count++;

  // 🔊 sound
  sound.currentTime = 0;
  sound.play();

  // 📳 vibration (mobile)
  if (navigator.vibrate) {
    navigator.vibrate([100, 50, 100]);
  }

  text.innerText = toxicTexts[count % toxicTexts.length];

  if (count < 3) level.innerText = "Toxic Level: 🟢 Low";
  else if (count < 6) level.innerText = "Toxic Level: 🟡 Medium";
  else level.innerText = "Toxic Level: 🔴 HIGH ☣️";
});
