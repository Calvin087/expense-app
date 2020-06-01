// // object destructure, object destructuring (Curly braces)

const book = {
    title: '3 hour work wee',
    author: 'Calvin Turner',
    publisher: {
        // name: 'penguin',
        date: '2009'
    }
}

const {name: publisherName = "Self Published"} = book.publisher

// console.log(`This book was published by ${publisherName}`)

// --------------

// Array Destructuring, Array Destructure (square brackets), works by stripping it in order
// I can skip items in the array by keeping commas in place
//  I can also rename variables markers

const address = ['Calle Sambara 7','Madrid','Spain','28027']

const [, , country = 'Africa', zip] = address

// console.log(`You are in ${country} ${zip}`)

const item = ['Dickshot (hot)', '$2.00', '$2.50', '$2.75']
const [type, , priMed,] = item

console.log(`A medium ${type} costs ${priMed}`)