var cardsArray = [
    {    'name': 'CSS',    'img': 'https://github.com/robgmerrill/img/blob/master/css3-logo.png?raw=true',  },
    {    'name': 'HTML',    'img': 'https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true',  },
    {    'name': 'jQuery',    'img': 'https://github.com/robgmerrill/img/blob/master/jquery-logo.png?raw=true',  },
    {    'name': 'JS',    'img': 'https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true',  },
    {    'name': 'Node',    'img': 'https://github.com/robgmerrill/img/blob/master/nodejs-logo.png?raw=true',  },
    {    'name': 'Photo Shop',    'img': 'https://github.com/robgmerrill/img/blob/master/photoshop-logo.png?raw=true',  },
    {    'name': 'PHP',    'img': 'https://github.com/robgmerrill/img/blob/master/php-logo_1.png?raw=true',  },
    {    'name': 'Python',    'img': 'https://github.com/robgmerrill/img/blob/master/python-logo.png?raw=true',  },
    {    'name': 'Ruby',    'img': 'https://github.com/robgmerrill/img/blob/master/rails-logo.png?raw=true',  },
    {    'name': 'Sass',    'img': 'https://github.com/robgmerrill/img/blob/master/sass-logo.png?raw=true',  },
    {    'name': 'Sublime',    'img': 'https://github.com/robgmerrill/img/blob/master/sublime-logo.png?raw=true',  },
    {    'name': 'Wordpress',    'img': 'https://github.com/robgmerrill/img/blob/master/wordpress-logo.png?raw=true',  },
  ];


// grab the div with an id of game-board and assing variable game 
var game = document.getElementById('game-board')

// create a section element and assing it to varaible gird
var grid = document.getElementById('section')

// give section element a class of grid 
grid.setAttribute('class' , 'grid')

// Append the grid section to  the game-board div 
game.appendChild(grid)

// loop through each item in our cards array 
for (i = 0; i < cardsArray.length; i++) {

    // create a div element and assign to variable card 
    var card = document.createElement('div')

    // Apply aa card class to that div 
    card.classList.add('card');

    // set the data ame attribute of the div to the cardsArray name 
    card.dataset.name = cardsArray[i].name

    // apply the background image of the div to the cardsArray image 
    card.style.backgroundImage =  `url(${cardsArray[i].img})`

    // append the div to the grid section 
    grid.appendChild(card)
} 

// Set count to 0
var count = 0;

// Add event listener to grid
grid.addEventListener('click', function(event) {
  // Declare variable to target our clicked item
  var clicked = event.target;
  // Do not allow the grid section itself to be selected;
  // only select divs inside the grid
  if (clicked.nodeName === 'SECTION') {
    return;
  }
  // We only want to add `selected` class if the current count is less than 2
  if (count < 2) {
    count++;
    // Add selected class
    clicked.classList.add('selected');
  }
});
