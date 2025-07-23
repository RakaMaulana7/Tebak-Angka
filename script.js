let secretNumber = Math.floor(Math.random() * 100) + 1;
let score = 100;

function checkGuess() {
  const guess = Number(document.getElementById('guess').value);
  const feedback = document.getElementById('feedback');
  const scoreDisplay = document.getElementById('score');

  if (!guess || guess < 1 || guess > 100) {
    feedback.textContent = "Masukkan angka 1 - 100!";
    feedback.style.color = "orange";
    return;
  }

  if (score <= 0) {
    feedback.textContent = "Game over! Skor habis.";
    feedback.style.color = "red";
    return;
  }

  if (guess === secretNumber) {
    feedback.textContent = "🎉 Tebakan kamu benar!";
    feedback.style.color = "green";
  } else {
    score -= 5;
    feedback.textContent = guess > secretNumber ? "🔻 Terlalu tinggi!" : "🔺 Terlalu rendah!";
    feedback.style.color = "crimson";
  }

  scoreDisplay.textContent = `Skor: ${score}`;

  if (score <= 0) {
    feedback.textContent = "😢 Game over! Kamu kehabisan skor.";
    feedback.style.color = "red";
  }
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  score = 100;
  document.getElementById('feedback').textContent = "";
  document.getElementById('score').textContent = "Skor: 100";
  document.getElementById('guess').value = "";
}
