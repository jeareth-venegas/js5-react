// spread operator
[a, b, ...spread] = [10, 20, 30, 40, 50]
console.log(spread) // [30, 40, 50]

// // rest
//         //function sum (a, b, c, d)
// function sum (...args) {
//     let result = 0
//     for (let arg of args) {
//         result += arg
//     }
//     return result
//     // return args.reduce((prev, curr) => prev + curr) 
// }

// function sum (...args) {
//     return args.reduce((prev, curr) => prev + curr) 
// } //            reduce= array method = recorre todos los 
//   //            elementos del array y me devuelve la suma al final

// console.log(sum(12, 85, 76, 1))

export function multi(...args) {
    return args.reduce((prev, curr) => prev * curr);
}

export function sum(...args) {
    return args.reduce((prev, curr) => prev + curr);
}

console.log(multi(1200, 85, 76, 1));