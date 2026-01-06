document.addEventListener("DOMContentLoaded", () => {

  const logos = [
    { id: 1, img: "logos/byjus.png" },
    { id: 2, img: "logos/unacademy.png" },
    { id: 3, img: "logos/vedantu.png" },
    { id: 4, img: "logos/nexttopper.png" },
    { id: 5, img: "logos/physicswallah.png" }
  ];

  const logoImg = document.getElementById("logoOnly");
  const buttons = document.querySelectorAll(".logoBtn");
  const result = document.getElementById("logoResult");
  const nextBtn = document.getElementById("nextLogo");

  let correctId = null;

  function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }

  function loadGame() {
    result.innerText = "";

    const shuffled = shuffle([...logos]);
    const options = shuffled.slice(0, 4);

    const correct = options[Math.floor(Math.random() * options.length)];
    correctId = correct.id;

    logoImg.src = correct.img;

    buttons.forEach((btn, i) => {
      btn.innerText = "Option " + (i + 1);
      btn.onclick = () => {
        if (options[i].id === correctId) {
          result.innerText = "🎉 Correct! Sharp eyes 👀";
          result.style.color = "lime";
        } else {
          result.innerText = "💀 Wrong! Look carefully";
          result.style.color = "red";
        }
      };
    });
  }

  nextBtn.addEventListener("click", loadGame);

  loadGame();
});
