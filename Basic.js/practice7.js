// 1. Create an object named people that contains an empty array that is called 
// friends.
// 2. Create three variables, each containing an object, that contain one of your 
// friend's first names, last names, and an ID value.
// 3. Add the three friends to the friend array.
// 4. Output it to the console.

let friend1 = {
    name: "Usaid",
    surName: "Ansari",
    id: "ansariusaid004@gmail.com",
}
let friend2 = {
    name: "Aaquib",
    surName: "shah",
    id: "shahaaquib003@gmail.com",
}
let friend3 = {
    name: "Hamza",
    surName: "shaikh",
    id: "shaikhhamza002@gmail.com",
};

let people = {
    
    friends : [friend1, friend2, friend3],
};
console.log(people);