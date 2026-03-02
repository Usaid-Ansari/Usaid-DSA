// Check the number is Positive, Negative or Zero
process.stdout.write("Enter a Number: ");
process.stdin.on("data", (input) => {
    let number = Number(input.toString().trim());
    if(number > 0){
        console.log("The Number is Positive");
    } else if(number < 0) {
        console.log("The number is Negative");
    } else {
        console.log("Zero");
    }
});