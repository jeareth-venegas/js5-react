let a;
let b;
let spread;

const numbers = [10, 20, 30, 40, 50];
//destructuring y spread operator
[a, b, ...spread] = numbers;

console.log("a", a);
console.log("b", b);
console.log("spread", spread);