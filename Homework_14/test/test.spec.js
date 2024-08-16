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

        it('Check of incorrect addition of number and string', async () => {       
            const result = calculator.add(7, '8');
            expect(result).to.equal('78');
        });
    });
});

describe('Multiply function checks', () => {

    describe('Positive checks of multiply function', () => {
        
        it('Check of correct multiplication of two positive numbers', async () => {
            const result = calculator.multiply(5, 3);
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

        it('Check of correct multiplication of number and number as a string', async () => {       
            const result = calculator.multiply(4, '6');
            expect(result).to.equal(24);
        });
    });

    describe('Negative checks of multiply function', () => {

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
            const result = calculator.multiply(4, "5s");
            expect(isNaN(result)).to.equal(true);
        });
    });
});

describe('Subtraction function checks', () => {

    describe('Positive checks of subtraction function', () => {

        it('Check of correct subtraction of two positive numbers', async () => {
            const result = calculator.subtraction(7, 4);
            expect(result).to.equal(3);
        });

        it('Check of correct subtraction of two negative numbers', async () => {       
            const result = calculator.subtraction(-5, -2);
            expect(result).to.equal(-3);
        });

        it('Check of correct subtraction of 1 positive number and zero', async () => {       
            const result = calculator.subtraction(3, 0);
            expect(result).to.equal(3);
        });

        it('Check of correct subtraction of zero and 2 negative numbers', async () => {       
            let result = calculator.subtraction(0, -22);
            result = calculator.subtraction(result, -2)
            expect(result).to.equal(24);
        });

        it('Check of correct subtraction of 1 positive and 1 negative number', async () => {       
            const result = calculator.subtraction(5, -2);
            expect(result).to.equal(7);
        });

        it('Check of correct subtraction of 4 decimal numbers', async () => {       
            let result = +(calculator.subtraction(6.3, 2.2)).toFixed(2);
            result = +(calculator.subtraction(result, 1.0)).toFixed(2);
            result = +(calculator.subtraction(result, 4.39)).toFixed(2);
            expect(result).to.equal(-1.29);
        });

        it('Check of correct subtraction of 2 decimal and 3 integer numbers', async () => {       
            let result = calculator.subtraction(220.15, 8.8);
            result = calculator.subtraction(result, 15);
            result = calculator.subtraction(result, 5.1);
            result = calculator.subtraction(result, 13.37);
            expect(result).to.equal(177.88);
        });

        it('Check of correct subtraction of 4 big numbers', async () => {       
            let result = calculator.subtraction(3463636363, 4463663);
            result = calculator.subtraction(result, 74346346.347);
            result = calculator.subtraction(result, 547437437.3474);
            expect(result).to.equal(2837388916.3056);
        });

        it('Check of correct subtraction of number and number as a string', async () => {       
            const result = calculator.subtraction(6, '4');
            expect(result).to.equal(2);
        });
    });

    describe('Negative checks of subtraction function', () => {

        it('Check of incorrect subtraction of 1 positive number and NaN', async () => {       
            const result = calculator.subtraction(34, NaN);
            expect(isNaN(result)).to.equal(true);
        });

        it('Check of incorrect subtraction of 2 NaN', async () => {       
            const result = calculator.subtraction(NaN, NaN);
            expect(isNaN(result)).to.equal(true);
        });

        it('Check of incorrect subtraction of 1 negative number and undefinded', async () => {       
            const result = calculator.subtraction(-27, undefined);
            expect(isNaN(result)).to.equal(true);
        });

        it('Check of incorrect subtraction of 2 undefinded', async () => {       
            const result = calculator.subtraction(undefined, undefined);
            expect(isNaN(result)).to.equal(true);
        });

        it('Check of incorrect subtraction of number and string', async () => {       
            const result = calculator.subtraction(7, '4h');
            expect(isNaN(result)).to.equal(true);
        });
    });
});

