const {chocoCandy} = require("./chocoCandy");
const {lollipopCandy} = require("./lollipopCandy");
const {marshmallowCandy} = require("./marshmallowCandy");
const {Present} = require("./present");

const present = new Present();
const chocoCandies = new chocoCandy("choco", 350, 500, "brown", true, false);
chocoCandies.setChocoCandiesNumber(5);
const lollipopCandies = new lollipopCandy("lolli", 250, 600, "red", true);
lollipopCandies.setLollipopCandiesNumber(3);
const marshmallowCandies = new marshmallowCandy("marsh", 700, 250, "white", true);
marshmallowCandies.setMarshmallowCandiesNumber(7);

present.addCandy(chocoCandies);
present.addCandy(lollipopCandies);
present.addCandy(marshmallowCandies);


console.log(present.getWeightOfThePresent())