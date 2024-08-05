const {chocoCandy} = require("./chocoCandy");
const {lollipopCandy} = require("./lollipopCandy");
const {marshmallowCandy} = require("./marshmallowCandy");
const {Present} = require("./present");

const present = new Present();
const chocoCandies = new chocoCandy("choco", 350, 500, "brown", true, false);
chocoCandies.setChocoCandiesNumber(2);
chocoCandies.setChocoCandiesWeight();
const lollipopCandies = new lollipopCandy("lolli", 250, 600, "red", true);
lollipopCandies.setLollipopCandiesNumber(2);
lollipopCandies.setLollipopCandiesWeight();
const marshmallowCandies = new marshmallowCandy("marsh", 700, 250, "white", true);
marshmallowCandies.setMarshmallowCandiesNumber(2);
marshmallowCandies.setMarshmallowCandiesWeight();

function addCandy(candyType) {
    present.addCandy(candyType);
}

addCandy(chocoCandies);
addCandy(lollipopCandies);
addCandy(marshmallowCandies);

console.log(`Weight of the present is ${present.getWeightOfThePresent()}`);

present.sortByCalories();
console.log(`Sort by calories of 1 piece from min to max: `, present);
