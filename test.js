const stringLength = require('./stringLength.js');
const reverseString = require('./reverseString.js');
const Calculator = require('./Calculator.js');

describe('stringLength', () => {
    it('is this long', () => {
    expect(stringLength('stringLength')).toBeFalsy();
});

it('reads this way when reversed', () => {
    expect(reverseString('stringLength')).toBe('htgneLgnirts');
});
})

describe('string', () => {
    it('is this long', () => {
    expect(stringLength('string')).toBe(6);
});

it('reads this way when reversed', () => {
    expect(reverseString('string')).toBe('gnirts');
});
})

describe ('230 and 189:', () => {
    it('sums',() => {
        expect( Calculator.add(230, 189)).toBe(419);
    });

    it('substracts',() => {
        expect( Calculator.substract(230, 189)).toBe(41);
    });

    it('divides',() => {
        expect( Calculator.divide(230, 189)).toBe(1.216931216931217);
    })

    it('multiplies',() => {
        expect( Calculator.multiply(230, 189)).toBe(43470);
    })
})