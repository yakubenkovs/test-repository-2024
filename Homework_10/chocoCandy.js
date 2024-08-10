const {Candy} = require("./candy");

class chocoCandy extends Candy {
    constructor (type, weight, calories, colour, glaze, nuts) {
        super(type, weight, calories, colour);
        this.glaze = glaze;
        this.nuts = nuts;
        this.numberOfChocoCandies = 0;
    }

    getGlazeValueOfChocoCandy() {
        return this.glaze;
    }

    getNutsValueOfChocoCandy() {
        return this.nuts;
    }
    
    getNumberOfChocoCandies() {
        return this.numberOfChocoCandies;
    }

    setGlazeValueOfChocoCandy(glazeValue) {
        this.glaze = glazeValue;
    }

    setNutsValueOfChocoCandy(nutsValue) {
        this.nuts = nutsValue;
    }

    setNumberOfChocoCandies(numberOfChocoCandies) {
        this.numberOfChocoCandies = numberOfChocoCandies;
        super.addWeightOfCandy(this.weight, this.numberOfChocoCandies);
    }
}

module.exports = {chocoCandy};
