let newBut = document.createElement("button");
newBut.innerText = "click me!";

newBut.style.color = "White";
newBut.style.backgroundColor = "red";

document.querySelector("body").prepend(newBut);

let para = document.querySelector("p");
para.classList.add("newClass");