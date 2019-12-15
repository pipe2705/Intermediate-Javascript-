let encipher = shift => string =>
  String.fromCharCode(...string.split("").map(l => l.charCodeAt(0) + shift));

let shiftBy5 = encipher(5);
let message = shiftBy5("Secret message");
console.log(message);
let decipher = shift => string =>
  String.fromCharCode(...string.split("").map(l => l.charCodeAt(0) + shift));

let unshiftBy5 = decipher(-5);
console.log(unshiftBy5(message));
