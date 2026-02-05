let arr = [10, 2, 80, 5, 1, 200, 50, 120, 4, 2, -1];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i];
    }
}
console.log(min);