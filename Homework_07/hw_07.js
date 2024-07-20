let numberOfPlayers = 4;
let numberOfAttempts = 2;
const playerValues = [];
let maxValueBetweenPlayers = 0;
let counterOfWinners = 0;
let winnerPosition = 0;

function rollTheDie(numberOfAttempts) {
    let dieValueMax = 0;

    for (let i = 0; i < numberOfAttempts; i++) {
        let dieValue = Math.floor(Math.random() * (Math.floor(6) - Math.ceil(1) + 1) + Math.ceil(1));
        
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
