console.log("tests.js loaded");

let testFunctions = () => {
  console.log("I'm a function from tests.js.");
};

// Test 1: Should return 1 if a passage has just 1 word.
let text = "hello";
console.log(
  "This test should return 1 if a passage has just 1 word: ",
  wordCounter(text)
);

// Test 2: Should return 2 if a passage has two words.
//Code:
text = "hello there";
console.log(
  "This text should return 2 if the passage has 2 words: ",
  wordCounter(text)
);
// Expected Output: 2'

// Test 3: It should return 0 for an empty string.
console.log(
  "This text should return 0 if there is an empty string: ",
  wordCounter("")
);
// Expected Output: 0

// Test 4: It should return 0 for a string that is only spaces.
text = "            ";
console.log(
  "This should return 0 for a string that is 13 spaces: ",
  wordCounter(text)
);

// Test: "It should not count numbers as words."
console.log(
  "This should return 2 for the string containing numbers:",
  wordCounter("hi there 77 19")
);
// Expected Output: 2

//Test: "It should return 0 occurrences of a word for an empty string."
text = "";
let word = "red";
console.log(
  "It should return 0 occurrence of a word for an empty string.",
  numberOfOccurrencesInText(word, text)
);
//Expected Output: 0

//Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code: text = "red";
word = "red";
console.log(
  `It should return 1 occurrence when ${text} and ${word} are the same: `,
  numberOfOccurrencesInText(word, text)
);

// Test: "It should return 0 occurrences of a word when the word and the text are different."
text = "red";
word = "blue";
console.log(
  `It should return 0 occurrences of a word when ${text} and ${word} are different:`,
  numberOfOccurrencesInText(word, text)
);
// Expected Output: 0

//Test: "It should return the number of occurrences of a word."
text = "red blue red red red green";
word = "red";
console.log(
  `It should return the number of occurrences of the word '${word}': `, numberOfOccurrencesInText(word, text));
//Expected Output: 4

// Test: "If an empty string is passed in as a word, it should return 0."
Code:
text = "red RED Red!";
word = "";
console.log(
  'If an empty string is passed in as a word, it should return 0: ', wordCounter(word, text));

// Expected Output: 0

// Test: "Return string to lowercase"
text = "Hi there hey yo hi hi yay yo whoa there whoa... yay!"
console.log('Should return string in lowercase: ', mostUsedWords(text));
// Expected Output: 'hi there hey yo hi hi yay yo whoa there whoa... yay!

// Test: "Return string split as array"
text = "Hi there hey yo hi hi yay yo whoa there whoa... yay!"
console.log('Should return string split as array: ', mostUsedWords(text));
// Expected Output: 'hi there hey yo hi hi yay yo whoa there whoa... yay!

// // Test: Return array sorted alphabetically
// text = ['hi', 'there', 'hey', 'yo', 'hi', 'hi', 'yay', 'yo', 'whoa', 'there', 'whoa...', 'yay!']
// console.log('Should array sorted alphabetically: ', mostUsedWords(text));
// // Expected Output: 'hi there hey yo hi hi yay yo whoa there whoa... yay!



// var censor = (function() {
//   function convertToAsterisk(word) {
//       var asteriskSentence = '';
//       for(var asterisks=0;asterisks<word.length;asterisks++) {
//           asteriskSentence+='*';
//       }
//       return asteriskSentence;
//   }

//   return function(sentence, bannedWords) {
//       sentence    = sentence      || undefined;
//       bannedWords = bannedWords   || undefined;

//       if(sentence!==undefined && bannedWords!==undefined) {
//           for(var word=0;word<bannedWords.length;word++) {
//               sentence = sentence.replace(bannedWords[word], convertToAsterisk(bannedWords[word]));
//           }
//       }

//       return sentence;
//   };
// })();


// var sentence = 'I like apples, grapes, and peaches. My buddy likes pears';
// var bannedWords = [
//     'pears',
//     'peaches',
//     'grapes',
//     'apples'
// ];
// sentence = censor(sentence, bannedWords);