console.log((addone(5)));
function addone(num) {
    return num + 1;
}
//Hoisting
console.log(addTwo(5));
const addTwo = function(num) {
    return num + 1; 
}
