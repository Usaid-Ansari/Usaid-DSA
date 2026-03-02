// Simple Intrest Calculation
process.stdout.write("Enter Principal, Rate, Time: ");
process.stdin.on("data", (input) => {
    let [P, R, T] = input.toString().trim().split(" ").map(Number);
    let SI =  (P * R * T) / 100;
 
    console.log("Simple Interest:", SI);
    process.exit();

});