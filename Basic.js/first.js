// console.log("Welcome The Frontend journey");
// console.log("I love javascript");
// alert("Asli Moti Fabrics");
// fullName = ("Mahera");
// console.log(fullName);
// Math.random();
// prompt(Math.random());
// console.log(Math.random());
// console.log(Math.random()* 100);
// const a = 10;
// a = 20;
// console.log(a);
// let b = 10;
// {
//   console.log(b);
// }
// console.log(b);

// const student = {
//     full_Name : "Ansari Usaid",
//     age : 22,
//     cgpa : 7.5,
//     isPass : true,
// };
// console.log(student);

// const product = {
//     title : "Ball Pen",
//     rating : 4,
//     offer : 5,
//     price: 270,
// }
// console.log(product);

// const profile = {
//     Name : 'ShradhaKhapra',
//     isFollows : false,
//     button2 : 'Message',
//     post : 195,
//     follower : 569,
//     following : 4,
//     about : 'Apna College'|'Ex Microsoft & DRDO',
// }
// console.log(profile);
// console.log(typeof profile ["follower"]);

// // Arithmetic opertaion
// let a = 5;
// let b = 2;
// console.log("a = ", a, "&", "b = ", b);
// a **= 4;
// console.log("a = ", a);
// console.log("a = ", a, "& b = ", b);
// console.log("a + b  = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("a ** b = ", a ** b);

// Unary Operator
//a++
/*console.log("a++ = ", a++); // 5
console.log("a = ", a); // 6
//--a
console.log("a-- = ", a--);
console.log("a = ", a);
console.log("--a = ", --a); // 4
console.log("a = ", a);
let language = "javaScript";
let message = `I Learn ${language}`;
console.log(message);
let message2 = `I Learn ${language}`;
console.log(message2);
let age = 25;
if (age > 18) {
  console.log("You can Vote");
}
let mode = "dark";
let color;

if (mode == "dark") {
  color = "white";
} else {
  color = "black";
}
console.log(color);*/

//Find number is even odd
// let num = 11;
// if (num % 2 == 0) {
//   console.log(num, "is Even Number");
// } else {
//   console.log(num, "is Odd");
// }

// let user = prompt("hello");
// console.log(user);

//check the number is divisble by 5
// let number = prompt("Enter a Number : ");
// if(number % 5 == 0){
//     console.log(number, "is a multiple of 5");
// }
// else{
//     console.log(number, "is not a multiple of 5");
// }

// Find a grades on the basis of marks
// let score = prompt("Enter your score(0-100) : ");
// let grade;
// if (score >= 90 && score <= 100) {
//   grade = "A";
// } else if (score >= 70 && score <= 89) {
//   grade = "B";
// } else if (score >= 60 && score <= 69) {
//   grade = "C";
// } else if (score >= 50 && score <= 59) {
//   grade = "D";
// } else {
//   grade = "E";
//   console.log(grade, "Fail");
// }
// console.log("according to your score, your grade was: ", grade);
// Loops
let sum = 0;
let n = 100;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);

for (var j = 1; j <= 5; j++) {
  console.log("j= ", j);
}
console.log(j);

//for of loop
let str = "Hello";
let size = 0;
for (let character of str) {
  console.log("character= ", character);
  size++;
}
console.log("string size : ", size);

//forin loops
// let student = {
//   name: "Usaid",
//   class: "B.E",
//   cgpa: 7.8,
//   isPass: true,
// };
// for (let key in student) {
//   console.log(key, student[key]);
// }

// let target = 100;
// for (let i = 1; i <= target; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
// number guessing game
// console.log("hello", "\n","Usaid");

// let s1 = "Hello ";
// let s2 = "JavaScript";
// let result = s1.concat(s2);  //mix the string
// console.log(result);

// let str1 = "01234567";
// console.log(str1.slice(1,5));

// let fullName = prompt("Enter Your Full Name : ");
// let UserName = "@ " + fullName +" "+ fullName.length;
// console.log(UserName);

//Arrays
// let marks = [10, 20, 30, 40, 50];
// console.log(marks);
// console.log(marks.length);
// console.log(typeof [marks]);
// marks[2] = 98;
// console.log(marks);
// //print all the array
// let arr = [10, 11, 12, 13, 14];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// for (let element of arr) {
//   console.log(element);
// }
// let cities = ["Mumbai", "Pune", "Hyderabad", "Banglore"];
// for (let city of cities) {
//   console.log(city.toUpperCase());
// }
// //Practice Q

// let array = [85, 97, 44, 37, 76, 60];
// let sumofArray = 0;
// for (let i = 0; i < array.length; i++) {
//   sumofArray += array[i];
// }
// let average = sumofArray / array.length;
// console.log(`averge value of array ${average}`);

// let items = [250, 645, 300, 900, 50];
// for (let i = 0; i < items.length; i++) {
//   let offer = items[i] / 10;
//   items[i] = items[i] - offer;
// }

// console.log(items);
let New = [10, 20, 30, 40, 50];
New.push(60);
console.log(New);
New.pop();
console.log(New);
let fruit1 = ["Banana", "Apple", "Strawbery"];
let fruit2 = ["Orange", "Grapes","Mango"];
let newFruit = fruit1.concat(fruit2);
console.log(newFruit);
//
let method = [10, 20, 30];
let val = method.unshift();
console.log(val);
let arr5 = [1, 2, 3, 4, 5, 6,];
arr5.splice(2,2,15,16);
console.log(arr5);

let company = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(company);
// company.shift();
// console.log(company);
company.splice(2,1,"OLA");
console.log(company);
company.push("Amazon");
console.log(company);