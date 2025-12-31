let score = 0;

const box = document.getElementById("game-box");
const scoreText = document.getElementById("score");
const clickSound = document.getElementById("clickSound");

box.addEventListener("click", () => {
  clickSound.currentTime = 0; // repeat fast
  clickSound.play();

  score++;
  scoreText.innerText = score;

  const x = Math.random() * 300;
  const y = Math.random() * 300;

  box.style.left = x + "px";
  box.style.top = y + "px";
});
