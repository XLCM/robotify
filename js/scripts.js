
// Utility Logic
function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

// Biz Logic
function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function mostUsedWords(text) {
// let counter = []; // empty array to hold pushed arrays with word and count pairs
// string.toLowerCase().split().sort((a, b) => a - b);
  let masterArray = [];
  let temp =  text.toLowerCase().split(' ').sort((a, b) => a - b);
  temp.forEach(function(word) {
    let tempArray = [];
    if (!masterArray.includes(word)) {
      // masterArray.push(element);
      let countOccurrences = (temp, word) => temp.reduce((a, v) => (v === val ? a + 1 : a), 0);
      tempArray.push(countOccurrences);
      tempArray.push(word);
    }
    masterArray.push(tempArray);
  })
  console.log(masterArray.reverse());
}

function boldPassage(word, text) {
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}

//UI Logic

$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    // biz logic
    $("#total-count").html(wordCounter(passage));
    $("#selected-count").html(numberOfOccurrencesInText(word, passage));
    // ui logic
    $('#bolded-passage').html(boldPassage(word, passage));
  });
});
