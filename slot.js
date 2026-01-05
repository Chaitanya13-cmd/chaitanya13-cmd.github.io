document.addEventListener("DOMContentLoaded", () => {

  const emojis = ["🍒", "🍋", "🍉", "⭐", "💎", "🔥"];

  const items = document.querySelectorAll(".slotItem");
  const spinBtn = document.getElementById("spinSlot");
  const result = document.getElementById("slotResult");

  if (!spinBtn || items.length < 3) return;

  spinBtn.addEventListener("click", () => {
    const a = emojis[Math.floor(Math.random() * emojis.length)];
    const b = emojis[Math.floor(Math.random() * emojis.length)];
    const c = emojis[Math.floor(Math.random() * emojis.length)];

    items[0].innerText = a;
    items[1].innerText = b;
    items[2].innerText = c;

    if (a === b && b === c) {
      result.innerText = "🎉 JACKPOT!!! YOU WIN 💎🔥";
      result.style.color = "lime";
    } else if (a === b || b === c || a === c) {
      result.innerText = "😭 SO CLOSE!";
      result.style.color = "orange";
    } else {
      result.innerText = "💀 Better luck next spin";
      result.style.color = "red";
    }
  });

});

