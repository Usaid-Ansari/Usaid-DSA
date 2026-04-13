// Sum of N numbers
process.stdout.write("Enter number:");
process.stdin.on("data", (input) => {
    let n = (input.toString().trim());
    let sum = 0;
    for(let i=0; i <= n; i++){
        sum += i;
    }
    console.log(sum);
    process.exit();
});