// for(let i=10; i>=!; i--) {
//     console.log(i);
// }
//
//using forloop print the even number between 1 to 10
// for(let i=1; i<=10;i++){
//     if(i%2 == 0){
//         console.log(i);
//     }
// }
// using forloop print the odd number between 1 to 10
// for(let i=1; i<=10;i++){
//     if(i%2 != 0){
//         console.log(i);
//     }
// }
//Sum of 1 to 10 number
// let sum = 0;
// for(let i=1; i<=10; i++){
//     sum+=i;
// }
// console.log(sum);

// Sum  of Even number from 1 to 10
// let sumofEven = 0;
// for(let i=1; i<=10; i++){
//     if(i%2 ==0){
//     sumofEven+=i;
//     }
// }
// console.log(sumofEven);

//Create a empty array to store the number between 1 to 100
// let arr = [];
// for (let i = 0; i < 100; i=i+2) {
//    arr.push(i);
// }
// console.log(arr);


// Loop and array 
// let names = ["Vision", "Stark", "Steve", "Bruce", "Natasha"];
// for (let i = 0; i < names.length; i ++){
//  console.log(names[i]);
// }

// let names1 = ["Vision", "Stark", "Steve", "Bruce", "Natasha"];
// for (let i = 0; i < names1.length; i++) {
//    names1[i] = "Hello " + names1[i];
// }
// console.log(names1);

// let fruits = ["Apple", "Banana", "Mango", "Watermelon"];
// for(let i = 0; i < fruits.length; i++){
//    fruits[i] = "Delicious "+ fruits[i];
// }
// console.log(fruits);


// let fruits1 = ["Apple", "Banana", "Mango", "Watermelon"];
// for(let i = 0; i < fruits1.length; i++){
//    if(fruits1[i].startsWith("B")){
//       delete fruits1[i];
//       continue;
//    }
//    fruits1[i] = "Delicious "+ fruits1[i];
// }
// console.log(fruits1);

// let sameName = ["Jintendre", "Vianayak", "Abrar", "Salman", "Faizan"];
// for (let i = 0; i < sameName.length; i++) {
//    if (sameName[i].startsWith("A")) {
//       delete sameName[i];
//       continue;
//    }
//    sameName[i] = "Friend " + sameName[i];
// }
// console.log(sameName);


//For Of Loop
// let myName = "Usaid";
// for(let char of myName){
//     console.log(char);
// }

// let value = [10, 20, 30, 40];
// let sum = 0;
// for(let val of value) {
//     sum = sum + val;
//     // console.log(val);
// }
// console.log(sum);

// let name = "Usaid";
// let sum1 = 0;
// for(let char of name){
//     console.log(char);

// }

// let students = [
//     {name : "Ali" , Mark : 80},
//     {name : "Hamza" , Mark : 90},
// ]
// for(let student of students){
//     console.log(student.name, student.Mark);
// }

// let fruits = [
//     {name : "Mango", price : 100},
//     {name : "Apple", price : 80}
// ]
// for(let fruit of fruits) {
//     console.log(fruit.name, fruit.price);

// }

// For in Loop  (It gives a object key and array index )

// let car ={
//     name : "Alcazar",
//     make : "Hyndai",
//     year : "2021",
//     colour : "Black",
// };
// for(let deatil in car){
//     console.log(car[deatil]);
// }

// let dishes = {
//     name : "Keema Bheja",
//     make : "Ammi",
//     people : 15,
// }
// for(let dish in dishes) {
//     console.log(dish);
// }

// let car = {
//  model: "Golf",
//  make: "Volkswagen",
//  year: 1999,
//  color: "black",
// };
// let arrKeys = Object.keys(car);+
// console.log(arrKeys);

// for(let key of Object.keys(car)){
//     console.log(`keys are ${key}`);
// }
// let arrEnteries = Object.entries(car);
// console.log(arrEnteries);

//Break;


for (let i = 1; i < 10; i++) {
    if (i === 7) {
        continue;
    }
    console.log(i);
}

