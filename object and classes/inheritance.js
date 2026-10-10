class parent {
    hello() {
        console.log("hello");
    }
}

class child extends parent {

}

let obj = new child();

class person {
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
}

class Enginner extends person {
    work() {
        console.log("solve problem and build something");
    }
}

class Doctor extends person {
    work() {
        console.log("treat pateint");
    }
}

let usaidObj = new Enginner();
usaidObj.work();
let doctorObj = new Doctor();
doctorObj.work();

//MethodOverriding

class person1 {
    work() {
        console.log("person is working");
    }
}

class Enginner1 extends person {
    work() {
        console.log("Enginner build Software");
    }
}
class Doctor1 extends person {
    work() {
        console.log("Doctor Treat Patient");
    }
}

let enginner = new Enginner1();
let doctor = new Doctor();

enginner.work();
doctor.work();

//practice
class Animal {
    sound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    sound() {
        super.sound();
        console.log("Dog barks");
    }
}

let d = new Dog();
d.sound();

class Vehicle  {
    constructor(brand) {
        this.brand = brand;
    }
}

class car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
}

let car1 = new car ("Toyota", "Fortuner");
console.log(car1.brand);
console.log(car1.model);
