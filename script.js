const streakDisplay = document.getElementById("dailyStreak");

function getToday() {
  return new Date().toDateString();
}

function checkDailyStreak() {
  let lastVisit = localStorage.getItem("lastVisit");
  let streak = Number(localStorage.getItem("streak")) || 0;
  const today = getToday();

  if (!lastVisit) {
    // first visit ever
    streak = 1;
  } 
  else {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (lastVisit === today) {
      // same day → do nothing
    } 
    else if (lastVisit === yesterday.toDateString()) {
      streak += 1; // continued streak
    } 
    else {
      streak = 1; // streak broken
    }
  }

  localStorage.setItem("streak", streak);
  localStorage.setItem("lastVisit", today);

  streakDisplay.textContent = streak;
}

checkDailyStreak();
