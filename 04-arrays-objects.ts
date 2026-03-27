let hobbies = ["Sleeping", "Drawing", "Watching"]

// hobbies.push(10)
// array of string so it will not accept a value of number.

// let userList: (string | number)[];
let userList: Array<string | number>;
//Union Array which nag-aaccept ng string and number

userList = ["Ker", "Mari", 555, "M4riK3r"]

// console.log(userList)

let user: {
    name: string;
    age: number;
    hobbies: Array<string>,
    role: {
        description: string,
        id: number
    }
} = {
    name: "Elmer",
    age: 31,
    hobbies: ["Eating", "Sleeping"],
    role: {
        description: 'admin',
        id: 1
    }
}

// Must not null or undefined
let val: {} = "Kermari Magmayo"

// Flexible Object - Record Type
let data: Record<string, number | string>

data = {
    1: 1,
    name: 'Kermari'
    // isPartTimeInstructor: true
}