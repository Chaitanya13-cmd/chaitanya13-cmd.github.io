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

document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document.getElementById("searchInput").value.trim();
  if (!query) return;

  const q = encodeURIComponent(query);

  document.getElementById("googleLink").href =
    `https://www.google.com/search?q=${q}`;

  document.getElementById("bingLink").href =
    `https://www.bing.com/search?q=${q}`;

  document.getElementById("duckLink").href =
    `https://duckduckgo.com/?q=${q}`;

  document.getElementById("yahooLink").href =
    `https://search.yahoo.com/search?p=${q}`;

  document.getElementById("ecosiaLink").href =
    `https://www.ecosia.org/search?q=${q}`;
});
