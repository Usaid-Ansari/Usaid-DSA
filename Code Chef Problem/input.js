// Taking input in code chef 
// let input = "";
// process.stdin.on("data", function(chunks){
//     input+= chunks;
// });
// process.stdin.on("end",function(){
// })


//let input = "";
// process.stdin.on("data", function(chunks){
//     input+= chunks;
// });
// process.stdin.on("end",function(){
//     let [X, Y] = input.trim().split(" ").map(Number);
// });

//      ┌───────────────────────────────┐
//                   │         Problem Input         │
//                   └───────────────┬───────────────┘
//                                   │
//                                   ▼
//                   ┌───────────────────────────────┐
//                   │   Step 1: Identify Pattern     │
//                   └───────────────┬───────────────┘
//                                   │
//              ┌────────────────────┼─────────────────────┐
//              │                    │                     │
//              ▼                    ▼                     ▼
//      ┌──────────────┐     ┌──────────────┐      ┌───────────────┐
//      │ Repetition?  │     │ Decision?    │      │ Linear/Direct │
//      │ (Repeat N    │     │ (If/Else)    │      │ Pattern?      │
//      │ times?)      │     │              │      │               │
//      └──────┬───────┘     └──────┬───────┘      └───────┬───────┘
//             │                    │                      │
//             ▼                    ▼                      ▼
//      ┌──────────────┐     ┌──────────────┐      ┌───────────────┐
//      │ Use Loop     │     │ Use Condition│      │ Use Formula    │
//      │ (for/while)  │     │ (if/else)    │      │ (direct calc) │
//      └──────────────┘     └──────────────┘      └───────────────┘


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

let x = parseInt(readLine()) //15 
if(x < 15){
    console.log(15-x);
}
else if(x === 15){
    console.log(0)
}
else{
    console.log(-1);
}