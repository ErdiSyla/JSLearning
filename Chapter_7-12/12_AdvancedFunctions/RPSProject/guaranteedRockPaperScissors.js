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

function pickRandomMove() {
  const val = Math.random();
  if (val <= 0.3) {
    return "rock";
  } else if (val <= 0.6) {
    return "scissors";
  } else {
    return "paper";
  }
}

function pickCounterMove(userPick) {
  if (userPick == "rock") {
    return "paper";
  }
  if (userPick == "scissors") {
    return "rock";
  }
  if (userPick == "paper") {
    return "scissors";
  }
}

showScore();

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(function () {
      const playerMove = pickRandomMove();
      alertUser();
      result(playerMove, pickCounterMove(playerMove));}, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}
