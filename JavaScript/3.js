// Complete the function that accepts a string parameter, 
// and reverses each word in the string. 
// All spaces in the string should be retained.

// function reverseWords(str) {
//     // Go for it
//   }


// Solution   

function reverseWords(str) {
    return str.split(‘’).reverse().join(‘’).split(‘ ‘).reverse().join(‘ ‘);
    }
    reverseWords("The quick brown fox jumps over the lazy dog.");