// metodo bind

// const person = {
//     name: 'Bruce',
//     lastname: 'Wayne',
//     fullname: function() {
//         return `${this.name} ${this.lastname}`
//     }
// }

// const print = function(greet, adj) {
//     console.log(greet, this.fullname(), 'you are', adj)
// }.bind(person)
// // bind es "unir", con bind encuentra a person y por ende encuentra el objeto fullname


// print('hello', 'special')

// metodo call

const person = {
    name: 'Bruce',
    lastname: 'Wayne',
    fullname: function() {
        return `${this.name} ${this.lastname}`
    }
}

const print = function(greet, adj) {
    console.log(greet, this.fullname(), 'you are', adj)
}

print.call(person, 'hello', 'special')
//c all llama de una vez la funcion y hace un bind con los objetos, es más directo.


// apply 

print.apply(person, ['hello', 'special'])