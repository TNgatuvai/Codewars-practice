// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// Solution: 

function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }

        // numbers = numbers.split(" ");
        // var low = parseInt(numbers[0]), high = parseInt(numbers[0]);
        // for (var i = 0; i < numbers.length; i++){
        // var num = parseInt(numbers[i]);
        // low = low <= num ? low : num;
        // high = high >= num ? high : num;
        // }
        // return high + " " + low;