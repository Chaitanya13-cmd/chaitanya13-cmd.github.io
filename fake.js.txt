const facts = [
  { text: "The Sun rises in the East.", answer: true },
  { text: "Humans can breathe underwater without help.", answer: false },
  { text: "JavaScript is the same as Java.", answer: false },
  { text: "The Earth revolves around the Sun.", answer: true },
  { text: "2 + 2 = 5", answer: false },
  { text: "Light travels faster than sound.", answer: true }
];

let current = {};

const factText = document.getElementById("factText");
const result = document.getElementById("factResult");
const trueBtn = document.getElementById("trueBtn");
const falseBtn = document.getElementById("falseBtn");
const nextBtn = document.getElementById("nextFact");

function loadFact() {
  current = facts[Math.floor(Math.random() * facts.length)];
  factText.innerText = current.text;
  result.innerText = "";
}

trueBtn.addEventListener("click", () => check(true));
falseBtn.addEventListener("click", () => check(false));

function check(choice) {
  if (choice === current.answer) {
    result.innerText = "😎 Correct! Brain OP";
    result.style.color = "lime";
  } else {
    result.innerText = "🤡 Wrong! Fake pakad nahi paya";
    result.style.color = "red";
  }
}

nextBtn.addEventListener("click", loadFact);

// start first fact
loadFact();
