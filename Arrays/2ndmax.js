// // Find Second max number in array
// let arr = [10, 30, 56, 43, 29, 64, 49, 60];
// let max = Math.max(arr[0], arr[1]); // 30
// let Smax = Math.min(arr[0], arr[1]); //10

// for(let i = 2; i < arr.length; i++) {
//     if(arr[i] > max) {
//        Smax = max;
//        max = arr[i];
//     }else if(arr[i] > Smax && arr[i] < max){
//         Smax = arr[i];
//     }

// }
// console.log(Smax);

let arr = [100, 150, 10, 30, 56, 43, 29, 64, 49, 60];

let max = 0
for (let i = 0; i < arr.length; i++){
    if (arr[i] > max){
        max = arr[i]
    }
}
second_max = 0
for (let i = 0; i < arr.length; i++){
    if (arr[i] > second_max && arr[i] != max)
    {
        second_max = arr[i]
    }
}

third_max = 0;
for(let i = 0; i < arr.length; i++) {
    if(arr[i] > third_max && arr[i] != second_max && arr[i] != max)
    {
        third_max = arr[i];
    }
}
console.log("max is : ", max)
console.log("second max is : ", second_max)
console.log("Third_max is:" , third_max);