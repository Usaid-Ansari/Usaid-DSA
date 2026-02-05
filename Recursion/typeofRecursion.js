//  HEAD
// function rec(n) {
//    if(n <= 0) {return}
//     else {
//         rec(n-1);
//         console.log(n);
//     }
// }
// rec(3);

//  TAILL
// function rec(n) {
//     if(n <= 0) {return}
//     else {
//         console.log(n);
//         rec(n-1);
//     }
// }
// rec(3);

// TREE
// function rec(n) {
//     if(n <= 0) return;
//     console.log(n); // 3 2 1  1 2 1 1
//     rec(n-1);
//     rec(n-1);
// }
// rec(3);

// NESTED 
// function rec(n) {
//     if(n > 100){return n-10;}
//     else{
//         return rec(rec(n+11));
//     }
// }
// console.log(rec (rec(98))); 


function h(n) {
    if(n <= 0) {
        return;
    }
    else{
        for(let i=0; i<=n; i++){
            console.log(i);
        }
        h(n-1);
        h(n-1);
        h(n-1);
        h(n-1);
    }
}
h(4);


