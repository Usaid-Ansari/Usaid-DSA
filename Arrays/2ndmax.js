// Find Second max number in array
let arr = [10, 30, 56, 43, 29, 64, 49, 60];
let max = Math.max(arr[0], arr[1]); // 30
let Smax = Math.min(arr[0], arr[1]); //10

for(let i = 2; i < arr.length; i++) {
    if(arr[i] > max) {
       Smax = max;
       max = arr[i];
    }else if(arr[i] > Smax && arr[i] < max){
        Smax = arr[i];
    }

}
console.log(Smax);
