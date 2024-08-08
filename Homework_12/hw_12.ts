interface IUsers {
    name: string,
    age: number,
    occupation: string,
    car? : string,
    children?: number
};

const users1: IUsers[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        car: 'VW'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        children: 2
    }
];
