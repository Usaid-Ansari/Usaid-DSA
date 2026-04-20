// Add Two Numbers
// Your task is very simple: given two integers 
// A
// A and 
// B
// B, write a program to add these two numbers and output the sum.

// Input Format
// The first line contains an integer 
// T
// T, the total number of test cases.
// Then follow 
// T
// T lines, each line contains two integers, 
// A
// A and 
// B
// B.
// Output Format
// For each test case, add 
// A
// A and 
// B
// B and display the sum in a new line.

// Constraints
// 1
// ≤
// T
// ≤
// 1000
// 1≤T≤1000
// 0
// ≤
// A
// ,
// B
// ≤
// 10000
// 0≤A,B≤10000
// Sample 1:
// Input
// Output
// 3
// 1 2
// 100 200
// 10 40
// 3
// 300
// 50
// Explanation:
// Testcase 1: 
// 1
// +
// 2
// =
// 3
// 1+2=3. Hence the first output is 
// 3
// 3.

// Testcase 2: 
// 100
// +
// 200
// =
// 300
// 100+200=300. Hence the second output is 
// 300
// 300.

function addTwoNumbers(tests) {
    let t = parseInt(tests[0]);
    for(let i=1; i<=t; i++){
        let [a, b] = tests[i].trim().split(" ").map(Number);
        console.log(a + b);
    }
}

process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
  const tests = input.split('\n');
  addTwoNumbers(tests);
});