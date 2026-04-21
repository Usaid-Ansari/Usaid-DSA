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

function addTwoNumbers({x = 2, y = 3}) {
    console.log(x + y);
}
// addTwoNumbers(8); // This function use default 
// addTwoNumbers(2);
// addTwoNumbers(1);
// addTwoNumbers(undefined, 1);
addTwoNumbers({y:8});
addTwoNumbers({x: 5});
addTwoNumbers({y: 10});
addTwoNumbers({x: 5, y: 10});