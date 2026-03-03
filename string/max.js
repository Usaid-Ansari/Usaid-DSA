// Maximum of Two Numbers
// function maxOfTwoNumbers(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// let result = maxOfTwoNumbers(10, 20);
// console.log("The maximum of two numbers is: " + result);

process.stdout.write("Enter Two Number: ");

const handleInput = (input) => {
    const [num1, num2] = input.toString().trim().split(" ").map(Number);
    const max = Math.max(num1, num2);

    if (num1 === num2) {
        console.log("Both numbers are equal");
    } else {
        console.log(`${max} is greater than ${Math.min(num1, num2)}`);
    }

    process.stdin.removeListener("data", handleInput);
    process.stdin.pause();
};

process.stdin.on("data", handleInput);