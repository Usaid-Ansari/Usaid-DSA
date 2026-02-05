// AI is Coming
// You are given an assignment from your institute.

// Each assignment has a difficulty value between 
// 1
// 1 and 
// 100
// 100 (both inclusive).
// AI can solve an assignment if and only if the difficulty of the assignment is less than or equal to 
// 60
// 60.

// Your current assignment has difficulty 
// X
// X.
// Is AI capable of solving your assignment?
// Print "YES" if it is, and "NO" if it isn't (without the quotes).

// Input Format
// The first and only line of input will contain a single integer 
// X
// X, denoting the difficulty of your assignment.
// Output Format
// If AI is capable of solving your assignment output "YES", otherwise print "NO" (without quotes).
// Each character of the output may be printed in either uppercase or lowercase, i.e, the strings no, NO, No, and nO will all be treated as equivalent.

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
// 60
// YES
// Explanation:
// The difficulty of the assignment is 
// ≤
// 60
// ≤60, so AI can solve it.

// Sample 2:
// Input
// Output
// 40
// YES
// Explanation:
// The difficulty of the assignment is 
// ≤
// 60
// ≤60, so AI can solve it.

// Sample 3:
// Input
// Output
// 69
// NO
// Explanation:
// The difficulty of the assignment is 
// >
// 60
// >60, so AI cannot solve it
const {info} = require("console");
let fs = require("fs") ;
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
console.log(data)
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let X = parseInt(readLine());
    if(X <= 60){
        console.log("YES");
    }
    else{
        console.log("NO");
    }

