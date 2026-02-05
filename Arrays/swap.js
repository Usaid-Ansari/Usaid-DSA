let a = 2;
let b = 5;
// let c = 0;
// c = a;
// a = b;
// b = c;
// console.log(a);
// console.log(b);
// let c = a;
// a = b;
// b = c;
// console.log("a =",a);
// console.log("b =",b);

// without using a third variable
// [a, b] = [b, a];
//  console.log("a =",a);
//  console.log("b =",b);

// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a);
// console.log(b);

a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log(a);
console.log(b);

let arr= [140,20,30];
console.log(arr);