class ToyotaCar {
    constructor(brand, mileage){
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("Toyota Car is starting");
    }
    stop() {
        console.log("car is stop");
    }

    
}
let fortuner = new ToyotaCar("fortuner", 45); //constructor
console.log("fortuner");
let lexus = new ToyotaCar("car", 55);//constructor
console.log("lexus");


class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let student1 = new Student("Usaid", 22);
console.log("name = ", student1.name);
console.log("age = ", student1.age);