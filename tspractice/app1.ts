
// const button = document.querySelector('button');
// const input1 = document.getElementById('num1')! as HTMLInputElement;
// const input2 = document.getElementById('num2')! as HTMLInputElement;

// function adds(num1: number, num2: number): number {
//     return num1 + num2;
// }

// button.addEventListener('click', function() {
//     console.log(add(+input1.value, +input2.value))
// });


// core types 
/**
 * number --- 1, 1.1, -1
 * string 'hi', "hi", `hi`
 * boolean t/f
 * 
 */

// function addition(num1: number, num2:number){
//     return num1 + num2;
// }

// const n1 = 10;
// const n2 = 20;
// const result: number = addition(10, 1.1);
// console.log(result);

// object types

/**
 * {age: 33}
 */

// const person: {
//     name: string,
//     age: number,
// } = {
//     name: 'test',
//     age: 30
// }
// const person1 =  {
//     name: 'test',
//     age: 3,
//     hobbies: ['test1', 'test2']
// }
// console.log(person1.name);
// console.log(person1);

// for(const hobby of person1.hobbies){
//     console.log(hobby.toUpperCase());
// }

// tupes ---> fixed length array

// const emp: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string]
// } = {
//     name: 'test',
//     age: 22,
//     hobbies: ['test1', 'test2'],
//     role: [1, 'test2'] // tuple

// }

// console.log(emp);


/**
 * enum
 */

// enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, USER = 'AUTHOR' };
// const emp =  {
//     name: 'test',
//     age: 22,
//     hobbies: ['test1', 'test2'],
//     role: Role.ADMIN // accessing enum value

// }

/** 
 * union types
 */

// function combine(input1: number | string, input2: number | string){
//     let res;
//     //.................... logic goes here
// }

