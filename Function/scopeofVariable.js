//Function is a block of code that perform a specific task
//Function is a data type 

// function add(a, b){ //a, b are called as parameter
//     console.log(a+b)
//     console.log(a*b);
//     return a-b;

// }
// let result = add(10, 20) // invocation or calling function
// console.log(result);
//10, 20 are called as arguments
// Scope of Variable
/*
2 typeof data types:
1) primative data type : Number , string, boolean, undefined...
2) Non-primative data type : 
object comes  under non primative data types
arr = [3, 4, 5, 6] => non primative data types

*/

// function test(b){
//     b = 40; // b is 90 but it is updated and b becomes 40 
//     //console.log(b);
// }

// let a = 90;
// console.log("Before call:", a);
// test(a);
// console.log("After call:", a);

// function test(b){
//     b = 40; // b is 90 but it is updated and b becomes 40 
// }

// let a = 90;
// console.log("Before call:", a);
// test(a);
// console.log("After call:", a);

// function test(x) {
//     x[0] = 100;
// }
// let arr = [3, 4, 5, 6];
// console.log(arr[0]);
// test(arr);
// console.log(arr[0]);

// let a = [5, 6, 7]
// let b = a;
// console.log(a[1], b[1]);
// b[1] = 900;
// console.log(a[1], b[1]);

// function test(a , b) {
//     a[0] = 30 , b=100
//     function child(x) {
//         x[2] = 2*b;
//     }
//     child(a);
// }

// let m = [4, 5, 6, 7] , n = 35
// test(m, n)
// console.log(m[2]);


// function test() {
//     for(let i=1; i<=10; i++) {
//         console.log(i*12);
//     }
// }
// test();
function isEvenOdd(num){
    if(num % 2 == 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}
let result = isEvenOdd(17);
console.log(result);