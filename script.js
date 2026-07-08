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

/* ===============================
   PREMIUM GAMING EFFECTS
================================*/

document.addEventListener("DOMContentLoaded",()=>{

// Create background particles
const particles=document.createElement("div");
particles.id="particles";
document.body.appendChild(particles);

for(let i=0;i<40;i++){

const p=document.createElement("span");

p.style.left=Math.random()*100+"vw";
p.style.top=Math.random()*100+"vh";

p.style.animationDuration=
8+Math.random()*12+"s";

p.style.animationDelay=
Math.random()*5+"s";

particles.appendChild(p);

}

// Mouse glow
const glow=document.createElement("div");
glow.id="mouseGlow";
document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});

// Card hover tilt

document.querySelectorAll(".game-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/15;
const rotateX=(rect.height/2-y)/15;

card.style.transform=
`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"perspective(900px) rotateX(0) rotateY(0) scale(1)";

});

});

});
