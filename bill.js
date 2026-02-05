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

let bill = parseInt(readLine());
let tip = parseInt(readLine());
console.log("Bill Amount:",bill);
console.log("Tip percentage:",tip);
console.log(tip);
let amount=bill/tip;
let final = amount/100;
console.log("Total Amount:",final);
