import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'
import { Profile } from './profile/profile'

//default Args
function multiply(a = 0, b = 0) {
    console.log(`a ${a} b ${b}`)
    return a * b; //NaN
}
console.log(multiply(6, 3))
console.log(multiply())

const App = () => {
    return <div>
        <Profile />
        <Profile id={100} />
        <Profile id={100} name="Ram" />
    </div>
}
ReactDOM.render(<App />, document.getElementById('root'))