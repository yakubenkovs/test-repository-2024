const promiseOne = new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1) + Math.ceil(1), 'promiseOne')));
const promiseTwo = new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1) + Math.ceil(1), 'promiseTwo')));
const promiseThree = new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1) + Math.ceil(1), 'promiseThree')));

Promise.race([promiseOne, promiseTwo, promiseThree]).then(value => console.log(value));