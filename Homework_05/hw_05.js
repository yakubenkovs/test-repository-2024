let stringToArithmetic = "123456 string";
let boolToArithmetic = true;
let numToArithmetic = 5;

const summStrBool = stringToArithmetic + boolToArithmetic;

const summStrNum = stringToArithmetic + numToArithmetic;

const summNumBool = numToArithmetic + boolToArithmetic;

const multiplicationStrBool = stringToArithmetic * boolToArithmetic;

const multiplicationStrNum = stringToArithmetic * numToArithmetic;

const multiplicationNumBool = numToArithmetic * boolToArithmetic;

const divisionStrBool = stringToArithmetic / boolToArithmetic;

const divisionStrNum = stringToArithmetic / numToArithmetic;

const divisionNumBool = numToArithmetic / boolToArithmetic;


stringToArithmetic = parseInt(stringToArithmetic);

boolToArithmetic = String(boolToArithmetic);

numToArithmetic = Boolean(numToArithmetic);
