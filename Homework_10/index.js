const {chocoCandy} = require("./chocoCandy");
const {lollipopCandy} = require("./lollipopCandy");
const {marshmallowCandy} = require("./marshmallowCandy");
const {Present} = require("./present");

const present = new Present();
const chocoCandies = new chocoCandy("choco", 350, 500, "brown", true, false);
chocoCandies.setNumberOfChocoCandies(2);
const lollipopCandies = new lollipopCandy("lolli", 250, 600, "red", true);
lollipopCandies.setNumberOfLollipopCandies(2);
const marshmallowCandies = new marshmallowCandy("marsh", 700, 250, "white", true);
marshmallowCandies.setNumberOfMarshmallowCandies(2);

function addCandy(candyType) {
    present.addCandy(candyType);
}

addCandy(chocoCandies);
addCandy(lollipopCandies);
addCandy(marshmallowCandies);

console.log(`Weight of the present is ${present.getWeightOfThePresent()}`);

console.log(`Sort by calories of 1 piece from min to max:`, present.sortByCalories());

console.log(`Candies by limited calories value per candy and colour are:`, present.findCandyByParameters(500, "brown"));
