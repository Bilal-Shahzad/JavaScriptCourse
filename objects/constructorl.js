var home = {
    rooms: 4,
    apartment: false, 
    color: 'brown', 
    swimmingPool: true,
    state: 'KS',
    city: "Wichita"
}

var home2 = {
    rooms: 2,
    apartment: true,
    color: 'white',
    swimmingPool: false,
    state: 'KS',
    city: 'Wichita'
}

function Home( rooms, apartment, color, swimmingPool, state, city){
this.rooms = rooms;
this.apartment = apartment;
this.color = color;
this.swimmingPool = swimmingPool;
this.state = state;
this.city = city;
}


var home1 = new Home( 3, false, 'blue', true, 'Kansas', 'Wichita' )
console.log(home1)