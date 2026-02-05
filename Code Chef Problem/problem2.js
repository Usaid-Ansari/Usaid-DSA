// Happy New Year!
// Currently, it is 
// X
// :
// 00
// X:00 hours on December 
// 31
// s
// t
// 31 
// st
//   and you are wondering how many hours are left till midnight.

// For the purposes of this problem, we use a 
// 24
// 24 hour system. So, 
// X
// X can range from 
// 0
// 0 to 
// 23
// 23, and you need to tell the number of hours left till 
// 00
// :
// 00
// 00:00 of the next day.

// Input Format
// The first and only line of input contains a single integer 
// X
// X.
// Output Format
// For each test case, output on a new line the number of hours left till midnight

// Constraints
// 0
// ≤
// X
// ≤
// 23
// 0≤X≤23
// Sample 1:
// Input
// Output
// 0
// 24
// Explanation:
// Right now, its 
// 00:00
// 00:00 or 
// 12
// 12 AM on 
// 31
// s
// t
// 31 
// st
//   December. That means a whole day, i.e. 
// 24
// 24 hours is left till the new year.

// Sample 2:
// Input
// Output
// 23
// 1

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
//logic: kitn time baki hai 24 hour hone main 

let x = parseInt(readLine());// read the value of x 
console.log(24 - x);