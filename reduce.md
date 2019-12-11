# Reduce

## Functional Programming, Conceptually
The most common "style" of programming is *proceedural*. This is championed by languages like C++, Java and Python. An alternative is funcional programming with langauges like Lisp and Haskell. JavaScript is good at both!

There are three functions that are fundamental to functional programming in JavaScript: `map`, `filter` and `reduce`. These functions can also be found in most other programming languages, but for JavaScript they specifically exist as methods on the `Array` prototype. 

## Reduce
Most tutorials explain `map`, `filter` and `reduce` as separate array methods. We'll be exploring it differently: through our own custom `reduce` function.

Key to understanding what "reduce" does is to understand its three arguments:
  - The collection being iterated upon
  - The operation being performed on each collection item
  - The "accumulation", where the results of the operation go
```javascript
let reduce = function(iterable, operation, accumulation) {
  for(let i=0; i<iterable.length; i++) {
    let iterableElement = iterable[i]
    let result = operation(accumulation, element)
    let accumulation = result
  }
  return accumulation
}
```
In order to use this `reduce` function we need to define the three arguments. Let's imagine that we wanted to add together a sequence of numbers into one total.
  - What are the values we want to iterate on?
  - What is the operation we want to perform?
  - What is our starting value? (This will be our accumulation)

Our answers are the following, respectively
  - Let's assume the values we want to iterate are `[1,1,1]`
  - We want to add two numbers, so `(x,y)=>x+y`
  - When we add together numbers we start at `0`

```javascript
let numbers = [1, 1, 1]
let add = (x,y)=> x+y
reduce(numbers, add, 0) // Returns '3'
```
## Map
Let's use this reduce function, but now instead of *totaling* numbers, we want to double the value of each element and add it to a list. 
  - We'll iterate over the values `[2,3,4,5]`
  - Our operation is now `(x,y)=> [...x, y*2]`
  - When we want to add to a list so our starting value will be an empty array
```javascript
let numbers = [2, 3, 4, 5]
let pushDouble = (x, y)=> [...x, y*2]
reduce(numbers, pushDouble, [])
```

## Deliverable (Filter)
Filtering is where we iterate over a collection of values, but only return a subset of them.

For your deliverable, write a function to pass into the `reduce` function as an argument for `operation` that filters out odd numbers.
```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// let filterOutOdds = ???
// let accumulation = ???
reduce(numbers, filterOutOdds, accumulation)
// Should return [2, 4, 6, 8]
```
