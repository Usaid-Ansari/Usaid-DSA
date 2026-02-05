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
console.log("Enter a number:",n);
for(let i=1; i<=10; i++) {
    let mul=n*i;
    console.log(mul);
    
}