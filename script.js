document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("gameModal");
  const title = document.getElementById("modalTitle");
  const desc = document.getElementById("modalDesc");
  const playBtn = document.getElementById("playBtn");
  const closeBtn = document.querySelector(".close-btn");

  let targetId = "";

  document.querySelectorAll(".game-card").forEach(card => {
    card.addEventListener("click", () => {
      title.textContent = card.dataset.title;
      desc.textContent = card.dataset.desc;
      targetId = card.dataset.target;
      modal.style.display = "block";
    });
  });

  closeBtn.onclick = () => modal.style.display = "none";

  playBtn.onclick = () => {
    modal.style.display = "none";
    document.getElementById("allGames").style.display = "block";
    document.getElementById(targetId).scrollIntoView({behavior:"smooth"});
  };

});
