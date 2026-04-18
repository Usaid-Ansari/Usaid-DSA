let min = 1;
let max = 10;

let number = Math.floor(Math.random() * max) + 1;

let status = false;

while (status == false) {
    let userGuess = prompt("Enter Number:");e
    userGuess = parseInt(userGuess);

    if (userGuess === number) {
        console.log("Correct!");
        status = true;
    } else if(userGuess > number) {
        console.log("Too High");
    } else {
        console.log("Too Low")
    }
}