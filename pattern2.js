/*
* * * * *
* * * *
* * *
* *
* 

*/
const {info} = require("console");
let fs = require("fs") ;
let data = fs.readFileSync(0,'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

/*let n = parseInt(readLine());
for(let i=n; i>=1; i--){
    //star
    for(let j=0; j<i;j++){
        process.stdout.write(" *");
    }
    console.log();
}
*/
/*
        *
      * *
    * * *  
  * * * *
* * * * * 
*/

let n = parseInt(readLine());
for(let i=1; i<=n; i++){
    //Space
    for(let s=0; s<n-i;s++){
        process.stdout.write(" ");
    }
    for(let j=1;j<=i;j++){
        process.stdout.write(" *");
    }
    console.log();
}