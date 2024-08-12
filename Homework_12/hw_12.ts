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


type User = {
    name: string,
    age: number,
    occupation?: string
    role?: string
}

type Admin = {
    name: string,
    age: number,
    role: string
}

type Person = User | Admin;

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];


export class ObjectManipulator<objType, valueType> {

    constructor(protected obj: objType) {}

    public set(key: keyof objType, value: valueType): Object {
        return new ObjectManipulator<objType, valueType>({...this.obj, [key]: value});
    }

    public get(key: keyof objType): objType[keyof objType] {
        return this.obj[key];
    }

    public delete(key: keyof objType): Object {
        const newObj: objType = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator<objType, valueType>(newObj);
    }

    public getObject(): objType {
        return this.obj;
    }
}


export function map<mapperType, inputType>(mapper?: (value: inputType) => mapperType, input?: inputType[]): mapperType[] | Function {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput?: inputType[]): mapperType[] | Function  {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper);
        };
    }
    return input.map(mapper);
}

export function filter<filtererType, inputType>(filterer?: (value: inputType) => filtererType, input?: inputType[]): inputType[] | Function  {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput?: inputType[]): inputType[] | Function {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.filter(filterer);
        };
    }
    return input.filter(filterer);
}
