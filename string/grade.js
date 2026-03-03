// Find the grade of a student based on marks
process.stdout.write("Enter marks:");
process.stdin.on("data", (input) => {

    const marks = input.toString().trim().split(" ").map(Number);
    if (marks >= 90) {
        console.log("A");
    } else if (marks >= 75 && marks <= 89) {
        console.log("B");
    } else if (marks >= 50 && marks <= 74) {
        console.log("C")
    } else {
        console.log("Fail");

    }
});