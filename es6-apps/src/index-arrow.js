
function sayHello(name) {
    console.log(`name ${name}`)
}
sayHello('subramanian')
sayHello()

//default args- es 6 features
function multiply(a = 0, b = 0) {
    console.log(a, b);
    //undefined * undefined = ?
    return a * b;
}
console.log(multiply(10, 10))
console.log(multiply())
/////////////////////////////////////////////////////////////////////////////////////

//let a =10  10 is value a is variable let keyword
//similar 10 function itself , you can assign into variable .
//anonmous function - es 5 style
let myfun = function () {
    return "Hello,"
}
console.log(myfun());

let divide = function (a = 0, b = 0) {
    return a / b;
}
console.log(divide(10, 2))

//anonmous functions - es 6 arrow function.

let hello = () => {
    console.log('hello')
}
hello();
//in arrow ; if fuction has only one line of code. we can remove {}
hello = () => console.log('hello')
hello();

//arrow and parameters

let add = (a = 0, b = 0) => {
    return a + b;
}
console.log(add(10, 10))
//if you have only return statement ; remove return {}
add = (a = 0, b = 0) => a + b
console.log(add(10, 10))

let greet = (name) => {
    return name;
};
console.log(greet('subramanian'))
//if no default value and single return - remove () , return and {}
greet = name => name;
console.log(greet('subramanian'))

const sayHai = name => name;
console.log(sayHai('subramanian'))

