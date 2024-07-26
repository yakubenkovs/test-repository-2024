function randomValue(min = 1, max = 5) {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));
}

function getPromise(screenValue) {
    return new Promise (resolve => setTimeout(resolve, randomValue(), screenValue));
}

const firstPromise = getPromise(1), secondPromise = getPromise(2), thirdPromise = getPromise(3);

Promise.race([firstPromise, secondPromise, thirdPromise]).then(firstValueByTime => console.log(`First promise is ${firstValueByTime}`));


function getNum (min = 1, max = 5, timeoutValue = 3000) {
    return new Promise(resolve => setTimeout(resolve, timeoutValue, randomValue(min, max)));
}

async function squareTheNumber() {
    const numberValue = await getNum();
    const squaredNumber = Math.pow(numberValue, 2);
    return {numberValue, squaredNumber};
}

console.log(squareTheNumber().then(squaredValues => console.log(`Value ${squaredValues.numberValue} squared is ${squaredValues.squaredNumber}`)));


async function summTwoNumbers() {
    const firstNumberValue = await getNum(), secondNumberValue = await getNum(6, 10, 5000);
    const summOfTwoValues = firstNumberValue + secondNumberValue;
    return {firstNumberValue, secondNumberValue, summOfTwoValues};
}

console.log(summTwoNumbers().then(summOfValues => console.log(`Summ of values ${summOfValues.firstNumberValue} and ${summOfValues.secondNumberValue} is ${summOfValues.summOfTwoValues}`)));
