import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'

//how to supply data to Greeter from outside-(App)
//name =  {name:'Subramanian' ,city:'Coimbatore}
// function Greeter(props) {
//     return <h1>Hello {props.name} {props.city} times {props.times}</h1>
// }

const Greeter = props => <h1>Hello {props.name} {props.city} times {props.times}</h1>

/**
 * 
 * @returns 
 *  {
 *    name:'subramanian'
 *  }
 */
const App = () => <div>
    {/* {Greeter('Subramanian')} */}
    {/** data is supplied as object only - props */}
    <Greeter name="Subramanian" city="Coimbatore" times={1} />
    <Greeter name="Ram" city="Delhi" times={100} />

</div>

ReactDOM.render(<App />, document.getElementById('root'))
