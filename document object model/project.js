let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreShow = document.querySelector("#user-score");
const compScoreShow = document.querySelector("#comp-score");

const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return option[randomIndex];
};

const drawGame = () => {
  msg.innerText = "game was Draw. play again";
  msg.style.backgroundColor = " #081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScoreShow.innerText = userScore;

    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScoreShow.innerText = compScore;

    msg.innerText = `Computer Win! ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate Computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //Scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock , paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
