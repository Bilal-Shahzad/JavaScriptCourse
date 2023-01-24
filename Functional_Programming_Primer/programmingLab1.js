// object oreinted programming dillemea 

// you want a banana
// you as for a banana 
// you get the banana 
// you also get the gorilla that was holding the banana 
// you also get the jungle that gorilla was living in 

// you get far more than what you are asking for


// pure functions are completely independent of outside state as such they are iimmune to entire classes of bugs that have to do with shared mutable state their independent nature also makes them great for parallel processing across many CPUs


// practice 

var weather = [72, 84, 34, 56, 92, 24, 47, 85, 72, 54]
var goOutside = [];

for (var i=0; i < weather.length; i++) {
    if (weather[i] >70) {
        goOutside.push(weather[i])
    }
}
console.log(goOutside)
// [ 72, 84, 92, 85, 72 ]

// challenge 
// take the same array and implement the filter method to do the same thing
// pass a function to filter method and return an array of all elements that return a value of true 

// my solution 
var goodWeather = function(temp) {
    return temp > 70
}
var comeOutside = weather.filter(goodWeather)
console.log(comeOutside, 'comeOutside')

// different way to solve it 

var niceDay = weather.filter(function (temp) {
    return temp > 70
})
console.log(niceDay , 'nice day')


// challenge 
var forecast = [
    {day: 'Monday' , sun: true},
    {day: 'Tuedsay' , sun: false},
    {day: 'Wednesday' , sun: false},
    {day: 'Thursday' , sun: true},
    {day: 'Friday' , sun: false},
    {day: 'Saturday' , sun: true},
    {day: 'Sunday' , sun: false}

]
var sunnyDays = []
for (var i = 0; i < forecast.length; i++) {
    if (forecast[i].sun){
        sunnyDays.push(forecast[i]);
    }
}
console.log(sunnyDays)

// use the filter method to make it shorter 
// my solution 
var sunnyDays2 = forecast.filter(function(weather) {
    return weather.sun;
})
console.log(sunnyDays2, 'sunny days2')