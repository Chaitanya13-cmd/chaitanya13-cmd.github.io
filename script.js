let score = 0;

const box = document.getElementById("game-box");
const scoreText = document.getElementById("score");

box.addEventListener("click", () => {
  score++;
  scoreText.innerText = score;

  const x = Math.random() * 300;
  const y = Math.random() * 300;

  box.style.left = x + "px";
  box.style.top = y + "px";
});
