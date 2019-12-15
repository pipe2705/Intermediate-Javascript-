/*## Deliverable (Filter)
Filtering is where we iterate over a collection of values, but only return a subset of them.

For your deliverable, write a function to pass into the `reduce` function as an argument for `operation` that filters out odd numbers.
```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// let filterOutOdds = ???
// let accumulation = ???
reduce(numbers, filterOutOdds, accumulation)
// Should return [2, 4, 6, 8]

*/

let reduce = function(inputArray, operation, accumulation) {
  for (let i = 0; i < inputArray.length; i++) {
    let inputArrayElement = inputArray[i];
    accumulation = operation(inputArrayElement, accumulation);
  }
  return accumulation;
};
// Doubles a number and pushes it to an array
let doubleAndPush = (number, accumulation) => {
  let numberDoubled = number * 2;
  accumulation.push(numberDoubled);
  return accumulation;
};
// Adds number to the total
let add = (n, accumulation) => accumulation + n;

// Return array of only even numbers
let filterOutOdds = (number, accumulation) => {
  if (number % 2) {
    let oddNumbers = number;
    accumulation.push(oddNumbers);
  }
  return accumulation;
};

let array = [1, 2, 3, 4, 5, 6, 7, 8];
let arrayOfDoubles = reduce(array, doubleAndPush, []);
let totalOfArray = reduce(array, add, 0);

let odds = reduce(array, filterOutOdds, []);

console.log(odds);
