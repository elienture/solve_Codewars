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
  let ns = 0,
    we = 0; // initial point
  for (let direction of walk) {
    if (direction == "n") ns += 1; // walk to north = +1 block
    if (direction == "s") ns -= 1; // walk to south = -1 block
    if (direction == "w") we += 1; // walk to west = +1 block
    if (direction == "e") we -= 1; // walk to east = -1 block
  }

  return walk.length == 10 && ns === 0 && we === 0; // walk time = 10 minutes, NS and WE directions at starting point
}

// Your friend Phil came up with a great new Bitcoin investment strategy, but before he can start making millions,
// he needs to know the minimum, average and maximum exchange rate for certain periods in the last few months.
// He'll pay you 0.5 Bitcoin for a function that takes several arrays (one for each period) and calculates the minimum,
// average and maximum for each array, as well as the total minimum, average and maximum.
// Some numbers at the start and end of each period don't agree with Phil's theory, so he wants you to discard them.

function getMinAvgMax(toDiscard, data) {
  const results = [];
  let total = [];

  // Processing each array
  data.forEach((array) => {
    const discArray = array.slice(toDiscard, array.length - toDiscard); // Discard the specified number of elements from both ends of the aaray

    // Calculate min, average, and max for the newly discarded array
    const min = Math.min(...discArray);
    const max = Math.max(...discArray);
    const avg = discArray.reduce((acc, val) => acc + val, 0) / discArray.length;

    results.push([min, avg, max]); // Store results for this array

    total.push(...discArray); // Accumulate totals for overall calculations
  });

  // Calculate total min, avg, and max
    const totalMin = Math.min(...total);
    const totalMax = Math.max(...total);
    const totalAvg = total.reduce((acc, val) => acc + val, 0) / total.length;

    results.push([totalMin, totalAvg, totalMax]);

  return results;
}

// Complete the solution so that the function will break up camel casing, using a space between words.
// example: "camelCasing"  =>  "camel Casing"

function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1')); // adding a space between each uppercase letter
}

// Define a function that takes an integer argument and returns a logical value true or false
// depending on if the integer is a prime.

// the solution is not optimized enough
function isPrime(num) {
  if (num <= 1) {
    return false
  }
  
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  
  return true
}

// solution 2
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) { // if num has a divisor larger than its square root, the divisor will be smaller than the square root
      if (num % i === 0) {
          return false;
      }
  }
  return true;
}

