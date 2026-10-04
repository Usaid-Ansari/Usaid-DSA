let cursor = document.querySelector("#box");

let mode = "light";

cursor.addEventListener("mouseover", () => {
    if(mode === "light"){
        mode = "dark";
        cursor.classList.remove("light");
        cursor.classList.add("dark");
    }
});
cursor.addEventListener("mouseout", () =>{
    if(mode === "dark") {
        mode = "light";
        cursor.classList.remove("dark");
        cursor.classList.add("light");
    }
});