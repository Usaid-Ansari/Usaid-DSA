let DATA = "secret information";
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data = ", DATA);
    }
}

class Admin extends User {
    editData() {
        DATA = "some new value";
    }
}

let student1 = new User("usaid", "usaid005@gmail.com");
let student2 = new User("mahera", "mahera@gmail.com");

let teacher = new User("Dean", "dean@gmail.com");

console.log("Studen1",student1);
console.log("Student2", student2);
console.log("teacher", teacher);

let userAdmin1 = new Admin("admin", "admin@college.com");
console.log(userAdmin1);