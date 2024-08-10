const {Candy} = require("./candy");

class marshmallowCandy extends Candy {
    constructor (type, weight, calories, colour, gelatin) {
        super(type, weight, calories, colour);
        this.gelatin = gelatin;
        this.numberOfMarshmallowCandies = 0;
    }

    getGelatinValueOfMarshmallowCandy() {
        return this.gelatin;
    }
    
    getNumberOfMarshmallowCandies() {
        return this.numberOfMarshmallowCandies;
    }

    setGelatinValueOfMarshmallowCandy(gelatinValue) {
        this.gelatin = gelatinValue;
    }

    setNumberOfMarshmallowCandies(numberOfMarshmallowCandies) {
        this.numberOfMarshmallowCandies = numberOfMarshmallowCandies;
        super.addWeightOfCandy(this.weight, this.numberOfMarshmallowCandies);
    }
}

module.exports = {marshmallowCandy};
