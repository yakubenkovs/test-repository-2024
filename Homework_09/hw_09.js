function randomValue(min = 1, max = 5) {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));
}

function getPromise(screenValue) {
    return new Promise (resolve => setTimeout(resolve, randomValue(), screenValue));
}

const promiseOne = getPromise(1), promiseTwo = getPromise(2), promiseThree = getPromise(3);

Promise.race([promiseOne, promiseTwo, promiseThree]).then(firstValueByTime => console.log(`First promise is ${firstValueByTime}`));


function getNum (min = 1, max = 5, timeoutValue = 3000) {
    return new Promise(resolve => setTimeout(resolve, timeoutValue, Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min))));
}

async function squareTheNumber() {
    const numberValue = await getNum();
    let squaredNumber = Math.pow(numberValue, 2);
    return {numberValue: numberValue, squaredNumber: squaredNumber};
}

console.log(squareTheNumber().then(squaredValues => console.log(`Value ${squaredValues.numberValue} squared is ${squaredValues.squaredNumber}`)));