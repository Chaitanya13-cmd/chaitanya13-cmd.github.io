document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("gameModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const playBtn = document.getElementById("playBtn");
  const closeBtn = document.querySelector(".close-btn");

  let currentTarget = "";

  document.querySelectorAll(".game-card").forEach(card => {
    card.addEventListener("click", () => {
      modalTitle.textContent = card.dataset.title;
      modalDesc.textContent = card.dataset.desc;
      currentTarget = card.dataset.target;
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  playBtn.addEventListener("click", () => {
  modal.style.display = "none";

  document.getElementById("allGames").style.display = "block";

  const target = document.getElementById(currentTarget);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
});
