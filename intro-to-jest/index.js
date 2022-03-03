function sum(a,b) {
    return a + b
}
console.log(sum(3,2))

const subtract = (a,b) => {
    return a - b;
};

console.log(subtract(3,2));

const firstName = () => {
    console.log('hello')
}

firstName()

module.exports = { sum: sum, subtract: subtract, firstName: firstName}
