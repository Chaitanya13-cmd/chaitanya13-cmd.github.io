alert("BOSS SCRIPT LOADED 🔥");

let bossHP = 100;

const btn = document.getElementById("bossBtn");
const hpText = document.getElementById("bossHp");
const msg = document.getElementById("bossMsg");

btn.addEventListener("click", () => {
  bossHP -= 10;
  if (bossHP < 0) bossHP = 0;

  hpText.innerText = bossHP;
  msg.innerText = "⚔️ You attacked the boss!";

  if (bossHP === 0) {
    msg.innerText = "🏆 BOSS DEFEATED!";
    btn.disabled = true;
  }
});

