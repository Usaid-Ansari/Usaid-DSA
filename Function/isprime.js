function isprime(num){
    if(num < 2) return false;
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            console.log(" is Not prime");
            return false;
        }
    }
    console.log(num,"is prime Number");
    return true;
}
let result = isprime(17);
console.log("Result:", result);

// using arrow function

// const isPrime = (num) => {
//     if(num < 2) return false;
//     for(let i=2; i<num; i++){
//         if(num % i === 0) {
//             console.log("Not a prime number");
//             return false;
//         }
//     }
//     console.log(num,"is a Prime Number");
//     return true;
// }

// let result = isPrime(23);
// console.log("Result:",result);