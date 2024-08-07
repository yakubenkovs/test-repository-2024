const {Candy} = require("./candy");

class marshmallowCandy extends Candy {
    constructor (type, weight, calories, colour, gelatin) {
        super(type, weight, calories, colour);
        this.gelatin = gelatin;
        this.numberOfMarshmallowCandies = 0;
        this.weightOfCandies = 0;
    }

    getNumberOfMarshmallowCandies() {
        return this.numberOfMarshmallowCandies;
    }

    getWeightOfMarshmallowCandy() {
        return this.weight;
    }

    getWeightOfMarshmallowCandies() {
        return this.weightOfCandies;
    }

    setMarshmallowCandiesNumber(numberOfMarshmallowCandies) {
        this.numberOfMarshmallowCandies = numberOfMarshmallowCandies;
    }

    setMarshmallowCandiesWeight() {
        this.weightOfCandies = this.weight * this.numberOfMarshmallowCandies;
    }
}

module.exports = {marshmallowCandy};
