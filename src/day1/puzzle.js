import input from './input.js'

function solveOne(input) {
    for (let el1 of input) {
        for (let el2 of input) {
            if (el1 + el2 == 2020)
                return el1 * el2
        }
    }
}

function solveSecond(input) {
    for (let el1 of input) {
        for (let el2 of input) {
            for (let el3 of input) {
                if (el1 + el2 + el3 == 2020)
                    return el1 * el2 * el3
            }
        }
    }
}

console.log(`solution 1 : ${solveOne(input)}`)
console.log(`solution 2 : ${solveSecond(input)}`)