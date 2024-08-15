import {expect} from 'chai';
import {Calculator} from '../calc.js';

const calculator = new Calculator();

describe('Add function check', () => {
    it('Check of correct addition of two positive numbers', async () => {       
        const result = calculator.add(15,5);
        expect(result).to.equal(20);
    })
});

describe('Multiply function check', () => {
    it('Check of correct multiplication of two positive numbers', async () => {
        const result = calculator.multiply(5,3);
        expect(result).to.equal(15);
    })
});

describe('Subtraction function check', () => {
    it('Check of correct subtraction of two positive numbers', async () => {
        const result = calculator.subtraction(7,4);
        expect(result).to.equal(3);
    })
});

describe('Divide function check', () => {
    it('Check of correct division of two positive numbers', async () => {
        const result = calculator.divide(20,4);
        expect(result).to.equal(5);
    })
});

describe('Exponentiation function check', () => {
    it('Check of correct exponentiation of the number', async () => {
        const result = calculator.exponentiation(9);
        expect(result).to.equal(81);
    })
});