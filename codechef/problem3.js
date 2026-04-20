// Assignment Due
// You are eagerly awaiting for the upcoming Technex event organized by IIT BHU Varanasi! However, you also have an assignment due. The deadline for the assignment is in 
// Y
// Y days, and it takes you 
// X
// X days to complete it.

// Determine whether you can finish the assignment on or before the deadline.

// Input Format
// The input consists of two space-separated integers 
// X
// X and 
// Y
// Y, where:

// X
// X denotes the number of days required to complete the assignment.
// Y
// Y denotes the number of days remaining until the deadline.
// Output Format
// Print YES if you can complete the assignment on or before the due date, otherwise print NO

// You may print each character of the string in uppercase or lowercase (for example, the strings YES, yEs, yes, and yeS will all be treated as identical).
// Constraints
// 1
// ≤
// X
// ≤
// 100
// 1≤X≤100
// 1
// ≤
// Y
// ≤
// 100
// 1≤Y≤100
// Sample 1:
// Input
// Output
// 1 2
// YES
// Explanation:
// You have 
// 2
// 2 days to complete the assignment, and it will take you only 
// 1
// 1 day to finish it.

// Sample 2:
// Input
// Output
// 2 2
// YES
// Explanation:
// You have 
// 2
// 2 days to complete the assignment, and it will take you only 
// 2
// 2 day to finish it.

// Sample 3:
// Input
// Output
// 3 2
// NO
// Explanation:
// You have 
// 2
// 2 days to complete the assignment, but it will take you 
// 3
// 3 days to finish, making it impossible for you to meet the deadline.


//let [X, Y] = input.trim().split(" ").map(Number);  // jab bhi kabhi codechef par hume ek hi line main do number ye input diye ho toh yeh line ka use karna hai

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
let Y = parseInt(readLine()); 
if(X <= Y){
    console.log("YES");
}
else if(X > Y){
     console.log("NO");
}