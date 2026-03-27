let userName: string = "Kermari";
let userAge = 20;

// ...

userAge = 20 
//from string ginawang number kaya may error kanina.

console.log(`Username - ${userName}`)
console.log(`Age - ${userAge}`)

console.log (add(10))
//to check if working cinosole log :)

function add(a: number, b:number = 5) {
    return a + b
}
//ni specify na number though automatic nmn na number pero para explicitly declared.

add(10)
// add('10')
add(10, 6)
// add(10, '6')