const {Candy} = require("./candy");

class marshmallowCandy extends Candy {
    constructor (type, weight, calories, colour, gelatin) {
        super(type, weight, calories, colour);
        this.gelatin = gelatin;
        this.numberOfMarshmallowCandies = 0;
    }

    getOfNumberOfMarshmallowCandies() {
        return this.numberOfMarshmallowCandies;
    }

    setMarshmallowCandiesNumber(numberOfMarshmallowCandies) {
        this.numberOfMarshmallowCandies += numberOfMarshmallowCandies;
    }

    getWeightOfMarshmallowCandy() {
        return this.weight;
    }
}

module.exports = {marshmallowCandy};