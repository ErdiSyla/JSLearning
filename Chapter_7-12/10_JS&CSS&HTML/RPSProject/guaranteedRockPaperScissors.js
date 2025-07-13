function alertUser() {
  score.losses++;
  localStorage.setItem("score", JSON.stringify(score));
  showScore();
}

function resetScore() {
  score.losses = 0;
  localStorage.removeItem("score");
  showScore();
}

function showScore() {
  const scoreElem = document.querySelector(".score");
  scoreElem.innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function result(userPick, computerMove) {
  const resultElem = document.querySelector(".result");
  resultElem.innerText = "You lose.";

  const movesElem = document.querySelector(".moves");
  movesElem.innerHTML = `You 
            <img src="./Images/${userPick}-emoji.png" alt="Rock" class="move-icon"> 
            <img src="./Images/${computerMove}-emoji.png" alt="Rock" class="move-icon"> Computer.`;
}
const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

showScore();
