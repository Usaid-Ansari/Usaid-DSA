// Missing Shoes
// Chef owns several pairs of shoes, unfortunately he has so many that he lost track of them!

// Each pair of shoes consists of one left shoe and one right shoe.
// Looking at his collection, Chef counts 
// L
// L left shoes and 
// R
// R right shoes.

// What's the minimum number of shoes Chef is missing?

// Input Format
// The only line of input will contain two space-separated integers 
// L
// L and 
// R
// R – the number of left shoes and right shoes, respectively.
// Output Format
// Output a single integer: the minimum number of shoes Chef is missing.

// Constraints
// 1
// ≤
// L
// ,
// R
// ≤
// 10
// 1≤L,R≤10
// Sample 1:
// Input
// Output
// 1 3
// 2
// Explanation:
// There's one left shoe and three right shoes.
// The single left shoe can be paired with one right shoe, leaving two unpaired right shoes. So, the answer is 
// 2
// 2.

// Sample 2:
// Input
// Output
// 5 5
// 0
// Explanation:
// There are an equal number of left and right shoes, so it's possible to pair them all up.

// Sample 3:
// Input
// Output
// 8 3
// 5
// Explanation:
// There are 
// 8
// 8 left shoes and 
// 3
// 3 right shoes.
// Each right shoe can be paired up with one left shoe, which leaves 
// 5
// 5 left shoes unpaired.

//Logic:Math.abs(R-L)

let fs = require("fs") ;
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
console.log(data)
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let L = parseInt(readLine());
let R = parseInt(readLine()); 
let result = Math.abs(R-L); // math.abs built_in function hai jo (-)value ko positive main convert karde ta
console.log(result);
