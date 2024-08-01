const {chocoCandy} = require("./chocoCandy")
const {lollipopCandy} = require("./lollipopCandy")
const {marshmallowCandy} = require("./marshmallowCandy")

class Present {
    constructor() {
        this.presentSize=[];
    }

    addCandy(candy) {
        this.present.push(candy);
    }

    getWeightOfThePresent() {
        return this.present.reduce((acc, next) => acc.weight + next.weight)
    }
}

module.exports = {Present};