describe('Divide function checks', () => {

    describe('Positive checks of divide function', () => {

        it('Check of correct division of two positive numbers', async () => {
            const result = calculator.divide(20, 4);
            expect(result).to.equal(5);
        });

        it('Check of correct division of two negative numbers', async () => {       
            const result = calculator.divide(-49, -7);
            expect(result).to.equal(7);
        });

        it('Check of correct division of zero and 2 negative numbers', async () => {       
            let result = calculator.divide(0, -38);
            result = calculator.divide(result, -53);
            expect(result).to.equal(0);
        });

        it('Check of correct division of 1 positive and 1 negative number', async () => {       
            const result = calculator.divide(27, -9);
            expect(result).to.equal(-3);
        });

        it('Check of correct division of 4 decimal numbers', async () => {       
            let result = calculator.divide(7.2, 2.2);
            result = calculator.divide(result, 1.42);
            result = +(calculator.divide(result, 5.9)).toFixed(5);
            expect(result).to.equal(0.39063);
        });

        it('Check of correct division of 2 decimal and 3 integer numbers', async () => {       
            let result = calculator.divide(120.74, 173, 2.8, 1.3, 61.16);
            result = calculator.divide(result, 2.8);
            result = calculator.divide(result, 1.3);
            result = +(calculator.divide(result, 61.16)).toFixed(5);
            expect(result).to.equal(0.00313);
        });

        it('Check of correct division of 2 big numbers', async () => {       
            const result = +(calculator.divide(17372457474838, 3683838683.383688)).toFixed(5);
            expect(result).to.equal(4715.85728);
        });

        it('Check of correct division of number and number as a string', async () => {       
            const result = calculator.divide(8, '4');
            expect(result).to.equal(2);
        });
    });

    describe('Negative checks of divide function', () => {

        it('Check of incorrect division of 1 positive number and zero', async () => {       
            const result = calculator.divide(3, 0);
            expect(result).to.equal(Infinity);
        });

        it('Check of incorrect division of 1 positive number and NaN', async () => {       
            const result = calculator.divide(26, NaN);
            expect(isNaN(result)).to.equal(true);
        });

        it('Check of incorrect division of 2 NaN', async () => {       
            const result = calculator.divide(NaN, NaN);
            expect(isNaN(result)).to.equal(true);
        });

        it('Check of incorrect division of undefinded and 1 negative number', async () => {       
            const result = calculator.divide(undefined, -93);
            expect(isNaN(result)).to.equal(true);
        });

        it('Check of incorrect division of 2 undefinded', async () => {       
            const result = calculator.divide(undefined, undefined);
            expect(isNaN(result)).to.equal(true);
        });

        it('Check of incorrect division of number and string', async () => {       
            const result = calculator.divide(3, "1s");
            expect(isNaN(result)).to.equal(true);
        });
    });
});

describe('Exponentiation function checks', () => {

    describe('Positive checks of exponentiation function', () => {

        it('Check of correct exponentiation of the positive number', async () => {
            const result = calculator.exponentiation(9);
            expect(result).to.equal(81);
        });

        it('Check of correct exponentiation of the negative number', async () => {
            const result = calculator.exponentiation(-4);
            expect(result).to.equal(16);
        });

        it('Check of correct exponentiation of the zero', async () => {
            const result = calculator.exponentiation(0);
            expect(result).to.equal(0);
        });

        it('Check of correct exponentiation of the decimal number', async () => {
            const result = +(calculator.exponentiation(2.7)).toFixed(2);
            expect(result).to.equal(7.29);
        });

        it('Check of correct exponentiation of the big number', async () => {
            const result = calculator.exponentiation(26279859);
            expect(result).to.equal(690630989059881);
        });

        it('Check of correct exponentiation of the exponential number', async () => {
            const result = calculator.exponentiation(2.46e4);
            expect(result).to.equal(605160000);
        });

        it('Check of correct exponentiation of the number as a string', async () => {
            const result = calculator.exponentiation('17');
            expect(result).to.equal(289);
        });
    });

    describe('Negative checks of exponentiation function', () => {

        it('Check of incorrect exponentiation of NaN', async () => {       
            const result = calculator.exponentiation(NaN);
            expect(isNaN(result)).to.equal(true);
        });

        it('Check of incorrect exponentiation of undefinded', async () => {       
            const result = calculator.exponentiation(undefined);
            expect(isNaN(result)).to.equal(true);
        });

        it('Check of incorrect exponentiation of number and string', async () => {       
            const result = calculator.exponentiation("9s");
            expect(isNaN(result)).to.equal(true);
        });
    });
});