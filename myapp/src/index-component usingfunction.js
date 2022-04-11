//functions 
import React from 'react';
import ReactDOM from 'react-dom';

//create component using functions

// function Heading() {
//     return <h1>Hello!</h1> // jsx element 
// }

//es 6 arrow function 

// const Heading = () => {
//     return <h1>Hello!</h1> // jsx element 
// }
const Heading = () => <h1>Hello!</h1> // jsx element 

//imperative style of calling funciton : dont do this
// ReactDOM.render(Heading(), document.getElementById('root'))
//declarative style of calling function; you have to do this
ReactDOM.render(<Heading></Heading>, document.getElementById('root'))