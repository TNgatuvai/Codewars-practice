// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).

const { filter } = require("minimatch");

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
  }

// Solution

  function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }

  // Needed help from google with this one but

// The filter() method creates an array filled with all array elements that pass a test (provided as a function).

// Note: filter() does not execute the function for array elements without values.

// Note: filter() does not change the original array.