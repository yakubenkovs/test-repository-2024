let numberOfPlayers = 4, numberOfAttempts = 2, maxValueBetweenPlayers = 0, counterOfWinners = 0, winnerPosition = 0;
const playerValues = [];

function rollTheDie(numberOfAttempts) {
    let dieValue = 0, dieValueMax = 0;

    for (let i = 0; i < numberOfAttempts; i++) {
        dieValue = Math.floor(Math.random() * (Math.floor(6) - Math.ceil(1) + 1) + Math.ceil(1));

        if (dieValue > dieValueMax) {
            dieValueMax = dieValue;
        }
    }

    return dieValueMax;
}

for (let i = 0; i < numberOfPlayers; i ++) {
    playerValues.push(rollTheDie(numberOfAttempts));

    if (playerValues[i] > maxValueBetweenPlayers) {
        maxValueBetweenPlayers = playerValues[i];
        counterOfWinners = 1;
        winnerPosition = i;
    } else if (playerValues[i] === maxValueBetweenPlayers) {
        counterOfWinners++;
    }
}

console.log(`Results of the game - ${playerValues}`);
console.log(`Number of winners - ${counterOfWinners}`);

if (counterOfWinners === 1) {
    console.log(`Max value ${maxValueBetweenPlayers} from ${winnerPosition+1} player`);
}
else {
    console.log(`Max value ${maxValueBetweenPlayers} but it's a draw`);
}


let numberToSplit = 20, partsQuantity = 5;

function splitTheNumberIntoIntValues(numberToSplit, partsQuantity) {
    let partOfTheNumber = 0, counterOfThePartsValues = 0, minimumValueToRandom = 1, splittedNumber = numberToSplit;
    const partsOfTheNumber = [];

    for (let i = 0; i < partsQuantity; i++) {

        if (i === partsQuantity - 1) {
            partsOfTheNumber.push(numberToSplit - counterOfThePartsValues);
        } 
        else {
            partOfTheNumber = Math.floor(Math.random() * (Math.floor(splittedNumber - partsQuantity) - Math.ceil(minimumValueToRandom)) + Math.ceil(minimumValueToRandom));
            splittedNumber -= partOfTheNumber;
            partOfTheNumber <= 0 ? partOfTheNumber = 1 : 0;
            partsOfTheNumber.push(partOfTheNumber);
            counterOfThePartsValues += partOfTheNumber;
        }
    }

    return partsOfTheNumber;
}

function splitTheNumberIntoDecimalValues(numberToSplit, partsQuantity) {
    let partOfTheNumber = 0, counterOfThePartsValues = 0, minimumValueToRandom = 0.01, splittedNumber = numberToSplit;
    const partsOfTheNumber = [];

    for (let i = 0; i < partsQuantity; i++) {

        if (i === partsQuantity - 1) {
            partsOfTheNumber.push(+(numberToSplit - counterOfThePartsValues).toFixed(2));
        } 
        else {
            partOfTheNumber = Number((Math.random() * ((splittedNumber - partsQuantity) - minimumValueToRandom) + minimumValueToRandom).toFixed(2));
            splittedNumber -= partOfTheNumber;
            partOfTheNumber <= 0 ? partOfTheNumber = 0.01 : 0;
            partsOfTheNumber.push(partOfTheNumber);
            counterOfThePartsValues += partOfTheNumber;
        }
    }

    return partsOfTheNumber;
}

console.log (`Number ${numberToSplit} is splitted into ${partsQuantity} int parts as ${splitTheNumberIntoIntValues(numberToSplit, partsQuantity)}`);
console.log (`Number ${numberToSplit} is splitted into ${partsQuantity} decimal parts as ${splitTheNumberIntoDecimalValues(numberToSplit, partsQuantity)}`);


let dateStartValue = '2011-01-01';

function calculateAmountOfFriday13th(dateStartValue) {
    let dayOfTheWeek = 5, dateOfTheMonth = 13, counterOfFriday13th = 0;
    let currentTimeInDays = Date.now() / 86400000;

    for (let dateStartInDays = Date.parse(dateStartValue) / 86400000; dateStartInDays < currentTimeInDays; dateStartInDays++) {
        dateStartObject = new Date(dateStartInDays * 86400000);
        dateStartObject.getDay() === dayOfTheWeek && dateStartObject.getDate() === dateOfTheMonth ? counterOfFriday13th++ : 0;
    }

    return counterOfFriday13th;
}

console.log(`Amount of Fridays 13th from ${dateStartValue} until now is ${calculateAmountOfFriday13th(dateStartValue)}`);
