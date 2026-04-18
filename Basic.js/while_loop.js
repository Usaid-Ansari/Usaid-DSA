//While Loop;

// let i = 1;
// while(i <= 10) {
//     console.log(i);
//     i++;
// }


// let i = 10;
// while(i >= 1) {
//     console.log(i);
//     i--;
// }

// let i = 1;
// while(i <= 50) {
//     if(i%2 == 0){
//         console.log(i);
//     }
//     i++;
// }


// let i = 1;
// while(i <= 50) {
//     if(i%2 != 0){
//         console.log(i);
//     }
//     i++;
// }

// Sum of 1 to 10 number
// let i = 1;
// let sum = 0;
// while(i <= 10) {
//     sum = sum + i; 
//     i++;
// }
// console.log("The Sum of the number 1 to 10 is :",sum);

// Sum  of Even number from 1 to 20 
// let i = 1;
// let sumofEven = 0; 
// while(i <= 20) {
//     if(i%2 == 0){
//         sumofEven = sumofEven + i;
//     }
//     i++;
// }
// console.log(sumofEven);

// Sum  of Odd number from 1 to 20 
// let i = 1;
// let sumofOdd = 0; 
// while(i <= 20) {
//     if(i%2 != 0){
//         sumofOdd = sumofOdd + i;
//     }
//     i++;
// }
// console.log(sumofOdd);

//sum of number present in num variable
// let num = 12345;
// let count = 0;
// while (num > 0) {
//     count++;
//     num = Math.floor(num / 10);

// }
// console.log(count); 

let nr1 = 0;
let nr2 = 1;
let temp;
fibonacciArray = [];
while (fibonacciArray.length < 10) {
 fibonacciArray.push(nr1);
 temp = nr1 + nr2;
 nr1 = nr2;
 nr2 = temp;
}
console.log(fibonacciArray);