import input from './input.js'

function solvePartOne(input) {
    let numberOfCorrectPassword = 0

    let lines = input.split(',')

    let min_max_regex = new RegExp('[0-9]*[-][0-9]*')
    let letter_regex = new RegExp('[a-z][:]')
    let passwordRegex = new RegExp('(?<=[a-z][:])(.*)')

    lines.forEach((line, i) => {

        let min_max = min_max_regex.exec(line)
        let min = min_max[0].split('-')[0]
        let max = min_max[0].split('-')[1]
        let letter = letter_regex.exec(line)[0].charAt(0)

        let password = passwordRegex.exec(line)[0]
        let numberOfLetter = [...password.matchAll(`[${letter}]`, '\g')].length

        let isPasswordValid = (numberOfLetter >= min && numberOfLetter <= max)

        if (isPasswordValid)
            numberOfCorrectPassword++

    })
    return numberOfCorrectPassword
}

function solvePartTwo(input) {
    let numberOfCorrectPassword = 0

    let lines = input.split(',')

    let indexRegex = new RegExp('[0-9]*[-][0-9]*')
    let letter_regex = new RegExp('[a-z][:]')
    let passwordRegex = new RegExp('(?<=[a-z][:])(.*)')

    lines.forEach((line, i) => {

        let index = indexRegex.exec(line)
        let firstIndex = index[0].split('-')[0]
        let secondIndex = index[0].split('-')[1]
        let letter = letter_regex.exec(line)[0].charAt(0)

        let password = passwordRegex.exec(line)[0]

        let isPasswordValid = (password.charAt(firstIndex) == letter ^ password.charAt(secondIndex) == letter)

        if (isPasswordValid)
            numberOfCorrectPassword++

    })
    return numberOfCorrectPassword
}

console.log(`number of correct password for part one : ${solvePartOne(input)}`)
console.log(`number of correct password for part two : ${solvePartTwo(input)}`)