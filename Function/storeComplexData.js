let vehicles = [
    {comapny: "Honda", model:"2009"},
    {comapny: "Toyota", model:"2010"},
]
console.log(typeof vehicles);

let strinfofVehicles = JSON.stringify(vehicles)
console.log(strinfofVehicles);
localStorage.setItem("vehicles", strinfofVehicles)
console.log(localStorage);
