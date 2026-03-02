// let s = 'usaid';
// console.log(s.length);
// console.log(s[0]);
// console.log(s[1]);

// console.log(s.indexOf('a'));
// console.log(s.indexOf('r'));

// convert temprature fom celcius to fahrenheit
// let c = 39;
// let f = (c * 9/5) + 32;
// console.log(f);



// convert temprature from celcius to kelvin
let celsius = 40;

let fahrenheit = (celsius * 9/5) + 32;
let kelvin = celsius + 273.15;
if(celsius >= 40 ) {
    console.log("TOO HOT");
}
else if(celsius < 10) {
    console.log("TOO COLD");
}
else {
    console.log("NORMAL TEMP");
}

console.log("Fahrenheit:", fahrenheit);
console.log("Kelvin:", kelvin);
