//  imagine that the weather reports says that the temperature today will be  301 Kelvin
// To start, create a variable named kelvinTemp, and set it equal to 301

//this is the temperature in farenheit 
var kelvinTemp = 301

// Finding the temperature in Celsius is similar to Kelvin — the only difference is that Celsius is 273.15 degrees less than Kelvin
// Let's convert Kelvin to Celsius by subtracting 273.15 from the kelvinTemp variable.

//celsius is 273.15 less than kelvin
var celsiusTemp = kelvinTemp - 273.15;
console.log(celsiusTemp)

// Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheitTemp.
// Fahrenheit = Celsius * (9/5) + 32

// calculates farenheit 
var fahrenheitTemp = celsiusTemp * (9/5) + 32;
console.log(fahrenheitTemp)
//82.13000000000005

// Use the .floor() method from the Math library to round down the Fahrenheit temperature. Save the result to the fahrenheitTemp variable.

//rounds farehneit 
console.log("hits here", Math.floor(fahrenheitTemp))


// Use console.log and string concatenation to log the temperature in fahrenheitTemp to the console to create the message as follows: The temperature is TEMPERATURE degrees Fahrenheit.
// TEMPERATURE should be determined by the value of fahrenheitTemp.

console.log('The temperature is ' + fahrenheitTemp + ' degrees Fahrenheit.');

