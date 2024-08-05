const {chocoCandy} = require("./chocoCandy")
const {lollipopCandy} = require("./lollipopCandy")
const {marshmallowCandy} = require("./marshmallowCandy")

class Present {
    constructor() {
        this.present=[];
    }

    addCandy(candy) {
        this.present.push(candy);
    }

    getWeightOfThePresent() {
        return this.present.reduce((acc, next) => acc + next.weightOfCandies, 0);
    }

    sortByCalories(){
        return this.present.sort((min, max) => min.calories - max.calories)
    }
}

module.exports = {Present};
