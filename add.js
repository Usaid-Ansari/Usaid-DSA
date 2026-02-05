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

let str = readLine();
let odd_count = 0;
let even_count = 0;
for(let i = 0; i < str.length; i++) {
    let digit = parseInt(str[i]);
    if(digit % 2 === 0){
        even_count++;
    } 
    else {
        odd_count++;
    } 
}
console.log("Even:",even_count);
console.log("Odd:",odd_count);

