const { expect, test } = require('@jest/globals');
const { sum, subtract, fetchData } = require ('./index');

test('fetchData return Janet', async() => {
    const data = await fetchData();
    expect(data.first_name).toBe('Janet')
})

// test('adds 3 + 2 to equl 5', () => {
//     expect(sum(3,2)).toBe(5)
// });

// test('subtract 3 - 2 to equl to 1', () => {
//     expect(subtract(3,2)).toBe(1)
// })

// test('console.log the text "hello"', () => {
//     console.log = jest.fn();
//     console.log('hello');
//     expect(console.log).toHaveBeenCalledWith('hello');
//   });

