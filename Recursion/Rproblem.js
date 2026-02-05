// RECURSION PROBLEMS

//Find Sum of N Number 

// function Sum(n) {
//     if(n == 0)
//     {
//         return 0;
//     }

// else{
//     return n + Sum(n-1);
// }
// }
// console.log(Sum(5));


// Find product of N Number
// Find factorial of N number 

function propduct(n) {
    if(n == 1)
    {
        return 1;
    }

else{
    return n * propduct(n-1);
}
}
console.log(propduct(5));

// console.log ("Hello world");

// Find Fibonacci Number : fibnacci number is sum of first two number 

// function fib(n) {
//     if(n == 1 || n == 0) {
//         return n;
//     }
//     else{
//         return fib(n-1)+ fib(n-2);
//     }
// }
// console.log (fib(7));

function checkPallindrome(str, i, j) {
    if (i == j) 
    {
        return true;
    }
    else if(str[i] !=str[j]) {
        return false;
    }

    else if(i < j+1){
        return checkPallindrome(str, i+1, j-1);
         
    }
    return true;
}
console.log(checkPallindrome("M, A, D, A, M"));