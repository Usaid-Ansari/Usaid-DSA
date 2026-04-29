let arr = [
  { name: "Arad Khurma", type: "Majun" },
  { name: "Falasfa", type: "Majun" },
  { name: "Dabeedul Ward", type: "Majun" },
  { name: "Injeer", type: "Majun" },
  { name: "Motadil", type: "sharbat" },
  { name: "Dinar", type: "sharbat" },
  { name: "Banfsha", type: "sharbat" },
  { name: "Unnab", type: "sharbat" },
];
let searchMedicine = prompt("Enter a medicine name:");
let input = searchMedicine.toLowerCase().trim();
let found = false;
for (let i = 0; i < arr.length; i++) {
  //Type match (type show )
  if (arr[i].type.toLowerCase() === input) {
    console.log(arr[i].name, "-", arr[i].type);
    found = true;
  }

  //  Name match (name show)
  else if (arr[i].name.toLowerCase() === input) {
    console.log(arr[i].name, "Available (", arr[i].type, ")");
    found = true;
    break;
  }
}

if (found === false) {
  console.log("Not Available");
}
