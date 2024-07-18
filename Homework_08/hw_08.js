function checkPartsEqualityOfTheNumber (numberForSplitting) {
    const digitsForComparison = numberForSplitting.split('');
    let firstPartOfTheNumber = [], secondPartOfTheNumber = [], summOfTheFirstDigitsPart = 0, summOfTheSecondDigitsPart = 0;
    secondPartOfTheNumber = digitsForComparison.slice(digitsForComparison.length / 2);
    firstPartOfTheNumber = digitsForComparison.splice(0, digitsForComparison.length / 2);

    for (let i = 0; i < firstPartOfTheNumber.length; i++) {
        summOfTheFirstDigitsPart += Number(firstPartOfTheNumber[i]);
        summOfTheSecondDigitsPart += parseInt(secondPartOfTheNumber[i]);
    }

    summOfTheFirstDigitsPart === summOfTheSecondDigitsPart ? isPartsOfTheNumberEqual = true : isPartsOfTheNumberEqual = false;

    return isPartsOfTheNumberEqual;
}

let numberForSplitting = `462822`, isPartsOfTheNumberEqual;
checkPartsEqualityOfTheNumber(numberForSplitting);
isPartsOfTheNumberEqual ? console.log(`Yes. Sums of parts of the number ${numberForSplitting} are equal`) : console.log(`No. Sums of parts of the number ${numberForSplitting} aren't equal`);
