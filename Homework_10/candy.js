class Candy {
    constructor (type, weight, calories, colour) {
        this.type = type;
        this.weight = weight;
        this.calories = calories;
        this.colour = colour;
    }

    getWeight() {
        return this.weight;
    }

    addWeight(itemWeight) {
        this.weight += itemWeight;
    }

    getCalories() {
        return this.calories;
    }

    getColour() {
        return this.colour;
    }
}

module.exports = {Candy};
