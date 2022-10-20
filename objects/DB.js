// . ,and  [] notation

var car = {
    make: 'Honda', 
    color: 'red',
    mpg: 34,
    gallons: 12,
    engine: 1, 
    'origin year': 1984
    }
    //bracket nnotation 
    car ['origin year'] = 1984; 
    car ['function'] = 'drive'
    //have to put quotes around function because it is a keyword and would be normall invalid 
    //need to have quotes around 
    
    //dot notation 
    // car.origin year = 1984
    
    //accessing property 
    //car is object 
    car.color; //red
    car.make; //this gets hond
    car.color = 'green'
    car.make = 'Toyota'
    console.log(car)
    //but you cant use dot if it has spaces
    
    //bracket access
    car ['color'];//red 
    car['origin year'] = 2002;
    car ['function'] = 'stop';
    console.log(car)