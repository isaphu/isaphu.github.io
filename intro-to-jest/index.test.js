const { expect, test } = require('@jest/globals');
const exp = require('constants');
const { add, mul } = require('./index');


test('adds 1 + 2 to equl 3', () => {
    expect(add(1,2)).toBe(3)
});

test('subtract 3 - 2 to equl to 1', () => {
    expect(subtract(3,2)).toBe(1)
})

test('subtract 3 - 2 to equl to 1', () => {
    const result = mul(3,2)
    expect(result).toBe(6)
})