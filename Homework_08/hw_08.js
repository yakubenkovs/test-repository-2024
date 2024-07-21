let numberForSplitting = `462822`;

function checkPartsEqualityOfTheNumber (numberForSplitting) {
    const digitsForComparison = numberForSplitting.split('');
    let firstPartOfTheNumber = [], secondPartOfTheNumber = [], summOfTheFirstDigitsPart = 0, summOfTheSecondDigitsPart = 0, isPartsOfTheNumberEqual;
    secondPartOfTheNumber = digitsForComparison.slice(digitsForComparison.length / 2);
    firstPartOfTheNumber = digitsForComparison.splice(0, digitsForComparison.length / 2);

    for (let i = 0; i < firstPartOfTheNumber.length; i++) {
        summOfTheFirstDigitsPart += Number(firstPartOfTheNumber[i]);
        summOfTheSecondDigitsPart += parseInt(secondPartOfTheNumber[i]);
    }

    summOfTheFirstDigitsPart === summOfTheSecondDigitsPart ? isPartsOfTheNumberEqual = true : isPartsOfTheNumberEqual = false;

    return isPartsOfTheNumberEqual;
}

checkPartsEqualityOfTheNumber(numberForSplitting) ? console.log(`Yes. Sums of parts of the number ${numberForSplitting} are equal`) : console.log(`No. Sums of parts of the number ${numberForSplitting} aren't equal`);


let numberForDivision = 500, limitNumber = 15;

function divideNumberBy2 (numberForDivision, limitNumber) {
    let num = 0;

    for (numberForDivision; numberForDivision > limitNumber; numberForDivision /= 2) {
        num++;
    }
    
    numberForDivision *= 2;
    num--;
    return {numberForDivision, num};
}

console.log(`Finish number after division ${numberForDivision} by 2 before limit of ${limitNumber} is ${divideNumberBy2 (numberForDivision, limitNumber).numberForDivision} and iterations number is ${divideNumberBy2 (numberForDivision, limitNumber).num}`);
