//Object destructuring

// function showEmployee(employee) {
//     console.log(`Id ${employee.id}`)
//     console.log(`Name ${employee.name}`)
//     console.log(`city ${employee.address.city}`)
// }

// function showEmployee(employee) {
//     const { id, name, address: { city } } = employee;
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`city ${city}`)
// }

// const showEmployee = (employee) => {
//     const { id, name, address: { city } } = employee;
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`city ${city}`)
// }
const showEmployee = ({ id, name, address: { city } }) => {
    console.log(`Id ${id}`)
    console.log(`Name ${name}`)
    console.log(`city ${city}`)
}
showEmployee({ id: 1, name: 'Ram', address: { city: 'coimbatore' } })
/////////////////////////////////////////////////////////////////////////////////////

//returning object
// function getStockValues() {
//     return {
//         id: 1,
//         symbol: 'google',
//         qty: 100,
//         price: 10000
//     }
// }
// console.log(getStockValues())

//how to populate object 
// function getStockValues(id = 1, symbol = 'google', qty = 0, price = 0) {
//     return {
//         id: id,
//         symbol: symbol,
//         qty: qty,
//         price: price
//     }
// }

// function getStockValues(id = 1, symbol = 'google', qty = 0, price = 0) {
//     //if objectVariable:localcalVariable is same 
//     // leftside:rightside is same 
//     //make it one.
//     return {
//         id,
//         symbol,
//         qty,
//         price
//     }
// }
// const getStockValues = (id = 1, symbol = 'google', qty = 0, price = 0) => {
//     return {
//         id,
//         symbol,
//         qty,
//         price
//     }
// }
const getStockValues = (id = 1, symbol = 'google', qty = 0, price = 0) => ({
    id,
    symbol,
    qty,
    price
})

console.log(getStockValues())
console.log(getStockValues(100, 'Facebook', 100, 1988))