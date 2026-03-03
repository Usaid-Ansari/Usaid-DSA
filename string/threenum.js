//Find Largest Three Numbers in an Array
process.stdout.write("Enter Three Number: ");
process.stdin.on("data", (input) => {


    const [num1, num2, num3] = input.toString().trim().split(" ").map(Number);
    if (num1 > num2 && num1 > num3) {
        console.log(num1);
    }
    if (num2 > num3 && num2 > num1) {
        console.log(num2);
    }
    else if (num3 > num1 && num3 > num2) {
        console.log(num3);
    }
    else {
        console.log("All number is equal");
    }
});
