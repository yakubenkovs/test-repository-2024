var variable = 'str';

variable = 10;
{
    var variable = 5;
    console.log('var ', variable);
}

console.log('var ', variable);

let str = 1234;
str = 'Dasha';
{
    let str = 'Sergey';
    console.log('let ', str);
}

console.log('let ', str);

const bool = false;

const searchFieldButton = 'locator';
