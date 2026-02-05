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
let count=0; 
for(let i=1; i<=n; i++){
    if(n%i === 0){
    
        count++;
        console.log(i);
       // count++;
    }
    
}
console.log(count);