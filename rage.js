let count = 0;

const texts = [
  "😏 Bola tha mat dabana",
  "😒 Bhai seriously?",
  "😡 Aree ruk ja!",
  "🤬 Hadd hai yaar",
  "💀 Bas kar bhai, button thak gaya"
];

const btn = document.getElementById("rageBtn");
const text = document.getElementById("rageText");

btn.addEventListener("click", () => {
  text.innerText = texts[count % texts.length];
  count++;
});
