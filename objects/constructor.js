//cunstructor functions allow to create many objects using a function as a template
//use it when you want to create multiple similar objec with the same properites and methods

var car1 = {
    make: 'Honda',
    model: 'Civc',
    year: 1996
}

var car2 = {
    make: 'Merccedes',
    model: ' Benz',
    year: 2020
}

var car3 = {
    make: 'Lambo',
    model: 'Mercy',
    year: 2008
}
//first create a template with the objects property

function Car(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
}
//function is the keyword so it knows what to do with the code given
//car is the function name 
//car is capitalized (object constructor notation capitlization is the best practice)
// make,model,year are prameters and set the value of a porperty in the object
//this._ is the property
//make,mode,year are the values

var car1 = new Car('Honda','Civic',2006);
console.log(car1)

var car4 = new Car('Jeep','Cherokee',2015);
car4.fourWheelDrive = true;
car4['bumperStickers']=false
console.log(car4)