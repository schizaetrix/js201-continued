// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"

function reverse (string) {
    var revString = "";
    for (var i = string.length - 1; i >= 0; i--) {
        revString = revString + string[i];
    }
    return revString;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'

function findLongestWord (stringOfWords) {
    var wordArr = stringOfWords.split(" ");
    var wordLong = 0;
    var longestWord;
    for (var i = 0; i < wordArr.length; i++) {
        if (wordArr[i].length > wordLong) {
            wordLong = wordArr[i].length;
            longestWord = wordArr[i];
        }
    }
    return longestWord;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'

function nicer (badWordString) {
    var badWordArray = badWordString.split(" ");
    var niceNewString = "";

    for (var i = 0; i < badWordArray.length; i++) {
        if (badWordArray[i] != "heck" &&
            badWordArray[i] != "darn" &&
            badWordArray[i] != "dang" &&
            badWordArray[i] != "crappy") {
                niceNewString = niceNewString + badWordArray[i] + " ";
            }
    }
    return niceNewString.substring(0, niceNewString.length - 1);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'

function capitalizeAll (sentence) {
    var sentenceArr = sentence.split(" ");
    var capSentence = "";

    for (var i = 0; i < sentenceArr.length; i++) {
        capSentence = capSentence + sentenceArr[i].substring(0,1).toUpperCase() + sentenceArr[i].substring(1) + " ";
    }
    return capSentence.substring(0, capSentence.length - 1);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']

function split (string, delimiter) {
    var splitArray = [''];
    var j = 0;
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) === delimiter) {
          splitArray.push('');
          j++;
        } else {
            splitArray[j] = splitArray[j] + string.charAt(i);
        }
    }
    return splitArray;
}