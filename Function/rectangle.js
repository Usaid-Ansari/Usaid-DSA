// function areaofRectangle(length, breath){
//     return length * breath;
// }
// console.log(areaofRectangle(5,8));


//using arrow method

// const areaofRectangle = (length, breath) =>{
//     return length * breath;
// }
// console.log("Area of Rectangle :",areaofRectangle(5,8));

// Sum of two Number

// function twoSum(a,b) {
//     return a + b;
// }
// console.log(twoSum(5,5));


// Sum of All number present in  array

// let arr = [10, 20, 30, 40, 50];


// function additionofAll(arr){
//     let total = 0;
//     for(let i=0; i<arr.length; i++){
//         total = total + arr[i];
//     }
//     return total;
// }
// let totalSum = additionofAll(arr);
// console.log(totalSum);


// let x = 80
// function test(a) {
//     let y = 200;
//     console.log(a);
   
// }
// test(20);

// function test() { 
//     let a = 90;
//     function child() {
//         console.log(x+a);
//     }
//     child()
// }

// let x = 100;
// test()

// function parent() {
//     let b = 90;
//     function child() {
//         let  c = 50;
//         return a+b+c;//220
//     }
//     return b+a+child()//390
// }
// let a=80;
// a +=parent(); // a=a+parent = 80+390=470
// console.log(a);


// let b = 90;
// if(true){
//     let a = 90; 
// }
// console.log(a);

let b=90;
if(true){
    let z=100
    if(true){
        let a=10
        console.log(b+z+a);//b and z come from parent block 
    }
    console.log(a+b);
}