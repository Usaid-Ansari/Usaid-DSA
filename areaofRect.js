function sub(a, b) {
    return a-b;
    //return a + b;
}
let substract = sub(5,20);
//let result = add(10,18);
console.log(substract);  // Output: 8


function area(length, width){
    return length*width;
}
let AreaRectangle = area(10,5);
console.log(AreaRectangle); 

function circle(pi, radius){
    return pi*radius;
}
let AreaofCircle = circle(3.14,5);
console.log(AreaofCircle);

function square(side, side){
    return side*side;
}
let AreaofSquare = square(5,5);
console.log(AreaofSquare);


function Rahul(marks, obtainmarks){
    return (marks/obtainmarks)*100;
}
let NameofStudent = Rahul(100,80);
console.log(NameofStudent);


sayHi();  // Works

function sayHi() {
    console.log("Hi there!");
}

call();
function call() {
    for(let i=1;i<=8;i++){
        console.log("Unani Clinic");
    }
}



function prime(Number){
    for(let i=2; i<=18 - 1;i++){  // 2<=4.1
        console.log("i = ", i, n%i)
        if(17%i === 0) {
            break;
        }
    }

return Number;

}
let 
let numberPrime = prime(17);
console.log(numberPrime);