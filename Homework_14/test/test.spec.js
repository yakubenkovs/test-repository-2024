import {expect} from 'chai';
import {Calculator} from '../calc.js';

describe('Add function check', () => {
    it('Check of correct addition of two positive numbers', async () => {
        const calculator = new Calculator();
        const result = calculator.add(15,5);
        expect(result).to.equal(19);
    })
});