// Chapter project
// Miles-to-kilometers converter
// Create a variable that contains a value in miles, convert it to kilometers, and log the 
// value in kilometers in the following format: 
// For reference, 1 mile equals 1.60934 kilometers.
// let mile = 3 ;
// let kilometere = mile * 1.609;
// console.log(kilometere);

// BMI calculator
// Set values for height in inches and weight in pounds, then convert the values to 
// centimeters and kilos, outputting the results to the console:
// • 1 inch is equal to 2.54 cm
// • 2.2046 pounds is equal to 1 kilo
// Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos) 
// divided by squared height (in meters). Output the results to the console.
let inch = 69;
let centimeter = inch * 2.54;
let meter  = centimeter / 100;
console.log("meter is :", meter);

let pound = 156;
let kilo = pound /2.20;
console.log("kilo is :", kilo);

let BMI = kilo / (meter * meter);
console.log("BMI is ", BMI);