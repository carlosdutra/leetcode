/**
 * @param {string} s
 * @return {number}
 */

var romanLetters = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

var romanToInt = function(s) {
    const stringArray = s.split("");
    let accumulator = 0;
  
    for (i = 0; i < stringArray.length; i++) {
      let n1 = romanLetters[stringArray[i]];
      let n2 = romanLetters[stringArray[i+1]];
      
      if (i + 1 < stringArray.length) {
        if (n1 >= n2) {
          accumulator = accumulator + n1;
        } else {
          accumulator = accumulator + n2 - n1;
          i++;
        }
      } else {
        accumulator = accumulator + n1;
      }
      
      
    }
    
    return accumulator;
};