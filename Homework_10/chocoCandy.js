const {Candy} = require("./candy");

class chocoCandy extends Candy {
    constructor (type, weight, calories, colour, glaze, nuts) {
        super(type, weight, calories, colour);
        this.glaze = glaze;
        this.nuts = nuts;
        this.numberOfChocoCandies = 0;
    }

    getOfNumberOfChocoCandies() {
        return this.numberOfChocoCandies;
    }

    setChocoCandiesNumber(numberOfChocoCandies) {
        this.numberOfChocoCandies += numberOfChocoCandies;
    }

    getWeightOfChocoCandy() {
        return this.weight;
    }
}

module.exports = {chocoCandy};

