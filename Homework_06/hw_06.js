let arrayForReverse1 = [1,2,3,4,5,6];
let arrayForReverse2 = new Array (6,5,4,3,2,1);

arrayForReverse1 = arrayForReverse1.reverse();
arrayForReverse2 = arrayForReverse2.reverse();


const arrayForMaxValue = [3,67,15,110,35];

arrayForMaxValue.sort((a,b) => b - a);

let maxArrayValue = arrayForMaxValue[0];


let arrayForFibonacci = [7,8,9,10,11], arrayFibonacci = [0,1];

const n = 2, m = 5;

for (i = 2; i < m; i++) {
    arrayFibonacci[i] = arrayFibonacci[i-1] + arrayFibonacci[i-2];
}

arrayForFibonacci.splice(n-1,0,arrayFibonacci);


let numberForComparison1 = 3487, numberForComparison2 = 3794, counterForValueAndPosition = 0, counterForValueOnly = 0;

numberForComparison1 = String(numberForComparison1);
numberForComparison2 = numberForComparison2.toString();

numberForComparison1 = numberForComparison1.split('');
numberForComparison2 = numberForComparison2.split('');

for (i = 0; i < numberForComparison1.length; i++) {
    for (k = 0; k < numberForComparison2.length; k++) {
        if (i === k)
        {
            numberForComparison1[i] === numberForComparison2[k] ? counterForValueAndPosition++ : 0; 
        }
        else {
            numberForComparison1[i] === numberForComparison2[k] ? counterForValueOnly++ : 0;
        }
    }
}


const originalArrayBeforeSort = [45,2,18,11,376];

const arrayForSort = [...originalArrayBeforeSort];

arrayForSort.sort((a,b) => a - b);
arrayForSort.sort((a,b) => b - a);


const arrayForDeleteRepeated = [35,6,7,8,2,8,7,26,35,27,5];
const uniqueArray = [];

for (i = 0; i < arrayForDeleteRepeated.length; i++) {
    uniqueArray.includes(arrayForDeleteRepeated[i]) ? arrayForDeleteRepeated.splice([i],1) : uniqueArray.push(arrayForDeleteRepeated[i]);
}

