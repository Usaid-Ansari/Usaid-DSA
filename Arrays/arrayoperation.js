//Easy input taking method

// process.stdout.write("Enter Array:");
// process.stdin.on("data", (data) => {
//     let arr = data.toString().trim().split(" ").map(Number);
//     console.log("The array is:" , arr);
//     process.exit();
// });



// Operation on Arrays


// Push : Insert the element from the left side of the array

// let arr = [2,1,4,6,3];
// arr.push(5,7);
// console.log(arr); // [2,1,4,6,3,5,7]

//Unshift: Insert the element from the right side of the array
// let arr = [2,1,4,6,3];
// arr.unshift(5,7);
// console.log(arr);//[5,7,2,1,4,6,3]

//Shift: Remove the first element from an array.If array is empty than return undefined  
// let arr = [5, 7, 2, 1, 4, 6, 3]
// arr.shift();
// console.log(arr);// [ 7, 2, 1, 4, 6, 3 ]

//pop:remove an element from the end of the array

// splice : remove and add element of the specfic index
// let arr = [5, 7, 2, 1, 4, 6, 3]

// //console.log(arr);//[5, 7, 2, 1, 4, 6,3]
// arr.splice(1,3);
// console.log(arr);[5,4,6,3]
// arr.splice(1,0,9);   // Element add (1st index par 9 ko add karna hai)
// console.log(arr); // [5, 9, 7, 2, 1, 4, 6, 3]


//slice : Dlete the element of array and give the new array

// let arr = [10, 20, 30, 40, 50];
// let result = arr.slice(1,3); // first argumnet is 1 and second argument is 3 but 3 is not include so only 1 to 2
// console.log(result);//[20,30]
// arr.reverse();
// console.log(arr);

// process.stdout.write("Write Your Name: ");
// process.stdin.on("data", (data) => {
//   console.log("Hello " + data.toString().trim());
//   process.exit();
// });

// const f = ["B", "O", "A", "U"];
// const remove = f.splice(2, 2, "L", "K","Z");
// console.log(remove); 
// console.log(f);

const f = ["B", "O", "A", "U","M"];
const c = f.slice(1,3);
console.log(f);
//console.log(c);
const z = f.slice(1,4)
console.log(z);

// const arr = [1, 2, 3, 4]
// const add = arr.splice(1, 1, 5);
// console.log(add);
// console.log(arr);
