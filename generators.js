let generatorFunction = function*() {
  let i = 0;
  while (true) {
    i = i + 1;
    if (i % 3 == 0 && i % 5 == 0) {
      yield i + " fizzbuzz!";
    } else if (i % 3 == 0) {
      yield i + " fizz!";
    } else if (i % 5 == 0) {
      yield i + " buzz!";
    } else yield i;
  }
};

let fizzbuzz = generatorFunction();

console.log(fizzbuzz.next().value);
console.log(fizzbuzz.next().value);
console.log(fizzbuzz.next().value);
console.log(fizzbuzz.next().value);
console.log(fizzbuzz.next().value);
console.log(fizzbuzz.next().value);
console.log(fizzbuzz.next().value);
console.log(fizzbuzz.next().value);
console.log(fizzbuzz.next().value);
console.log(fizzbuzz.next().value);
console.log(fizzbuzz.next().value);
console.log(fizzbuzz.next().value);
console.log(fizzbuzz.next().value);
console.log(fizzbuzz.next().value);
console.log(fizzbuzz.next().value);
console.log(fizzbuzz.next().value);
console.log(fizzbuzz.next().value);
console.log(fizzbuzz.next().value);
