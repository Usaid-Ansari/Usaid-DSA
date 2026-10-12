//Forof loops
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World";
for(const greet of greeting) {
    // console.log('Each char is', `${greet}`);
}

const map = new Map();
map.set('IN', "India");
map.set('USA', "United State of America");
map.set('UK', "United Kingdom");
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ":-" , value);
}

const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
}
for(const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}