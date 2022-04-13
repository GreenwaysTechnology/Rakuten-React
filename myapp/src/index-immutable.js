//pure function and immutablity.
//this is impure function because it mutates the same memory address
// function updateProfile(profile, city) {
//     //logic to update city
//     profile.city = city;
//     return profile
// }

//pure function :immutable : way 1
// function updateProfile(profile, city) {
//     //new Object
//     return {
//         id: profile.id,
//         name: profile.name,
//         city: city
//     }
// }

//pure function :immutable : way 2 -Object.assign
// function updateProfile(profile, city) {
//     //new Object
//     // return Object.assign({},profile,{city:city})
//   return Object.assign({}, profile, { city })

// }

//pure function :immutable : way 3 -Using spread Notation
function updateProfile(profile, city) {
    //new Object
    // return Object.assign({}, profile, { city })
    return { ...profile, city }

}

let profile = {
    id: 1,
    name: 'Subramanian',
    city: 'Chennai'
}
console.log('before udpate => ', profile)
const response = updateProfile(profile, 'coimbatore')
console.log('After update => ', response)
//Test is it mutable/pure or impure
console.log(profile === response ? "Same Object" : "Different Object")

//array immutablity

//arrays and immutatblity
//impure
// function addTodo(todos, newTodo) {
//     return todos.push(newTodo)  //not returning new array after add
// }
//pure : how to return array immutable
function addTodo(todos, newTodo) {
   // return todos.concat(newTodo)
   return [...todos,newTodo] //returns new 
}

let todos = [{
    title: 'Learn react',
    done: true
}];

//testing whether you are modifiying the same object or different.
Object.freeze(todos)

console.log(addTodo(todos, { title: 'Learn Pure functions', done: false }))