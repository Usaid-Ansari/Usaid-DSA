let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("button was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// };
// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// };

btn1.addEventListener("click", (evt) =>{
    console.log("button was clicked- handler1");
    
});
btn1.addEventListener("click", () =>{
    console.log("button was clicked- handler2");
});
const handler3 = () => {
    console.log("button was clicked - handler3");
}
btn1.addEventListener("click" , handler3);

btn1.addEventListener("click", () =>{
    console.log("button was clicked- handler4");
});

btn1.removeEventListener("click", handler3);


let div = document.querySelector("div");

div.onmouseover = () => {
    console.log("You are in div");
};