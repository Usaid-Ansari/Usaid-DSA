// function C(n){
//     if(n == 0){  // base case
//         return ;
//     }
//     else {
//         console.log("C");
//     return C(n-1); // recursive call
//     }
// }
// C(3);

// function C(n){
//     if(n == 0){
//         return ;
//     }
//     else {
//         console.log("C");
//     return C(n-1);
//     }
// }
// C(10);

// function D(i, n) {
//     if(i == n){
//         return  ;
//     }
//     else {
//        console.log("C");
//        return D(i+1 , n);
//     }
// }
// D(1, 5);

function rec(n) {
    if(n <= 0) {return}
    else{
        console.log(n);
        rec(n-1);
        // console.log(n);
    }
}
rec(3);