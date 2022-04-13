import React from 'react';
import ReactDOM from 'react-dom'

//Return value can be jsx element

// const MyComponent = ()=> {
//     return <h1>JSX Element</h1>
// }
//return value can be primitives values
// const MyComponent = ()=> {
//     return "Hello"
// }
// const MyComponent = ()=> {
//     return 10
// }

// const MyComponent = ()=> {
//     return true
// }
// const MyComponent = ()=> {
//     return true
// }
// const MyComponent = ()=> {
//     return [1,2,3,4,5,5]
// }
//objects cant be returned
// const MyComponent = () => {
//     return { name: 'test' }
// }
//valid; but no output
// const MyComponent = () => {
//     return  //undefined
// }
//valid but no output
const MyComponent = () => {
    return null //undefined
}
const App = () => <div>
    <MyComponent />
</div>

ReactDOM.render(<App />, document.getElementById('root'))

