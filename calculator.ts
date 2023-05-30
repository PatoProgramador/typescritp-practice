type Operation = 'multiply' | 'add' | 'divide'

const calculator = (a: number, b: number, op: Operation): number => {

    if (op === 'multiply') return a * b
    if (op === 'add') return a + b
    if (op === 'divide') {
        if (b === 0) throw new Error('Can´t divide by 0, sorry')
        return a / b
    }

    throw new Error('Operation is not valid')
}
// chequea de forma estatica, no en runtime
try {
    console.log(calculator(1, 3, 'add'))
    console.log(calculator(1, 0, 'divide'))
} catch (e) {
    console.log('Something went wrong: ', e)
}