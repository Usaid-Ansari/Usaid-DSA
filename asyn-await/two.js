
// setTimeout(sayChange, 2000);
const heading = document.querySelector('h1');
document.querySelector('#start').addEventListener('click', function() {
    heading.innerHTML = "Best Js Teacher"
    console.log("Start");
})
document.querySelector("#return").addEventListener('click', function(){
    heading.innerHTML = "Chai or Code";

})