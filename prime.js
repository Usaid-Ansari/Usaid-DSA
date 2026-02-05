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

let n = parseInt(readLine());//17
let isPrime = true;
if(n <= 1){
    isPrime = false;     
} else{
    for(let i=2; i<=n - 1;i++){  // 2<=4.1
        console.log("i = ", i, n%i)
        if(n%i === 0) {
            isPrime =false;
            break;
        }
    }
}
if(isPrime){
console.log(n,"is prime number:");
} else{
    console.log(n,"is not a prime number");
}
