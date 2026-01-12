
checkDailyStreak();

const modal = document.getElementById("gameModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const playBtn = document.getElementById("playBtn");

let targetGameId = "";

function openModal(title, desc, gameId) {
  modalTitle.textContent = title;
  modalDesc.textContent = desc;
  targetGameId = gameId;

  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

playBtn.onclick = () => {
  closeModal();
  document.getElementById(targetGameId)
    .scrollIntoView({ behavior: "smooth" });
};

