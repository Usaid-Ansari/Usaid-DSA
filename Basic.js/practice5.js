// Practice exercise 3.2
// 1. Create an empty array to use as a shopping list.
// 2. Add Milk, Bread, and Apples to your list.
// 3. Update "Bread" with Bananas and Eggs.
// 4. Remove the last item from the array and output it into the console.
// 5. Sort the list alphabetically.
// 6. Find and output the index value of Milk.
// 7. After Bananas, add Carrots and Lettuce.
// 8. Create a new list containing Juice and Pop.
// 9. Combine both lists, adding the new list twice to the end of the first list.
// 10. Get the last index value of Pop and output it to the console.

let arr = ["Milk", "Bread", "Apple"];
arr[1] = "Banana, Egg";
console.log(arr);
arr.pop();
console.log(arr);
arr.sort();
console.log(arr); 
let index = arr.indexOf("Milk");
console.log("The index of Milk is:", index);
arr.splice(1, 1,"carrots ", "Lettuce");
console.log(arr);

let list =["apple", "tree" ,"knife", "juice"];
list.pop();
console.log(list);

let combine = arr.concat(list);
console.log(combine);

combine.pop();
console.log(combine);