# Generators

## Three Kinds of Function in JS
Generators are a third kind of function in JavaScript:
```javascript
// Regular function
function() {}

// Arrow function
()=> {}

// Generator function
function* () {}
```

## Calling Generator Functions & Generator Objects
Generator functions, when called, return *generator objects*. Make sure you're clear on the distinction! The Generator object prototype has three methods: 
```javascript
Generator.prototype.next
Generator.prototype.return
Generator.prototype.throw
```
To call a generator function, we do the following:
  - Create a generator object
  - Call the generator object's `next()` method

Rather than using `return`, Generator functions use `yield`. The difference between `yield` and `return` is that the generator function will *maintain state* between calls. 

Additionally, `next()` returns an object with two keys: `value` and `done`. The `value` property is equal to what the function yields, `done` is if the function is finished returning or yielding values.
```javascript
let numberFunction = function() {
  return 1      // All calls return 1
                // This is all the function will ever return
}

let numberGenerator = function*() {
  yield 1       // First call returns {value: 1, done: false}
  yield 2       // Second returns {value: 2. done: false}
                // Third returns {value: undefined, done: true}
}

// Call the function directly
numberFunction()

// Called through the Generator Object
let numberGeneratorObject = numberGenerator()
numberGeneratorObject.next()
```

## Using the Spread Operator
Generator functions can optionally be called using the spread operator: `...`. Note that you use the spread operator on generator functions *directly*, so there is no need to create a generator object!
```javascript
let getNames = function*() {
  yield "Tyler"
  yield "Brock"
  yield "Michael"
}

console.log(...getNames()) // Same as `console.log("Tyler", "Brock", "Michael")`
```
## Generators and Infinite Loops
Generators are useful for functions that would theoretically go on forever. For a function that returns an always-incrementing number:
```javascript
let infiniteNumberGenerator = function*() {
  let n = 0
  while(true) yield n++
}

let infiniteNumbers = infiniteNumberGenerator()
infiniteNumbers.next()
infiniteNumbers.next()
infiniteNumbers.next()
```
Note that if you use an infinitely-looping generator function with the spread operator your program will get stuck in an infinite loop!

## Deliverable
We've all seen/done FizzBuzz: 
  - If the number is divisible by 3 return 'Fizz'
  - If the number is divisible by 5 return 'Buzz'
  - If the number is divisible by 3 & 5 return 'FizzBuzz'

Usually we have to constrain FizzBuzz to a *range* of values because of a limitation of regular functions. For your deliverable, write a FizzBuzz generator function that can be called an infinite number of times that follows the rules of FizzBuzz.
