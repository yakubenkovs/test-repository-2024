class Candy {
    constructor (type, weight, calories, colour) {
        this.type = type;
        this.weight = weight;
        this.calories = calories;
        this.colour = colour;
    }

    getTypeOfCandy() {
        return this.type;
    }

    getWeightOfCandy() {
        return this.weight;
    }

    getCaloriesOfCandy() {
        return this.calories;
    }

    getColourOfCandy() {
        return this.colour;
    }

    setTypeOfCandy(typeOfCandy) {
        this.type = typeOfCandy;
    }

    addWeightOfCandy(weightOfCandy, numberOfCandies) {
        this.weight = weightOfCandy * numberOfCandies;
    }

    addCaloriesOfCandy(caloriesOfCandy) {
        this.calories = caloriesOfCandy;
    }

    setColourOfCandy(colourOfCandy) {
        this.colour = colourOfCandy;
    }
}

module.exports = {Candy};
