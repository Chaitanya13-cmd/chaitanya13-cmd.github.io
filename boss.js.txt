let bossHP = 100;

const btn = document.getElementById("bossBtn");
const hpText = document.getElementById("bossHp");
const msg = document.getElementById("bossMsg");

btn.addEventListener("click", () => {
  if (bossHP <= 0) {
    msg.innerText = "🏆 Boss already defeated! GG!";
    return;
  }

  // Player attack damage (random)
  const damage = Math.floor(Math.random() * 20) + 5;
  bossHP -= damage;
  if (bossHP < 0) bossHP = 0;

  hpText.innerText = bossHP;

  if (bossHP === 0) {
    msg.innerText = "🎉 YOU WIN! Boss defeated 💥";
    btn.innerText = "BOSS DOWN ☠️";
    btn.disabled = true;
  } else {
    // Boss taunts back
    const taunts = [
      "😈 Boss: Is that all?",
      "🐲 Boss: Weak attack!",
      "🔥 Boss: Try harder!",
      "💀 Boss: You’ll need more power!"
    ];
    msg.innerText = taunts[Math.floor(Math.random() * taunts.length)];
  }
});
