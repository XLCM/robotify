// biz logic

// define string responses
const robotSound = ' "Won\'t you be my neighbor?"';
const beep = " Beep";
const boop = " Boop";

// checks number and returns corresponding string or number
function numberIdentifier(number) {
  let temp = number.toString();
  if (temp.includes("3")) {
    return robotSound;
  } else if (temp.includes("2")) {
    return beep;
  } else if (temp.includes("1")) {
    return boop;
  } else {
    return " " + number;
  }
}

// loops from 0 => number and creates array of responses
function numberConverter(number) {
  let arr = [];
  for (let i = 0; i <= number; i++) {
    arr.push(numberIdentifier(i));
  }
  return arr;
}

// ui logic
$(document).ready(function () {
  $("form#robotify").submit(function (event) {
    event.preventDefault();
    // biz logic
    const number = $("#numberInput").val();
    // ui logic
    $("#robotSpeech").text(numberConverter(number));
  });
});
