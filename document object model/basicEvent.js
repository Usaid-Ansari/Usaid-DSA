console.log("Start");

const button = document.querySelector("button");

button.addEventListener("click", function (o) {
    alert("button clicked");
    console.log("Clicked");
    console.log(o);
});

console.log("End");

function getEventType(event) {
    const log = document.getElementById("log");
    console.log(event.type);
}
document.addEventListener("keydown", getEventType);
document.addEventListener("keypress", getEventType);
document.addEventListener("keyup", getEventType);

document.addEventListener("mousedown", getEventType);
document.addEventListener("mouseup", getEventType);
document.addEventListener("click", getEventType);