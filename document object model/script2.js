// let div = document.querySelector ("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let newId = div.getAttribute("name");
// console.log(newId);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newClass"));

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

let div = document.querySelector("div");
// div.append(newBtn); // div.append is use to add a button in lower div tag
// div.prepend(newBtn); //di.prepend is use to add a button in upper in the div tag
// div.before(newBtn); //They add button before the div tag
div.after(newBtn); // They add button after the div tag

let p = document.querySelector("p");
p.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am Developer </i>";
document.querySelector("body").prepend(newHeading);