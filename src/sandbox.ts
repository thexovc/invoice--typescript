// let character = 'luigi';

// let age = 39;

// let isBlackBelt = false;

// character = 'mario';

// const circ = (diamter: number) => {
//     return diamter * Math.PI;
// }

// console.log(circ(7.5));

// // arrays
// let names = ['kudi', 'sahr', 'oram']

// names.push('toad');
// // names.push(3);

// let nums = [10, 38, 47]

// nums.push(37)
// // nums.push('ddk')

// let mixed = ['lrb', 3, 'chins', 5];

// mixed.push('ryu');
// mixed.push(62);
// mixed[0] = 4;

// // Objects
// let ninja = {
//     name: 'mario',
//     belt: 'black',
//     age: 30
// }

// ninja.age = 49
// ninja.name = 'sho'
// // ninja.age = 'san'
// // ninja.skills = ['gda', 'euh']


// // EXPLICIT TYPES
// let character: string;
// let age: number;
// let isLoggedIn: boolean;

// // arrays explit type
// let ninjas: string[] = []; // intialize as empty array to enable pushing

// ninjas = ['oso', 'mario']

// // union type
// let mixed: (string | number | boolean)[] = [];

// mixed.push('hello');
// mixed.push(47)
// mixed.push(false)

// console.log(mixed)

// let uid: string | number;
// uid = '23J884dud'
// uid = 844

// // object
// let ninjaOne: object;
// ninjaOne = { name: 'yoshi', age: 40 }

// console.log(ninjaOne)

// let ninjaTwo: {
//     name: string,
//     age: number,
//     beltColour: string
// }

// ninjaTwo = { name: 'yoshi', age: 38, beltColour: 'black' }

// console.log(ninjaTwo)

// DYNAMIC TYPE
// let age: any = 25;
// console.log(age)

// age = 'hello'
// console.log(age)

// age = true;
// console.log(age)

// age = { name: 'luigi' }
// console.log(age)

// // array
// let mixed: any[] = [];

// mixed.push('jjs')
// mixed.push(3)
// mixed.push(false)
// console.log(mixed)

// // object
// let ninja: { name: any, age: any };

// ninja = { age: 'eueuue', name: 344 }
// console.log(ninja)


// // FUNCTION
// let greet: Function;

// // greet = 'hello';
// greet = () => {
//     console.log('Hello again')
// }

// const add = (a: number, b: number, c: number | string = 10) => { //returns void when we dont return something
//     console.log(a + b)
//     console.log(c)
// }

// add(5, 6, 'osazee')

// let minus = (a: number, b: number) => {
//     return a - b
// }
// // let minus = (a: number, b: number):number => {
// //     return a - b
// // }

// let result = minus(4, 17)

// console.log(result)



// // TYPE ALIASES
// type StringOrNum = string | number;
// type ObjWithName = { name: string, uid: StringOrNum }


// const logDetails = (uid: StringOrNum, item: string) => {
//     console.log(`${item} has a uid of ${uid}`)
// }

// const greetAgain = (user: ObjWithName) => {
//     console.log(`${user.name} says hello`)
// }


// FUNCTION SIGNATURES
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

let calc: (a: number, b: number) => number;

// example 2
calc: (numOne: number, numTwo: number, action: string) => {
    if (action === "add") {
        return numTwo + numTwo;
    } else {
        return numOne - numTwo
    }
}


let logDetails: (obj: { name: string, age: number }) => void;

type person = { name: string, age: number }

logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}

