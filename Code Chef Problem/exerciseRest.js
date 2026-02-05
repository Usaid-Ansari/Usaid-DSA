// Exercise and Rest
// Chef is on a new exercise plan: he'll work out for two days, then take one rest day, and then repeat.

// Today is Chef's 
// N
// N-th rest day. How many days (including today) has it been since Chef started his plan?

// Input Format
// The only line of input contains a single integer 
// N
// N.
// Output Format
// Output a single integer: the number of days that have passed since Chef started his exercise plan.

// Sample 1:
// Input
// Output
// 2
// 6
// Explanation:
// Today is the second rest day. That means Chef's schedule has been as follows:

// Day 
// 1
// 1: Work out
// Day 
// 2
// 2: Work out
// Day 
// 3
// 3: Rest day 
// 1
// 1
// Day 
// 4
// 4: Work out
// Day 
// 5
// 5: Work out
// Day 
// 6
// 6: Rest day 
// 2
// 2 (today)
// So, six days have passed in total.

// Sample 2:
// Input
// Output
// 4
// 12
// Explanation:
// Today is the fourth rest day. That means Chef's schedule has been as follows:

// Day 
// 1
// 1: Work out
// Day 
// 2
// 2: Work out
// Day 
// 3
// 3: Rest day 
// 1
// 1
// Day 
// 4
// 4: Work out
// Day 
// 5
// 5: Work out
// Day 
// 6
// 6: Rest day 
// 2
// 2
// Day 
// 7
// 7: Work out
// Day 
// 8
// 8: Work out
// Day 
// 9
// 9: Rest day 
// 3
// 3
// Day 
// 10
// 10: Work out
// Day 
// 11
// 11: Work out
// Day 
// 12
// 12: Rest day 
// 4
// 4 (today)
// So, twelve days have passed in total.


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

let n = parseInt(readLine());
let result = 3*n;
console.log(result);