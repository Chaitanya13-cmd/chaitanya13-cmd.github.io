document.addEventListener("DOMContentLoaded", () => {

  const secretNumber = Math.floor(Math.random() * 10) + 1;

  const roasts = [
    "💀 Bhai rehne de",
    "😂 Ye toh galat nikla",
    "🤡 Aankh band thi kya",
    "🔥 Skill issue bro",
    "🧠 Thoda dimag lagao"
    "🔥 Skill issue detected", 
    "🧠 Brain.exe not responding"
  ];

  const button = document.getElementById("guessBtn");
  const input = document.getElementById("guessInput");
  const result = document.getElementById("result");

  button.addEventListener("click", () => {
    const guess = input.value;

    if (!guess) {
      result.innerText = "😐 Number daal pehle";
      return;
    }

    if (Number(guess) === secretNumber) {
      result.innerText = "🎉 OP! Sahi jawab 🔥";
      result.innerText = "🔥 BUTTON CLICK HO RAHA HAI";
      result.style.color = "lime";
    } else {
      result.innerText =
        roasts[Math.floor(Math.random() * roasts.length)];
      result.style.color = "red";
    }
  });

});

