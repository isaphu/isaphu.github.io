const fetch = require('./node_modules/');

const fetchData = async () => {
    const url = 'https://reqres.in/api/users/2';
    const res = await fetch(url)

    const jsonResult = await res.json();
    console.log('jsonResult', jsonResult)
    return jsonResult.data;
};

fetchData();

// function sum(a,b) {
//     return a + b
// };

// const subtract = (a,b) => {
//     return a - b;
// };


module.exports = { 
    // sum: sum, 
    // subtract: subtract,
    fetchData: fetchData
}
