function rollTheDie(numberOfAttempts) {
    let dieValueMax = 0;
    for (let i = 0; i < numberOfAttempts; i++) {
        let dieValue = Math.floor(Math.random() * (Math.floor(6) - Math.ceil(1) + 1) + Math.ceil(1));
        if(dieValue > dieValueMax){
            dieValueMax = dieValue
        }
    }
    return dieValueMax
}

let numberOfPlayers = 4;
let playerValues = [];
let maxValueBetweenPlayers = 0;
let counterOfWinners = 0;
let winnerPosition = 0;

for (let j = 0; j < numberOfPlayers; j ++) {
    playerValues.push(rollTheDie(2));
}

for (let j = 0; j <numberOfPlayers; j ++) {
    if (playerValues[j] > maxValueBetweenPlayers)
    {
        maxValueBetweenPlayers = playerValues[j]
        counterOfWinners = 1;
        winnerPosition = j;
    }
    else if (playerValues[j] = maxValueBetweenPlayers)
    {
        counterOfWinners++;
    }
}

console.log(`Results of the game - ${playerValues}`);
console.log(`Number of winners - ${counterOfWinners}`);

if (counterOfWinners === 1) {
    console.log(`Max value ${maxValueBetweenPlayers} from ${winnerPosition+1} player`);
}
else {
    console.log(`Max value ${maxValueBetweenPlayers} but it's a draw`)
}
