randomValue = Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1) + Math.ceil(1));

const promise1 = new Promise(resolve => setTimeout(resolve, randomValue, '1'));
const promise2 = new Promise(resolve => setTimeout(resolve, randomValue, '2'));
const promise3 = new Promise(resolve => setTimeout(resolve, randomValue, '3'));

Promise.race([promise1, promise2, promise3]).then(value => console.log(value));