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
process.stdin.on("data", (input) => {
    let [num1, num2] = input.toString().trim().split(" ").map(Number);

    if (num1 > num2) {
        console.log(num1 + "is greater than " + num2);
    } else if (num2 > num1) {
        console.log(num2 + "is greater than " + num1);
    } else {
        console.log("Both numbers are equal");
    }

});