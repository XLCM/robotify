/* NOTES

numberfixer:
check !isNaN;
maybe parseInt and !isNaN?
use digit regex

//   function numberCheck(number) {
//     return isNaN(number);
//   if (isNaN(number)) {
//     alert('You can only enter numbers in this field!');
//   }

*/

// biz logic

// define string responses
const robotSound = "Won't you be my neighbor?";
const beep = "Beep";
const boop = "Boop";

// checks number and returns corresponding string or number
function numberIdentifier(number) {
  let temp = number.toString();
  if (temp.includes("3")) {
    return robotSound;
  } else if (temp.includes("2")) {
    return "beep";
  } else if (temp.includes("1")) {
    return "boop";
  } else {
    return temp;
  }
}

// loops from 0 => number and creates array of responses
function numberConverter(number) {
  let arr = [];
  for (let i = 0; i <= number; i++) {
    arr.push(numberIdentifier(i));
  }
  console.log(arr);
}

// ui logic
