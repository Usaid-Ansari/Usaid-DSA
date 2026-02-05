//LOGIC BUILDING
// print A number from 1 to N using user input
// const input = require("readline-sync");
// let N = input.questionInt("Enter a Number: ");
// for(let i = 1; i <= N; i++) {
//     console.log(i);
// }
//  let i = 1;
// while(i <= N) {
//     console.log(i);
//     i++;
// }

//Q : print a number from N to 1 whithout changing a condition 
// const input = require("readline-sync");
// let N = input.questionInt("Enter a Number: ");
// for(let i = 1; i <= N; i++) {
//     console.log(N-i+1);
// }

//Q: print all Even from 1 to N 
// const input = require("readline-sync");
// let N = input.questionInt("Enter a Number: ");
// for(let i=1; i<=N; i++){
//     if(i % 2 == 0) {
//         // console.log(i);
//         process.stdout.write(i+ " ");
//     }
// }

//Q: Sum of all Natural number

// const input = require("readline-sync");
// let N =  input.questionInt("Enter a Number: ");
// let sum = 0;
// for(let i = 1; i<=N; i++) {
//     sum += i;                  // Sum of N number formula  =  n*(n+1)/2
//     //console.log(sum);
// }
// console.log(sum);


//Q: factorial of all Natural number
// const input  = require("readline-sync");
// let N = input.questionInt("Enter a Number: ");
// let fact = 1;
// for(let i = 1; i<=N; i++){
//     fact = fact*i;
// }
// console.log(fact);

// Sum of all even number from 1 to N number
// const input = require("readline-sync");
// let N = input.questionInt("Enter a Number: ");
// let sumofEven = 0;
// for(let i=1; i<=N; i++){
//     if(i % 2 == 0) {
//         //console.log(i);
//         sumofEven  = sumofEven + i;
//         //process.stdout.write(i+ " ");
//     }

// }
// console.log(sumofEven);

// Square of all number from 1 to n 
// const input = require("readline-sync");
// let N = input.questionInt("Enter a Number: ");
// let square = N*N;
// console.log(square);

// print all number divisible by 3 and 5 upto N 
// const input = require("readline-sync");
// let n = input.questionInt("Enter a Number: ");
// for (let i = 1; i <= n; i++) {
//     if(i%3 == 0 && i%5 == 0) {
//         console.log(i);
//     }
   
// }
// print sum of all the  odd number 
// const input = require("readline-sync");
// let n = input.questionInt("Enter a Number: ");
// let sumofOdd = 0
// for (let i = 1; i <= n; i++) {
//     if(i%2 != 0) {
//         sumofOdd = sumofOdd + i;
//     }
// }
// console.log(sumofOdd);

//print cube of all the  Natural number 
// const input = require("readline-sync");
// let n = input.questionInt("Enter a Number: ");
// let cube  = n*n*n;
// console.log(cube);

// print only number that are both even and perfect square 
// const input = require("readline-sync");

// let n = input.questionInt("Enter a Number: ");
// for(let i=1; i<=n; i++) {
//     if(i%2 == 0){
        
//     console.log(i)
//     }
// }

//Q : Find a maiximum number of three Number
// let A = 10;
// let B = 50;
// let C = 100;
// if((A > B) && (A>C)) {
//     console.log(A);
// }
// else if((B > A) && (B > C)){
//     console.log(B);
// }
// else if((C > A) && (C > B)) {
//     console.log(C);
// }

function maxofThree(a, b, c){
    let max;
    if(a >= b && a >= c) {
        max = {a};
    }
    else if(b >= c) {
        max = {b}; 
    }
    else {
        max = c;
    }
    return max;
}
let result  = maxofThree(10, 10, 5);
console.log(result);