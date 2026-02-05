// Pizza Party

// Chef is hosting a pizza party and has invited 
// A
// A boys and 
// B
// B girls. Don't forget to include Chef himself; he is a boy.

// It is known that a boy eats 
// 4
// 4 slices of pizza while a girl eats 
// 3
// 3 slices of pizza. Further, a single pizza comes with 
// 8
// 8 total slices of pizza.

// How many pizzas does Chef need to ensure nobody remains hungry? It is fine to waste some of the food.

// Input Format
// The first and only line of input contains 
// 2
// 2 integers - 
// A
// A and 
// B
// B, the number of boys and girls invited to the party.
// Output Format
// For each test case, output on a new line the number of pizzas needed.

// Constraints
// 0
// ≤
// A
// ,
// B
// ≤
// 100
// 0≤A,B≤100
// Sample 1:
// Input
// Output
// 2 0
// 2
// Explanation:
// There are 
// 2
// 2 other boys invited apart from Chef, so a total of 
// 3
// 3 boys. They need at least 
// 12
// 12 slices of pizza and 
// 2
// 2 pizzas will have 
// 16
// 16 slices, so it is sufficient.

// Sample 2:
// Input
// Output
// 0 4
// 2
// Explanation:
// There is only one boy, Chef himself, and 
// 4
// 4 girls. They will eat a total of 
// 16
// 16 slices which is exactly the number of slices in 
// 2
// 2 pizzas.

// Sample 3:
// Input
// Output
// 100 100
// 88

const {info} = require("console");
let fs = require("fs") ;
const { Readline } = require("readline/promises");
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
console.log(data)
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let A = parseInt(readLine()); //2
let B = parseInt(readLine());//0
let total_slice = (A+1)*4 + B*3; //(2+1)*4 + 0*3 
let pizza = Math.ceil(total_slice / 8); // 12/8=1.5(math.ceil ka use karke round figur bna ya )
console.log(pizza);
