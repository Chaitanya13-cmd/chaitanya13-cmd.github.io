const secretNumber = Math.floor(Math.random() * 10) + 1;

const roasts = [
  "💀 Bhai rehne de… ye toh bilkul galat tha",
  "😂 Itna confidence galat answer ke liye?",
  "🤡 Ye number nahi, ye toh sapna lag raha hai",
  "😬 Aankh band karke guess kiya kya?",
  "🔥 Skill issue bro",
  "🧠 CPU lagao thoda"
  "🤧 Tumse Na Ho Payega Lala",
  "🤣 Lag nahi tha, skill hi missing thi",
  "💀 Itni baar mara ki respawn bhi bore ho gaya",
];

function checkGuess() {
  const input = document.getElementById("guessInput").value;
  const result = document.getElementById("result");

  if (input === "") {
    result.innerText = "😐 Number daal toh pehle";
    return;
  }

  if (Number(input) === secretNumber) {
    result.innerText = "🎉 Areee OP! Sahi jawab 🔥";
    result.style.color = "#22c55e";
  } else {
    const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
    result.innerText = randomRoast;
    result.style.color = "#ef4444";
  }
}
