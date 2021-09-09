let brand = 'tesla'

let model = 'roadster'

let price = 1000000

let tax = 0.13

// let message = 'The price of the ' + brand + ' ' + model + ' is $' + (price + price * tax)
let message = `The price of the ${brand} ${model} is $ ${price + price * tax}`
// ¿QUE SON LOS TEMPLATE LITERALS?
// es una manera diferente para escribir los strings usando '${}'
console.log(message)