function randomValue(min = 1, max = 5) {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));
}

const promiseOne = new Promise(resolve => setTimeout(resolve, randomValue(), '1'));
const promiseTwo = new Promise(resolve => setTimeout(resolve, randomValue(), '2'));
const promiseThree = new Promise(resolve => setTimeout(resolve, randomValue(), '3'));

Promise.race([promiseOne, promiseTwo, promiseThree]).then(value => console.log(value));
