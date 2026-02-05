// Array
// → Function
// → Recursion
// → Backtracking
// → String & String Hashing
// → Hashmap / Hashset
// → Searching & Sorting
// → Linked List
// → Stack / Queue
// → Tree / Graph
// → Dynamic Programming

// function swap() {
//     let a = 10;
//     let b = 20;
//     let temp = a;
//     a = b;
//     b = temp;
//     console.log(a, b);
// }
// swap();

// let a = 10;
// let b = 20;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);

function f(n) {
    if(n <= 0) {
        return;
    }
    else{
        console.log(n);
        f(n-1);
        f(n-1);
        
    }
}
f(3);