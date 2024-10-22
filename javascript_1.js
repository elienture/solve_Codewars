// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
// because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  const filterString = string.toLowerCase().replace(/[^a-z]/g, ""); // switch letter to lowercase, erase all symbols
  const AZstring = new Set(filterString);
  if (AZstring.size === 26) {
    return true;
  } else {
    return false;
  }
}

// Similar solution:
function isPangram(string) {
  return (
    new Set(
      string
        .toLocaleLowerCase()
        .replace(/[^a-z]/gi, "")
        .split("")
    ).size === 26
  );
}

// You live in the city of Cartesia where all roads are laid out in a perfect grid. 
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
// The city provides its citizens with a Walk Generating App on their phones
//  -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
//  You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, 
// so create a function that will return true if the walk the app gives you will take you exactly ten minutes 
// (you don't want to be early or late!) and will, of course, return you to your starting point. 
// Return false otherwise.

function isValidWalk(walk) {
    let ns = 0, we = 0; // initial point 
      for (let direction of walk) { 
        if (direction == 'n') ns += 1; // walk to north = +1 block
        if (direction == 's') ns -= 1; // walk to south = -1 block
        if (direction == 'w') we += 1; // walk to west = +1 block
        if (direction == 'e') we -= 1; // walk to east = -1 block
      } 
  
      return walk.length == 10 && ns === 0 && we === 0; // walk time = 10 minutes, NS and WE directions at starting point
  }

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
// They would like your help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
// In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap. 
// Input will consist of a list of pairs. Each pair contains information for a single potential member. 
// Information consists of an integer for the person's age and an integer for the person's handicap. 

function openOrSenior(data) {
    return data.map(([age, handicap]) => { // create array with map; input pairs are age and handicap
        if (age >= 55 && handicap > 7) { // conditions for a Senior member
            return 'Senior';
        } else {
            return 'Open'; // otherwise member is Open
        }
    });
}

// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
    if (s.length % 2 !== 0) {
      let string = (s.length - 1) / 2
      return s.slice(string, string + 1)
    } else {
      let string = s.length / 2 - 1
      return s.slice(string, string + 2)
    }
  }


