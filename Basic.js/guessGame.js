let guessNumber = 50;
let userNumber = Number(prompt("Enter a guess Number : "));

while (userNumber != guessNumber) {
  if (userNumber > guessNumber) {
    userNumber = prompt(
      "You enterd a wrong Number. Number is  greater than guess Number",
    );
  } else if (userNumber < guessNumber) {
    userNumber = prompt(
      "You enterd a wrong Number. Number is  smaller than guess Number",
    );
  }
}
console.log("Congratulation You enter a write number");
