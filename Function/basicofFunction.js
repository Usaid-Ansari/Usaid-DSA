// function sayHello() {
//  let you = prompt("What's your name? ");
//  console.log("Hello", you + "!");
// }
// sayHello();
// function sumofTwo(x, y){
//     console.log(x + y);
// }
// let val = sumofTwo(3, 4);
// console.log(val);

// function addTwoNumbers(x = 2, y = 3) {
//  console.log(x + y);
// }
// // addTwoNumbers();
// addTwoNumber(6, 6);
// addTwoNumbers(10);

// const multipleofTwo = (a, b) => {
//     return a * b;
// }

// multipleofTwo(2,3);

// const add = (a, b) => a + b;
// add(5,2);

// function countVowles(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char == "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// // countVowles("Usaid");
// const arr = ["squirrel", "alpaca", "buddy"];
// arr.forEach((e) => console.log(e));

// const vowelCount = (str) => {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char == "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// };

// const squareRoot = (number) => {
//   console.log(number * number);
// };
// squareRoot(5);
// squareRoot(10);
// squareRoot(3);
// forEach

// let array = ["mumbai", "pune", "delhi"];

// array.forEach(function printArray(val, index, array) {
//   console.log(val, index, array);
// });

// let numbers = [10, 20, 30];
// numbers.forEach((number) => {
//   console.log(number);
// });

// const squareNumber = [1, 2, 3, 4];
// squareNumber.forEach((numberofSqaure) => {
//   console.log(numberofSqaure * numberofSqaure);
// });

// const usingMap = [1, 2, 3, 4];
// let newResult = usingMap.map((finalResult) => {
//   return finalResult * finalResult;
// });
// console.log(newResult);
// const filterValue = [1, 2, 3, 4, 5, 6, 7, 8];
// let oddNumber = filterValue.filter((Val) => {
//   return Val % 2 != 0;
// });
// console.log(oddNumber);
// let newArr = [10, 15, 20, 25, 30];
// let greaterNumber = newArr.filter((number) => {
//   return number > 20;
// });
// console.log(greaterNumber);

// let greaterElement = [10, 5, 20, 15, 25, 501];
// let Greater = greaterElement.reduce((previous, current) => {   //reduce : It is the greater Number current : recently check the number
//   if (previous > current) {
//     return previous;
//   } else {
//     return current;
//   }
// });
// console.log(Greater);

// let arr2 = [87, 93, 64, 99, 86];
// let target = arr2.filter((val) =>{
//     return val > 90;
// })
// console.log(target);


let n = prompt("Enter a number :");

let arr = [];
for(let i = 1 ;i <=n ; i++){
    arr[i-1] = i;
}
console.log(arr);
let sum = arr.reduce((result, current)=> {
    return result + current;
});
console.log("sum = ", sum);
let factorial = arr.reduce((result, current)=> {
    return result * current;
});
console.log("factorial = ", factorial);
