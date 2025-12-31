let score = 0;

const box = document.getElementById("game-box");
const scoreText = document.getElementById("score");
const clickSound = document.getElementById("clickSound");

if (box) {
  box.addEventListener("click", () => {
    if (clickSound) {
      clickSound.currentTime = 0;
      clickSound.play();
    }

    score++;
    scoreText.innerText = score;

    const x = Math.random() * 300;
    const y = Math.random() * 300;

    box.style.left = x + "px";
    box.style.top = y + "px";
  });
}
