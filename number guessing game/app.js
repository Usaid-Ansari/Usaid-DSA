let min = 1;
let max = 5;

let number = Math.floor(Math.random() * max) + 1;

let status = false;

while (status == false) {
    let userGuess = prompt("Enter a Number:");
    userGuess = parseInt(userGuess);

    if (userGuess === number) {
        console.log("Correct!");
        status = true;
    } else if (userGuess > number) {
        console.log("Too High");

    } else {
        console.log("Too Low");
    }
}