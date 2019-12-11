# Closure

Closure is something that is usually defined in confusing, esoteric ways. It ultimately comes down to this:
```javascript
let outerFunction = function() {
  let outerFunctionVariable = 0
  let innerFunction = function() {
    return outerFunctionVariable++
  }
  return innerFunction
}
```
Closure is the fact that `innerFunction` will still have access to `outerFunctionVariable` even though `outerFunctionVariable` was defined outside of `innerFunction`'s scope. 

When we call `outerFunction` it creates a new `outerFunctionVariable` and a new `innerFunction`.After `outerFunction` is done executing it loses its reference to both variables. The next time `outerFunction` is called, a new `outerFunctionVariable` and `innerFunction` will be declared and assigned values. 

## Closure in Practice
While it's good to be able to understand and articulate what closure is, we've already been using it frequently. It lets us write code like this:
```javascript
let add = firstNumber => secondNumber => firstNumber+secondNumber

add             // Equals the first arrow function
add(1)          // Equals the second arrow function with 'firstNumber' as 1
add(1)(2)       // Returns the result of the expression `firstNumber+secondNumber`
```

## Caesar Cipher
We can use closure for making a cipher function:
```javascript
let cipher = shift => message => // Return an arrow function with closed variable 'message'
    String.fromCharCode(  // Convert from a list of numbers into a string
      ...message           // Use spread operator to convert from array to a list of arguments
        .split('')        // Convert from a string to an array of individual characters
        .map(c=>          // Iterate over each character
          c.charCodeAt(0) + 1       // Shift each letter by one
        )
    )

// Create ciphers
let shiftBy1 = cipher(1)
let shiftBy5 = cipher(5)

// Use ciphers
let secretMessage1 = shiftBy1("JavaScript is cool")
let secretMessage2 = shiftBy5("HTML and CSS are rad")
```

## Deliverable
Given the example of a working cipher function, create a similar *decipher* function that also uses closure for an 'unshift' parameter.
