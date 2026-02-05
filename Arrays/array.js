// let arr = [10, 20, 30, 40, 50];
// let sum = 0
// for(let i=0; i<arr.length; i++){
//     sum += arr[i];
// }

// console.log(sum);
// find in array which number is maximum 
// let arr = [10, 20, 4, 100 ,2];
// let max = arr[0];
// for(let i =1; i<arr.length; i++) {
//     if(max < arr[i]) {
//         max = arr[i];
//     }
// }
// console.log("The maximum Number is:",max);

// find in array which number is minimum
// let arr = [10, 20, 4, 100 ,2];
// let min = arr[0];
// for(let i =1; i<arr.length; i++) {
//     if(min > arr[i]) {
//         min = arr[i];
//     }
// }
// console.log("The maximum Number is:",min);

// let arr = [10, 20, 30, 40, 50];
// let temp = new Array(arr.length);  // new is a keyword

// let j = 0;
// for(let i = arr.length-1; i>=0; i--) {
//     temp[j] = arr[i];
//     j++;
// }
// console.log(temp);


// const array = [1, 2, 3, 4];
// console.log(array.length);

// const fruits = ["Mango", "Orange", "Banana", "Apple", "Grapes"];
// fruits.push("Pineapple");
// for(let i=0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// console.log(fruits.length);
// fruits[10] = "keri";
// console.log(fruits);

function isPrime(n) {
    for(let i = 2; i < n; i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}

n = 13;
arr = [];
for(let j = 2; j <= n; j++) {
    if(isPrime(j)) {
        arr.push(j);
    }
}
console.log(arr);

