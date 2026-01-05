document.addEventListener("DOMContentLoaded", () => {

  const input = document.getElementById("secretInput");
  const btn = document.getElementById("checkSecret");
  const result = document.getElementById("secretResult");

  if (!btn) {
    console.error("Secret elements missing");
    return;
  }

  btn.addEventListener("click", () => {
    const code = input.value.trim().toLowerCase();

    if (!code) {
      result.innerText = "😐 Code toh likh bro";
      return;
    }

    if (code === "gg") {
      result.innerText = "🎉 GG UNLOCKED!";
      result.style.color = "lime";
    } else if (code === "brain") {
      result.innerText = "🧠 Brain mode ON!";
      result.style.color = "cyan";
    } else {
      result.innerText = "❌ Wrong code 😈";
      result.style.color = "red";
    }

    input.value = "";
  });

});
