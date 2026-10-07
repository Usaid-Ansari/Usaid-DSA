const student = {
  name: "Usaid",
  age: 22,
  marks: 67.8,
  printAge: function () {
    console.log("age is = ", this.age); // student.age = 22
  },
};

const fruits = {
  banana: 10,
  apple: 20,

  showFruits: function () {
    console.log(this);
  },
};
fruits.showFruits();

const employee = {
  claTax() {
    console.log("tax is 10%");
  },
};
