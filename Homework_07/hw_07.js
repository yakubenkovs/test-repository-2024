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
