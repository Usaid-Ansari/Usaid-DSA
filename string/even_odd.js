// Checking the Number is Even or Odd 
process.stdout.write("Enter a Number: ");
process.stdin.on("data", (input) => {
    let num = Number(input.toString().trim());
    if (num % 2 == 0) {
        console.log("Number is Even");
    } else {
        console.log("Number is Odd");
    }
});