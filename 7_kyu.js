// The Western Suburbs Croquet Club has two categories of membership, Senior and Open.
// They would like your help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
// In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// Input will consist of a list of pairs. Each pair contains information for a single potential member.
// Information consists of an integer for the person's age and an integer for the person's handicap.

function openOrSenior(data) {
  return data.map(([age, handicap]) => {
    // create array with map; input pairs are age and handicap
    if (age >= 55 && handicap > 7) {
      // conditions for a Senior member
      return "Senior";
    } else {
      return "Open"; // otherwise member is Open
    }
  });
}

// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
  if (s.length % 2 !== 0) {
    let string = (s.length - 1) / 2;
    return s.slice(string, string + 1); // odd
  } else {
    let string = s.length / 2 - 1;
    return s.slice(string, string + 2); // even
  }
}

// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n,
// your task is to find the sum of the minimum values in each row.

function sumOfMinimums(arr) {
  return arr
    .map((list) => Math.min(...list))
    .reduce((acc, current) => acc + current, 0); // Math.min to get minimum number in list // usse reduce to find sum of minimums
}

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings,
// ordered from shortest to longest. For example, if this array were passed as an argument:
// ["Telescopes", "Glasses", "Eyes", "Monocles"] Your function would return the following array:
// ["Eyes", "Glasses", "Monocles", "Telescopes"]

function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.

function validParentheses(s) {
  let pair = 0; // pair of matching parentheses

  for (let char of s) {
    if (char === "(") {
      pair++; // increment pair
    } else if (char === ")") {
      pair--; // decrement pair
    }

    // eturn false if closing parentheses has no matching opening one
    if (pair < 0) {
      return false;
    }
  }
  return pair === 0; // pair should be back to 0 if there is a match
}
