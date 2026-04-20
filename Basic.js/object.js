//Object in Javascript
// let arr = [0, 1, 2];
// console.log(typeof arr);

// let object = {
//     objectName : "Usaid",
//     objectWeight : "58",
//     objectGender : "Male",
//     objectAge : "21",
// }

// object["objectAge"] = "25"; // updating the object
// object["objectWeight"] ="fiftyEight";
// console.log(object);

// Practice exercise 3.4
// 1. Create a new myCar object for a car. Add some properties, including, but not 
// limited to, make and model, and values for a typical car or your car. Feel free 
// to use booleans, strings, or numbers.
// 2. Create a variable that can hold the string value color. This variable 
// containing a string value color can now be used to reference the property 
// name within myCar. Then, use the variable within the square bracket notation 
// to assign a new value to the color property in myCar.
// 3. Use that same variable and assign a new property string value to it, such as 
// forSale. Use the bracket notation once again to assign a new value to the 
// forSale property to indicate whether the car is available for purchase.
// 4. Output make and model into the console.
// 5. Output the value of forSale into the console.

// let myCar = {myCarName : "TATA Motor",
//     Model : 2026,
//     colour : "Black",
//     FirstOwner : true,
//     Seat : 6,
//     forSale : "yes",
// }
// let myCarColour = myCar["colour"];
// let myCarSale = myCar["forSale"];
// console.log(myCarSale);
// console.log(myCar.Model);
// console.log(myCar.forSale);

// let company = { companyName: "Healthy Candy",
// activities: ["food manufacturing", 
// "improving kids' health", "manufacturing toys"],
// employee : ["name", "salary", "ID"],
// address: {
// street: "2nd street",
// number: "123",
// zipcode: "33116",
// city: "Miami",
// state: "Florida"
// },
// yearOfEstablishment: 2021 
// };
// // console.log(company.activities[1]);
// // console.log(company.employee [2]);
// company ["address"]["street"] = "3rd street";
// company["address"]["zipcode"] = "424001";
// company["address"]["city"] = "Dhule";
// console.log(company.address["street"]);
// console.log(company.address["zipcode"]);
// console.log(company.address["city"]);
// console.log(company.yearOfEstablishment);

//Array in object
// let addresses = [{
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida"
// },
// {
//     street: "1st West avenue",
//     number: "5",
//     zipcode: "75001",
//     city: "Addison",
//     state: "Texas"
// }];
// addresses[0].street = "Muslim Nagar";
// let streetName = addresses[0].street;
// console.log(streetName);

//Objects in arrays in objects
let  company = {
    companyName: "Healthy Candy",
    activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
    address: [{
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    {
        street: "1st West avenue",
        number: "5",
        zipcode: "75001",
        city: "Addison",
        state: "Texas"
    }],
    yearOfEstablishment: 2021
};
let streetName = company.address[0].street;
streetName = "Muslim Nagar";
console.log(company);