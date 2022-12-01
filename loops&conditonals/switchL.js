var dayOfWeek = 'Saturday'
switch (dayOfWeek) {
  case 'Sunday':
    day = "Today is Sunday";
    break;
  case 'Monday':
    day = "Today is Monday";
    break;
  case 'Tuesday':
    day = "Today is Tuesday";
    break;
  case 'Wednesday':
    day = "Today is Wednesday";
    break;
  case 'Thursday':
    day = "Today is Thursday";
    break;
  case 'Friday':
    day = "Today is Friday";
    break;
  case 'Saturday':
    day = "Today is Saturday";
    default:
    console.log("What day of the week is it?(dayOfWeek)")
}

var noInstrument = 'Dont play'
switch (noInstrument) {
    case "trumpet":
      console.log("I play the trumpet");
      break;
    case "flute":
      console.log("I play the flute");
      break;
    case "trombone":
      console.log("I play the trombone");
      break;
    default:
      console.log("I don't play an instrument. Sorry");
      break;
  }