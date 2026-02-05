// Can You Bench
// Chef goes to the gym daily and follow a progressive bench press routine. In the 
// 1
// s
// t
// 1 
// st
//   set, Chef will lift 
// X
// X kilograms. For each subsequent set, you increase the weight by 
// 10
// 10 kilograms.

// Your task is to calculate the amount of weight Chef will bench in the 
// 3
// r
// d
// 3 
// rd
//   set.

// Input Format
// The input consists of a single integer 
// X
// X, the weight (in kilograms) Chef benches in the 
// 1
// s
// t
// 1 
// st
//   set.

// Output Format
// Output a single integer — the weight (in kilograms) Chef will bench in the 
// 3
// r
// d
// 3 
// rd
//   set.

// Constraints
// 1
// ≤
// X
// ≤
// 100
// 1≤X≤100

// Sample 1:
// Input
// Output
// 10
// 30
// Explanation:
// In the 
// 1
// s
// t
// 1 
// st
//   set Chef benches 10 kg, in the next it becomes 20 kg and in the 
// 3
// r
// d
// 3 
// rd
//   it becomes 30 kg

// Sample 2:
// Input
// Output
// 20
// 40
// Explanation:
// In the 
// 1
// s
// t
// 1 
// st
//   set Chef benches 20 kg, in the next it becomes 30 kg and in the 
// 3
// r
// d
// 3 
// rd
//   it becomes 40 kg

// const {info} = require("console");
// let fs = require("fs") ;
// let data = fs.readFileSync(0,'utf-8');
// let idx = 0;
// console.log(data)
// data = data.split('\n');

// function readLine() {
//     idx++;
//     return data[idx - 1].trim();
// }

// let X = parseInt(readLine());
// let result = X + 20;
// console.log(result);

//Easy input taking method
//process.stdin.resume(); // Keeps the process open to take input
process.stdout.write("Enter weight for 1st set: ");

process.stdin.on("data", (data) => {
    let X = parseInt(data.toString().trim()); // Read the input
    let result = X + 20; // For 3rd set (since +10 for 2nd, +10 for 3rd)
    console.log("The 3rd set:" ,result); // Just print the result
    process.exit();
});