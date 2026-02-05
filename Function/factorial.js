// This is find to Factorial 
function fact(n) {
    if(n < 0) return 0;
    let p =1;
    for(let i=1; i<=n; i++) {
        p*=i;
    }
    return p;
}
console.log(fact(5));