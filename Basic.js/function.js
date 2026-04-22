//Function in javascript

// function nameofFunction() {
//     console.log("Hello world");
// }
// nameofFunction();

// let varContainingFunction = function () {
//     let functionInBox = "I'm in a function.";
//     console.log("Hey I am Mango", functionInBox);
// };
// varContainingFunction();

// function addTwoNumbers(x, y) {
//     return x + y;

// }
// console.log(addTwoNumbers(3, 4));
// console.log(addTwoNumbers(12, -90));

// function addTwoNumbers({x = 2, y = 3}) {
//     console.log(x + y);
// }
// // addTwoNumbers(8); // This function use default 
// // addTwoNumbers(2);
// // addTwoNumbers(1);
// // addTwoNumbers(undefined, 1);
// addTwoNumbers({y:8});
// addTwoNumbers({x: 5});
// addTwoNumbers({y: 10});
// addTwoNumbers({x: 5, y: 10});


// Arrow Function 

// let addThreeNumber = (x, y, z) =>
//     console.log(x + y + z);
// addThreeNumber(2, 3, 4);

// let sayHi = () => console.log("Hi");
// sayHi();

// const arr = ["Apple", "Mango", "Orange"];
// arr.forEach(e => console.log(e));    

// Spread operator : break array and make array element into individual element
// let spread = ["apple", "mango", "banana"];
// let message = ["orange", "chiku", ...spread, "Dahi", "cucumber",
//     "shaljm"];
// console.log(message);


// function addTwoNumbers(x, y) {
//  console.log(x + y);
// }
// let arr = [5, 9];
// addTwoNumbers(...arr);
// function addFourNumber(x, y, z, a) {
//     console.log(x + y + z + a);
// }
// let arr1 = [2, 3];
// let arr2 = [4, 5];
// addFourNumber(...arr1, ...arr2);  //(2,3,4,5)

//Rest parameter

// function sum(...numbers){
//     console.log(numbers);
// }
// sum(1, 2)
// sum(3,4);

function addtwonumber(x, y) {
    return x + y;
}
let result = addtwonumber(5, 4);
console.log(result * 3);