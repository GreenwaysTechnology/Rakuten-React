import React from 'react';
import ReactDOM from 'react-dom';


// const Heading = () => <h1>Hello!
// const Heading = () => <h1>Hello!</h1>

//sibliing
// const Heading = () => <h1>Hello</h1>
//                       <p>This is react training</p>

//every element must be wrapped inside parent
// const Heading = () => <div>
//     <h1>Hello</h1>
//     <p>This is react training</p>
// </div>

// const heading = () => <div>
//     <h1>Hello</h1>
//     <p>This is react training</p>
// </div>
//type of Heading ReactElement
const Heading = () => <div>
    <h1>Hello</h1>
    <p>This is react training</p>
</div>
ReactDOM.render(<Heading />, document.getElementById('root'))


