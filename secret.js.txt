document.addEventListener("DOMContentLoaded", () => {

  const input = document.getElementById("secretInput");
  const btn = document.getElementById("checkSecret");
  const result = document.getElementById("secretResult");

  if (!btn) return;

  btn.addEventListener("click", () => {
    const code = input.value.trim().toLowerCase();

    if (!code) {
      result.innerText = "😐 Code toh likh bro";
      return;
    }

    if (code === "gg") {
      result.innerText = "🎉 GG UNLOCKED! Respect +10";
      result.style.color = "lime";
    } 
    else if (code === "brain") {
      result.innerText = "🧠 BRAIN MODE ON! You smart fr";
      result.style.color = "cyan";
    } 
    else if (code === "oops") {
      result.innerText = "😈 OOPS MODE… try again";
      result.style.color = "orange";
    } 
    else {
      result.innerText = "❌ Wrong code! Try harder 😏";
      result.style.color = "red";
    }

    input.value = "";
  });

});
