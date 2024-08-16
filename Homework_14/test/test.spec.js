import {expect} from 'chai';
import {Calculator} from '../calc.js';

const calculator = new Calculator();

describe('Add function checks', () => {

    describe('Positive checks of add function', () => {

        it('Check of correct addition of two positive numbers', async () => {       
            const result = calculator.add(15, 5);
            expect(result).to.equal(20);
        });

        it('Check of correct addition of two negative numbers', async () => {       
            const result = calculator.add(-2, -6);
            expect(result).to.equal(-8);
        });

        it('Check of correct addition of 1 positive number and zero', async () => {       
            const result = calculator.add(3, 0);
            expect(result).to.equal(3);
        });

        it('Check of correct addition of zero and 2 negative numbers', async () => {       
            const result = calculator.add(0, -25, -3);
            expect(result).to.equal(-28);
        });

        it('Check of correct addition of 1 positive and 1 negative number', async () => {       
            const result = calculator.add(6, -2);
            expect(result).to.equal(4);
        });

        it('Check of correct addition of 4 decimal numbers', async () => {       
            const result = +(calculator.add(2.2, 3.0, 4.46, 4.21)).toFixed(2);
            expect(result).to.equal(13.87);
        });

        it('Check of correct addition of 2 decimal and 3 integer numbers', async () => {       
            const result = calculator.add(130.32, 2.3, 150, 3.4, 12.42);
            expect(result).to.equal(298.44);
        });

        it('Check of correct addition of 4 big numbers', async () => {       
            const result = calculator.add(1523526, 34634643, 4643747.23, 34747437.12626);
            expect(result).to.equal(75549353.35626);
        });
    });

    describe('Negative checks of add function', () => {

        it('Check of incorrect addition of 1 positive number and NaN', async () => {       
            const result = calculator.add(15, NaN);
            expect(isNaN(result)).to.equal(true);
        });

        it('Check of incorrect addition of 2 NaN', async () => {       
            const result = calculator.add(NaN, NaN);
            expect(isNaN(result)).to.equal(true);
        });

        it('Check of incorrect addition of 1 negative number and undefinded', async () => {       
            const result = calculator.add(-6, undefined);
            expect(isNaN(result)).to.equal(true);
        });

        it('Check of incorrect addition of 2 undefinded', async () => {       
            const result = calculator.add(undefined, undefined);
            expect(isNaN(result)).to.equal(true);
        });

        it('Check of incorrect addition of zero and string', async () => {       
            const result = calculator.add(0, '0');
            expect(result).to.equal('00');
        });
    });
});

describe('Multiply function checks', () => {

    describe('Positive checks of multiply function', () => {
        
        it('Check of correct multiplication of two positive numbers', async () => {
            const result = calculator.multiply(5,3);
            expect(result).to.equal(15);
        });

        it('Check of correct multiplication of two negative numbers', async () => {       
            const result = calculator.multiply(-7, -9);
            expect(result).to.equal(63);
        });

        it('Check of correct multiplication of 1 positive number and zero', async () => {       
            const result = calculator.multiply(3, 0);
            expect(result).to.equal(0);
        });

        it('Check of correct multiplication of zero and 2 negative numbers', async () => {       
            const result = calculator.multiply(0, -25, -3);
            expect(result).to.equal(0);
        });

        it('Check of correct multiplication of 1 positive and 1 negative number', async () => {       
            const result = calculator.multiply(15, -3);
            expect(result).to.equal(-45);
        });

        it('Check of correct multiplication of 4 decimal numbers', async () => {       
            const result = calculator.multiply(1.5, 2.2, 3.27, 7.85);
            expect(result).to.equal(84.70935);
        });

        it('Check of correct multiplication of 2 decimal and 3 integer numbers', async () => {       
            const result = +(calculator.multiply(110.54, 220, 7.3, 2.8, 11.32)).toFixed(5);
            expect(result).to.equal(5626903.39904);
        });

        it('Check of correct multiplication of 2 big numbers', async () => {       
            const result = calculator.multiply(848484346, 3583883.14949);
            expect(result).to.equal(3040868750235443);
        });

        it('Check of correct multiplication of number and number as string', async () => {       
            const result = calculator.multiply(4, '6');
            expect(result).to.equal(24);
        });
    });

    describe('Negative checks of multiply funtion', () => {

        it('Check of incorrect multiplication of 1 positive number and NaN', async () => {       
            const result = calculator.multiply(28, NaN);
            expect(isNaN(result)).to.equal(true);
        });

        it('Check of incorrect multiplication of 2 NaN', async () => {       
            const result = calculator.multiply(NaN, NaN);
            expect(isNaN(result)).to.equal(true);
        });

        it('Check of incorrect multiplication of undefinded and 1 negative number', async () => {       
            const result = calculator.multiply(undefined, -12);
            expect(isNaN(result)).to.equal(true);
        });

        it('Check of incorrect multiplication of 2 undefinded', async () => {       
            const result = calculator.multiply(undefined, undefined);
            expect(isNaN(result)).to.equal(true);
        });

        it('Check of incorrect multiplication of number and string', async () => {       
            const result = calculator.multiply("5s", "4");
            expect(isNaN(result)).to.equal(true);
        });
    });
});

describe('Subtraction function check', () => {

    it('Check of correct subtraction of two positive numbers', async () => {
        const result = calculator.subtraction(7,4);
        expect(result).to.equal(3);
    });
});

describe('Divide function check', () => {

    it('Check of correct division of two positive numbers', async () => {
        const result = calculator.divide(20,4);
        expect(result).to.equal(5);
    });
});

describe('Exponentiation function check', () => {

    it('Check of correct exponentiation of the number', async () => {
        const result = calculator.exponentiation(9);
        expect(result).to.equal(81);
    });
});