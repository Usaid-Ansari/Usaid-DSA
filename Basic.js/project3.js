// const theList = ['Laurence', 'Svekis', true, 35]; 
// theList.shift();
// console.log(theList);
// theList.pop();
// console.log(theList);
// theList.pop();
// console.log(theList);
// theList.unshift("FIRST");
// console.log(theList);
// theList[3] = "hello world";
// theList[2] = "MIDDLE";
// console.log(theList);
// theList.push("LAST");
// console.log(theList);

// Company product catalog
// In this project, you will implement a data structure for a product catalog and create 
// queries to retrieve data.
// 1. Create an array to hold an inventory of store items.
// 2. Create three items, each having the properties of name, model, cost, and 
// quantity.
// 3. Add all three objects to the main array using an array method, and then log 
// the inventory array to the console.
// 4. Access the quantity element of your third item, and log it to the console. 
// Experiment by adding and accessing more elements within your data 
// structure.


let obj1 = {
    name : "Redmi",
    model : "Note 9",
    cost : "9000",
    quantity : " 10",
}
let obj2 = {
    name : "Poco",
    model : "M6",
    cost : "1200",
    quantity : "50",
}
let obj3 = {
    name : "One-Plus",
    model : "Nord 7",
    cost : "20000",
    quantity : " 100",
}

let array1 = [obj1];
let array2 = [obj2];
let array3 = [obj3];
let newArr = array1.concat(array2).concat(array3);
console.log(newArr);
console.log("The quantity is :",obj3.quantity);