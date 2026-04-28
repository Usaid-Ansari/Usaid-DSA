let arr = [

    { name: "Arad Khurma", type: "Majun" },
    { name: "Falasfa", type: "Majun" },
    { name: "Dabeedul Ward", type: "Majun" },
    { name: "Injeer", type: "Majun" },
    { name: "Motadil", type: "sharbat" },
    { name: "Dinar", type: "sharbat" },
    { name: "Banfsha", type: "sharbat" },
    { name: "Unnab", type: "sharbat" },

]
let searchMedicine = prompt("Enter a medicine name:");
let found = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.toLowerCase().trim() === searchMedicine.toLowerCase().trim()) {
        found = true;
        console.log(arr[i].name, "Available");
        break;
    }
}
if (found === false) {
    console.log("Not Available")
}



