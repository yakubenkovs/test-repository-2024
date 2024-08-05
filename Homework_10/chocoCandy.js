const {Candy} = require("./candy");

class chocoCandy extends Candy {
    constructor (type, weight, calories, colour, glaze, nuts) {
        super(type, weight, calories, colour);
        this.glaze = glaze;
        this.nuts = nuts;
        this.numberOfChocoCandies = 0;
        this.weightOfCandies = 0;
    }

    getNumberOfChocoCandies() {
        return this.numberOfChocoCandies;
    }

    getWeightOfChocoCandy() {
        return this.weight;
    }

    getWeightOfChocoCandies() {
        return this.weightOfCandies;
    }

    setChocoCandiesNumber(numberOfChocoCandies) {
        this.numberOfChocoCandies = numberOfChocoCandies;
    }

    setChocoCandiesWeight() {
        this.weightOfCandies = this.weight * this.numberOfChocoCandies;
    }
}

module.exports = {chocoCandy};
